import { Navigator } from '@/components/Navigator'
import { RecentRatings } from '@/components/RecentsRatings'
import { ChartLineUp } from '@phosphor-icons/react'

export default function Home() {
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
          <div className="w-1/4 bg-green-300 ">teste</div>
        </div>
      </div>
    </div>
  )
}
