import { FilterCategory } from '../FilterCategory'

export function Filters() {
  return (
    <div className="flex items-center gap-3">
      <FilterCategory name="Tudo" defaultSelected />
      <FilterCategory name="Computação" />
      <FilterCategory name="Educação" />
      <FilterCategory name="Fantasia" />
      <FilterCategory name="Ficção Cientifica" />
      <FilterCategory name="Horro" />
      <FilterCategory name="HQs" />
      <FilterCategory name="Suspense" />
    </div>
  )
}
