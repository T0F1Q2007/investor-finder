import type { Category } from './categories'

export function matchCategories(query: string, catalog: readonly Category[]): Category[] {
  const q = query.trim().toLowerCase()
  if (!q) return [...catalog]

  return catalog.filter((category) => {
    if (category.label.toLowerCase().includes(q)) return true
    if (category.id.includes(q)) return true
    return category.aliases.some((alias) => alias.toLowerCase().includes(q) || q.includes(alias.toLowerCase()))
  })
}

export function findCategory(id: string, catalog: readonly Category[]): Category | undefined {
  return catalog.find((category) => category.id === id)
}
