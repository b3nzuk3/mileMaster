import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { NavLink } from 'react-router-dom'
import { Star, Quote } from 'lucide-react'
import { SEOHead, usePageSEO } from '@/components/SEOHead'

const Testimonials = () => {
  const seoData = usePageSEO('testimonials')
  const [reviews, setReviews] = useState([])
  const [averageRating, setAverageRating] = useState(5)
  useEffect(() => {
    fetch('/api/google-reviews')
      .then(async (res) => {
        const contentType = res.headers.get('content-type')
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Response is not JSON')
        }
        return res.json()
      })
      .then((data) => {
        let reviews = data.reviews || []
        // Sort by time (latest first) if time property exists
        if (reviews.length && reviews[0].time) {
          reviews = reviews.slice().sort((a, b) => b.time - a.time)
        }
        setReviews(reviews)
        setAverageRating(data.rating || 5)
      })
      .catch((error) => {
        console.error('Error fetching Google reviews:', error)
        // Set empty reviews on error to prevent crashes
        setReviews([])
        setAverageRating(5)
      })
  }, [])

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? 'text-primary fill-current' : 'text-muted-foreground'
        }`}
      />
    ))
  }

  return (
    <>
      <SEOHead {...seoData} />
      <div className="min-h-screen pt-20">
        {/* Header Section */}
        <section className="py-20 bg-gradient-dark text-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">Customer Reviews — MileMaster Auto Care Nairobi</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              See what Nairobi drivers say about MileMaster Auto Care. Real Google reviews from satisfied customers across Nairobi.
            </p>
          </div>
        </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.slice(0, 9).map((review, index) => (
              <Card
                key={index}
                className="hover:shadow-automotive transition-all duration-300 hover:scale-105 relative"
              >
                <CardContent className="p-8">
                  <div className="absolute -top-3 -left-3 bg-gradient-hero p-3 rounded-full shadow-automotive">
                    <Quote className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex items-center mb-4 mt-4">
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="border-t border-border pt-4 flex flex-col gap-1">
                    <div className="flex items-center gap-2 mb-2">
                      {review.profile_photo_url ? (
                        <img
                          src={review.profile_photo_url}
                          alt={review.author_name}
                          className="w-8 h-8 rounded-full border"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-full border bg-muted flex items-center justify-center text-base font-bold text-primary">
                          {review.author_name ? review.author_name[0] : '?'}
                        </div>
                      )}
                      <h4 className="font-bold text-foreground text-lg">
                        {review.author_name}
                      </h4>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{review.relative_time_description}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">
                {averageRating.toFixed(1)}
              </div>
              <div className="flex justify-center mb-2">
                {renderStars(Math.round(averageRating))}
              </div>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Customer Return Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Join Our Satisfied Customers
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Experience the MileMaster difference for yourself. Quality service,
            honest pricing, and exceptional customer care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-8 py-4"
              asChild
            >
              <NavLink to="/booking">Schedule Service</NavLink>
            </Button>
            <Button
              variant="automotive"
              size="lg"
              className="text-lg px-8 py-4"
              asChild
            >
              <NavLink to="/contact">Contact Us</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Leave Review Section */}
      <section className="py-16 bg-gradient-dark text-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Had a Great Experience?</h3>
          <p className="text-xl opacity-90 mb-6">
            We'd love to hear about your experience with MileMaster Auto Care
          </p>
          <Button variant="hero" size="lg" asChild>
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJ-7kTwLqh7gYRgkOahFrlqMs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leave a Review
            </a>
          </Button>
        </div>
      </section>
    </div>
    </>
  )
}

export default Testimonials
