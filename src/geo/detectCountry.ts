export type SittingSource = 'ip' | 'language'

export type DetectedCountry = {
  code: string
  name: string
  source: SittingSource
}

type IpWhoResponse = {
  success?: boolean
  country_code?: string
  country?: string
}

type IpApiResponse = {
  country_code?: string
  country_name?: string
  error?: boolean
}

function regionName(code: string): string | null {
  try {
    const name = new Intl.DisplayNames(['en'], { type: 'region' }).of(code)
    return name && name !== code ? name : null
  } catch {
    return null
  }
}

function namedCountry(code: string, fallback?: string): DetectedCountry | null {
  const iso = code.trim().toUpperCase()
  if (iso.length !== 2) return null
  const name = fallback?.trim() || regionName(iso)
  if (!name) return null
  return { code: iso, name, source: 'ip' }
}

export function countryFromLanguageTag(tag: string | undefined): DetectedCountry | null {
  if (!tag) return null
  try {
    const region = new Intl.Locale(tag).maximize().region
    if (!region) return null
    const name = regionName(region)
    if (!name) return null
    return { code: region.toUpperCase(), name, source: 'language' }
  } catch {
    return null
  }
}

async function fromIpWho(response: Response): Promise<DetectedCountry | null> {
  if (!response.ok) return null
  const body = (await response.json()) as IpWhoResponse
  if (body.success === false) return null
  return namedCountry(body.country_code ?? '', body.country)
}

async function fromIpApi(response: Response): Promise<DetectedCountry | null> {
  if (!response.ok) return null
  const body = (await response.json()) as IpApiResponse
  if (body.error) return null
  return namedCountry(body.country_code ?? '', body.country_name)
}

export function countryFromCloudflareTrace(body: string): DetectedCountry | null {
  const match = body.match(/(?:^|\n)loc=([A-Za-z]{2})(?:\n|$)/)
  if (!match) return null
  return namedCountry(match[1])
}

export async function detectCountry(
  fetchImpl: typeof fetch = fetch,
  languageTag?: string,
): Promise<DetectedCountry | null> {
  const endpoints: Array<{ url: string; parse: (response: Response) => Promise<DetectedCountry | null> }> = [
    {
      url: 'https://ipwho.is/',
      parse: fromIpWho,
    },
    {
      url: 'https://ipapi.co/json/',
      parse: fromIpApi,
    },
    {
      url: 'https://www.cloudflare.com/cdn-cgi/trace',
      parse: async (response) => {
        if (!response.ok) return null
        return countryFromCloudflareTrace(await response.text())
      },
    },
  ]

  for (const endpoint of endpoints) {
    try {
      const hit = await endpoint.parse(await fetchImpl(endpoint.url))
      if (hit) return hit
    } catch {
      // try next adapter
    }
  }

  return countryFromLanguageTag(languageTag)
}
