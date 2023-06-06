import { MagnifyingGlass } from 'phosphor-react'

interface SearchBarProps {
  placeholder: string
}

export function SearchBar({ placeholder }: SearchBarProps) {
  return (
    <div className="border border-gray-500 rounded-md p-2 flex items-center justify-between px-5 py-4 gap-2">
      <input
        placeholder={placeholder}
        type="text"
        className=" w-full bg-gray-800 focus:outline-none placeholder:text-gray-400  outline-none"
      />
      <MagnifyingGlass size={20} color="#303F73" />
    </div>
  )
}
