import Image from 'next/image'
import { StarRatingWithRate } from '../StarRating/StarRatingWithRate'

export function ProfileBookCard() {
  return (
    <div className="w-full flex flex-col gap-2">
      <span className="text-sm text-gray-300">Há (0) dias</span>
      <div className="flex flex-col p-5 gap-6  bg-gray-700 relative rounded-lg">
        <div className=" flex gap-5 ">
          <Image
            src="https://github.com/giovaniocan.png"
            height={94}
            width={85}
            alt="capa do livro"
            className={`h-32 w-24 `}
          />
          <div className="flex flex-col justify-between ">
            <div className="flex w-64 flex-col">
              <h4 className="font-bold text-lg line-clamp-2">Nome do livro</h4>
              <span className="text-sm text-gray-400">Autor</span>
            </div>
            <div>
              <StarRatingWithRate rating={2} />
            </div>
          </div>
        </div>
        <p className="text-gray-300 text-sm text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
          accusantium nobis beatae, aut magni impedit facere dolorum eos vitae
          ipsam et labore sed placeat blanditiis delectus voluptate cumque?
          Itaque, eius. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Sint id similique labore quos vitae dolorum beatae fuga veniam
          laudantium alias totam minus distinctio unde ex, repellendus nobis
          itaque, voluptatem dolor.
        </p>
      </div>
    </div>
  )
}
