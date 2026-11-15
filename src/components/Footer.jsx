import { trip } from '../data/trip.js'

export function Footer() {
  return (
    <footer className="hairline">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div>
          <div className="font-display text-2xl text-ink">Oʻahu 2026</div>
          <div className="mt-1 text-sm text-smoke">Dec 9 — Dec 13 · {trip.travelers.join(' & ')}</div>
        </div>
        <div className="text-xs text-smoke max-w-md">
          Working itinerary. All times are Hawaiʻi time (HST). Items marked booked are confirmed; pending items still need a reservation.
        </div>
      </div>
    </footer>
  )
}
