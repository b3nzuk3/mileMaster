import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { CalendarIcon, Clock, CheckCircle } from 'lucide-react'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'

const Booking = () => {
  const [date, setDate] = useState<Date>()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    service: [],
    timeSlot: '',
    notes: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const services = [
    'Oil Change & Maintenance',
    'Engine Diagnostics',
    'Brake Service',
    'Wheel Alignment',
    'Transmission Service',
    'Electrical Systems',
    'Cooling System',
    'Battery & Charging',
    'Other (Please specify in notes)',
  ]

  const timeSlots = [
    '8:00 AM',
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
  ]

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }
  const handleServiceChange = (service: string) => {
    setFormData((prev) => {
      const current = prev.service as string[]
      if (current.includes(service)) {
        return { ...prev, service: current.filter((s) => s !== service) }
      } else {
        return { ...prev, service: [...current, service] }
      }
    })
  }

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xeozoqdb'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Prepare data for Formspree
    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      email: formData.email,
      vehicleMake: formData.vehicleMake,
      vehicleModel: formData.vehicleModel,
      vehicleYear: formData.vehicleYear,
      service: Array.isArray(formData.service)
        ? formData.service.join(', ')
        : formData.service,
      timeSlot: formData.timeSlot,
      notes: formData.notes,
      date: date ? format(date, 'PPP') : '',
    }

    // Convert to FormData for Formspree
    const formDataObj = new FormData()
    Object.entries(payload).forEach(([key, value]) => {
      formDataObj.append(key, value)
    })

    // Send to Formspree
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: formDataObj,
      headers: {
        Accept: 'application/json',
      },
    })

    if (response.ok) {
      setIsSubmitted(true)
    } else {
      alert('There was an error submitting the form. Please try again.')
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 bg-muted flex items-center justify-center">
        <Card className="max-w-2xl mx-4 shadow-automotive">
          <CardContent className="p-12 text-center">
            <div className="bg-gradient-hero p-6 rounded-full w-24 h-24 mx-auto mb-8">
              <CheckCircle className="h-12 w-12 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Booking Confirmed!
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Thank you for choosing MileMaster Auto Care. We've received your
              service request and will contact you within 24 hours to confirm
              your appointment details.
            </p>
            <div className="bg-muted p-6 rounded-lg mb-8">
              <h3 className="font-bold text-foreground mb-4">
                Your Booking Details:
              </h3>
              <div className="space-y-2 text-left">
                <p>
                  <span className="font-semibold">Service:</span>{' '}
                  {Array.isArray(formData.service)
                    ? formData.service.join(', ')
                    : formData.service}
                </p>
                <p>
                  <span className="font-semibold">Date:</span>{' '}
                  {date ? format(date, 'PPP') : 'TBD'}
                </p>
                <p>
                  <span className="font-semibold">Time:</span>{' '}
                  {formData.timeSlot || 'TBD'}
                </p>
                <p>
                  <span className="font-semibold">Vehicle:</span>{' '}
                  {formData.vehicleYear} {formData.vehicleMake}{' '}
                  {formData.vehicleModel}
                </p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Questions? Call us at{' '}
              <span className="font-semibold text-primary">0769882914</span>
            </p>
            <Button variant="hero" onClick={() => setIsSubmitted(false)}>
              Book Another Service
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Book Your Service
          </h1>
          <p className="text-xl text-muted-foreground">
            Schedule your appointment with MileMaster Auto Care today
          </p>
        </div>

        <Card className="shadow-automotive">
          <CardHeader className="bg-gradient-hero text-primary-foreground">
            <CardTitle className="text-3xl">Service Appointment</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label
                      htmlFor="firstName"
                      className="text-base font-semibold"
                    >
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange('firstName', e.target.value)
                      }
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="lastName"
                      className="text-base font-semibold"
                    >
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange('lastName', e.target.value)
                      }
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-base font-semibold">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange('phone', e.target.value)
                      }
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-base font-semibold">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange('email', e.target.value)
                      }
                      required
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>

              {/* Vehicle Information */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Vehicle Information
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <Label
                      htmlFor="vehicleYear"
                      className="text-base font-semibold"
                    >
                      Year *
                    </Label>
                    <Input
                      id="vehicleYear"
                      value={formData.vehicleYear}
                      onChange={(e) =>
                        handleInputChange('vehicleYear', e.target.value)
                      }
                      placeholder="2020"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="vehicleMake"
                      className="text-base font-semibold"
                    >
                      Make *
                    </Label>
                    <Input
                      id="vehicleMake"
                      value={formData.vehicleMake}
                      onChange={(e) =>
                        handleInputChange('vehicleMake', e.target.value)
                      }
                      placeholder="Toyota"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="vehicleModel"
                      className="text-base font-semibold"
                    >
                      Model *
                    </Label>
                    <Input
                      id="vehicleModel"
                      value={formData.vehicleModel}
                      onChange={(e) =>
                        handleInputChange('vehicleModel', e.target.value)
                      }
                      placeholder="Camry"
                      required
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>

              {/* Service Details */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Service Details
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-base font-semibold mb-2 block">
                      Service Needed *
                    </Label>
                    <div className="flex flex-col gap-2 mt-2">
                      {services.map((service) => (
                        <label
                          key={service}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={
                              Array.isArray(formData.service) &&
                              formData.service.includes(service)
                            }
                            onChange={() => handleServiceChange(service)}
                            className="accent-primary h-4 w-4 rounded"
                          />
                          <span>{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label className="text-base font-semibold">
                      Preferred Date *
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            'w-full justify-start text-left font-normal mt-2',
                            !date && 'text-muted-foreground'
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, 'PPP') : 'Pick a date'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="mt-6">
                  <Label className="text-base font-semibold">
                    Preferred Time
                  </Label>
                  <Select
                    value={formData.timeSlot}
                    onValueChange={(value) =>
                      handleInputChange('timeSlot', value)
                    }
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select a time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          <div className="flex items-center">
                            <Clock className="mr-2 h-4 w-4" />
                            {time}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="mt-6">
                  <Label htmlFor="notes" className="text-base font-semibold">
                    Additional Notes
                  </Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    placeholder="Please describe any issues or special requests..."
                    className="mt-2"
                    rows={4}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="text-lg px-12 py-4"
                >
                  Book Appointment
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  * Required fields. We'll contact you to confirm your
                  appointment.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Booking
