import Image from 'next/image'
import { StarRating } from '../StarRating'

export function BookCard() {
  return (
    <div className="flex gap-5 p-5 bg-gray-700 rounded-lg">
      <Image
        src="https://github.com/giovaniocan.png"
        height={94}
        width={85}
        alt="capa do livro"
        className="h-[6.875rem]"
      />
      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          <h4 className="font-bold text-base">Nome do livro</h4>
          <span className="text-sm text-gray-400">Autor</span>
        </div>
        <div>
          <StarRating rating={4} />
        </div>
      </div>
    </div>
  )
}
