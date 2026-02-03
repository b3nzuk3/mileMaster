import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { NavLink } from 'react-router-dom'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Car,
  Gauge,
  Wrench,
  Zap,
  Shield,
  CheckCircle,
} from 'lucide-react'
import { SEOHead, usePageSEO } from '@/components/SEOHead'

const ThikaRoad = () => {
  const seoData = usePageSEO('thikaRoad')

  const services = [
    {
      icon: Car,
      name: 'Vehicle Diagnostics',
      description: 'Advanced diagnostics for engine, electrical, and mechanical systems to identify and fix faults efficiently.',
    },
    {
      icon: Wrench,
      name: 'Suspension & Steering Repairs',
      description: 'Maintain ride comfort and safety with expert suspension and steering services on Thika Road.',
    },
    {
      icon: Gauge,
      name: 'Brake Repair & Servicing',
      description: 'Brake pad replacement, rotor resurfacing, and full brake system inspections to ensure your car stops safely.',
    },
    {
      icon: Zap,
      name: 'Auto Electrical Repairs',
      description: 'Battery replacements, alternator repairs, lighting, and wiring diagnostics for all vehicle makes.',
    },
    {
      icon: Shield,
      name: 'Engine Maintenance & Repairs',
      description: 'Engine tune-ups, oil changes, and full engine diagnostics to keep your vehicle running smoothly.',
    },
    {
      icon: CheckCircle,
      name: 'Preventive Vehicle Maintenance',
      description: 'Regular inspections and service packages to prevent breakdowns and extend your vehicle\'s lifespan.',
    },
  ]

  const whyChooseUs = [
    {
      title: 'Convenient Location',
      description: 'Positioned directly on Thika Road, we are easy to reach from Ruiru, Kasarani, Roysambu, and neighboring suburbs.',
    },
    {
      title: 'Expert Technicians',
      description: 'Our team has years of experience handling vehicles of all makes and models, both Japanese and European.',
    },
    {
      title: 'Modern Tools & Equipment',
      description: 'We use advanced diagnostic systems for accurate problem identification and efficient repair.',
    },
    {
      title: 'Transparent Pricing',
      description: 'No hidden fees — we provide clear estimates before starting any work on your vehicle.',
    },
    {
      title: 'Customer-Focused Service',
      description: 'Fast, friendly, and professional service ensures every customer leaves satisfied.',
    },
  ]

  return (
    <>
      <SEOHead {...seoData} />
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-dark text-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Reliable Auto Repair Garage on Thika Road – MileMaster Auto Care Ltd
            </h1>
            <p className="text-xl opacity-90 max-w-4xl mb-8">
              MileMaster Auto Care Ltd is a professional auto repair garage conveniently located along Thika Road, Nairobi, 
              serving motorists from Ruiru, Kasarani, Roysambu, and surrounding neighborhoods. Whether you need routine vehicle 
              maintenance, complex diagnostics, or emergency repairs, our expert technicians are ready to get you back on the road 
              safely and quickly.
            </p>
            <p className="text-lg opacity-80 max-w-4xl mb-8">
              Our garage is strategically positioned on Thika Road, making it accessible for drivers traveling along the main highway. 
              At MileMaster Auto Care Ltd, we combine years of experience, modern diagnostic tools, and a commitment to quality service 
              to deliver the best auto repair experience in the Nairobi metropolitan area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <NavLink to="/booking">
                  Book Service Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </NavLink>
              </Button>
              <Button variant="automotive" size="lg" asChild>
                <a href="tel:+254721421996">
                  <Phone className="mr-2 h-5 w-5" />
                  Call +254 721 421996
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Our Services – Vehicle Repairs and Maintenance on Thika Road
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                At MileMaster Auto Care Ltd, we provide a full range of auto repair and maintenance services 
                for both private and commercial vehicles along Thika Road and the greater Nairobi area.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-automotive transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="bg-gradient-hero p-3 rounded-lg w-12 h-12 mb-4">
                      <service.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{service.name}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-center text-muted-foreground mt-12 max-w-3xl mx-auto">
              Each service is performed by skilled technicians using quality parts and modern diagnostic equipment. 
              We take pride in offering fast turnaround times, transparent pricing, and lasting solutions for vehicles on Thika Road.
            </p>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Why Choose MileMaster Auto Care Ltd on Thika Road
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                By choosing MileMaster Auto Care Ltd, you're selecting a garage that understands the unique challenges 
                of driving along Thika Road, including traffic, heavy vehicle wear, and frequent highway maintenance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6">
                    <CheckCircle className="h-8 w-8 text-primary mb-4" />
                    <h4 className="text-lg font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Location & Directions – Visit Us on Thika Road
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Finding our garage is easy. MileMaster Auto Care Ltd is located along Thika Road, Nairobi, 
                at coordinates −1.229517, 36.878837. Drivers coming from Ruiru or Nairobi city center can reach us in minutes.
              </p>
            </div>

            {/* Google Map */}
            <Card className="overflow-hidden shadow-automotive mb-12">
              <div className="h-96 bg-secondary">
                <iframe
                  title="MileMaster Auto Care - Thika Road Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7!2d36.878837!3d-1.229517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTMnNDYuMyJTIDM2wrA1Mic0My44IkU!5e0!3m2!1sen!2ske!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Card>

            {/* Contact Info Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <MapPin className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-foreground mb-2">Address</h4>
                  <p className="text-muted-foreground">
                    MILEMASTER AUTO CARE LTD<br />
                    Thika Road, Nairobi, Kenya
                  </p>
                  <Button variant="link" className="mt-2" asChild>
                    <a 
                      href="https://www.google.com/maps/place/MILEMASTER+AUTO+CARE+LTD/@-1.229517,36.878837,17z" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Get Directions
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Phone className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-foreground mb-2">Phone</h4>
                  <p className="text-muted-foreground mb-2">+254 721 421996</p>
                  <Button variant="link" asChild>
                    <a href="tel:+254721421996">Call Now</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Clock className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-foreground mb-2">Business Hours</h4>
                  <p className="text-muted-foreground text-sm">
                    Mon-Fri: 7:00 AM - 6:00 PM<br />
                    Saturday: 8:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Snippet */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Customer Reviews – Trusted Auto Repair on Thika Road
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-border">
                <CardContent className="p-6">
                  <p className="text-muted-foreground italic mb-4">
                    "MileMaster Auto Care Ltd quickly diagnosed my car's engine issue and fixed it the same day. 
                    The location on Thika Road is very convenient, and the staff is professional. Highly recommended!"
                  </p>
                  <p className="text-foreground font-semibold">– Jane M., Ruiru</p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <p className="text-muted-foreground italic mb-4">
                    "Reliable service and fair pricing. They handled my brake and suspension repairs efficiently. 
                    I will definitely return for regular maintenance."
                  </p>
                  <p className="text-foreground font-semibold">– David K., Kasarani</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button variant="automotive" asChild>
                <NavLink to="/testimonials">View All Reviews</NavLink>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-dark text-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Contact MileMaster Auto Care Ltd Today
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Whether you need urgent repairs or routine maintenance, MileMaster Auto Care Ltd is your trusted garage on Thika Road. 
              Call us today or visit our garage to experience professional, efficient, and customer-focused auto care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <NavLink to="/booking">
                  Book a Service Online
                  <ArrowRight className="ml-2 h-5 w-5" />
                </NavLink>
              </Button>
              <Button variant="automotive" size="lg" asChild>
                <NavLink to="/services">View Our Services</NavLink>
              </Button>
              <Button variant="automotive" size="lg" asChild>
                <NavLink to="/contact">Contact Us</NavLink>
              </Button>
            </div>
          </div>
        </section>

        {/* Summary Section */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Summary – Garage Services Near You on Thika Road
            </h2>
            <p className="text-lg text-muted-foreground">
              From engine diagnostics and brake repairs to suspension, steering, and preventive maintenance, 
              MileMaster Auto Care Ltd provides full-service auto care along Thika Road. Our commitment to quality service, 
              convenient location, and skilled technicians makes us the top choice for motorists in Ruiru, Kasarani, Nairobi, 
              and the greater metropolitan area.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}

export default ThikaRoad
