import { Navigator } from '@/components/Navigator'
import { ProfileBookCard } from '@/components/ProfileBookCard'
import { ProfileInfo } from '@/components/ProfileInfo'
import { SearchBar } from '@/components/SearchBar'
import { User } from 'phosphor-react'

export default function Profile() {
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
              <SearchBar placeholder="Buscar livro avaliado" />
              <div className="w-full flex flex-col gap-6">
                <ProfileBookCard />
                <ProfileBookCard />
                <ProfileBookCard />
                <ProfileBookCard />
              </div>
            </div>

            <div className="w-96">
              <ProfileInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
