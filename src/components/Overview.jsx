import { useRef } from 'react'
import { SectionKicker, useReveal } from './ui.jsx'
import { checklist } from '../data/bookings.js'

export function Overview() {
  const ref = useRef(null)
  useReveal(ref)

  const pending = checklist.filter(c => c.status === 'pending').length
  const tiles = [
    { label: 'Days',     value: '5',  sub: 'Wed Dec 9 → Sun Dec 13' },
    { label: 'Stay',     value: '4',  sub: 'Nights at The Kahala · booked' },
    { label: 'Flights',  value: '2',  sub: 'Nonstop LAS ⇄ HNL · Alaska' },
    { label: 'Car',      value: 'SUV', sub: 'Enterprise · booked' },
    { label: 'To book',  value: String(pending), sub: 'Hanauma · Kualoa · cacao · Goofy\'s · dinner' }
  ]

  const routeRows = [
    ['Wed Dec 9',  'Arrive', 'Land 2:04p · SUV · Kahala sunset'],
    ['Thu Dec 10', 'East side', 'Hanauma Bay · Hālona Blowhole · Koko Crater Arch · slow afternoon'],
    ['Fri Dec 11', 'Windward + North Shore', 'Kualoa UTV 8a · cacao farm 1p · Giovanni\'s · Matsumoto\'s'],
    ['Sat Dec 12', 'Town', 'Kakaʻako market · Goofy\'s brunch · Don Quijote · cabana'],
    ['Sun Dec 13', 'Home', 'Return car 11:10a · AS 876 at 1:10p']
  ]

  return (
    <section id="overview" ref={ref} className="hairline">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <SectionKicker label="01" title="At a glance" />

        <div className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-5 gap-px bg-stone border border-stone">
          {tiles.map(t => (
            <div key={t.label} className="reveal bg-paper px-5 py-6 md:px-7 md:py-8 flex flex-col justify-between min-h-[140px]">
              <span className="text-[0.65rem] uppercase tracking-[0.2em] text-smoke">{t.label}</span>
              <div className="mt-3">
                <div className="font-display text-3xl md:text-4xl text-ink leading-none">{t.value}</div>
                <div className="mt-2 text-xs text-smoke leading-relaxed">{t.sub}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-10 md:mt-14 grid md:grid-cols-[2fr_3fr] gap-8 md:gap-14 items-start">
          <div>
            <h3 className="font-display text-2xl md:text-3xl text-ink leading-tight">The route</h3>
            <p className="mt-4 text-smoke leading-relaxed max-w-prose">
              One base at the Kahala for all four nights. Thursday stays on the east side, starting at Hanauma Bay
              when it opens. Friday is the big loop up the windward coast to Kualoa and the North Shore, inside the
              Pipe Masters window. Saturday is the Kakaʻako market, the only morning it runs, then a slow afternoon
              before the Sunday flight home.
            </p>
          </div>
          <ol className="space-y-1 text-sm">
            {routeRows.map(([when, where, what]) => (
              <li key={when} className="flex gap-4 py-2 border-b border-stone/70 last:border-b-0">
                <span className="w-24 shrink-0 text-xs uppercase tracking-wider text-smoke">{when}</span>
                <span className="w-40 shrink-0 text-ink font-medium">{where}</span>
                <span className="text-smoke">{what}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
