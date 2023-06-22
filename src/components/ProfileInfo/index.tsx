import { fixDateReview } from '@/utils/fixDateReview'
import Image from 'next/image'
import { BookOpen, BookmarkSimple, Books, UserList } from 'phosphor-react'

interface ProfileInfoProps {
  name: string
  createdAt: string
  image: string
  totalPages: number
  ratedBooks: number
  authorsRead: number
  mostCategory?: string
}

export function ProfileInfo({
  name,
  image,
  createdAt,
  totalPages,
  ratedBooks,
  authorsRead,
}: ProfileInfoProps) {
  const dateJoinInTheSite = fixDateReview(createdAt, true)
  return (
    <div className="w-full border-l border-gray-700 flex flex-col items-center ">
      <div className="flex  flex-col items-center  ">
        <Image
          className="rounded-full p-[2px]  bg-gradient-horizontal"
          src={image}
          width={60}
          height={40}
          alt="imagem do perfil do usuairo"
        />

        <h3 className="mt-4 text-xl font-bold">{name}</h3>
        <span className="text-sm text-gray-400">
          membro desde {dateJoinInTheSite}
        </span>
      </div>
      <div className="border w-8 h-1 bg-gradient-horizontal rounded-full m-10 "></div>
      <div className="mt-3 flex flex-col gap-10">
        <div className="flex gap-5">
          <BookOpen size={32} color="#50B2C0" />
          <div>
            <h5 className="font-bold text-gray-200">{totalPages}</h5>
            <span className="text-sm text-gray-300">Páginas lidas</span>
          </div>
        </div>
        <div className="flex gap-5">
          <Books size={32} color="#50B2C0" />
          <div>
            <h5 className="font-bold text-gray-200">{ratedBooks}</h5>
            <span className="text-sm text-gray-300">Livros avaliados</span>
          </div>
        </div>
        <div className="flex gap-5">
          <UserList size={32} color="#50B2C0" />
          <div>
            <h5 className="font-bold text-gray-200">{authorsRead}</h5>
            <span className="text-sm text-gray-300">Autores lidos</span>
          </div>
        </div>
        <div className="flex gap-5">
          <BookmarkSimple size={32} color="#50B2C0" />
          <div>
            <h5 className="font-bold text-gray-200">Numero grande</h5>
            <span className="text-sm text-gray-300">Categoria mais lida</span>
          </div>
        </div>
      </div>
    </div>
  )
}
