import { useState } from 'react'
import { CommentCard } from './CommentCard'
import { CommentArea } from './CommentArea'

export function CommentList() {
  const [isCommentAreaOpen, setIsCommentAreaOpen] = useState(false)

  function handleToggleCommentArea() {
    setIsCommentAreaOpen(!isCommentAreaOpen)
  }
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-400">Avaliações</span>
        {!isCommentAreaOpen && (
          <h4
            className="font-bold cursor-pointer text-purple-100"
            onClick={handleToggleCommentArea}
          >
            Avaliar
          </h4>
        )}
      </div>
      {isCommentAreaOpen && <CommentArea />}
      <CommentCard />
      <CommentCard />
      <CommentCard />
    </div>
  )
}
