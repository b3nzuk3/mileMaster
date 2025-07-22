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
    // Removed Mike Rodriguez, Sarah Chen, and David Thompson
    {
      name: 'Moses Ingosi',
      role: 'Workshop Manager',
      experience: '6 years',
      image:
        'https://res.cloudinary.com/dq3jxutxg/image/upload/v1753211371/mileMaster/4_ykutqd.png',
      specialties: [
        'Engine diagnosis',
        'Braking System',
        'Suspension',
        'Customer Services',
      ],
    },
    {
      name: 'Calistine Clench',
      experience: '4 years',
      image:
        'https://res.cloudinary.com/dq3jxutxg/image/upload/v1753211384/mileMaster/3_nwgexo.png',
      specialties: ['Braking system', 'Suspension'],
    },
    {
      name: 'Joshua Onyango',
      experience: '9 years',
      image:
        'https://res.cloudinary.com/dq3jxutxg/image/upload/v1753211388/mileMaster/6_rn3sfz.png',
      specialties: [
        'Engine diagnosis',
        'Suspension',
        'Transmission',
        'Braking System',
        'Hybrid Car Service',
      ],
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
                For over 2 years, MileMaster Auto Care has been the trusted
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

      {/* Founders Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
            Meet the Founders of MileMaster Auto Care
          </h2>
          <p className="text-xl text-muted-foreground mb-12 text-center">
            At the core of MileMaster Auto Care are two driven co-founders whose
            complementary strengths power the company’s vision of delivering
            honest, expert, and reliable automotive service.
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Crispin Lughano */}
            <div className="flex flex-col items-center text-center">
              <img
                src="https://res.cloudinary.com/dq3jxutxg/image/upload/v1753212726/mileMaster/1_h0dcrd.png"
                alt="Crispin Lughano"
                className="w-40 h-40 object-cover rounded-full mb-6 border-4 border-primary/30 shadow"
              />
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Crispin Lughano
              </h3>
              <p className="text-primary font-semibold mb-2">
                Co-Founder & Business Director
              </p>
              <p className="text-muted-foreground mb-4">
                With a strong background in business strategy and operations,
                Crispin Lughano is the driving force behind MileMaster’s growth
                and customer-focused vision. His leadership ensures the company
                not only delivers quality service, but also builds long-term
                relationships with clients through trust, transparency, and
                professionalism. Crispin is passionate about creating a brand
                that drivers can always count on.
              </p>
            </div>
            {/* Joseph Mwaura */}
            <div className="flex flex-col items-center text-center">
              <img
                src="https://res.cloudinary.com/dq3jxutxg/image/upload/v1753212730/mileMaster/2_xm5wv1.png"
                alt="Joseph Mwaura"
                className="w-40 h-40 object-cover rounded-full mb-6 border-4 border-primary/30 shadow"
              />
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Joseph Mwaura
              </h3>
              <p className="text-primary font-semibold mb-2">
                Co-Founder & Lead Automotive Technician
              </p>
              <p className="text-muted-foreground mb-4">
                Joseph Mwaura is the technical engine behind MileMaster. A
                highly skilled and dedicated technician, Joseph leads the garage
                floor with precision, discipline, and deep mechanical expertise.
                His hands-on approach and commitment to top-tier workmanship
                guarantee every vehicle is repaired and maintained to the
                highest standards.
              </p>
            </div>
          </div>
          <div className="text-center mt-8 text-lg text-muted-foreground">
            Together, Crispin and Joseph combine business intelligence with
            mechanical mastery — creating a reliable, customer-first auto care
            experience that’s trusted across the region.
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
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 object-cover rounded-full mx-auto mb-6 border-4 border-primary/30 shadow"
                    />
                  ) : (
                    <div className="w-20 h-20 bg-gradient-hero rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Users className="h-10 w-10 text-primary-foreground" />
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {member.name}
                  </h3>
                  {member.role && (
                    <p className="text-primary font-semibold mb-2">
                      {member.role}
                    </p>
                  )}
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
