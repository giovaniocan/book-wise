import { useQuery } from '@tanstack/react-query'
import { RatingCard, RatingCardWithAuthorAndBooksProps } from '../RatingCard'
import { api } from '@/lib/axios'
import { useSession } from 'next-auth/react'
import { parseCookies } from 'nookies'
import { User } from '@prisma/client'
import { LastRatingFromUser } from '../LastRatingFromUser.tsx'
import Link from 'next/link'
import { CaretRight } from 'phosphor-react'

export function RecentRatings() {
  const session = useSession()

  const cookies = parseCookies()
  const userEmail = cookies['@bookwise:userEmail']

  const { data: user } = useQuery<User>(['user'], async () => {
    const { data } = await api.get('users/getUserByEmail', {
      params: {
        userEmail,
      },
    })
    return data
  })

  const { data: recentRatings } = useQuery<RatingCardWithAuthorAndBooksProps[]>(
    ['recentsBooks'],
    async () => {
      const { data } = await api.get('/ratings')
      return data
    },
  )

  const userBooksRated = recentRatings?.filter((rating) => {
    return rating.user.id === user?.id
  })

  const BooksRated = recentRatings?.filter((rating) => {
    return rating.user.id !== user?.id
  })

  return (
    <div className="w-full flex flex-col gap-4">
      {session.status === 'authenticated' && (
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm">Sua ultima leitura</h3>
            <Link
              href="/profile"
              className="text-purple-100 text-sm font-bold flex gap-2 items-center"
            >
              Ver todos <CaretRight color="#8381D9" />
            </Link>
          </div>

          {userBooksRated?.map((rating) => {
            return (
              <LastRatingFromUser
                book={rating.book}
                created_at={rating.created_at}
                description={rating.description}
                rate={rating.rate}
                key={rating.id}
              />
            )
          })}
        </div>
      )}

      <div className="flex flex-col gap-4">
        <h3 className="text-sm">Avaliações mais recentes</h3>
        <div className="flex flex-col gap-3">
          {BooksRated?.map((ratingcard) => {
            return (
              <RatingCard
                book={ratingcard.book}
                user={ratingcard.user}
                key={ratingcard.id}
                rate={ratingcard.rate}
                created_at={ratingcard.created_at}
                description={ratingcard.description}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
