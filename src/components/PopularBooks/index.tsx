import { CaretRight } from 'phosphor-react'
import { BookCard, BookCardType } from '../BookCard'
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { BookSkeleton } from '../Skeleton/BookSkeleton'

export function PopularBooks() {
  const { data: popularBooks, isLoading } = useQuery<BookCardType[]>(
    ['popularBooks'],
    async () => {
      const { data } = await api.get('/books/popularBooks')
      return data
    },
  )

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
      {isLoading ? (
        <BookSkeleton isPopularBooks />
      ) : (
        <div className="flex flex-col gap-3 ">
          {popularBooks?.map((book) => {
            return <BookCard key={book.id} book={book} />
          })}
        </div>
      )}
    </div>
  )
}
