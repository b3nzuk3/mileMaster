import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "react-router-dom";
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
  Cog
} from "lucide-react";
import heroImage from "@/assets/hero-garage.jpg";

const Home = () => {
  const features = [
    {
      icon: Wrench,
      title: "Expert Technicians",
      description: "Certified mechanics with years of experience in automotive repair and maintenance."
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "All our services come with comprehensive warranties for your peace of mind."
    },
    {
      icon: Clock,
      title: "Fast Service",
      description: "Quick turnaround times without compromising on quality workmanship."
    }
  ];

  const services = [
    { icon: Car, name: "Engine Diagnostics", description: "Advanced computer diagnostics" },
    { icon: Gauge, name: "Brake Service", description: "Complete brake system repair" },
    { icon: Cog, name: "Oil Change", description: "Full synthetic oil service" },
  ];

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
            Professional automotive service you can trust. From routine maintenance to complex repairs, 
            we keep your vehicle running at peak performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4" asChild>
              <NavLink to="/booking">
                Book Service Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
            <Button variant="automotive" size="lg" className="text-lg px-8 py-4" asChild>
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
              We combine cutting-edge technology with traditional craftsmanship to deliver 
              exceptional automotive service every time.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-automotive hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-6 shadow-automotive">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
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
              <Card key={index} className="cursor-pointer hover:shadow-automotive transition-all duration-300 hover:scale-105 border-border">
                <CardContent className="p-6 text-center">
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.name}</h3>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-dark text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule your appointment today and experience the MileMaster difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4" asChild>
              <NavLink to="/booking">Schedule Now</NavLink>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-background text-background hover:bg-background hover:text-foreground">
              <Phone className="mr-2 h-5 w-5" />
              Call Us: (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;