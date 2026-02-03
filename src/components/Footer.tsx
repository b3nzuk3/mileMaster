// Footer Component with NAP Consistency for Local SEO
import { NavLink } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react'
import { BUSINESS_INFO } from '@/lib/seo-config'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-dark text-background border-t border-border/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src="/mile).png" alt="MileMaster Auto Care Logo" className="h-10 w-10" />
              <h3 className="text-xl font-bold">
                <span className="text-primary">Mile</span>Master Auto Care
              </h3>
            </div>
            <p className="text-background/80 mb-4">
              Your trusted auto repair garage on Thika Road, Nairobi. Professional car servicing, diagnostics, and repairs since {BUSINESS_INFO.foundingDate}. Serving Ruiru, Kasarani & beyond.
            </p>
            {/* Social Media - Add when available */}
            {/* <div className="flex space-x-4">
              {BUSINESS_INFO.socialMedia.facebook && (
                <a 
                  href={BUSINESS_INFO.socialMedia.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              )}
              {BUSINESS_INFO.socialMedia.instagram && (
                <a 
                  href={BUSINESS_INFO.socialMedia.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-background/80 hover:text-primary transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-background/80 hover:text-primary transition-colors">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-background/80 hover:text-primary transition-colors">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/testimonials" className="text-background/80 hover:text-primary transition-colors">
                  Testimonials
                </NavLink>
              </li>
              <li>
                <NavLink to="/booking" className="text-background/80 hover:text-primary transition-colors">
                  Book Service
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-background/80 hover:text-primary transition-colors">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-background/80">
              <li>Car Servicing & Maintenance</li>
              <li>Engine Diagnostics</li>
              <li>Brake Repair</li>
              <li>Tyre Alignment</li>
              <li>Oil Change</li>
              <li>Electrical Repairs</li>
              <li>AC Servicing</li>
              <li>Transmission Repair</li>
            </ul>
          </div>

          {/* Contact Info - NAP for Local SEO */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <address className="not-italic space-y-3 text-background/80">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-background">{BUSINESS_INFO.legalName}</p>
                  <p>{BUSINESS_INFO.address.streetAddress}</p>
                  <p>{BUSINESS_INFO.address.addressLocality}</p>
                  <a 
                    href={BUSINESS_INFO.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a 
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="hover:text-primary transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a 
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="hover:text-primary transition-colors break-all"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p>Mon-Fri: 7:00 AM - 6:00 PM</p>
                  <p>Saturday: 8:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70 text-sm">
          <p>
            © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <p className="mt-2">
            Professional Auto Repair on Thika Road, Nairobi | Serving Ruiru, Kasarani, Roysambu, Githurai & Beyond
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
