import { describe, expect, it } from 'vitest'
import { detectCountry } from './detectCountry'

describe('detectCountry', () => {
  it('reads ISO code and name from ipwho.is', async () => {
    const fetchImpl: typeof fetch = async (input) => {
      const url = String(input)
      if (url.includes('ipwho.is')) {
        return new Response(JSON.stringify({ success: true, country_code: 'de', country: 'Germany' }), {
          status: 200,
        })
      }
      throw new Error(`unexpected ${url}`)
    }

    await expect(detectCountry(fetchImpl)).resolves.toEqual({ code: 'DE', name: 'Germany' })
  })

  it('uses the ipapi adapter when ipwho fails', async () => {
    const fetchImpl: typeof fetch = async (input) => {
      const url = String(input)
      if (url.includes('ipwho.is')) return new Response('', { status: 500 })
      return new Response(JSON.stringify({ country_code: 'gb', country_name: 'United Kingdom' }), {
        status: 200,
      })
    }

    await expect(detectCountry(fetchImpl)).resolves.toEqual({ code: 'GB', name: 'United Kingdom' })
  })

  it('returns null when both lookups fail', async () => {
    const fetchImpl: typeof fetch = async () => new Response('', { status: 500 })
    await expect(detectCountry(fetchImpl)).resolves.toBeNull()
  })
})
