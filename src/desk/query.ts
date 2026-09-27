import type { Category } from '../catalog/categories'
import { findCategory } from '../catalog/matchCategories'

export type DeskQuery = {
  categoryId: string | null
  countryCode: string | null
  plateIndex: number
}

export function readDeskQuery(search: string): DeskQuery {
  const params = new URLSearchParams(search)
  const categoryId = params.get('cat')
  const countryCode = params.get('country')?.toUpperCase() ?? null
  const plateIndex = Number.parseInt(params.get('plate') ?? '0', 10)

  return {
    categoryId,
    countryCode,
    plateIndex: Number.isFinite(plateIndex) && plateIndex >= 0 ? plateIndex : 0,
  }
}

export function writeDeskQuery(query: DeskQuery): string {
  const params = new URLSearchParams()
  if (query.categoryId) params.set('cat', query.categoryId)
  if (query.countryCode) params.set('country', query.countryCode)
  if (query.plateIndex > 0) params.set('plate', String(query.plateIndex))
  const encoded = params.toString()
  return encoded ? `?${encoded}` : ''
}

export function categoryFromQuery(query: DeskQuery, catalog: readonly Category[]): Category | undefined {
  if (!query.categoryId) return undefined
  return findCategory(query.categoryId, catalog)
}
