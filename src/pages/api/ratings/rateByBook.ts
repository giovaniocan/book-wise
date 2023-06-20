/* eslint-disable no-undef */
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

  const { bookId } = req.query

  if (!bookId) {
    return res.status(400).json({ message: 'bookId is required' })
  }

  const rates = await prisma.rating.findMany({
    where: {
      book_id: bookId as string,
    },
    orderBy: {
      created_at: 'desc',
    },
    select: {
      created_at: true,
      rate: true,
      description: true,
      id: true,
      user: {
        select: {
          avatar_url: true,
          name: true,
          id: true,
        },
      },
    },
  })

  return res.status(200).json(rates)
}
