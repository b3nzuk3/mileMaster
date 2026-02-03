import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { NavLink } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Calendar, Car, Send } from 'lucide-react'
import { useState } from 'react'
import { SEOHead, usePageSEO } from '@/components/SEOHead'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xeozoqdb'

const Contact = () => {
  const seoData = usePageSEO('contact')
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['MILEMASTER AUTO CARE LTD', 'Thika Road, Nairobi, Kenya', 'Near Ruiru & Kasarani'],
      action: 'Get Directions',
      actionLink:
        'https://www.google.com/maps/place/MILEMASTER+AUTO+CARE+LTD/@-1.229517,36.878837,17z',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+254 721 421996', 'Call for immediate assistance'],
      action: 'Call Now',
      actionLink: 'tel:+254721421996',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['milemasterac@gmail.com', 'General inquiries'],
      action: 'Send Email',
      actionLink: 'mailto:milemasterac@gmail.com',
    },
  ]

  const hours = [
    { day: 'Monday - Friday', time: '7:00 AM - 6:00 PM' },
    { day: 'Saturday', time: '8:00 AM - 4:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ]

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = { ...formData }
    const formDataObj = new FormData()
    Object.entries(payload).forEach(([key, value]) => {
      formDataObj.append(key, value)
    })
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: formDataObj,
      headers: { Accept: 'application/json' },
    })
    if (response.ok) {
      setIsSubmitted(true)
    } else {
      alert('There was an error submitting the form. Please try again.')
    }
  }

  return (
    <>
      <SEOHead {...seoData} />
      <div className="min-h-screen pt-20">
        {/* Header Section */}
        <section className="py-20 bg-gradient-dark text-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">Contact MileMaster Auto Care — Garage on Thika Road, Nairobi</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Get in touch with MileMaster Auto Care Ltd. Conveniently located on Thika Road, Nairobi, serving Ruiru, Kasarani, and surrounding areas. Call +254 721 421996 or visit us Monday-Saturday.
            </p>
          </div>
        </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Cards */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Get In Touch
              </h2>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-automotive transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-hero p-3 rounded-lg shadow-automotive">
                          <contact.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground mb-2">
                            {contact.title}
                          </h3>
                          {contact.details.map((detail, detailIndex) => (
                            <p
                              key={detailIndex}
                              className="text-muted-foreground mb-1"
                            >
                              {detail}
                            </p>
                          ))}
                          <Button
                            variant="link"
                            className="p-0 h-auto text-primary font-semibold"
                            asChild
                          >
                            <a
                              href={contact.actionLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {contact.action}
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Hours */}
              <Card className="mt-8 border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-hero p-3 rounded-lg shadow-automotive">
                      <Clock className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-4">
                        Business Hours
                      </h3>
                      <div className="space-y-2">
                        {hours.map((hour, index) => (
                          <div key={index} className="flex justify-between">
                            <span className="text-muted-foreground">
                              {hour.day}
                            </span>
                            <span className="font-semibold text-foreground">
                              {hour.time}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 p-3 bg-muted rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          <strong>Emergency Service:</strong> 24/7 roadside
                          assistance available
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Send us a Message
              </h2>
              <Card className="shadow-automotive">
                <CardContent className="p-8">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label
                          htmlFor="firstName"
                          className="text-base font-semibold"
                        >
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          className="mt-2"
                          value={formData.firstName}
                          onChange={(e) =>
                            handleInputChange('firstName', e.target.value)
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="lastName"
                          className="text-base font-semibold"
                        >
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          className="mt-2"
                          value={formData.lastName}
                          onChange={(e) =>
                            handleInputChange('lastName', e.target.value)
                          }
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label
                        htmlFor="email"
                        className="text-base font-semibold"
                      >
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        className="mt-2"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange('email', e.target.value)
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="phone"
                        className="text-base font-semibold"
                      >
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="mt-2"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange('phone', e.target.value)
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="subject"
                        className="text-base font-semibold"
                      >
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        className="mt-2"
                        value={formData.subject}
                        onChange={(e) =>
                          handleInputChange('subject', e.target.value)
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="message"
                        className="text-base font-semibold"
                      >
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        className="mt-2"
                        placeholder="Tell us about your vehicle or service needs..."
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange('message', e.target.value)
                        }
                        required
                      />
                    </div>
                    <Button type="submit" variant="hero" className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                  {isSubmitted && (
                    <div className="mt-6 text-center text-green-600 font-bold">
                      Thank you for contacting us! We will get back to you soon.
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Location & Directions to MileMaster Auto Care Ltd
            </h2>
            <p className="text-xl text-muted-foreground">
              Conveniently located on Thika Road, Nairobi — Easy access from Ruiru, Kasarani, Roysambu & CBD
            </p>
          </div>

          {/* Google Map Embed with exact coordinates */}
          <Card className="overflow-hidden shadow-automotive">
            <div className="h-96 bg-secondary flex items-center justify-center p-0">
              <iframe
                title="MILEMASTER AUTO CARE LTD - Thika Road, Nairobi"
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
          
          {/* Address Details */}
          <div className="mt-8 text-center">
            <p className="text-lg text-foreground font-semibold">
              MILEMASTER AUTO CARE LTD
            </p>
            <p className="text-muted-foreground">
              Thika Road, Nairobi, Kenya | Coordinates: -1.229517, 36.878837
            </p>
            <p className="text-muted-foreground mt-2">
              <strong>Phone:</strong> +254 721 421996 | <strong>Email:</strong> milemasterac@gmail.com
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-automotive transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-6">
                  <Calendar className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Schedule Service
                </h3>
                <p className="text-muted-foreground mb-6">
                  Book your appointment online and choose your preferred date
                  and time
                </p>
                <Button variant="hero" asChild>
                  <NavLink to="/booking">Book Now</NavLink>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-automotive transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-6">
                  <Car className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  View Services
                </h3>
                <p className="text-muted-foreground mb-6">
                  Explore our comprehensive automotive repair and maintenance
                  services
                </p>
                <Button variant="automotive" asChild>
                  <NavLink to="/services">Learn More</NavLink>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Contact
