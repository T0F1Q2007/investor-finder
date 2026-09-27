import { describe, expect, it } from 'vitest'
import { readDeskQuery, writeDeskQuery } from './query'

describe('desk query', () => {
  it('round-trips category, country, and plate', () => {
    const encoded = writeDeskQuery({ categoryId: 'fintech', countryCode: 'US', plateIndex: 2 })
    expect(readDeskQuery(encoded)).toEqual({
      categoryId: 'fintech',
      countryCode: 'US',
      plateIndex: 2,
    })
  })
})
