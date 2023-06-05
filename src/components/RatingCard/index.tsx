import Image from 'next/image'
import { ReviewHeader } from '../ReviewHeader'
import { useState } from 'react'

export function RatingCard() {
  const [isReadMore, setIsReadMore] = useState(false)

  function toggleReadMore() {
    setIsReadMore(!isReadMore)
  }

  return (
    <div className="flex flex-col gap-8 p-6 bg-gray-700 rounded-lg">
      <ReviewHeader />
      <div className="grid grid-cols-[135px_minmax(135px,_1fr)] gap-5">
        <Image
          src="https://github.com/giovaniocan.png"
          height={152}
          width={135}
          alt="capa do livro"
        />

        <div className="flex flex-col gap-5">
          <div>
            <h4 className="font-bold text-base">Nome do livro</h4>
            <span className="text-sm text-gray-400">Autor</span>
          </div>

          <div>
            <p
              className={`text-sm text-justify ${
                isReadMore === false && 'line-clamp-4'
              } `}
            >
              `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              obcaecati ducimus sed ex eaque qui adipisci tempore nihil,
              doloremque vero totam quae dignissimos incidunt neque vitae. Sed
              rerum saepe laudantium. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Cumque obcaecati ducimus sed ex eaque qui
              adipisci tempore nihil, doloremque vero totam quae dignissimos
              incidunt neque vitae. Sed rerum saepe laudantium. Lorem ipsum
              dolor sit amet consectetur adipisicing
              elit.dfsfsdfsdfsfddignissimos incidunt neque vitae. Sed rerum
              saepe laudantium. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Cumque obcaecati ducimus sed ex eaque qui
              adipisci tempore nihil, doloremque vero totam quae dignissimos
              incidunt neque vitae. Sed rerum saepe laudantium. Lorem`
            </p>
            <button
              onClick={toggleReadMore}
              className="text-sm text-purple-100 font-bold"
            >
              {isReadMore === false ? 'ver mais' : 'ver menos'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
