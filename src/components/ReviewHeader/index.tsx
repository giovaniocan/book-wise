import Image from 'next/image'
import { StarRatingWithRate } from '../StarRating/StarRatingWithRate'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface ReviweHeaderProps {
  rating: number
  name: string
  date: Date
  image: string
}

export function ReviewHeader({ date, image, name, rating }: ReviweHeaderProps) {
  const newDate = new Date(date)
  const dateDistanceToNow = formatDistanceToNow(newDate, {
    locale: ptBR,
    addSuffix: true,
  })
  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex gap-4">
        <Image
          className="rounded-full w-14 h-14 object-contain p-[2px]  bg-gradient-horizontal"
          src={image}
          width={56}
          height={40}
          alt="imagem do perfil do usuairo"
        />
        <div className=" flex flex-col leading-relaxed">
          <h4>{name}</h4>
          <span className="text-sm text-gray-400 ">{dateDistanceToNow}</span>
        </div>
      </div>
      <div>
        <StarRatingWithRate rating={rating} />
      </div>
    </div>
  )
}
