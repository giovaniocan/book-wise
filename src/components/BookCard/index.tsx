import Image from 'next/image'
import { StarRating } from '../StarRating'

interface BookCardProps {
  isIntheFeed?: boolean
  wasRead?: boolean
}

export function BookCard({ isIntheFeed, wasRead }: BookCardProps) {
  return (
    <div className="flex   bg-gray-700 relative rounded-lg">
      <div className=" flex gap-5 p-5">
        <Image
          src="https://github.com/giovaniocan.png"
          height={94}
          width={85}
          alt="capa do livro"
          className={`h-[6.875rem] w-20 ${
            isIntheFeed && 'w-[7.375rem] h-[10.3rem]'
          }`}
        />
        <div className="flex flex-col justify-between ">
          <div className="flex w-64 flex-col">
            <h4 className="font-bold text-base line-clamp-2">Nome do livro</h4>
            <span className="text-sm text-gray-400">Autor</span>
          </div>
          <div>
            <StarRating rating={4} />
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
