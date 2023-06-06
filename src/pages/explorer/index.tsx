import { Navigator } from '@/components/Navigator'
import { Binoculars, MagnifyingGlass } from 'phosphor-react'

export default function Home() {
  return (
    <div className="h-screen w-screen  flex  ">
      <Navigator />
      <div className=" w-full mx-24 mt-[4.25rem] flex flex-col gap-10 ">
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <Binoculars color="#50B2C0" size={32} />
            <h2 className="font-bold text-2xl">Explorar</h2>
          </div>
          <div className="border border-gray-500 rounded-md p-2 flex items-center justify-between px-5 py-4 gap-2">
            <input
              placeholder="Buscar livro ou autor"
              type="text"
              className="w-96 bg-gray-800 focus:outline-none placeholder:text-gray-400  outline-none"
            />
            <MagnifyingGlass size={20} color="#303F73" />
          </div>
        </div>
      </div>
    </div>
  )
}
