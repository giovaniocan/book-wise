import { useState } from 'react'
import { CommentCard } from './CommentCard'
import { CommentArea } from './CommentArea'
import { useSession } from 'next-auth/react'
import { SignInModal } from '../SignInModal'

export function CommentList() {
  const [isCommentAreaOpen, setIsCommentAreaOpen] = useState(false)
  const session = useSession()

  function handleToggleCommentArea() {
    if (session.status === 'authenticated') {
      setIsCommentAreaOpen(!isCommentAreaOpen)
    }
  }

  function handleCloseCommentArea() {
    setIsCommentAreaOpen(false)
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-400">Avaliações</span>
        {!isCommentAreaOpen && session.status === 'unauthenticated' ? (
          <SignInModal />
        ) : (
          <h4
            className="font-bold cursor-pointer text-purple-100"
            onClick={handleToggleCommentArea}
          >
            Avaliar
          </h4>
        )}
      </div>
      {isCommentAreaOpen && (
        <CommentArea closeCommentArea={handleCloseCommentArea} />
      )}
      <CommentCard />
      <CommentCard />
      <CommentCard />
    </div>
  )
}
