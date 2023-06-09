import React, { useState } from 'react'
import { Star } from 'phosphor-react'

interface StarRatingProps {
  passedRatingNumber: (rate: number) => void
}

export function StarRating({ passedRatingNumber }: StarRatingProps) {
  const [rating, setRating] = useState(0)

  function handleClickStars(selectedRating: number) {
    if (rating === selectedRating) {
      setRating(0)
      passedRatingNumber(0)
    } else {
      setRating(selectedRating)
      passedRatingNumber(selectedRating)
    }
  }

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <div
          key={star}
          onClick={() => handleClickStars(star)}
          className="cursor-pointer"
        >
          {star <= rating ? (
            <Star weight="fill" color="#8381D9" size={28} />
          ) : (
            <Star color="#8381D9" size={28} />
          )}
        </div>
      ))}
    </div>
  )
}
