import { RatingCard } from '../RatingCard'

export function RecentRatings() {
  return (
    <div className="w-full flex flex-col gap-4">
      <h3 className="text-sm">Avaliações mais recentes</h3>
      <div className="flex flex-col gap-3">
        <RatingCard />
        <RatingCard />
      </div>
    </div>
  )
}
