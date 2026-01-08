// SEO Configuration for MileMaster Auto Care - Nairobi Local SEO
export const BUSINESS_INFO = {
  name: 'MileMaster Auto Care',
  legalName: 'MILEMASTER AUTO CARE LTD',
  phone: '+254 721 421996',
  email: 'milemasterac@gmail.com',
  address: {
    streetAddress: 'Thika Road',
    addressLocality: 'Nairobi',
    addressRegion: 'Nairobi County',
    postalCode: '00100',
    addressCountry: 'KE'
  },
  fullAddress: 'MILEMASTER AUTO CARE LTD, Thika Rd, Nairobi',
  mapUrl: 'https://www.google.com/maps/place/MILEMASTER+AUTO+CARE+LTD,+Thika+Rd,+Nairobi',
  placeId: 'ChIJ-7kTwLqh7gYRgkOahFrlqMs',
  coordinates: {
    latitude: -1.2194, // Approximate - update with actual coordinates
    longitude: 36.8919
  },
  hours: {
    monday: '07:00-18:00',
    tuesday: '07:00-18:00',
    wednesday: '07:00-18:00',
    thursday: '07:00-18:00',
    friday: '07:00-18:00',
    saturday: '08:00-16:00',
    sunday: 'Closed'
  },
  socialMedia: {
    facebook: '', // Add if available
    instagram: '', // Add if available
    twitter: '', // Add if available
  },
  priceRange: '$$',
  foundingDate: '2022', // Update with actual year
  areasServed: [
    'Nairobi',
    'Westlands',
    'Karen',
    'Kilimani',
    'Parklands',
    'CBD',
    'Eastlands',
    'Thika Road'
  ]
}

export const SITE_CONFIG = {
  siteUrl: 'https://www.milemasterautocare.com',
  siteName: 'MileMaster Auto Care',
  defaultTitle: 'MileMaster Auto Care — Trusted Garage in Nairobi',
  defaultDescription: 'Professional car repair, servicing & diagnostics in Nairobi. Fast, reliable garage near you — MileMaster Auto Care. Book service or call +254 721 421996.',
  ogImage: '/og-image.jpg', // Create this image
  twitterHandle: '', // Add if available
}

export const LOCAL_KEYWORDS = {
  primary: [
    'garage in Nairobi',
    'car repair Nairobi',
    'auto service Nairobi',
    'mechanic Nairobi',
    'car servicing Nairobi'
  ],
  secondary: [
    'brake repair Nairobi',
    'auto electrician Nairobi',
    'car diagnostics Nairobi',
    'tyre alignment Nairobi',
    'oil change Nairobi',
    'engine repair Nairobi',
    'transmission repair Nairobi',
    'auto body repair Nairobi',
    'mobile mechanic Nairobi'
  ],
  neighborhoods: [
    'Westlands garage',
    'Karen car repair',
    'Kilimani mechanic',
    'Parklands auto service',
    'CBD car service',
    'Thika Road garage'
  ]
}

// Page-specific SEO metadata
export const PAGE_SEO = {
  home: {
    title: 'MileMaster Auto Care — Trusted Garage in Nairobi',
    description: 'Professional car repair, servicing & diagnostics in Nairobi. Fast, reliable garage near you — MileMaster Auto Care. Book service or call +254 721 421996.',
    keywords: 'garage in Nairobi, car repair Nairobi, auto service Nairobi, mechanic Nairobi, car servicing Nairobi',
    canonical: '/'
  },
  services: {
    title: 'Car Repair Services in Nairobi — MileMaster Auto Care',
    description: 'Complete auto repair services in Nairobi: brake repair, engine diagnostics, oil change, tyre alignment & more. Expert mechanics, quality parts, fair prices.',
    keywords: 'car repair services Nairobi, auto repair Nairobi, brake repair, engine repair, oil change Nairobi',
    canonical: '/services'
  },
  about: {
    title: 'About MileMaster Auto Care — Your Trusted Nairobi Garage',
    description: 'Learn about MileMaster Auto Care, Nairobi\'s trusted auto repair shop. Expert mechanics, quality service, and customer satisfaction since 2022.',
    keywords: 'about MileMaster, Nairobi garage, trusted mechanic Nairobi',
    canonical: '/about'
  },
  booking: {
    title: 'Book Car Service in Nairobi — MileMaster Auto Care',
    description: 'Book your car service appointment online at MileMaster Auto Care. Quick, easy scheduling for all automotive repairs in Nairobi. Call +254 721 421996.',
    keywords: 'book car service Nairobi, car appointment Nairobi, schedule auto repair',
    canonical: '/booking'
  },
  testimonials: {
    title: 'Customer Reviews — MileMaster Auto Care Nairobi',
    description: 'Read genuine customer reviews of MileMaster Auto Care. See why Nairobi drivers trust us for car repair, servicing, and maintenance.',
    keywords: 'car repair reviews Nairobi, garage testimonials, customer reviews',
    canonical: '/testimonials'
  },
  contact: {
    title: 'Contact MileMaster Auto Care — Garage in Nairobi',
    description: 'Contact MileMaster Auto Care: Thika Rd, Nairobi. Call +254 721 421996 or email milemasterac@gmail.com. Open Mon-Fri 7am-6pm, Sat 8am-4pm.',
    keywords: 'contact garage Nairobi, MileMaster contact, car repair Thika Road',
    canonical: '/contact'
  }
}
