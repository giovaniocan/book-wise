import Image from 'next/image'
import { StarRatingWithRate } from '../StarRating/StarRatingWithRate'

export function ReviewHeader() {
  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex gap-4">
        <Image
          className="rounded-full p-[2px]  bg-gradient-horizontal"
          src="https://github.com/giovaniocan.png"
          width={60}
          height={40}
          alt="imagem do perfil do usuairo"
        />
        <div className=" flex flex-col leading-relaxed">
          <h4>nome do usuario</h4>
          <span className="text-sm text-gray-400 ">data</span>
        </div>
      </div>
      <div>
        <StarRatingWithRate rating={3} />
      </div>
    </div>
  )
}
