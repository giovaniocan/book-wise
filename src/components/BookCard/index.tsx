import * as Dialog from '@radix-ui/react-dialog'
import { ContentOfBookCard } from './ContentOfBookCard'
/* import { ContentOfBookCard } from './ContentOfBookCard' */

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
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-0 right-0  w-[45.3%] h-full rounded-[6px] bg-gray-800  focus:outline-none">
          <h1>Essa é a minha modal</h1>
          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              X
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
