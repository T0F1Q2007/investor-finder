# DESIGN.md

Owner: Tofiq (product). Agent transcribed a brief for a founder-facing investor desk. Agent-chosen style still leans toward model taste; treat this as direction for this build, not a brand bible.

Dial: ENERGY 2 / RHYTHM 3 / MOTION 2

## Identity

A term-sheet desk after hours: lamp paper, fountain-pen ink, a brass paperweight. Founders are matching a thesis to a person, not browsing a SaaS catalog. The page should feel like flipping a physical investor file, not a dashboard.

## Audience

Startup CEOs hunting people who write checks in a specific country.

## Job

1. Pick a supported category (the list is closed).
2. Pick a country, with “you are here” from IP.
3. Study one investor at a time: face plate plus file facts.

## Palette (2 cores + ink + 1 accent)

- Paper `#F2E6D4`
- Desk ink `#1A1410`
- Brass `#9A7048` (core metal, used for rules and the country pin)
- Stamp `#7A2E24` (accent: current country only)

Night desk (theme toggle): paper becomes `#1A1410`, ink becomes `#F2E6D4`, brass and stamp stay.

## Type

- Display: Fraunces (old-style serif, like a partnership memo).
- UI: Figtree (legible at form size). Reason: serif for the person, sans for the file fields.

## Layout

Left-aligned desk, not a centered SaaS hero. Search starts as a single wide field in the middle of the blotter. After country, fields collapse into a slim top rail. The remaining viewport is one investor plate: photo stage left/right depending on scroll axis, file on the other side.

Identity motif: a brass corner tick on the portrait plate, repeated on the collapsed rail.

## Motion

Scroll or arrow keys advance the file. Axis follows the gesture (horizontal vs vertical). Only the plate transforms (rotateY / translate). Honor `prefers-reduced-motion`: snap, no tween.

## Honesty

No fake quotes, no unsourced AUM or net worth figures. Portraits are file-card initials unless a licensed photo is added later.
