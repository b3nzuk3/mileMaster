import { Card, CardContent } from '@/components/ui/card'
import { SEOHead, usePageSEO } from '@/components/SEOHead'
import { generateServiceSchema, generateFAQSchema } from '@/lib/seo-utils'
import { servicesFAQs } from '@/data/faqs'
import { Button } from '@/components/ui/button'
import { NavLink } from 'react-router-dom'
import {
  Car,
  Gauge,
  Cog,
  Wrench,
  Zap,
  Shield,
  Thermometer,
  Battery,
  ArrowRight,
} from 'lucide-react'

const Services = () => {
  const seoData = usePageSEO('services')
  const faqSchema = generateFAQSchema(servicesFAQs)
  
  const services = [
    {
      icon: Car,
      name: 'Engine Diagnostics & Repair',
      description:
        'Comprehensive computer diagnostics and engine repair services on Thika Road. Quick identification and fixing of engine issues for vehicles from Ruiru, Kasarani, and Nairobi.',
      features: [
        'OBD-II scanning',
        'Performance testing',
        'Error code analysis',
        'Detailed reporting',
      ],
    },
    {
      icon: Gauge,
      name: 'Brake Service',
      description:
        'Complete brake system inspection, repair, and replacement on Thika Road for optimal safety. Same-day service available.',
      features: [
        'Brake pad replacement',
        'Rotor resurfacing',
        'Fluid flush',
        'Safety inspection',
      ],
    },
    {
      icon: Cog,
      name: 'Oil Change & Maintenance',
      description:
        'Regular maintenance services on Thika Road to keep your vehicle running smoothly. Quality oils and filters for all makes.',
      features: [
        'Full synthetic oil',
        'Filter replacement',
        'Multi-point inspection',
        'Fluid top-off',
      ],
    },
    {
      icon: Wrench,
      name: 'Suspension & Steering Services',
      description:
        'Expert suspension inspection, repair, and upgrades on Thika Road for a smoother, safer ride. Essential for Nairobi roads.',
      features: [
        'Shock and strut replacement',
        'Suspension check',
        'Bushing and joint service',
        'Ride height adjustment',
      ],
    },
    {
      icon: Zap,
      name: 'Auto Electrical Systems',
      description:
        'Expert diagnosis and repair of all electrical components at our Thika Road garage. Battery, alternator, and wiring services.',
      features: [
        'Battery testing',
        'Alternator service',
        'Starter repair',
        'Wiring diagnostics',
      ],
    },
    {
      icon: Shield,
      name: 'Transmission Service',
      description:
        'Professional transmission maintenance and repair on Thika Road for all vehicle types. Manual and automatic transmissions.',
      features: [
        'Fluid change',
        'Filter replacement',
        'Diagnostic testing',
        'Rebuild services',
      ],
    },
    {
      icon: Thermometer,
      name: 'Cooling System',
      description:
        'Keep your engine cool with our comprehensive cooling system services on Thika Road. Prevent overheating issues.',
      features: [
        'Radiator service',
        'Coolant flush',
        'Thermostat replacement',
        'Leak detection',
      ],
    },
    {
      icon: Battery,
      name: 'Hybrid Battery Services',
      description:
        'Specialized hybrid battery diagnostics, maintenance, and replacement at our Thika Road garage for hybrid vehicles.',
      features: [
        'Hybrid battery health check',
        'Battery reconditioning',
        'Hybrid battery replacement',
        'System diagnostics',
        'Warranty coverage',
      ],
    },
  ]

  return (
    <>
      <SEOHead {...seoData} schema={faqSchema} />
      <div className="min-h-screen pt-20">
        {/* Header Section */}
        <section className="py-20 bg-gradient-dark text-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">Car Repair Services on Thika Road, Nairobi</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Complete auto repair services on Thika Road: brake repair, engine diagnostics, suspension, oil change & more. Expert mechanics serving Ruiru, Kasarani, Roysambu, and the greater Nairobi area.
            </p>
          </div>
        </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-automotive transition-all duration-300 hover:scale-105 border-border"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-gradient-hero p-4 rounded-lg shadow-automotive flex-shrink-0">
                      <service.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {service.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-sm text-muted-foreground"
                          >
                            <ArrowRight className="h-4 w-4 text-primary mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Need Service on Thika Road? We're Here to Help
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Don't see the service you need? Contact MileMaster Auto Care on Thika Road - we handle all types of
            automotive repairs and maintenance for drivers from Ruiru, Kasarani, and Nairobi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-8 py-4"
              asChild
            >
              <NavLink to="/booking">Book Service</NavLink>
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
    </>
  )
}

export default Services
