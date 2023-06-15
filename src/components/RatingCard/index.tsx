/* eslint-disable camelcase */
/* eslint-disable no-empty-pattern */
import Image from 'next/image'
import { ReviewHeader } from '../ReviewHeader'
import { useState } from 'react'
import { User, Book } from '@prisma/client'

export type RatingCardWithAuthorAndBooks = {
  user: User
  book: Book
  rate: number
  created_at: Date
  id?: string
  description: string
}

export function RatingCard({
  book,
  user,
  rate,
  created_at,
  description,
}: RatingCardWithAuthorAndBooks) {
  const [isReadMore, setIsReadMore] = useState(false)

  function toggleReadMore() {
    setIsReadMore(!isReadMore)
  }
  const maxDescriptionLength = 508
  return (
    <div className="flex flex-col gap-8 p-6 bg-gray-700 rounded-lg">
      <ReviewHeader
        date={created_at}
        image={user.avatar_url || ''}
        name={user.name}
        rating={rate}
        key={String(created_at)}
      />
      <div className="grid grid-cols-[135px_minmax(135px,_1fr)] gap-5">
        <Image
          src={book.cover_url}
          height={152}
          width={135}
          alt="capa do livro"
        />

        <div className="flex flex-col gap-5">
          <div>
            <h4 className="font-bold text-base">{book.name}</h4>
            <span className="text-sm text-gray-400">{book.author}</span>
          </div>

          <div>
            <p
              className={`text-sm text-justify ${
                isReadMore === false && 'line-clamp-4'
              } `}
            >
              {description}
            </p>

            {description.length > maxDescriptionLength && (
              <button
                onClick={toggleReadMore}
                className="text-sm text-purple-100 font-bold"
              >
                {isReadMore === false ? 'ver mais' : 'ver menos'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
