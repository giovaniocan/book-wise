import { Star } from 'phosphor-react'

interface StarRatingProps {
  rating: number
  isInBookDetail?: boolean
}

export function StarRatingWithRate({
  rating,
  isInBookDetail,
}: StarRatingProps) {
  const starsCollored = rating
  const starsEmpty = 5 - starsCollored
  console.log(starsCollored, starsEmpty)

  return (
    <div className="flex gap-1">
      {/*  {Array.from(Array(starsCollored), (e, i) => (
        <Star
          size={isInBookDetail ? 20 : 16}
          weight="fill"
          key={i}
          color="#8381D9"
        />
      ))}
      {Array.from(Array(starsEmpty), (e, i) => (
        <Star size={isInBookDetail ? 20 : 16} color="#8381D9" key={i} />
      ))} */}
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
