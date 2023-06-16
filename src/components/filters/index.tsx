import { useQuery } from '@tanstack/react-query'
import { FilterCategory } from '../FilterCategory'
import { Category } from '@prisma/client'
import { api } from '@/lib/axios'

interface FilterProps {
  handleCategoryChange: (category: string) => void
}

export function Filters({ handleCategoryChange }: FilterProps) {
  const { data: categories } = useQuery<Category[]>(
    ['categories'],
    async () => {
      const { data } = await api.get('categories')
      return data
    },
  )

  return (
    <div className="flex items-center gap-3">
      {/*  <FilterCategory name="Tudo" defaultSelected /> */}
      {categories?.map((category) => {
        return (
          <FilterCategory
            key={category.id}
            handleCategoriesChange={handleCategoryChange}
            name={category.name}
          />
        )
      })}
    </div>
  )
}
