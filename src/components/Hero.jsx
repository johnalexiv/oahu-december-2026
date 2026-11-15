import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { trip } from '../data/trip.js'
import { heroPhoto } from '../data/images.js'

export function Hero() {
  const titleRef = useRef(null)

  const rootRef = useRef(null)

  // fromTo with explicit end values + context.revert() on cleanup, so React
  // StrictMode's double-run in dev can't leave text stuck at partial opacity.
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced || !rootRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-line', { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.12, ease: 'power4.out', delay: 0.2 })
      gsap.fromTo('.hero-meta', { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 1.0, ease: 'power3.out' })
      gsap.fromTo('.hero-img', { scale: 1.08 }, { scale: 1, duration: 2.4, ease: 'power3.out' })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="top" ref={rootRef} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroPhoto.src}
          srcSet={heroPhoto.srcSet}
          sizes="100vw"
          alt={heroPhoto.alt}
          fetchpriority="high"
          onError={e => { e.currentTarget.onerror = null; e.currentTarget.removeAttribute('srcset'); e.currentTarget.src = heroPhoto.fallback }}
          className="hero-img w-full h-full object-cover object-[60%_center]"
        />
        {/* Readability scrims: overall dim, a stronger left-side wash behind the headline, and a dark top/bottom for the meta rows */}
        <div className="absolute inset-0 bg-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/50 to-ink/0 md:via-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/0 to-ink/80" />
      </div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-10 py-20 flex flex-col justify-between [text-shadow:0_1px_3px_rgb(0_0_0/0.35)]">
        <div className="flex items-center justify-between text-paper text-xs tracking-[0.18em] uppercase">
          <span>{trip.dates}</span>
          <span className="hidden md:inline">{trip.travelers.join(' + ')}</span>
        </div>

        <div>
          <div ref={titleRef} className="font-display text-paper leading-[0.92] tracking-tight [text-shadow:0_2px_18px_rgb(0_0_0/0.45)]">
            <div className="overflow-hidden">
              <div className="hero-line text-[clamp(1.6rem,4.5vw,3rem)] font-light italic">Aloha from</div>
            </div>
            <div className="overflow-hidden mt-1 md:mt-2">
              <div className="hero-line text-[clamp(3rem,9vw,6.5rem)] font-semibold">Oʻahu</div>
            </div>
            <div className="overflow-hidden">
              <div className="hero-line text-[clamp(3rem,9vw,6.5rem)] font-semibold">December 2026</div>
            </div>
          </div>

          <p className="hero-meta mt-6 md:mt-8 max-w-xl text-paper font-medium text-base md:text-lg leading-relaxed">
            {trip.tagline}
          </p>

          <div className="hero-meta mt-8 flex flex-wrap gap-6 text-paper text-sm">
            <HeroStat label="Nights" value={String(trip.nights)} />
            <Divider />
            <HeroStat label="Base" value="The Kahala" />
            <Divider />
            <HeroStat label="Flights" value="AS 807 · AS 876" />
            <Divider />
            <HeroStat label="Travelers" value={trip.travelers.join(' · ')} />
          </div>
        </div>

        <a href="#overview" className="hero-meta inline-flex items-center gap-2 text-paper text-xs tracking-widest uppercase self-start hover:text-paper/80 transition-colors">
          <span className="w-8 h-px bg-paper/70" />
          Scroll
        </a>
      </div>
    </section>
  )
}

function HeroStat({ label, value }) {
  return (
    <div className="flex flex-col">
      <span className="text-[0.65rem] tracking-[0.2em] uppercase text-paper/80">{label}</span>
      <span className="text-base md:text-lg text-paper font-medium">{value}</span>
    </div>
  )
}

function Divider() {
  return <span className="hidden md:block w-px h-8 bg-paper/40 self-center" />
}
