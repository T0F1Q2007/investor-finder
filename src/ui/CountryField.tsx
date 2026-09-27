import { useEffect, useId, useMemo, useState } from 'react'
import { COUNTRIES, matchCountries, type CountryOption } from '../geo/countries'
import type { DetectedCountry } from '../geo/detectCountry'

type Props = {
  compact: boolean
  selectedCode: string | null
  sitting: DetectedCountry | null
  sittingStatus: 'loading' | 'ready' | 'error'
  onPick: (country: CountryOption) => void
  onRetrySitting: () => void
}

export function CountryField({
  compact,
  selectedCode,
  sitting,
  sittingStatus,
  onPick,
  onRetrySitting,
}: Props) {
  const listId = useId()
  const selected = COUNTRIES.find((country) => country.code === selectedCode)
  const [query, setQuery] = useState(selected?.name ?? '')
  const [open, setOpen] = useState(!selected)

  useEffect(() => {
    if (selected) setQuery(selected.name)
  }, [selected])

  const hits = useMemo(() => matchCountries(query, COUNTRIES), [query])

  return (
    <div className={compact ? 'country-split compact' : 'country-split'}>
      <div className="field">
        <label htmlFor="country-query">Whose checks, in which country?</label>
        <input
          id="country-query"
          name="country"
          type="search"
          autoComplete="off"
          spellCheck={false}
          placeholder="Germany, India, Japan…"
          value={query}
          aria-controls={listId}
          aria-expanded={open}
          aria-autocomplete="list"
          onChange={(event) => {
            setQuery(event.target.value)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
        />
        {open ? (
          <ul id={listId} className="suggest" role="listbox" aria-label="Countries on file">
            {hits.length === 0 ? (
              <li className="suggest-empty">That country is not in this desk yet.</li>
            ) : (
              hits.map((country) => (
                <li key={country.code} role="option" aria-selected={selectedCode === country.code}>
                  <button
                    type="button"
                    onClick={() => {
                      onPick(country)
                      setQuery(country.name)
                      setOpen(false)
                    }}
                  >
                    <strong>{country.name}</strong>
                    <span>{country.code}</span>
                  </button>
                </li>
              ))
            )}
          </ul>
        ) : null}
      </div>
      <aside className="sitting" aria-live="polite">
        <p className="sitting-label">You are sitting in</p>
        {sittingStatus === 'loading' ? <p>Reading your network location…</p> : null}
        {sittingStatus === 'error' ? (
          <p>
            IP lookup failed.{' '}
            <button type="button" className="text-action" onClick={onRetrySitting}>
              Try the lookup again
            </button>
          </p>
        ) : null}
        {sittingStatus === 'ready' && sitting ? (
          <p>
            <strong>{sitting.name}</strong>
            <span> {sitting.code}</span>
          </p>
        ) : null}
        {sittingStatus === 'ready' && !sitting ? <p>No country from this IP.</p> : null}
      </aside>
    </div>
  )
}
