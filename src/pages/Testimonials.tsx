import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { NavLink } from 'react-router-dom'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Edith Nyambura',
      reviewsCount: 2,
      time: '5 months ago',
      text: 'Great service and a place you can rely on if stuck anywhere on the road for them to come to your rescue. I highly recommend them for your Auto clinic services.',
      hearts: 1,
    },
    {
      name: 'Michael D. Opembe',
      reviewsCount: 3,
      time: '2 months ago',
      text: 'Great workmanship from the team at Milemaster Auto care Ltd 👏🏽 👌🏽',
      hearts: 0,
    },
    {
      name: 'Joseph Muendo',
      reviewsCount: 4,
      time: '4 months ago',
      text: 'Best in town so far',
      hearts: 0,
    },
    {
      name: 'Eckra Wangui',
      reviewsCount: 9,
      time: '5 months ago',
      text: 'They are the best at what they do!',
      hearts: 1,
    },
    {
      name: 'Whitney Naliaka',
      reviewsCount: 3,
      time: '5 months ago',
      text: 'Best services ever😊',
      hearts: 2,
    },
    {
      name: 'Doreen murungi',
      reviewsCount: 1,
      time: '5 months ago',
      text: 'Perfect experience good service..',
      hearts: 2,
    },
    {
      name: 'JOSEPH GICHARU',
      reviewsCount: 1,
      time: 'Edited a day ago',
      text: "It's a 1 stop shop",
      hearts: 2,
    },
    {
      name: 'Rose Gicharu',
      reviewsCount: 1,
      time: '5 months ago',
      text: 'Very clean work',
      hearts: 0,
    },
  ]

  const renderStars = (rating: number) => {
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
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-dark text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Customer Testimonials</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our valued customers
            have to say about their experience with MileMaster Auto Care.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-automotive transition-all duration-300 hover:scale-105 relative"
              >
                <CardContent className="p-8">
                  <div className="absolute -top-3 -left-3 bg-gradient-hero p-3 rounded-full shadow-automotive">
                    <Quote className="h-6 w-6 text-primary-foreground" />
                  </div>

                  <div className="flex items-center mb-4 mt-4">
                    {renderStars(5)}
                  </div>

                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  <div className="border-t border-border pt-4 flex flex-col gap-1">
                    <h4 className="font-bold text-foreground text-lg">
                      {testimonial.name}
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>
                        {testimonial.reviewsCount} review
                        {testimonial.reviewsCount > 1 ? 's' : ''}
                      </span>
                      <span>·</span>
                      <span>{testimonial.time}</span>
                      {testimonial.hearts > 0 && (
                        <span className="flex items-center gap-1 ml-2 text-red-500">
                          {'❤️'.repeat(testimonial.hearts)}
                        </span>
                      )}
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
              <div className="text-4xl font-bold text-primary mb-2">5.0</div>
              <div className="flex justify-center mb-2">{renderStars(5)}</div>
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
          <Button variant="hero" size="lg">
            Leave a Review
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Testimonials
