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

  const { userId } = req.query

  if (!userId) {
    return res.status(400).json({ message: 'user_id is required' })
  }

  const user = await prisma.user.findUnique({
    where: {
      id: userId as string,
    },
  })

  return res.status(200).json(user)
}
