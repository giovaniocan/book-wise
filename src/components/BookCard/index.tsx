import * as Dialog from '@radix-ui/react-dialog'
import { ContentOfBookCard } from './ContentOfBookCard'
import { X } from 'phosphor-react'
import { BookDetail } from './BookDetail'
import { CommentList } from '../CommentList'
import { Category } from '@prisma/client'

export type BookCardType = {
  id: string
  cover_url: string
  name: string
  author: string
  avgRating: number
  total_pages: number
  categories: Category[]
  totalOfRating: number
}

interface BookCardProps {
  book?: BookCardType
  isIntheFeed?: boolean
  wasRead?: boolean
}

export function BookCard({ isIntheFeed, wasRead, book }: BookCardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div>
          <ContentOfBookCard
            image={book?.cover_url || ''}
            author={book?.author || ''}
            title={book?.name || ''}
            rating={book?.avgRating || 0}
            isIntheFeed={isIntheFeed}
            wasRead={wasRead}
          />
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className=" bg-black/60 data-[state=open]:animate-overlayShow  fixed inset-0">
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-0 overflow-y-auto right-0 flex flex-col gap-10 w-[45.3%] h-full px-12 pt-16  bg-gray-800  focus:outline-none">
            <BookDetail
              image={book?.cover_url || ''}
              author={book?.author || ''}
              nameOfTheBook={book?.name || ''}
              rate={book?.avgRating || 0}
              categories={book?.categories || []}
              totalPages={book?.total_pages || 0}
              totalOfRatings={book?.totalOfRating || 0}
            />
            <CommentList bookId={book?.id || ''} />
            <Dialog.Close className="absolute right-12 top-6 appearance-none ">
              <X
                size={40}
                color="#8381D9"
                className="bg-gray-600 p-2 rounded-lg hover:bg-gray-500"
              />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
