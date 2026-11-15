const base = import.meta.env.BASE_URL

// Illustrated placeholders. To use real photos, drop files into public/images
// and point these entries at them (e.g. `${base}images/hanauma-bay.jpg`).
export const images = {
  waikiki:    `${base}images/waikiki-sunset.svg`,
  hanauma:    `${base}images/hanauma-bay.svg`,
  kailua:     `${base}images/kailua.svg`,
  kualoa:     `${base}images/kualoa.svg`,
  northShore: `${base}images/north-shore.svg`,
  honolulu:   `${base}images/honolulu.svg`,
  departure:  `${base}images/departure.svg`
}

// Hero photo: aerial of Kualoa / Kaʻaʻawa Valley on the windward coast.
export const heroPhoto = {
  src: `${base}images/oahu-hero.jpg`,
  srcSet: `${base}images/oahu-hero-1280.jpg 1280w, ${base}images/oahu-hero.jpg 1920w`,
  alt: 'Aerial view of green ridges, valley and turquoise reef on Oʻahu\'s windward coast',
  fallback: images.waikiki
}

export const dayImages = {
  1: images.waikiki,
  2: images.hanauma,
  3: images.northShore,
  4: images.honolulu,
  5: images.departure
}
