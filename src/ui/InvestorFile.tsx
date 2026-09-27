import { useEffect, useRef } from 'react'
import type { Investor, SourcedFact } from '../catalog/investors'
import { COUNTRIES, countryName } from '../geo/countries'
import { PortraitStage } from './PortraitStage'

type Props = {
  investors: Investor[]
  index: number
  axis: 'x' | 'y'
  night: boolean
  reducedMotion: boolean
  onIndex: (index: number) => void
}

function FactList({ title, facts }: { title: string; facts: SourcedFact[] }) {
  if (facts.length === 0) {
    return (
      <section>
        <h3>{title}</h3>
        <p className="empty-line">Nothing on this file yet.</p>
      </section>
    )
  }

  return (
    <section>
      <h3>{title}</h3>
      <ul>
        {facts.map((fact) => (
          <li key={fact.text}>
            {fact.text}{' '}
            <a href={fact.sourceUrl} target="_blank" rel="noreferrer">
              {fact.sourceLabel}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function InvestorFile({ investors, index, axis, night, reducedMotion, onIndex }: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const platesRef = useRef<Array<HTMLElement | null>>([])

  useEffect(() => {
    platesRef.current[index]?.scrollIntoView({
      behavior: reducedMotion ? 'auto' : 'smooth',
      inline: axis === 'x' ? 'start' : 'nearest',
      block: axis === 'y' ? 'start' : 'nearest',
    })
  }, [index, axis, reducedMotion])

  useEffect(() => {
    const nodes = platesRef.current.filter((node): node is HTMLElement => Boolean(node))
    if (nodes.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting && entry.intersectionRatio > 0.55)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (!visible) return
        const next = Number((visible.target as HTMLElement).dataset.index)
        if (Number.isFinite(next)) onIndex(next)
      },
      { root: scrollerRef.current, threshold: [0.55, 0.75] },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [investors, onIndex])

  if (investors.length === 0) {
    return (
      <div className="empty-file">
        <h2>No plates in this drawer</h2>
        <p>The catalog has no person for that thesis in that country. Pick another country from the rail.</p>
      </div>
    )
  }

  return (
    <div className={`deck deck-${axis}`} ref={scrollerRef} tabIndex={0} aria-label="Investor plates">
      {investors.map((investor, plateIndex) => {
        const photoLeft = axis === 'x'
        return (
          <article
            key={investor.id}
            className={photoLeft ? 'file-layout photo-start plate' : 'file-layout photo-end plate'}
            data-index={plateIndex}
            ref={(node) => {
              platesRef.current[plateIndex] = node
            }}
          >
            {plateIndex === index ? (
              <PortraitStage
                initials={investor.initials}
                name={investor.name}
                axis={axis}
                night={night}
                reducedMotion={reducedMotion}
              />
            ) : (
              <div
                className="portrait-stage portrait-fallback"
                role="img"
                aria-label={`File plate for ${investor.name}`}
              >
                <span>{investor.initials}</span>
              </div>
            )}
            <div className="file-copy">
              <p className="file-kicker">
                Plate {plateIndex + 1} of {investors.length}
              </p>
              <h2>{investor.name}</h2>
              <p className="role">{investor.role}</p>
              <p className="countries">
                On file in {investor.countryCodes.map((code) => countryName(code, COUNTRIES)).join(', ')}
              </p>
              <p className="note">{investor.fileNote}</p>
              <FactList title="Firms" facts={investor.firms} />
              <FactList title="Companies" facts={investor.companies} />
              <FactList title="Invested in" facts={investor.investments} />
              <FactList title="Projects" facts={investor.projects} />
              <section>
                <h3>Worth</h3>
                {investor.worth ? (
                  <p>
                    {investor.worth.text}{' '}
                    <a href={investor.worth.sourceUrl} target="_blank" rel="noreferrer">
                      {investor.worth.sourceLabel}
                    </a>
                  </p>
                ) : (
                  <p className="empty-line">No sourced net-worth figure on this file.</p>
                )}
              </section>
              <div className="pager">
                <button type="button" disabled={plateIndex === 0} onClick={() => onIndex(plateIndex - 1)}>
                  Previous plate
                </button>
                <button
                  type="button"
                  disabled={plateIndex >= investors.length - 1}
                  onClick={() => onIndex(plateIndex + 1)}
                >
                  Next plate
                </button>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}
