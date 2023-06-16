import { BookCard, BookCardType } from '@/components/BookCard'
import { Navigator } from '@/components/Navigator'
import { SearchBar } from '@/components/SearchBar'
import { Filters } from '@/components/filters'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'
import { Binoculars } from 'phosphor-react'
import { useState } from 'react'

export default function Explorer() {
  const { data: books } = useQuery<BookCardType[]>(['books'], async () => {
    const { data } = await api.get('/books')
    return data
  })
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  function handleCategoriesChange(categorie: string) {
    if (selectedCategories.includes(categorie)) {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== categorie),
      )
    } else {
      setSelectedCategories([...selectedCategories, categorie])
    }
  }

  const filteredBooks = books?.filter((book) => {
    if (selectedCategories.length === 0) {
      return true // Retorna true se nenhuma categoria estiver selecionada
    }
    return selectedCategories.every((category) =>
      book.categories.some((cat) => cat.name === category),
    )
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
            <SearchBar placeholder="Buscar livro ou autor" />
          </div>
        </div>

        <Filters handleCategoryChange={handleCategoriesChange} />
        <div className=" w-full  flex gap-7   flex-wrap ">
          {filteredBooks?.map((book) => {
            return <BookCard key={book.id} isIntheFeed book={book} />
          })}
        </div>
      </div>
    </div>
  )
}
