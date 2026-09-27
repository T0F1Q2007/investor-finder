import { useEffect, useId, useMemo, useState } from 'react'
import { CATEGORIES, type Category } from '../catalog/categories'
import { matchCategories } from '../catalog/matchCategories'

type Props = {
  compact: boolean
  selected: Category | undefined
  onPick: (category: Category) => void
}

export function CategoryField({ compact, selected, onPick }: Props) {
  const listId = useId()
  const [query, setQuery] = useState(selected?.label ?? '')
  const [open, setOpen] = useState(!selected)

  useEffect(() => {
    if (selected) setQuery(selected.label)
  }, [selected])

  const hits = useMemo(() => matchCategories(query, CATEGORIES), [query])

  return (
    <div className={compact ? 'field field-compact' : 'field'}>
      <label htmlFor="category-query">Thesis we keep on file</label>
      <input
        id="category-query"
        name="category"
        type="search"
        autoComplete="off"
        spellCheck={false}
        placeholder="Climate, fintech, marketplace…"
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
        <ul id={listId} className="suggest" role="listbox" aria-label="Supported categories">
          {hits.length === 0 ? (
            <li className="suggest-empty">No match in the closed list. Try another word from the same trade.</li>
          ) : (
            hits.map((category) => (
              <li key={category.id} role="option" aria-selected={selected?.id === category.id}>
                <button
                  type="button"
                  onClick={() => {
                    onPick(category)
                    setQuery(category.label)
                    setOpen(false)
                  }}
                >
                  <strong>{category.label}</strong>
                  <span>{category.blurb}</span>
                </button>
              </li>
            ))
          )}
        </ul>
      ) : null}
    </div>
  )
}
