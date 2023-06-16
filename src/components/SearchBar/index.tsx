import { MagnifyingGlass } from 'phosphor-react'
import React, { useState } from 'react'

interface SearchBarProps {
  placeholder: string
  handleInputName: (data: string) => void
}

export function SearchBar({ placeholder, handleInputName }: SearchBarProps) {
  const [inputData, setInputData] = useState('')

  function handleSubmiteInput() {
    handleInputName(inputData)
    setInputData('')
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputData(event.target.value)
  }

  return (
    <div className="border border-gray-500 w-full h-12 rounded-md p-2 flex items-center justify-between px-5 py-4 gap-2">
      <input
        value={inputData}
        onChange={handleInputChange}
        placeholder={placeholder}
        type="text"
        className=" w-full bg-gray-800 focus:outline-none placeholder:text-gray-400  outline-none"
      />
      <button onClick={handleSubmiteInput}>
        <MagnifyingGlass size={20} color="#303F73" />
      </button>
    </div>
  )
}
