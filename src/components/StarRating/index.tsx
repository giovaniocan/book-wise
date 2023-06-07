import React, { useState } from 'react'
import { Star } from 'phosphor-react'

export function StarRating() {
  const [rating, setRating] = useState(0)

  function handleClickStars(selectedRating: number) {
    if (rating === selectedRating) {
      setRating(0)
    } else {
      setRating(selectedRating)
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
            <Star weight="fill" color="#8381D9" size={16} />
          ) : (
            <Star color="#8381D9" size={16} />
          )}
        </div>
      ))}
    </div>
  )
}
