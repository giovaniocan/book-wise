import { StarRatingWithRate } from '@/components/StarRating/StarRatingWithRate'
import Image from 'next/image'

interface BookCardProps {
  image: string
  title: string
  author: string
  rating: number
  isIntheFeed?: boolean
  wasRead?: boolean
}

export function ContentOfBookCard({
  isIntheFeed,
  wasRead,
  author,
  image,
  rating,
  title,
}: BookCardProps) {
  return (
    <div className="flex cursor-pointer  bg-gray-700 relative rounded-lg">
      <div className=" flex gap-5 p-5">
        <Image
          src={image}
          height={94}
          width={85}
          alt="capa do livro"
          className={`h-[6.875rem] w-20 ${
            isIntheFeed && 'w-[7.375rem] h-[10.5rem]'
          }`}
        />
        <div className="flex flex-col justify-between ">
          <div className="flex w-64 flex-col items-start">
            <h4 className="font-bold text-base line-clamp-2 pr-11 ">{title}</h4>
            <span className="text-sm text-gray-400">{author}</span>
          </div>
          <div>
            <StarRatingWithRate rating={rating} />
          </div>
        </div>
      </div>
      {wasRead && (
        <span className="absolute top-0 right-0 bg-green-300 text-xs font-bold px-3 rounded-tr-md rounded-bl-lg py-1 text-green-100">
          Lido
        </span>
      )}
    </div>
  )
}
