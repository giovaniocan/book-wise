import Image from 'next/image'
import { StarRatingWithRate } from '../StarRating/StarRatingWithRate'
import { parseISO, isValid, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface ReviewHeaderProps {
  rating: number
  name: string
  date: string
  image: string
}

export function ReviewHeader({ image, name, rating, date }: ReviewHeaderProps) {
  let distanceToNow = ''

  if (isValid(parseISO(date))) {
    const parsedDate = parseISO(date)
    distanceToNow = formatDistanceToNow(parsedDate, {
      addSuffix: true,
      locale: ptBR,
    })
  }

  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex gap-4">
        <Image
          className="rounded-full w-14 h-14 object-contain p-[2px] bg-gradient-horizontal"
          src={image}
          width={56}
          height={40}
          alt="imagem do perfil do usuário"
        />
        <div className="flex flex-col leading-relaxed">
          <h4>{name}</h4>
          <span className="text-sm text-gray-400">{distanceToNow}</span>
        </div>
      </div>
      <div>
        <StarRatingWithRate rating={rating} />
      </div>
    </div>
  )
}
