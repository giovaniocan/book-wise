import { useQuery } from '@tanstack/react-query'
import { RatingCard, RatingCardWithAuthorAndBooks } from '../RatingCard'
import { api } from '@/lib/axios'

export function RecentRatings() {
  const { data: recentRatings } = useQuery<RatingCardWithAuthorAndBooks[]>(
    ['recentsBooks'],
    async () => {
      const { data } = await api.get('/ratings')
      return data
    },
  )

  return (
    <div className="w-full flex flex-col gap-4">
      <h3 className="text-sm">Avaliações mais recentes</h3>
      <div className="flex flex-col gap-3">
        {recentRatings?.map((ratingcard) => {
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
  )
}
