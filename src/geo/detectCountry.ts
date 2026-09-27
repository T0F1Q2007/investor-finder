export type DetectedCountry = {
  code: string
  name: string
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

async function fromIpWho(response: Response): Promise<DetectedCountry | null> {
  if (!response.ok) return null
  const body = (await response.json()) as IpWhoResponse
  if (body.success === false) return null
  const code = body.country_code?.trim().toUpperCase()
  const name = body.country?.trim()
  if (!code || code.length !== 2 || !name) return null
  return { code, name }
}

async function fromIpApi(response: Response): Promise<DetectedCountry | null> {
  if (!response.ok) return null
  const body = (await response.json()) as IpApiResponse
  if (body.error) return null
  const code = body.country_code?.trim().toUpperCase()
  const name = body.country_name?.trim()
  if (!code || code.length !== 2 || !name) return null
  return { code, name }
}

export async function detectCountry(fetchImpl: typeof fetch = fetch): Promise<DetectedCountry | null> {
  try {
    const who = await fromIpWho(await fetchImpl('https://ipwho.is/'))
    if (who) return who
  } catch {
    // fall through to second adapter
  }

  try {
    return await fromIpApi(await fetchImpl('https://ipapi.co/json/'))
  } catch {
    return null
  }
}
