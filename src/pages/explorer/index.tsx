import { BookCard, BookCardType } from '@/components/BookCard'
import { Navigator } from '@/components/Navigator'
import { SearchBar } from '@/components/SearchBar'
import { BookSkeleton } from '@/components/Skeleton/BookSkeleton'
import { Filters } from '@/components/filters'
import { api } from '@/lib/axios'
import { Broom } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'

import { Binoculars } from 'phosphor-react'
import { useState } from 'react'

export default function Explorer() {
  const { data: books, isLoading } = useQuery<BookCardType[]>(
    ['books'],
    async () => {
      const { data } = await api.get('/books')
      return data
    },
  )
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [search, setSearch] = useState('')

  function handleCategoriesChange(categorie: string) {
    if (selectedCategories.includes(categorie)) {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== categorie),
      )
    } else {
      setSelectedCategories([...selectedCategories, categorie])
    }
  }

  function handleInputValue(data: string) {
    setSearch(data)
  }

  function handleResetFilters() {
    setSelectedCategories([])
    setSearch('')
  }

  const filteredBooks = books?.filter((book) => {
    if (selectedCategories.length === 0 && search.trim() === '') {
      return true // Retorna true se nenhuma categoria estiver selecionada ou com nenhuma pesquisa
    }
    const categoryFilters = selectedCategories.every((category) =>
      book.categories.some((cat) => cat.name === category),
    )

    const searchFilters =
      book.name.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())

    return categoryFilters && searchFilters
  })

  return (
    <div className="h-screen w-screen  flex  ">
      <Navigator />
      <div className=" w-full mx-24 mt-[4.25rem]  flex flex-col gap-14 ">
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <Binoculars color="#50B2C0" size={32} />
            <h2 className="font-bold text-2xl">Explorar</h2>
          </div>
          <div className="w-96">
            <SearchBar
              handleInputName={handleInputValue}
              placeholder="Buscar livro ou autor"
            />
          </div>
        </div>
        <div className=" flex flex-col gap-4">
          <button
            onClick={handleResetFilters}
            className="text-purple-100 text-sm font-bold flex gap-2 items-center"
          >
            Limpar pesquisa <Broom color="#8381D9" />
          </button>
          <Filters handleCategoryChange={handleCategoriesChange} />
        </div>
        {isLoading ? (
          <BookSkeleton /> // Show skeleton component while loading
        ) : filteredBooks && filteredBooks.length > 0 ? (
          <div className="w-full flex gap-7 flex-wrap">
            {filteredBooks?.map((book) => (
              <BookCard key={book.id} isIntheFeed book={book} />
            ))}
          </div>
        ) : (
          <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
            <h2 className="font-bold text-3xl">Nenhum livro encontrado</h2>
            <h3>tente realizar outra pesquisa</h3>
          </div>
        )}
      </div>
    </div>
  )
}
