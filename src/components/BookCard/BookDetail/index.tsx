import { StarRatingWithRate } from '@/components/StarRating/StarRatingWithRate'
import Image from 'next/image'
import { BookOpen, BookmarkSimple } from 'phosphor-react'

export function BookDetail() {
  return (
    <div className="flex flex-col gap-10 bg-gray-700 mt-4 px-8 py-4 relative rounded-lg">
      <div className=" flex gap-5 p-5">
        <Image
          src="https://github.com/giovaniocan.png"
          height={94}
          width={85}
          alt="capa do livro"
          className="h-60 w-44 "
        />
        <div className="flex flex-col justify-between ">
          <div className="flex w-64 flex-col items-start">
            <h4 className="font-bold text-lg line-clamp-2">Nome do livro</h4>
            <span className="text-base text-gray-300">Autor</span>
          </div>
          <div>
            <StarRatingWithRate isInBookDetail rating={3} />
            <span className="text-sm text-gray-400">$ avaliações</span>
          </div>
        </div>
      </div>

      <div className=" flex border-t w-full border-gray-600 py-6 gap-14">
        <div className="flex gap-4">
          <BookmarkSimple size={24} color="#50B2C0" />
          <div>
            <span className="text-sm text-gray-300">Categoria</span>
            <h4 className="font-bold text-gray-200">Quais são as categorias</h4>
          </div>
        </div>
        <div className="flex gap-4">
          <BookOpen size={24} color="#50B2C0" />
          <div>
            <span className="text-sm text-gray-300">Páginas</span>
            <h4 className="font-bold text-gray-200">nº</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
