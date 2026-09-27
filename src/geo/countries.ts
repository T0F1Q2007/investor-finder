export type CountryOption = {
  code: string
  name: string
}

export const COUNTRIES: CountryOption[] = [
  { code: 'AE', name: 'United Arab Emirates' },
  { code: 'AU', name: 'Australia' },
  { code: 'AZ', name: 'Azerbaijan' },
  { code: 'BR', name: 'Brazil' },
  { code: 'CA', name: 'Canada' },
  { code: 'CH', name: 'Switzerland' },
  { code: 'DE', name: 'Germany' },
  { code: 'EE', name: 'Estonia' },
  { code: 'FR', name: 'France' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'IL', name: 'Israel' },
  { code: 'IN', name: 'India' },
  { code: 'JO', name: 'Jordan' },
  { code: 'JP', name: 'Japan' },
  { code: 'SE', name: 'Sweden' },
  { code: 'SG', name: 'Singapore' },
  { code: 'TR', name: 'Turkey' },
  { code: 'US', name: 'United States' },
]

export function matchCountries(query: string, catalog: readonly CountryOption[]): CountryOption[] {
  const q = query.trim().toLowerCase()
  if (!q) return [...catalog]
  return catalog.filter(
    (country) =>
      country.name.toLowerCase().includes(q) ||
      country.code.toLowerCase().includes(q),
  )
}

export function countryName(code: string, catalog: readonly CountryOption[]): string {
  return catalog.find((country) => country.code === code)?.name ?? code
}
