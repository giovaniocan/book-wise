import * as Dialog from '@radix-ui/react-dialog'
import { ContentOfBookCard } from './ContentOfBookCard'
import { X } from 'phosphor-react'
import { BookDetail } from './BookDetail'

interface BookCardProps {
  isIntheFeed?: boolean
  wasRead?: boolean
}

export function BookCard({ isIntheFeed, wasRead }: BookCardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div>
          <ContentOfBookCard isIntheFeed={isIntheFeed} wasRead={wasRead} />
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className=" bg-black/60 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-0 right-0  w-[45.3%] h-full px-12 pt-16  bg-gray-800  focus:outline-none">
          <BookDetail />
          <Dialog.Close>
            <button
              className=" absolute right-12 top-6 appearance-none "
              aria-label="Close"
            >
              <X
                size={40}
                color="#8381D9"
                className="bg-gray-600 p-2 rounded-lg hover:bg-gray-500"
              />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
