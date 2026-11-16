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

// Photos for the stay card and each day. The Commons ones are credited in the
// footer via photoCredits; the rest were supplied for this site.
export const photos = {
  kahalaHotel: `${base}images/photos/kahala-hotel.jpg`,
  kahalaBeach: `${base}images/photos/kahala-beach-sunset.jpg`,
  hanauma:     `${base}images/photos/hanauma-reef.jpg`,
  kualoaUtv:   `${base}images/photos/kualoa-utv.jpg`,
  waikiki:     `${base}images/photos/waikiki.jpg`,
  lasVegas:    `${base}images/photos/las-vegas.jpg`
}

export const dayImages = {
  1: photos.kahalaBeach,
  2: photos.hanauma,
  3: photos.kualoaUtv,
  4: photos.waikiki,
  5: photos.lasVegas
}

export const photoCredits = [
  { subject: 'The Kahala Hotel & Resort', author: 'Studio Sarah Lou', license: 'CC BY 2.0', url: 'https://commons.wikimedia.org/wiki/File:Kahala_Hotel_%26_Resort.jpg' },
  { subject: 'Kahala beach at sunset', author: 'Lahaina', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:The_Kahala_Hotel_%26_Resort_Oahu_Privete_Beach.JPG' }
]
