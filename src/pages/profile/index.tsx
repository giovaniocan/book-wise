import { Navigator } from '@/components/Navigator'
import { ProfileBookCard } from '@/components/ProfileBookCard'
import { ProfileInfo } from '@/components/ProfileInfo'
import { SearchBar } from '@/components/SearchBar'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'
import { parseCookies } from 'nookies'
import { User } from 'phosphor-react'
import { useState } from 'react'

interface Category {
  name: string
}

interface Book {
  author: string
  total_pages: number
  name: string
  cover_url: string
  categories: {
    category: Category[]
  }[]
}

interface Rating {
  rate: number
  description: string
  created_at: string
  book: Book
}

interface UserProfile {
  id: string
  name: string
  email: string
  avatar_url: string
  created_at: string
  ratings: Rating[]
}

export default function Profile() {
  const [valueOfInput, setValueOfInput] = useState('')

  const cookies = parseCookies()
  const userEmail = cookies['@bookwise:userEmail']

  const { data: user } = useQuery<UserProfile>(['userProfile'], async () => {
    const { data } = await api.get('users/getUserRatings', {
      params: {
        userEmail,
      },
    })
    return data
  })

  const ratedBooks = user?.ratings.length

  const totalPages = user?.ratings.reduce((total, item) => {
    return total + item.book.total_pages
  }, 0)

  const authorsRead = user?.ratings.reduce((uniqueAuthors: string[], item) => {
    const author = item.book.author
    if (!uniqueAuthors.includes(author)) {
      uniqueAuthors.push(author)
    }
    return uniqueAuthors
  }, [])

  function handleInputName(data: string) {
    setValueOfInput(data)
  }

  const filteredRatings = user?.ratings.filter((rating) => {
    if (valueOfInput.trim() === '') {
      return rating
    }
    const searchFilter = rating.book.name.toLowerCase().includes(valueOfInput)
    return searchFilter
  })

  return (
    <div>
      <div className="h-screen w-screen  flex  ">
        <Navigator />
        <div className=" w-full mx-24 mt-20 flex flex-col gap-10 ">
          <div className="flex gap-3">
            <User color="#50B2C0" size={32} />
            <h2 className="font-bold text-2xl">Perfil</h2>
          </div>
          <div className="flex gap-16">
            <div className="w-full flex flex-col gap-8">
              <SearchBar
                handleInputName={handleInputName}
                placeholder="Buscar livro avaliado"
              />
              <div className="w-full flex flex-col gap-6">
                {filteredRatings?.map((rating) => {
                  return (
                    <ProfileBookCard
                      key={rating.created_at}
                      book={rating.book}
                      createdAt={rating.created_at}
                      description={rating.description}
                      rate={rating.rate}
                    />
                  )
                })}
              </div>
            </div>

            <div className="w-96">
              <ProfileInfo
                name={user?.name || ''}
                createdAt={user?.created_at || ''}
                ratedBooks={ratedBooks || 0}
                totalPages={totalPages || 0}
                authorsRead={authorsRead?.length || 0}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
