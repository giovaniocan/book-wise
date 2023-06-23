import { Navigator } from '@/components/Navigator'
import { ProfileBookCard } from '@/components/ProfileBookCard'
import { ProfileInfo } from '@/components/ProfileInfo'
import { SearchBar } from '@/components/SearchBar'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'
import { parseCookies } from 'nookies'
import { User } from 'phosphor-react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { RatingSkeleton } from '@/components/Skeleton/RatingSkeleton.tsx'

interface Book {
  author: string
  total_pages: number
  name: string
  cover_url: string
}

interface Rating {
  rate: number
  description: string
  created_at: string
  book: Book
}

interface UserProps {
  name: string
  avatar_url: string
  created_at: string
}

interface UserProfile {
  user: UserProps
  readPages: number
  ratedBooks: number
  readAuthors: number
  mostReadCategory: string
  ratings: Rating[]
}

export default function Profile() {
  const router = useRouter()
  const session = useSession()

  const [valueOfInput, setValueOfInput] = useState('')

  const cookies = parseCookies()
  const userEmail = cookies['@bookwise:userEmail']

  const { data: userProfile, isLoading } = useQuery<UserProfile>(
    ['userProfile', userEmail],
    async () => {
      const { data } = await api.get('users/getUserRatings', {
        params: {
          userEmail,
        },
      })
      return data
    },
  )

  function handleInputName(data: string) {
    setValueOfInput(data)
  }

  const filteredRatings = userProfile?.ratings.filter((rating) => {
    if (valueOfInput.trim() === '') {
      return rating
    }
    const searchFilter = rating.book.name.toLowerCase().includes(valueOfInput)
    return searchFilter
  })

  useEffect(() => {
    if (session.status === 'unauthenticated') {
      router.push('/home')
    }
  }, [session.status, router])
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

              {isLoading ? (
                <RatingSkeleton />
              ) : (
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
              )}
            </div>

            <div className="w-96">
              <ProfileInfo
                name={userProfile?.user.name || ''}
                createdAt={userProfile?.user?.created_at || ''}
                image={userProfile?.user.avatar_url || ''}
                ratedBooks={userProfile?.ratedBooks || 0}
                totalPages={userProfile?.readPages || 0}
                authorsRead={userProfile?.readAuthors || 0}
                mostCategory={userProfile?.mostReadCategory || ''}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
