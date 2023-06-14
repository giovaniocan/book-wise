import { CaretRight } from 'phosphor-react'
import { BookCard } from '../BookCard'
import Link from 'next/link'

export function PopularBooks() {
  return (
    <div className=" w-full flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-sm">Livros populares</span>
        <Link
          href="/explorer"
          className="text-purple-100 text-sm font-bold flex gap-2 items-center"
        >
          Ver todos <CaretRight color="#8381D9" />
        </Link>
      </div>
      <div className="flex flex-col gap-3 ">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </div>
  )
}
