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

  return (
    <div className="flex gap-1">
      {Array.from(Array(starsCollored), (e, i) => (
        <Star
          size={isInBookDetail ? 20 : 16}
          weight="fill"
          key={i}
          color="#8381D9"
        />
      ))}
      {Array.from(Array(starsEmpty), (e, i) => (
        <Star size={isInBookDetail ? 20 : 16} color="#8381D9" key={i} />
      ))}
    </div>
  )
}
