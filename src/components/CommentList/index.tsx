import { useState } from 'react'
import { CommentCard } from './CommentCard'
import { CommentArea } from './CommentArea'
import { useSession } from 'next-auth/react'
import { SignInModal } from '../SignInModal'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
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
    id: string
  }
}

interface CommentListProps {
  bookId: string
}

export function CommentList({ bookId }: CommentListProps) {
  const [isCommentAreaOpen, setIsCommentAreaOpen] = useState(false)

  const session = useSession()

  const cookies = parseCookies()
  const userEmail = cookies['@bookwise:userEmail']

  const { data: user } = useQuery<User>(['user'], async () => {
    const { data } = await api.get('users/getUserByEmail', {
      params: {
        userEmail,
      },
    })
    return data
  })

  const { data: ratingsOfBook } = useQuery<ListOfCommentType[]>(
    [`ratingsOfBook=${bookId}`],
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

  const queryClient = useQueryClient() // esse userQueryClient serve para atualizar o cache do react query quando uma mutation for executada

  const insertRatingMutation = useMutation(
    async (data: { rate: number; description: string }) => {
      // aqui estamos adicionando no DB normalmente
      await api.post('ratings/addRating', {
        ...data,
        book_id: bookId,
        user_id: user?.id,
      })
    },
    {
      onSuccess: () => {
        // se foi adicionado, ele fala que o nosso valor antes pegado e colocado em cache é invalido, ou seja, ele necessita fazer uma nova requisição e atualizar o cache
        queryClient.invalidateQueries([`ratingsOfBook=${bookId}`])
      },
    },
  )

  async function handleInsertDateInDB(rating: number, description: string) {
    await insertRatingMutation.mutateAsync({ rate: rating, description }) // aqui estamos chamando a função para realizar a mutação
    handleCloseCommentArea()
  }

  const userAlreadyCommentBefore = !ratingsOfBook?.some(
    (item) => item.user.id === user?.id,
  )

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-400">Avaliações</span>
        {userAlreadyCommentBefore ? (
          !isCommentAreaOpen && session.status === 'unauthenticated' ? (
            <SignInModal />
          ) : (
            <h4
              className="font-bold cursor-pointer text-purple-100"
              onClick={handleToggleCommentArea}
            >
              Avaliar
            </h4>
          )
        ) : null}
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
          const commentBefore = rating.user.id === user?.id
          return (
            <CommentCard
              created_at={rating.created_at}
              rate={rating.rate}
              description={rating.description}
              user={rating.user}
              key={rating.id}
              userCommentBefore={commentBefore}
            />
          )
        })}
    </div>
  )
}
