import { Star } from 'phosphor-react'

interface StarRatingProps {
  rating: number
  isInBookDetail?: boolean
}

export function StarRatingWithRate({
  rating,
  isInBookDetail,
}: StarRatingProps) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) =>
        star <= rating ? (
          <Star
            size={isInBookDetail ? 20 : 16}
            weight="fill"
            key={star}
            color="#8381D9"
          />
        ) : (
          <Star size={isInBookDetail ? 20 : 16} color="#8381D9" key={star} />
        ),
      )}
    </div>
  )
}
