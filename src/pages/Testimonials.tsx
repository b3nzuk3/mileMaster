import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { NavLink } from 'react-router-dom'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Amina Mwangi',
      location: 'Westlands',
      rating: 5,
      text: 'Absolutely incredible service! The team at MileMaster diagnosed my transmission issue quickly and fixed it for a fraction of what the dealership quoted. Honest, reliable, and skilled technicians.',
      service: 'Transmission Repair',
    },
    {
      name: 'Brian Otieno',
      location: 'Kasarani',
      rating: 5,
      text: "I've been bringing my fleet of work trucks here for 3 years. Mike and his team always deliver quality work on time and within budget. They've saved my business thousands in downtime.",
      service: 'Fleet Maintenance',
    },
    {
      name: 'Faith Wanjiru',
      location: 'Lavington',
      rating: 5,
      text: "As a single mom, I need a mechanic I can trust. MileMaster explains everything clearly, provides fair pricing, and never tries to sell me services I don't need. Highly recommend!",
      service: 'General Maintenance',
    },
    {
      name: 'Robert Njoroge',
      location: 'Runda',
      rating: 5,
      text: 'Brought my BMW here after a bad experience elsewhere. These guys know European cars inside and out. Professional service, clean facility, and competitive pricing.',
      service: 'European Vehicle Service',
    },
    {
      name: 'Maria Achieng',
      location: 'South C',
      rating: 5,
      text: 'Emergency brake failure on a Friday evening - MileMaster stayed late to get my car safe and roadworthy. Above and beyond customer service when I needed it most.',
      service: 'Emergency Brake Repair',
    },
    {
      name: 'David Kamau',
      location: 'Parklands',
      rating: 5,
      text: "I'm a car enthusiast and very picky about who works on my vehicles. MileMaster treats every car like it's their own. Attention to detail and craftsmanship is outstanding.",
      service: 'Performance Tuning',
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
                    {renderStars(testimonial.rating)}
                  </div>

                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  <div className="border-t border-border pt-4">
                    <h4 className="font-bold text-foreground text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {testimonial.location}
                    </p>
                    <p className="text-sm text-primary font-semibold">
                      {testimonial.service}
                    </p>
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
