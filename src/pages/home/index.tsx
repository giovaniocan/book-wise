import { Navigator } from '@/components/Navigator'
import { PopularBooks } from '@/components/PopularBooks'
import { RecentRatings } from '@/components/RecentsRatings'
import { ChartLineUp } from '@phosphor-icons/react'
import { useSession } from 'next-auth/react'

export default function Home() {
  const session = useSession()
  console.log(session)
  return (
    <div className="h-screen w-screen  flex  ">
      <Navigator />
      <div className=" w-full mx-24 mt-20 flex flex-col gap-10 ">
        <div className="flex gap-3">
          <ChartLineUp color="#50B2C0" size={32} />
          <h2 className="font-bold text-2xl">Início</h2>
        </div>
        <div className="flex gap-16">
          <RecentRatings />
          <div className="w-1/3">
            <PopularBooks />
          </div>
        </div>
      </div>
    </div>
  )
}
