import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const books = await prisma.book.findMany({
    orderBy: {
      ratings: {
        _count: 'desc',
      },
    },
    include: {
      ratings: true,
      categories: true,
    },
  })

  const booksAvgRating = await prisma.rating.groupBy({
    by: ['book_id'],
    where: {
      book_id: {
        in: books.map((book) => book.id),
      },
    },
    _avg: {
      rate: true,
    },
  })

  const booksWithCategories = await Promise.all(
    books.map(async (book) => {
      const categories = await Promise.all(
        book.categories.map(async (category) => {
          const name = await prisma.category.findUnique({
            where: {
              id: category.categoryId,
            },
          })
          return name
        }),
      )
      return {
        ...book,
        categories,
      }
    }),
  )

  const booksWithAvgRating = booksWithCategories.map((book) => {
    const bookAvgRating = booksAvgRating.find(
      (avgRating) => avgRating.book_id === book.id,
    )
    const { ratings, ...bookInfo } = book
    return {
      ...bookInfo,
      avgRating: Math.round(bookAvgRating?._avg.rate || 0),
      totalOfRating: book.ratings.length,
    }
  })

  return res.status(200).json(booksWithAvgRating)
}
