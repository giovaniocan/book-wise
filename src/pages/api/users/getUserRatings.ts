/* eslint-disable camelcase */
import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const { userEmail } = req.query

  if (!userEmail) {
    return res.status(400).json({ message: 'userEmail is required' })
  }

  const user = await prisma.user.findUnique({
    where: {
      email: userEmail as string,
    },
    include: {
      ratings: {
        orderBy: {
          created_at: 'desc',
        },
        select: {
          rate: true,
          description: true,
          created_at: true,
          book: {
            select: {
              author: true,
              total_pages: true,
              name: true,
              cover_url: true,
              categories: {
                include: {
                  category: true,
                },
              },
            },
          },
        },
      },
    },
  })

  const mostRating = user?.ratings.map((rating) => {
    return rating.book.categories.map((category) => category.category.name)
  }) // getting a array with all the categories of the books

  const filterCategories = mostRating?.flatMap((category) => category) // gettinh all the categorias in a unique array

  const categoryCount = filterCategories?.reduce((count, category) => {
    count[category] = (count[category] || 0) + 1
    return count
  }, {} as { [key: string]: number })

  let maxCount = 0
  let mostFrequentCategory = ''

  for (const category in categoryCount) {
    if (categoryCount[category] > maxCount) {
      maxCount = categoryCount[category]
      mostFrequentCategory = category
    }
  }

  const ratedBooks = user?.ratings.length

  const totalPages = user?.ratings.reduce((total, item) => {
    return total + item.book.total_pages
  }, 0)

  const authorsRead = user?.ratings.reduce((uniqueAuthors: string[], item) => {
    const author = item.book.author
    if (!uniqueAuthors.includes(author)) {
      uniqueAuthors.push(author)
    }
    return uniqueAuthors
  }, [])

  const profileDate = {
    user: {
      name: user?.name,
      avatar_url: user?.avatar_url,
      created_at: user?.created_at,
    },
    readPages: totalPages,
    ratedBooks,
    readAuthors: authorsRead?.length,
    mostReadCategory: mostFrequentCategory,
    ratings: user?.ratings,
  }

  return res.status(200).json(profileDate)
}
