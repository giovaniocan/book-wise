/* eslint-disable camelcase */
import { ReviewHeader } from '@/components/ReviewHeader'
import { ListOfCommentType } from '..'

export function CommentCard({
  user,
  created_at,
  description,
  rate,
  id,
}: ListOfCommentType) {
  return (
    <div className="w-full p-6 flex flex-col gap-5 bg-gray-700 rounded-lg">
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
