import { describe, expect, it } from 'vitest'
import { CATEGORIES } from './categories'
import { matchCategories } from './matchCategories'

describe('matchCategories', () => {
  it('returns the full closed catalog when the query is empty', () => {
    expect(matchCategories('  ', CATEGORIES)).toEqual(CATEGORIES)
  })

  it('filters the existing catalog and never invents a category', () => {
    const hits = matchCategories('pay', CATEGORIES)
    expect(hits.map((item) => item.id)).toEqual(['fintech'])
    expect(hits.every((item) => CATEGORIES.includes(item))).toBe(true)
  })

  it('matches aliases such as saas onto software', () => {
    expect(matchCategories('saas', CATEGORIES).map((item) => item.id)).toEqual(['software'])
  })
})
