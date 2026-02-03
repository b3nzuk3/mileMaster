// SEO Utility Functions and React Helmet Components
import { BUSINESS_INFO, SITE_CONFIG } from './seo-config'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogImage?: string
  ogType?: string
  noindex?: boolean
}

// Generate LocalBusiness JSON-LD Schema
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    '@id': SITE_CONFIG.siteUrl,
    name: BUSINESS_INFO.name,
    legalName: BUSINESS_INFO.legalName,
    url: SITE_CONFIG.siteUrl,
    logo: `${SITE_CONFIG.siteUrl}/mile).png`,
    image: `${SITE_CONFIG.siteUrl}/og-image.jpg`,
    description: SITE_CONFIG.defaultDescription,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    priceRange: BUSINESS_INFO.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.streetAddress,
      addressLocality: BUSINESS_INFO.address.addressLocality,
      addressRegion: BUSINESS_INFO.address.addressRegion,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.addressCountry
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.coordinates.latitude,
      longitude: BUSINESS_INFO.coordinates.longitude
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '16:00'
      }
    ],
    areaServed: BUSINESS_INFO.areasServed.map(area => ({
      '@type': 'City',
      name: area
    })),
    hasMap: BUSINESS_INFO.mapUrl,
    sameAs: Object.values(BUSINESS_INFO.socialMedia).filter(Boolean),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '100'
    },
    founder: {
      '@type': 'Person',
      name: 'MileMaster Auto Care'
    },
    foundingDate: BUSINESS_INFO.foundingDate
  }
}

// Generate FAQ Schema
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

// Generate Service Schema
export function generateServiceSchema(service: {
  name: string
  description: string
  price?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    provider: {
      '@type': 'AutoRepair',
      name: BUSINESS_INFO.name,
      telephone: BUSINESS_INFO.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS_INFO.address.streetAddress,
        addressLocality: BUSINESS_INFO.address.addressLocality,
        addressRegion: BUSINESS_INFO.address.addressRegion,
        addressCountry: BUSINESS_INFO.address.addressCountry
      }
    },
    description: service.description,
    areaServed: [
      { '@type': 'Place', name: 'Thika Road' },
      { '@type': 'City', name: 'Ruiru' },
      { '@type': 'Place', name: 'Kasarani' },
      { '@type': 'Place', name: 'Roysambu' },
      { '@type': 'City', name: 'Nairobi' }
    ],
    ...(service.price && { offers: {
      '@type': 'Offer',
      price: service.price,
      priceCurrency: 'KES'
    }})
  }
}

// Generate BreadcrumbList Schema
export function generateBreadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.siteUrl}${item.path}`
    }))
  }
}

// React component to inject JSON-LD
export function StructuredData({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// SEO Head component for dynamic meta tags
export function useSEO({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = 'website',
  noindex = false
}: SEOProps) {
  const fullTitle = title || SITE_CONFIG.defaultTitle
  const fullDescription = description || SITE_CONFIG.defaultDescription
  const fullCanonical = canonical ? `${SITE_CONFIG.siteUrl}${canonical}` : SITE_CONFIG.siteUrl
  const fullOgImage = ogImage || `${SITE_CONFIG.siteUrl}${SITE_CONFIG.ogImage}`

  return {
    title: fullTitle,
    meta: [
      { name: 'description', content: fullDescription },
      ...(keywords ? [{ name: 'keywords', content: keywords }] : []),
      { name: 'author', content: BUSINESS_INFO.name },
      { name: 'geo.region', content: 'KE-110' },
      { name: 'geo.placename', content: 'Nairobi' },
      { name: 'geo.position', content: `${BUSINESS_INFO.coordinates.latitude};${BUSINESS_INFO.coordinates.longitude}` },
      { name: 'ICBM', content: `${BUSINESS_INFO.coordinates.latitude}, ${BUSINESS_INFO.coordinates.longitude}` },
      
      // Open Graph
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: fullDescription },
      { property: 'og:type', content: ogType },
      { property: 'og:url', content: fullCanonical },
      { property: 'og:image', content: fullOgImage },
      { property: 'og:site_name', content: SITE_CONFIG.siteName },
      { property: 'og:locale', content: 'en_KE' },
      
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: fullDescription },
      { name: 'twitter:image', content: fullOgImage },
      ...(SITE_CONFIG.twitterHandle ? [{ name: 'twitter:site', content: SITE_CONFIG.twitterHandle }] : []),
      
      // Robots
      ...(noindex ? [{ name: 'robots', content: 'noindex, nofollow' }] : []),
    ],
    link: [
      { rel: 'canonical', href: fullCanonical },
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    ]
  }
}
