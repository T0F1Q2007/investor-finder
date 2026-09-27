import { describe, expect, it } from 'vitest'
import { filterInvestors } from './filterInvestors'
import { INVESTORS } from './investors'

describe('filterInvestors', () => {
  it('keeps people who match both thesis and country', () => {
    const hits = filterInvestors(INVESTORS, 'fintech', 'US')
    expect(hits.map((item) => item.id).sort()).toEqual(['andreessen', 'meeker', 'saverin'])
  })

  it('returns an empty list when the country has no file for that thesis', () => {
    expect(filterInvestors(INVESTORS, 'food', 'JP')).toEqual([])
  })
})
