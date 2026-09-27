import { useCallback, useEffect, useMemo, useState } from 'react'
import { CATEGORIES, type Category } from './catalog/categories'
import { filterInvestors } from './catalog/filterInvestors'
import { INVESTORS } from './catalog/investors'
import { categoryFromQuery, readDeskQuery, writeDeskQuery, type DeskQuery } from './desk/query'
import type { CountryOption } from './geo/countries'
import { detectCountry, type DetectedCountry } from './geo/detectCountry'
import { CategoryField } from './ui/CategoryField'
import { CountryField } from './ui/CountryField'
import { InvestorFile } from './ui/InvestorFile'

function prefersNight(): boolean {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function App() {
  const initial = readDeskQuery(window.location.search)
  const [query, setQuery] = useState<DeskQuery>(initial)
  const [night, setNight] = useState(prefersNight)
  const [reducedMotion, setReducedMotion] = useState(prefersReducedMotion)
  const [axis, setAxis] = useState<'x' | 'y'>('y')
  const [sitting, setSitting] = useState<DetectedCountry | null>(null)
  const [sittingStatus, setSittingStatus] = useState<'loading' | 'ready' | 'error'>('loading')

  const category = categoryFromQuery(query, CATEGORIES)
  const collapsed = Boolean(query.categoryId && query.countryCode)

  const lookupSitting = useCallback(() => {
    setSittingStatus('loading')
    detectCountry()
      .then((result) => {
        setSitting(result)
        setSittingStatus('ready')
      })
      .catch(() => {
        setSitting(null)
        setSittingStatus('error')
      })
  }, [])

  useEffect(() => {
    lookupSitting()
  }, [lookupSitting])

  useEffect(() => {
    document.documentElement.dataset.theme = night ? 'night' : 'lamp'
    document.documentElement.style.colorScheme = night ? 'dark' : 'light'
  }, [night])

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onMotion = () => setReducedMotion(motion.matches)
    motion.addEventListener('change', onMotion)
    return () => motion.removeEventListener('change', onMotion)
  }, [])

  useEffect(() => {
    const next = writeDeskQuery(query)
    const url = `${window.location.pathname}${next}`
    window.history.replaceState(null, '', url)
  }, [query])

  const plates = useMemo(() => {
    if (!query.categoryId || !query.countryCode) return []
    return filterInvestors(INVESTORS, query.categoryId, query.countryCode)
  }, [query.categoryId, query.countryCode])

  const plateIndex = Math.min(query.plateIndex, Math.max(plates.length - 1, 0))

  const pickCategory = (next: Category) => {
    setQuery({ categoryId: next.id, countryCode: null, plateIndex: 0 })
  }

  const pickCountry = (next: CountryOption) => {
    setQuery((current) => ({
      categoryId: current.categoryId,
      countryCode: next.code,
      plateIndex: 0,
    }))
  }

  const setPlate = useCallback((index: number) => {
    setQuery((current) =>
      current.plateIndex === index ? current : { ...current, plateIndex: index },
    )
  }, [])

  useEffect(() => {
    if (!collapsed || plates.length === 0) return

    const onWheel = (event: WheelEvent) => {
      const horizontal = Math.abs(event.deltaX) > Math.abs(event.deltaY)
      if (horizontal) setAxis('x')
      else if (Math.abs(event.deltaY) > 8) setAxis('y')
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        event.preventDefault()
        setAxis(event.key === 'ArrowRight' ? 'x' : 'y')
        setQuery((current) => ({
          ...current,
          plateIndex: Math.min(current.plateIndex + 1, plates.length - 1),
        }))
      }
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault()
        setAxis(event.key === 'ArrowLeft' ? 'x' : 'y')
        setQuery((current) => ({
          ...current,
          plateIndex: Math.max(current.plateIndex - 1, 0),
        }))
      }
    }

    window.addEventListener('wheel', onWheel, { passive: true })
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKey)
    }
  }, [collapsed, plates.length])

  return (
    <>
      <a className="skip" href="#desk">
        Skip to desk
      </a>
      <header className={collapsed ? 'mast compact' : 'mast'}>
        <p className="mark" translate="no">
          Investor Desk
        </p>
        <button
          type="button"
          className="theme"
          aria-pressed={night}
          onClick={() => setNight((value) => !value)}
        >
          {night ? 'Lamp paper' : 'Night desk'}
        </button>
      </header>
      <main id="desk" className={collapsed ? 'desk collapsed' : 'desk'}>
        {!collapsed ? (
          <div className="blotter">
            <h1>Find the person who writes the check</h1>
            <p className="lede">
              Type until a supported thesis appears. This bar does not invent new markets. It only
              shows the ten files this desk keeps.
            </p>
          </div>
        ) : null}

        <div className={collapsed ? 'rails collapsed' : 'rails'}>
          <CategoryField compact={collapsed} selected={category} onPick={pickCategory} />
          {query.categoryId ? (
            <CountryField
              compact={collapsed}
              selectedCode={query.countryCode}
              sitting={sitting}
              sittingStatus={sittingStatus}
              onPick={pickCountry}
              onRetrySitting={lookupSitting}
            />
          ) : null}
        </div>

        {collapsed ? (
          plates.length === 0 ? (
            <InvestorFile
              investors={[]}
              index={0}
              axis={axis}
              night={night}
              reducedMotion={reducedMotion}
              onIndex={setPlate}
            />
          ) : (
            <InvestorFile
              investors={plates}
              index={plateIndex}
              axis={axis}
              night={night}
              reducedMotion={reducedMotion}
              onIndex={setPlate}
            />
          )
        ) : null}
      </main>
    </>
  )
}
