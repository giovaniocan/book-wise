import Image from 'next/image'
import { StarRatingWithRate } from '../StarRating/StarRatingWithRate'
import { fixDateReview } from '@/utils/fixDateReview'

interface ProfileBookCardProps {
  createdAt: string
  description: string
  rate: number
  book: {
    author: string
    total_pages: number
    name: string
    cover_url: string
  }
}

export function ProfileBookCard({
  book,
  createdAt,
  description,
  rate,
}: ProfileBookCardProps) {
  const distanceToNow = fixDateReview(createdAt)
  return (
    <div className="w-full flex flex-col gap-2">
      <span className="text-sm text-gray-300">{distanceToNow}</span>
      <div className="flex flex-col p-5 gap-6  bg-gray-700 relative rounded-lg">
        <div className=" flex gap-5 ">
          <Image
            src={book.cover_url}
            height={94}
            width={85}
            alt="capa do livro"
            className={`h-32 w-24 `}
          />
          <div className="flex flex-col justify-between ">
            <div className="flex w-64 flex-col">
              <h4 className="font-bold text-lg line-clamp-2">{book.name}</h4>
              <span className="text-sm text-gray-400">{book.author}</span>
            </div>
            <div>
              <StarRatingWithRate rating={rate} />
            </div>
          </div>
        </div>
        <p className="text-gray-300 text-sm text-justify">{description}</p>
      </div>
    </div>
  )
}
