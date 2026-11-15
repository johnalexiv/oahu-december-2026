// Activity `icon` maps to a Lucide component in components/ui.jsx.
// Options: plane, car, bed, utensils, mountain, camera, beer, flower, hotSpring,
//          clock, star, waves, landmark, gift, ticket, map, sunrise, sparkles,
//          sun, shopping, surf, iceCream

export const TRIP_START = new Date(2026, 11, 9) // Wed Dec 9 2026, local time, day n=1

// Returns the day number (1..days.length) matching today's local date, or null
// if today is outside the trip window. Compared at local-midnight granularity so
// device timezone / time-of-day don't matter — only the calendar date does.
export function getTodayDayNumber(now = new Date()) {
  const startMidnight = new Date(TRIP_START.getFullYear(), TRIP_START.getMonth(), TRIP_START.getDate())
  const todayMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const dayIndex = Math.round((todayMidnight - startMidnight) / 86400000) + 1
  return dayIndex >= 1 && dayIndex <= days.length ? dayIndex : null
}

// All times are Hawaiʻi time (HST), two hours behind Las Vegas in December.
export const days = [
  {
    n: 1, date: 'Wed · Dec 9', dow: 'Wednesday', region: 'LAS → Honolulu',
    title: 'Land HNL + Kahala sunset',
    tagline: 'Morning flight from Vegas, car pickup, check in, and the first sunset on the sand.',
    hotel: 'The Kahala Hotel & Resort',
    activities: [
      { time: '9:30a',  title: 'AS 807 · LAS → HNL', icon: 'plane', note: 'Alaska (operated by Hawaiian) · A330-200. Times on the boarding pass are local at each end; the clock goes back 2 hrs on landing.' },
      { time: '2:04p',  title: 'Land at Daniel K. Inouye (HNL)', icon: 'plane', note: 'Bags, then follow signs to the consolidated rental car facility.' },
      { time: '3:04p',  title: 'Enterprise pickup — Intermediate SUV', icon: 'car', note: 'Nissan Rogue or similar · 300 Rodgers Blvd (HNL rental car facility) · ☎ 844-913-0737 · driver: John.' },
      { time: '3:45p',  title: 'Check in at The Kahala', icon: 'bed', note: '5000 Kahala Ave · ~25 min from HNL via H-1 · Golf/Mountain-View Room · Romance Awaits package — sparkling wine + chocolate-covered strawberries are part of it.' },
      { time: '5:00p',  title: 'Kahala beach → sunset', icon: 'sun', note: 'Sunset is around 5:50p in early December. Walk the beach in front of the hotel; Diamond Head sits just to the west.' },
      { time: '7:00p',  title: 'Easy first dinner', icon: 'utensils', note: 'Keep it close and casual — tomorrow starts before 6:30a, and your body will think it\'s 2 hrs later anyway.' }
    ],
    flag: { tone: 'indigo', label: 'Book Hanauma Tue Dec 8 · 7a HST' }
  },
  {
    n: 2, date: 'Thu · Dec 10', dow: 'Thursday', region: 'Hanauma Bay → North Shore → Kailua',
    title: 'Hanauma Bay + cacao farm tour',
    tagline: 'Snorkel the reef at opening, drive the east-side coast road, a 1:00p cacao farm tour on the North Shore, then beach time in Kailua.',
    hotel: 'The Kahala Hotel & Resort',
    activities: [
      { time: '6:25a',  title: 'Leave for Hanauma Bay', icon: 'car', note: '~15 min east from the Kahala. Bring cash for the small parking fee and reef-safe sunscreen.' },
      { time: '6:45a',  title: 'Hanauma Bay Nature Preserve', icon: 'waves', note: '★★ Opens 6:45a · Wed–Sun only (closed Mon/Tue) · last entry 1:30p. Short mandatory reef video before you walk down. $25 pp nonresident. Mornings are calmest and clearest.' },
      { time: '10:00a', title: 'Coast drive: Hālona Blowhole + Makapuʻu lookout', icon: 'camera', note: 'Pull-offs along Kalanianaʻole Hwy on the way to Kailua. December is the start of humpback season — scan the horizon from Makapuʻu.' },
      { time: '11:00a', title: 'Early lunch in Kailua town', icon: 'utensils', note: 'Walkable strip around Kailua Rd and Uluniu St. Keep it quick — leave by ~11:50a.' },
      { time: '11:50a', title: 'Drive to Kamananui Cacao Orchards', icon: 'car', note: '~45–50 min from Kailua via H-3 and H-2 to the North Shore, at the base of Mount Kaʻala. Free on-site parking.' },
      { time: '1:00p',  title: 'Cacao farm tour & chocolate tasting', icon: 'gift', note: '★ Mānoa Chocolate\'s own farm · 1.5 hrs · $94 per adult · booked through FareHarbor. A slow 30+ min walk through the orchard on uneven ground, a fresh cacao fruit tasting, then a long tasting of bars and treats in the Orchard Pavilion. Wear closed-toe shoes and sunscreen; water, bug spray and umbrellas are on hand. Bars and gifts for sale after.' },
      { time: '2:30p',  title: 'Drive back to the windward side', icon: 'car', note: '~50 min back to Kailua via H-2 and H-3.' },
      { time: '3:30p',  title: 'Mānoa Chocolate tasting room', icon: 'sparkles', note: 'Optional: 333 Uluniu St, Kailua. Free short guided tastings, no reservation needed. Skip it if the farm tasting was plenty.' },
      { time: '4:00p',  title: 'Kailua Beach / Lanikai', icon: 'sun', note: 'Soft sand and the two Mokulua islets offshore. Lanikai has no public lot — park in Kailua Beach Park and walk.' },
      { time: '6:30p',  title: 'Dinner', icon: 'utensils', note: 'Kailua → Kahala is ~25 min over the Pali Hwy and H-1.' }
    ],
    flag: { tone: 'ember', label: '★★ Hanauma 6:45a open' }
  },
  {
    n: 3, date: 'Fri · Dec 11', dow: 'Friday', region: 'Kualoa → North Shore',
    title: 'UTV Raptor + North Shore day',
    tagline: 'Off-road through Kualoa\'s valleys, then farm café, shrimp, shave ice and Pipeline in contest season.',
    hotel: 'The Kahala Hotel & Resort',
    activities: [
      { time: '7:15a',  title: 'Drive to Kualoa Ranch', icon: 'car', note: '~45 min from the Kahala via H-3. Check the WSL app for the Pipe Masters call (made early each morning) on the way.' },
      { time: '8:15a',  title: 'Check in at Kualoa ticket office', icon: 'ticket', note: 'Check-in closes 45 min before tour time — miss it and there\'s no refund. Driver needs to be 21+ with photo ID matching the booking.' },
      { time: '9:00a',  title: 'Kualoa UTV Raptor Tour', icon: 'mountain', note: '★★ 2 hrs · you drive, a guide leads · ~$195 pp · movie sites in Kaʻaʻawa Valley. Wear clothes you don\'t mind getting dusty; a buff/bandana helps.' },
      { time: '11:45a', title: 'Kahuku Farms café', icon: 'flower', note: '★ Farm-to-table café + farm-made jams, lilikoʻi butter and body care to take home · 11a–4p, closed Tue/Wed. Açaí bowl and grilled banana bread are the classics. Optional wagon tour (Fri–Sun) — book ahead.' },
      { time: '1:00p',  title: 'Giovanni\'s Shrimp Truck (Kahuku)', icon: 'utensils', note: 'The original graffiti truck, a few minutes from Kahuku Farms. Split a scampi plate — there\'s more eating ahead.' },
      { time: '1:45p',  title: 'Kula Shave Ice North Shore', icon: 'iceCream', note: 'Now at The Farmstand at Kuilima near Turtle Bay (57-146 Kam Hwy, Kahuku), not Haleʻiwa. Organic fresh-fruit syrups · open Fri–Sun midday to ~5p — check @kulashaveicens before going.' },
      { time: '2:30p',  title: 'Pipe Masters at Banzai Pipeline', icon: 'surf', note: '★★ WSL Championship Tour finale · holding period Dec 8–20 · runs only on days with good surf. Watch from the sand at ʻEhukai Beach Park. Parking along Kam Hwy fills fast on contest days. If it\'s off today, the waves still pull big crowds — Waimea Bay and Sunset Beach are minutes away.' },
      { time: '5:30p',  title: 'Sunset at Sunset Beach', icon: 'sun', note: 'Exactly what it says.' },
      { time: '6:30p',  title: 'Dinner in Haleʻiwa, then drive back', icon: 'utensils', note: '~1 hr+ back to the Kahala via H-2 / H-1.' }
    ],
    flag: { tone: 'ember', label: '★★ Pipe Masters window' }
  },
  {
    n: 4, date: 'Sat · Dec 12', dow: 'Saturday', region: 'Honolulu',
    title: 'Kakaʻako market + Goofy\'s + Donki',
    tagline: 'Saturday-only farmers market, brunch at Goofy\'s, a souvenir run at Donki, then the beach cabana and a last-night dinner.',
    hotel: 'The Kahala Hotel & Resort',
    activities: [
      { time: '8:00a',  title: 'Kakaʻako Farmers Market', icon: 'flower', note: '★ Saturdays only, 8a–12p · 919 Ala Moana Blvd (Ward Village). Coffee and a few bites, buy fruit for the room. Save room for Goofy\'s.' },
      { time: '9:30a',  title: 'Kakaʻako street murals', icon: 'camera', note: 'The neighborhood around the market is covered in large-scale murals. Free, walkable.' },
      { time: '10:45a', title: 'Brunch at GOOFY Cafe & Dine', icon: 'utensils', note: '★ Surfer café, local-ingredient menu, breakfast served until 2p · 1831 Ala Moana Blvd #201 (2nd floor, near Hilton Hawaiian Village), ~5 min from Ward. Reserve on OpenTable. Fort DeRussy has parking around the corner. There\'s also a newer beachfront location at the Twin Fin Hotel (2570 Kalākaua Ave) if you want ocean views.' },
      { time: '12:30p', title: 'Don Quijote (Kaheka St)', icon: 'shopping', note: '801 Kaheka St, near Ala Moana · open 24 hrs. Snacks, omiyage, macadamia nuts and chocolate to bring home.' },
      { time: '1:30p',  title: 'Beach cabana at the Kahala', icon: 'sun', note: 'The package includes one complimentary cabana per stay — this is the afternoon to use it (reserve with the front desk on arrival). Or, if Pipe Masters is called today and wasn\'t yesterday, drive back to the North Shore (~1 hr).' },
      { time: '5:30p',  title: 'Sunset', icon: 'sun', note: 'Last one of the trip.' },
      { time: '7:00p',  title: 'Last-night dinner', icon: 'utensils', note: 'Worth booking somewhere nice ahead of time — Saturday in December gets busy.' }
    ],
    flag: { tone: 'moss', label: 'Market is Saturday only' }
  },
  {
    n: 5, date: 'Sun · Dec 13', dow: 'Sunday', region: 'Honolulu → LAS',
    title: 'Slow morning + fly home',
    tagline: 'Breakfast, pack, return the car, and the 1:10p flight back to Las Vegas.',
    hotel: 'Home',
    activities: [
      { time: '8:00a',  title: 'Breakfast + last swim', icon: 'sunrise', note: '' },
      { time: '10:15a', title: 'Check out of the Kahala', icon: 'bed', note: 'Official checkout is noon, but the car is due back at 11:10a.' },
      { time: '11:10a', title: 'Return the Enterprise SUV', icon: 'car', note: '300 Rodgers Blvd · ~25 min from the hotel · take the shuttle/walkway to the terminal.' },
      { time: '11:30a', title: 'Ag inspection + security', icon: 'clock', note: 'Checked bags to the mainland go through a USDA agriculture inspection before check-in. Fresh fruit and plants mostly can\'t come home.' },
      { time: '1:10p',  title: 'AS 876 · HNL → LAS', icon: 'plane', note: 'A330-200 · 5h 44m · lands 8:54p in Vegas.' }
    ],
    flag: { tone: 'indigo', label: '1:10p departure' }
  }
]
