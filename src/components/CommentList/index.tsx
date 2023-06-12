import { CommentCard } from './CommentCard'

export function CommentList() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-400">Avaliações</span>
        <h4 className="font-bold text-purple-100">Avaliar</h4>
      </div>
      <CommentCard />
      <CommentCard />
      <CommentCard />
    </div>
  )
}
