/* eslint-disable camelcase */
import { ReviewHeader } from '@/components/ReviewHeader'

interface CommentCardProps {
  created_at: string
  rate: number
  description: string
  userCommentBefore: boolean
  user: {
    avatar_url: string
    name: string
    id: string
  }
}

export function CommentCard({
  user,
  created_at,
  description,
  rate,
  userCommentBefore,
}: CommentCardProps) {
  console.log(userCommentBefore)
  return (
    <div
      className={`w-full p-6 flex flex-col gap-5 bg-gray-700 rounded-lg ${
        userCommentBefore && `bg-gray-500/60`
      } `}
    >
      <ReviewHeader
        date={created_at}
        image={user.avatar_url}
        name={user.name}
        rating={rate}
      />
      <p className="text-sm text-gray-300 text-justify">{description}</p>
    </div>
  )
}
