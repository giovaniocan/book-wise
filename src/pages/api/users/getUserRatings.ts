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
                  category: {
                    select: { name: true },
                  },
                },
              },
            },
          },
        },
      },
    },
  })

  return res.status(200).json(user)
}
