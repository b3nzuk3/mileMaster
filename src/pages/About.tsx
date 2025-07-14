import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { NavLink } from 'react-router-dom'
import { Users, Award, Calendar, MapPin } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Calendar, number: '2+', label: 'Years Experience' },
    { icon: Users, number: '1000+', label: 'Happy Customers' },
    { icon: Award, number: '10+', label: 'Certifications' },
    { icon: MapPin, number: '1', label: 'Convenient Location' },
  ]

  const team = [
    {
      name: 'Mike Rodriguez',
      role: 'Master Technician',
      experience: '15 years',
      specialties: ['Engine Diagnostics', 'Transmission', 'European Vehicles'],
    },
    {
      name: 'Sarah Chen',
      role: 'Service Manager',
      experience: '12 years',
      specialties: ['Customer Service', 'Quality Control', 'Scheduling'],
    },
    {
      name: 'David Thompson',
      role: 'Brake Specialist',
      experience: '10 years',
      specialties: ['Brake Systems', 'Suspension', 'Safety Inspections'],
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-dark text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                About MileMaster Auto Care
              </h1>
              <p className="text-xl opacity-90 mb-8">
                For over 15 years, MileMaster Auto Care has been the trusted
                choice for automotive service in our community. We combine
                traditional craftsmanship with cutting-edge technology to
                deliver exceptional results.
              </p>
              <Button variant="hero" size="lg" asChild>
                <NavLink to="/contact">Visit Our Shop</NavLink>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-background/10 border-background/20 text-center"
                >
                  <CardContent className="p-6">
                    <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-background mb-2">
                      {stat.number}
                    </div>
                    <div className="text-background/80">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At MileMaster Auto Care, our mission is simple: to provide
                honest, reliable, and professional automotive service that keeps
                you safe on the road and your vehicle running at peak
                performance.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We believe in building long-term relationships with our
                customers through transparency, quality workmanship, and
                exceptional customer service. Every vehicle that enters our shop
                receives the same level of care and attention we'd give our own
                family's cars.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                  <span className="text-foreground">
                    Honest, transparent pricing
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                  <span className="text-foreground">
                    Quality parts and workmanship
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                  <span className="text-foreground">
                    Comprehensive warranties
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                  <span className="text-foreground">
                    Exceptional customer service
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-muted p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Why Choose Us?
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• ASE certified technicians</li>
                <li>• State-of-the-art diagnostic equipment</li>
                <li>• Competitive pricing with no hidden fees</li>
                <li>• Convenient scheduling and fast service</li>
                <li>• Warranty on all parts and labor</li>
                <li>• Free estimates and consultations</li>
                <li>• Family-owned and operated</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-muted-foreground">
              Our certified technicians have the experience and expertise to
              handle any automotive challenge
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="hover:shadow-automotive transition-all duration-300"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-hero rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    {member.experience} experience
                  </p>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-foreground">
                      Specialties:
                    </p>
                    {member.specialties.map((specialty, specialtyIndex) => (
                      <p
                        key={specialtyIndex}
                        className="text-sm text-muted-foreground"
                      >
                        {specialty}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Experience the MileMaster Difference?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of satisfied customers who trust us with their
            vehicles
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
    </div>
  )
}

export default About
