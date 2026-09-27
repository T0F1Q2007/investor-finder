import type { Investor } from './investors'

export function filterInvestors(
  investors: readonly Investor[],
  categoryId: string,
  countryCode: string,
): Investor[] {
  const country = countryCode.toUpperCase()
  return investors.filter(
    (investor) =>
      investor.categoryIds.includes(categoryId) && investor.countryCodes.includes(country),
  )
}

export function countriesWithInvestors(investors: readonly Investor[], categoryId: string): string[] {
  const codes = new Set<string>()
  for (const investor of investors) {
    if (!investor.categoryIds.includes(categoryId)) continue
    for (const code of investor.countryCodes) codes.add(code)
  }
  return [...codes].sort()
}
