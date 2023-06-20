import { useState } from 'react'
import { CommentCard } from './CommentCard'
import { CommentArea } from './CommentArea'
import { useSession } from 'next-auth/react'
import { SignInModal } from '../SignInModal'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { parseCookies } from 'nookies'
import { User } from '@prisma/client'

export type ListOfCommentType = {
  created_at: string
  rate: number
  description: string
  id: string
  user: {
    avatar_url: string
    name: string
  }
}

interface CommentListProps {
  bookId: string
}

export function CommentList({ bookId }: CommentListProps) {
  const [isCommentAreaOpen, setIsCommentAreaOpen] = useState(false)
  const session = useSession()

  const cookies = parseCookies()
  const userId = cookies['@bookwise:userId']

  const { data: user } = useQuery<User>(['user'], async () => {
    const { data } = await api.get('users/getUserById', {
      params: {
        userId,
      },
    })
    return data
  })

  console.log(user)

  const { data: ratingsOfBook } = useQuery<ListOfCommentType[]>(
    ['ratingsOfBook'],
    async () => {
      const { data } = await api.get(`/ratings/rateByBook`, {
        params: {
          bookId,
        },
      })
      return data
    },
  )

  function handleToggleCommentArea() {
    if (session.status === 'authenticated') {
      setIsCommentAreaOpen(!isCommentAreaOpen)
    }
  }

  function handleCloseCommentArea() {
    setIsCommentAreaOpen(false)
  }

  async function handleInsertDateInDB(rating: number, description: string) {
    await api.post('ratings/addRating', {
      rate: rating,
      description,
      book_id: bookId,
      user_id: userId,
    })
    handleCloseCommentArea()
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
        <CommentArea
          image={user?.avatar_url || ''}
          name={user?.name || ''}
          handleInputTheValue={handleInsertDateInDB}
          closeCommentArea={handleCloseCommentArea}
        />
      )}
      {ratingsOfBook &&
        ratingsOfBook.map((rating) => {
          return (
            <CommentCard
              created_at={rating.created_at}
              rate={rating.rate}
              description={rating.description}
              user={rating.user}
              key={rating.id}
              id={rating.id}
            />
          )
        })}
    </div>
  )
}
