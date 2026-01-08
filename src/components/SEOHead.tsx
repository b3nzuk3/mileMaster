// SEO Head Component - Use with React Helmet or direct head manipulation
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { StructuredData, generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/seo-utils'
import { PAGE_SEO, SITE_CONFIG } from '@/lib/seo-config'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  schema?: object | object[]
}

export function SEOHead({ title, description, keywords, canonical, schema }: SEOHeadProps) {
  const location = useLocation()
  
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title
    }
    
    // Update meta tags
    const updateMetaTag = (selector: string, content: string) => {
      let element = document.querySelector(selector)
      if (!element) {
        element = document.createElement('meta')
        const attr = selector.includes('property') ? 'property' : 'name'
        const value = selector.match(/["']([^"']+)["']/)?.[1]
        if (value) {
          element.setAttribute(attr, value)
          document.head.appendChild(element)
        }
      }
      element.setAttribute('content', content)
    }
    
    if (description) {
      updateMetaTag('meta[name="description"]', description)
      updateMetaTag('meta[property="og:description"]', description)
      updateMetaTag('meta[name="twitter:description"]', description)
    }
    
    if (title) {
      updateMetaTag('meta[property="og:title"]', title)
      updateMetaTag('meta[name="twitter:title"]', title)
    }
    
    if (keywords) {
      updateMetaTag('meta[name="keywords"]', keywords)
    }
    
    // Update canonical
    const canonicalUrl = canonical ? `${SITE_CONFIG.siteUrl}${canonical}` : `${SITE_CONFIG.siteUrl}${location.pathname}`
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', canonicalUrl)
    
    // Update OG URL
    updateMetaTag('meta[property="og:url"]', canonicalUrl)
    
  }, [title, description, keywords, canonical, location.pathname])
  
  // Always include LocalBusiness schema on all pages
  const localBusinessSchema = generateLocalBusinessSchema()
  
  // Generate breadcrumb schema based on current path
  const pathSegments = location.pathname.split('/').filter(Boolean)
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    ...pathSegments.map((segment, index) => ({
      name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
      path: '/' + pathSegments.slice(0, index + 1).join('/')
    }))
  ]
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems)
  
  const allSchemas = [localBusinessSchema, breadcrumbSchema]
  if (schema) {
    allSchemas.push(...(Array.isArray(schema) ? schema : [schema]))
  }
  
  return (
    <>
      {allSchemas.map((schemaData, index) => (
        <StructuredData key={index} data={schemaData} />
      ))}
    </>
  )
}

// Hook to get page-specific SEO data
export function usePageSEO(pageName: keyof typeof PAGE_SEO) {
  const pageData = PAGE_SEO[pageName]
  return {
    title: pageData.title,
    description: pageData.description,
    keywords: pageData.keywords,
    canonical: pageData.canonical
  }
}
