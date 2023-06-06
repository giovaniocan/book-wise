import { useState } from 'react'

interface FilterCategoryProps {
  defaultSelected?: boolean
  name: string
}

export function FilterCategory({ name, defaultSelected }: FilterCategoryProps) {
  const [isSelected, setIsSelected] = useState(defaultSelected)

  function toogleSelected() {
    setIsSelected(!isSelected)
  }

  return (
    <div>
      <input
        type="checkbox"
        id="teste"
        className="absolute hidden"
        value={name}
      />
      <label
        onClick={toogleSelected}
        htmlFor="teste"
        className={`border border-purple-100 px-4 transition-colors py-1 text-purple-100 rounded-full cursor-pointer checked:bg-purple-100 hover:bg-purple-200 ${
          isSelected && 'bg-purple-200 border-purple-200 '
        }`}
      >
        {name}
      </label>
    </div>
  )
}
