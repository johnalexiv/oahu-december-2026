import { describe, it, expect } from 'vitest'
import { images, dayImages } from '../data/images.js'
import { days, getTodayDayNumber } from '../data/days.js'
import { accommodations } from '../data/accommodations.js'
import { trip } from '../data/trip.js'

describe('data integrity', () => {
  const imageValues = new Set(Object.values(images))

  it('every dayImages value maps to a defined images entry', () => {
    for (const [day, url] of Object.entries(dayImages)) {
      expect(typeof url, `dayImages[${day}]`).toBe('string')
      expect(imageValues.has(url), `dayImages[${day}] = ${url}`).toBe(true)
    }
  })

  it('every accommodation has a resolvable image', () => {
    for (const a of accommodations) {
      expect(typeof a.image, `${a.id}.image`).toBe('string')
      expect(imageValues.has(a.image), `${a.id}.image = ${a.image}`).toBe(true)
    }
  })

  it('dayImages covers every day in days[]', () => {
    for (const d of days) {
      expect(dayImages[d.n], `dayImages[${d.n}]`).toBeDefined()
    }
  })

  it('trip.js exposes fields consumed by Hero/Overview', () => {
    expect(typeof trip.nights).toBe('number')
    expect(typeof trip.dates).toBe('string')
    expect(Array.isArray(trip.travelers)).toBe(true)
    expect(typeof trip.tagline).toBe('string')
  })

  it('days[] has 5 entries', () => {
    expect(days).toHaveLength(5)
  })

  it('accommodations[] has 1 entry', () => {
    expect(accommodations).toHaveLength(1)
  })
})

describe('getTodayDayNumber', () => {
  it('maps in-trip dates to their day number', () => {
    expect(getTodayDayNumber(new Date(2026, 11, 9))).toBe(1)
    expect(getTodayDayNumber(new Date(2026, 11, 11))).toBe(3)
    expect(getTodayDayNumber(new Date(2026, 11, 13))).toBe(5)
  })

  it('ignores time-of-day, matching on calendar date', () => {
    expect(getTodayDayNumber(new Date(2026, 11, 11, 23, 59))).toBe(3)
  })

  it('returns null outside the trip window', () => {
    expect(getTodayDayNumber(new Date(2026, 11, 8))).toBeNull()
    expect(getTodayDayNumber(new Date(2026, 11, 14))).toBeNull()
  })
})
