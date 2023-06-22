/* eslint-disable camelcase */
import { fixDateReview } from '@/utils/fixDateReview'
import { Book } from '@prisma/client'
import Image from 'next/image'
import { StarRatingWithRate } from '../StarRating/StarRatingWithRate'

export type LastRatingFromUserProps = {
  book: Book
  rate: number
  created_at: string
  description: string
}

export function LastRatingFromUser({
  book,
  created_at,
  description,
  rate,
}: LastRatingFromUserProps) {
  const distanceFromNow = fixDateReview(created_at)
  return (
    <div className="flex flex-col gap-8 p-6 bg-gray-700 rounded-lg">
      <div className="grid grid-cols-[135px_minmax(135px,_1fr)] gap-5">
        <Image
          src={book.cover_url}
          height={152}
          width={135}
          alt="capa do livro"
        />

        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-300 text-justify line-clamp-3">
              {distanceFromNow}
            </p>
            <StarRatingWithRate rating={rate} />
          </div>
          <div>
            <h4 className="font-bold text-base">{book.name}</h4>
            <span className="text-sm text-gray-400">{book.author}</span>
          </div>

          <div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
