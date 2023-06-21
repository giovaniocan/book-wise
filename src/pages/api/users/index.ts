/* eslint-disable camelcase */
import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from 'nookies'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, avatar_url } = req.body

  const userExist = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (userExist) {
    return res.status(400).json({ message: 'User already exists' })
  }

  const user = await prisma.user.create({
    data: {
      name,
      avatar_url,
      email,
    },
  })

  if (user.email) {
    setCookie({ res }, '@bookwise:userEmail', user.email, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/', // all  routes can access this cookie
    })
  }

  return res.status(201).json(user)
}
