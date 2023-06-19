import { StarRating } from '@/components/StarRating'
import Image from 'next/image'
import { Check, X } from 'phosphor-react'
import { ChangeEvent, useState } from 'react'

interface ComemntAreaProps {
  closeCommentArea: () => void
}

export function CommentArea({ closeCommentArea }: ComemntAreaProps) {
  const [valueOfTextarea, setValueOfTextarea] = useState('')
  const [rating, setRating] = useState(0)
  const maxLenghtOfTextarea = 450

  function handleTextAreaChange(event: ChangeEvent<HTMLTextAreaElement>) {
    if (event.target.value.length <= maxLenghtOfTextarea) {
      setValueOfTextarea(event.target.value)
    }
  }

  function handleRatingChange(rate: number) {
    setRating(rate)
  }

  function handleInputTheValue() {
    setValueOfTextarea('')
  }

  function handleCloseCommentArea() {
    closeCommentArea()
    setValueOfTextarea('')
  }

  return (
    <div className="w-full p-6 flex flex-col gap-6 bg-gray-700 rounded-lg">
      <div className="flex w-full justify-between items-center">
        <div className="flex gap-4 items-center">
          <Image
            className="rounded-full p-[2px]  bg-gradient-horizontal"
            src="https://github.com/giovaniocan.png"
            width={60}
            height={40}
            alt="imagem do perfil do usuairo"
          />

          <h4>nome do usuario</h4>
        </div>
        <div>
          <StarRating passedRatingNumber={handleRatingChange} />
        </div>
      </div>
      <div className="flex flex-col gap-3 ">
        <div className="flex flex-col gap-3 relative">
          <textarea
            value={valueOfTextarea}
            className="w-full  bg-gray-800 text-sm text-gray-200 border border-gray-500 rounded resize-none px-5 py-3 placeholder:text-sm placeholder:text-gray-400 focus:outline-none"
            placeholder="Escreva a sua avaliação"
            onChange={handleTextAreaChange}
          />
          <span className=" absolute right-2 bottom-1 text-xs text-gray-400">
            {valueOfTextarea.length}/450
          </span>
        </div>

        <div className="flex gap-2 justify-end">
          <button
            onClick={handleCloseCommentArea}
            className="bg-gray-600 p-2 hover:bg-gray-500"
          >
            <X size={24} color="#8381D9" />
          </button>
          <button
            onClick={handleInputTheValue}
            className="bg-gray-600 p-2 hover:bg-gray-500"
          >
            <Check size={24} color="#50B2C0" />
          </button>
        </div>
      </div>
    </div>
  )
}
