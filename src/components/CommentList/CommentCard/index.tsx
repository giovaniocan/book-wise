import { ReviewHeader } from '@/components/ReviewHeader'

export function CommentCard() {
  return (
    <div className="w-full p-6 flex flex-col gap-5 bg-gray-700 rounded-lg">
      <ReviewHeader />
      <p className="text-sm text-gray-300 text-justify">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
        voluptatibus, quisquam consequatur dolore nobis aliquid est aperiam
        praesentium maiores debitis placeat dolorem, quia rem distinctio sint,
        fuga dolorum? Tenetur, dolores!
      </p>
    </div>
  )
}
