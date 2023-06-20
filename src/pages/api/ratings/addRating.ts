/* eslint-disable camelcase */
import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { rate, description, book_id, user_id } = req.body

  const userExist = await prisma.user.findUnique({
    where: {
      id: user_id,
    },
  })

  if (!userExist) {
    return res.status(400).json({ message: 'User not exists ' })
  }

  const rating = await prisma.rating.create({
    data: {
      description,
      rate,
      book_id,
      user_id,
    },
  })

  return res.status(201).json(rating)
}
