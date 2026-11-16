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
    n: 2, date: 'Thu · Dec 10', dow: 'Thursday', region: 'Hanauma Bay → Kahala',
    title: 'Hanauma Bay + Koko Crater Arch',
    tagline: 'Snorkel the reef at opening, the Hālona Blowhole and an optional short hike to Koko Crater Arch, then a slow afternoon back at the Kahala.',
    hotel: 'The Kahala Hotel & Resort',
    activities: [
      { time: '6:25a',  title: 'Leave for Hanauma Bay', icon: 'car', note: '~15 min east from the Kahala. Bring cash for the small parking fee and reef-safe sunscreen.' },
      { time: '6:45a',  title: 'Hanauma Bay Nature Preserve', icon: 'waves', note: '★★ Opens 6:45a · Wed–Sun only (closed Mon/Tue) · last entry 1:30p. Short mandatory reef video before you walk down. $25 pp nonresident. Mornings are calmest and clearest.' },
      { time: '10:00a', title: 'Hālona Blowhole lookout', icon: 'camera', note: 'A few minutes past Hanauma on Kalanianaʻole Hwy. Park here; the arch trailhead is about ½ mile up the road. December is the start of humpback season — scan the horizon.' },
      { time: '10:20a', title: 'Koko Crater Arch hike (optional)', icon: 'mountain', note: '★ ~1 mi round trip up the side of Koko Crater to a natural rock arch with views down the coast. Steep and loose in places, no shade, no signs: an informal trail from small roadside turnouts. Swap into closed-toe shoes and bring water. Allow 1–1.5 hrs.' },
      { time: '12:00p', title: 'Back to the Kahala + lunch', icon: 'utensils', note: '~15 min back to the hotel. Shower, then an easy lunch on property or nearby.' },
      { time: '1:30p',  title: 'Pool + beach afternoon', icon: 'sun', note: 'Nothing scheduled. Nap, swim, read — tomorrow is the early UTV start.' },
      { time: '5:30p',  title: 'Sunset on the Kahala beach', icon: 'sun', note: 'Sunset is around 5:50p.' },
      { time: '6:30p',  title: 'Easy dinner', icon: 'utensils', note: 'Keep it close — leave for Kualoa at 6:20a tomorrow.' }
    ],
    flag: { tone: 'ember', label: '★★ Hanauma 6:45a open' }
  },
  {
    n: 3, date: 'Fri · Dec 11', dow: 'Friday', region: 'Kualoa → North Shore',
    title: 'UTV Raptor + cacao farm + Haleʻiwa',
    tagline: 'Off-road through Kualoa\'s valleys at 8, a slow drive up the coast, Mānoa Chocolate\'s cacao farm at 1, then shrimp and shave ice in Haleʻiwa.',
    hotel: 'The Kahala Hotel & Resort',
    activities: [
      { time: '6:20a',  title: 'Drive to Kualoa Ranch', icon: 'car', note: '~45 min from the Kahala via H-3, with a little buffer for traffic. Grab coffee and something to eat on the way.' },
      { time: '7:15a',  title: 'Check in at Kualoa ticket office', icon: 'ticket', note: 'Check-in closes 45 min before tour time — miss it and there\'s no refund. Driver needs to be 21+ with photo ID matching the booking.' },
      { time: '8:00a',  title: 'Kualoa UTV Raptor Tour', icon: 'mountain', note: '★★ Booked · 2 hrs · you drive, a guide leads · movie sites in Kaʻaʻawa Valley. Wear clothes you don\'t mind getting dusty; a buff/bandana helps.' },
      { time: '10:15a', title: 'Slow drive to the cacao farm', icon: 'car', note: '~1 hr, leaving about 2 hrs of slack before the tour. Take Kam Hwy up the coast past Kahuku and Sunset Beach. Optional stops: Kahuku Farms café (opens 11a) or Laniakea for sea turtles.' },
      { time: '1:00p',  title: 'Cacao farm tour & chocolate tasting', icon: 'gift', note: '★★ Booked · 1:00–2:30p · Mānoa Chocolate\'s Kamananui Cacao Orchards, 67-172 Farrington Hwy, Unit C, Waialua. Google Maps goes to the farm gate: turn in at the pair of yellow gates off the highway about a mile before it. Gate code and buzzer instructions are in the confirmation email. Sign the waiver beforehand. A slow 30+ min walk through the orchard on uneven ground, a fresh cacao fruit tasting, then a long tasting of bars and treats in the Orchard Pavilion. Closed-toe shoes and sunscreen; water, bug spray and umbrellas are on hand. Free parking.' },
      { time: '2:45p',  title: 'Giovanni\'s Shrimp Truck', icon: 'utensils', note: 'Haleʻiwa is a few minutes from the farm. Split a scampi plate — heavy on garlic.' },
      { time: '3:30p',  title: 'Matsumoto Shave Ice', icon: 'iceCream', note: 'The classic Haleʻiwa shave ice stop. Expect a line. Wander the town\'s shops after.' },
      { time: '4:30p',  title: 'Pipeline / sunset (optional)', icon: 'surf', note: 'If Pipe Masters is running and you have energy left, ʻEhukai Beach Park is ~10 min up the road. Otherwise head back before dark.' },
      { time: '6:00p',  title: 'Drive back + dinner', icon: 'car', note: '~1 hr back to the Kahala via H-2 / H-1. Dinner in Haleʻiwa first or near the hotel.' }
    ],
    flag: { tone: 'ember', label: '★★ UTV 8a · cacao 1p' }
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
