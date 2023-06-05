import { Star } from 'phosphor-react'

interface StarRatingProps {
  rating: number
}

export function StarRating({ rating }: StarRatingProps) {
  const starsCollored = rating
  const starsEmpty = 5 - starsCollored

  return (
    <div className="flex gap-1">
      {Array.from(Array(starsCollored), (e, i) => (
        <Star size={16} weight="fill" key={i} color="#8381D9" />
      ))}
      {Array.from(Array(starsEmpty), (e, i) => (
        <Star size={16} weight="fill" key={i} />
      ))}
    </div>
  )
}
