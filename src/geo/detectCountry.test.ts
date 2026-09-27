import { describe, expect, it } from 'vitest'
import { countryFromCloudflareTrace, countryFromLanguageTag, detectCountry } from './detectCountry'

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

    await expect(detectCountry(fetchImpl)).resolves.toEqual({
      code: 'DE',
      name: 'Germany',
      source: 'ip',
    })
  })

  it('uses the ipapi adapter when ipwho fails', async () => {
    const fetchImpl: typeof fetch = async (input) => {
      const url = String(input)
      if (url.includes('ipwho.is')) return new Response('', { status: 500 })
      if (url.includes('ipapi.co')) {
        return new Response(JSON.stringify({ country_code: 'gb', country_name: 'United Kingdom' }), {
          status: 200,
        })
      }
      throw new Error(`unexpected ${url}`)
    }

    await expect(detectCountry(fetchImpl)).resolves.toEqual({
      code: 'GB',
      name: 'United Kingdom',
      source: 'ip',
    })
  })

  it('parses Cloudflare trace loc', () => {
    expect(countryFromCloudflareTrace('fl=1\nloc=AZ\ntls=TLSv1.3\n')).toEqual({
      code: 'AZ',
      name: 'Azerbaijan',
      source: 'ip',
    })
  })

  it('falls back to the browser language region when every lookup fails', async () => {
    const fetchImpl: typeof fetch = async () => new Response('', { status: 500 })
    await expect(detectCountry(fetchImpl, 'az-AZ')).resolves.toEqual({
      code: 'AZ',
      name: 'Azerbaijan',
      source: 'language',
    })
  })

  it('returns null when lookups fail and the language tag has no region', async () => {
    const fetchImpl: typeof fetch = async () => new Response('', { status: 500 })
    await expect(detectCountry(fetchImpl, '')).resolves.toBeNull()
    expect(countryFromLanguageTag(undefined)).toBeNull()
  })
})
