/* import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const { bookId } = req.query

  if (!bookId) {
    return res.status(400).json({ message: 'bookId is required' })
  }

  const book = await prisma.book.findUnique({
    where: {
      id: bookId as string,
    },
    include: {
      ratings: true,
      categories: true,
    },
  })

  const bookAvgRating = await prisma.rating.groupBy({
    by: ['book_id'],
    where: {
      book_id: {
        in: bookId,
      },
    },
    _avg: {
      rate: true,
    },
  })

  if (!book) {
    return res.status(400).json({ message: 'book is not found' })
  }

  const bookWithCategories = book.categories.map(async (category) => {
    const names = await prisma.category.findUnique({
      where: {
        id: category.categoryId,
      },
    })
    return names
  })

  /*   const bookWithCategories = await Promise.all(
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
  ) */

/*  const booksWithAvgRating = booksWithCategories.map((book) => {
    const bookAvgRating = booksAvgRating.find(
      (avgRating) => avgRating.book_id === book.id,
    )
    const { ratings, ...bookInfo } = book
    return {
      ...bookInfo,
      avgRating: Math.round(bookAvgRating?._avg.rate || 0),
      totalOfRating: book.ratings.length,
    }
  }) */

/* return res.status(200) */
/* } */
