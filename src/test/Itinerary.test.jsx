import { render, within } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { Itinerary } from '../components/Itinerary.jsx'

// The Itinerary auto-opens and scrolls to the day matching the current date when
// today falls inside the trip window (Dec 9–13, 2026), and does nothing otherwise.
describe('Itinerary auto-scroll to today', () => {
  let scrollSpy

  beforeEach(() => {
    vi.useFakeTimers()
    scrollSpy = vi.fn()
    Element.prototype.scrollIntoView = scrollSpy
  })

  afterEach(() => {
    vi.useRealTimers()
    delete Element.prototype.scrollIntoView
  })

  function ariaOf(container, n) {
    const card = container.querySelector(`#day-${n}`)
    return within(card).getByRole('button').getAttribute('aria-expanded')
  }

  it('opens and scrolls to today when on-trip (Dec 11 → Day 3)', () => {
    vi.setSystemTime(new Date(2026, 11, 11))
    const { container } = render(<Itinerary />)

    expect(ariaOf(container, 3)).toBe('true')
    expect(ariaOf(container, 1)).toBe('false')

    vi.advanceTimersByTime(300) // let the scheduled scroll callbacks fire
    expect(scrollSpy).toHaveBeenCalled()
  })

  it('stays on Day 1 with no scroll when off-trip (Dec 20)', () => {
    vi.setSystemTime(new Date(2026, 11, 20))
    const { container } = render(<Itinerary />)

    expect(ariaOf(container, 1)).toBe('true')
    expect(ariaOf(container, 3)).toBe('false')

    vi.advanceTimersByTime(50)
    expect(scrollSpy).not.toHaveBeenCalled()
  })
})
