import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { NavLink } from 'react-router-dom'
import {
  Wrench,
  Shield,
  Clock,
  Star,
  Phone,
  MapPin,
  ArrowRight,
  Car,
  Gauge,
  Cog,
} from 'lucide-react'
import heroImage from '@/assets/hero-garage.jpg'
import { useEffect, useState, useRef } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'
import googleLogo from '@/assets/google-logo.svg' // Add a Google logo to your assets if you don't have one

const Home = () => {
  const features = [
    {
      icon: Wrench,
      title: 'Expert Technicians',
      description:
        'Certified mechanics with years of experience in automotive repair and maintenance.',
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description:
        'All our services come with comprehensive warranties for your peace of mind.',
    },
    {
      icon: Clock,
      title: 'Fast Service',
      description:
        'Quick turnaround times without compromising on quality workmanship.',
    },
  ]

  const services = [
    {
      icon: Car,
      name: 'Engine Diagnostics',
      description: 'Advanced computer diagnostics',
    },
    {
      icon: Gauge,
      name: 'Brake Service',
      description: 'Complete brake system repair',
    },
    {
      icon: Cog,
      name: 'Oil Change',
      description: 'Full synthetic oil service',
    },
  ]

  const [reviews, setReviews] = useState([])
  const [averageRating, setAverageRating] = useState(5)
  const [currentIndex, setCurrentIndex] = useState(0)
  const emblaApiRef = useRef(null)

  useEffect(() => {
    fetch('/api/google-reviews')
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews || [])
        setAverageRating(data.rating || 5)
        console.log('Google Reviews:', data.reviews)
      })
  }, [])

  // Autoplay effect
  useEffect(() => {
    if (!reviews.length) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.min(reviews.length, 5))
    }, 4000)
    return () => clearInterval(interval)
  }, [reviews.length])

  // Scroll carousel to current index
  useEffect(() => {
    if (emblaApiRef.current && emblaApiRef.current.scrollTo) {
      emblaApiRef.current.scrollTo(currentIndex)
    }
  }, [currentIndex])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-background mb-6 leading-tight">
            <span className="text-primary">Mile</span>Master
            <br />
            <span className="text-background">Auto Care</span>
          </h1>
          <p className="text-xl sm:text-2xl text-background/90 mb-8 max-w-3xl mx-auto">
            Professional automotive service you can trust. From routine
            maintenance to complex repairs, we keep your vehicle running at peak
            performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-8 py-4"
              asChild
            >
              <NavLink to="/booking">
                Book Service Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
            <Button
              variant="automotive"
              size="lg"
              className="text-lg px-8 py-4"
              asChild
            >
              <NavLink to="/services">View Services</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose MileMaster?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine cutting-edge technology with traditional craftsmanship
              to deliver exceptional automotive service every time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-none shadow-automotive hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-6 shadow-automotive">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Popular Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick access to our most requested automotive services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="cursor-pointer hover:shadow-automotive transition-all duration-300 hover:scale-105 border-border"
              >
                <CardContent className="p-6 text-center">
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg" asChild>
              <NavLink to="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Google Reviews Section - Full Width */}
      {reviews.length > 0 && (
        <section className="py-20 bg-muted w-full overflow-x-hidden">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-left border-b pb-2">
              WHAT CLIENTS ARE SAYING ABOUT MILEMASTER AUTO CARE
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-stretch w-full">
              {/* Left Card: Business Info */}
              <div className="flex flex-col items-center justify-center bg-background rounded-xl shadow-automotive p-8 min-w-[260px] max-w-xs mx-auto md:mx-0 w-full">
                <img src={googleLogo} alt="Google" className="w-10 h-10 mb-2" />
                <div className="font-bold text-lg mb-1">
                  MileMaster Auto Care
                </div>
                <div className="flex items-center mb-1">
                  <span className="text-2xl font-bold mr-2">
                    {averageRating.toFixed(1)}
                  </span>
                  {[...Array(Math.floor(averageRating))].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-primary fill-current"
                    />
                  ))}
                  {averageRating % 1 !== 0 && (
                    <Star className="h-5 w-5 text-primary fill-none" />
                  )}
                </div>
                <div className="text-xs text-muted-foreground mb-2">
                  powered by{' '}
                  <span className="font-semibold text-google">Google</span>
                </div>
                <a
                  href="https://www.google.com/maps/place/?q=place_id:ChIJ-7kTwLqh7gYRgkOahFrlqMs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded px-4 py-2 text-sm mt-2 transition"
                >
                  review us on <span className="font-bold">G</span>
                  <span className="font-bold text-red-500">o</span>
                  <span className="font-bold text-yellow-500">o</span>
                  <span className="font-bold text-blue-500">g</span>
                  <span className="font-bold text-green-500">l</span>
                  <span className="font-bold text-red-500">e</span>
                </a>
              </div>
              {/* Right: Carousel of Reviews */}
              <div className="flex-1 flex flex-col justify-center w-full">
                <Carousel
                  className="relative w-full max-w-full overflow-x-hidden"
                  setApi={(api) => {
                    emblaApiRef.current = api
                  }}
                >
                  <CarouselContent className="w-full max-w-full">
                    {reviews.slice(0, 5).map((review, idx) => (
                      <CarouselItem key={idx} className="p-4 w-full max-w-full">
                        <Card className="shadow-automotive h-full flex flex-col justify-between w-full max-w-full">
                          <CardContent className="p-6 flex flex-col h-full w-full max-w-full">
                            <div className="flex items-center gap-2 mb-2">
                              {review.profile_photo_url ? (
                                <img
                                  src={review.profile_photo_url}
                                  alt={review.author_name}
                                  className="w-10 h-10 rounded-full border"
                                />
                              ) : (
                                <div className="w-10 h-10 rounded-full border bg-muted flex items-center justify-center text-xl font-bold text-primary">
                                  {review.author_name
                                    ? review.author_name[0]
                                    : '?'}
                                </div>
                              )}
                              <div className="flex-1 text-left">
                                <div className="font-bold text-primary text-base">
                                  {review.author_name}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {review.relative_time_description}
                                </div>
                              </div>
                              <img
                                src={googleLogo}
                                alt="Google"
                                className="w-5 h-5 ml-2"
                              />
                            </div>
                            <div className="flex items-center mb-2">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="h-4 w-4 text-primary fill-current"
                                />
                              ))}
                            </div>
                            <p className="italic text-muted-foreground mb-2">
                              "{review.text}"
                            </p>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                  {/* Dots Navigation */}
                  <div className="flex justify-center mt-4 gap-2">
                    {reviews.slice(0, 5).map((_, idx) => (
                      <span
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`cursor-pointer inline-block w-2 h-2 rounded-full ${
                          idx === currentIndex
                            ? 'bg-primary'
                            : 'bg-muted-foreground'
                        }`}
                      ></span>
                    ))}
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-dark text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule your appointment today and experience the MileMaster
            difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-8 py-4"
              asChild
            >
              <NavLink to="/booking">Schedule Now</NavLink>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 border-background text-background hover:bg-background hover:text-foreground"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us: 0769882914
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
