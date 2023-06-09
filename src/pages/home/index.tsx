import { Navigator } from '@/components/Navigator'
import { PopularBooks } from '@/components/PopularBooks'
import { RecentRatings } from '@/components/RecentsRatings'
import { ChartLineUp } from '@phosphor-icons/react'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Home | Book Wise !!"
        description="aqui você pode encontrar os melhores livros de todos os tempos, e o que as pessoas estão achando deles."
      />
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
    </>
  )
}
