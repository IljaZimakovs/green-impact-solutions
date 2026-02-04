import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { 
  Search, PenTool, Hammer, TestTube, Rocket, Menu, X, MapPin, Mail,
  Check, ArrowRight, CircuitBoard, Wifi, Smartphone, Brain, Layers, Linkedin, Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import heroImage from "@/assets/images/hero-engineering.png";
import logoImage from "@/assets/images/logo.png";
import serviceEmbeddedImage from "@/assets/images/service-embedded.png";
import serviceIotImage from "@/assets/images/service-iot.png";
import serviceMobileImage from "@/assets/images/service-mobile.png";
import serviceAiImage from "@/assets/images/service-ai.png";
import industryIotImage from "@/assets/images/industry-iot.png";
import industryManufacturingImage from "@/assets/images/industry-manufacturing.png";
import industryAutomotiveImage from "@/assets/images/industry-automotive.png";
import industryHealthcareImage from "@/assets/images/industry-healthcare.png";
import industrySaasImage from "@/assets/images/industry-saas.png";
import industryCleanenergyImage from "@/assets/images/industry-cleanenergy.png";
import teamCeoImage from "@/assets/images/team-ceo.png";
import teamCtoImage from "@/assets/images/team-cto.png";
import teamLeadEngineerImage from "@/assets/images/team-lead-engineer.png";
import teamProductImage from "@/assets/images/team-product.png";
import teamBackendLeadImage from "@/assets/images/team-backend-lead.png";
import teamUxDesignerImage from "@/assets/images/team-ux-designer.png";
import teamFrontendEngineerImage from "@/assets/images/team-frontend-engineer.png";
import teamEmbeddedEngineerImage from "@/assets/images/team-embedded-engineer.png";
import teamEmbeddedEngineer2Image from "@/assets/images/team-embedded-engineer-2.png";
import teamFullstackEngineerImage from "@/assets/images/team-fullstack-engineer.png";
import teamMobileEngineerImage from "@/assets/images/team-mobile-engineer.png";
import teamProductManagerImage from "@/assets/images/team-product-manager.png";
import teamUxDesigner2Image from "@/assets/images/team-ux-designer-2.png";
import processDiscoveryImage from "@/assets/images/process-discovery.png";
import processDesignImage from "@/assets/images/process-design.png";
import processDevelopmentImage from "@/assets/images/process-development.png";
import processTestingImage from "@/assets/images/process-testing.png";
import processLaunchImage from "@/assets/images/process-launch.png";
import caseSmarthomeImage from "@/assets/images/case-smarthome.png";
import caseIndustrialImage from "@/assets/images/case-industrial.png";
import caseHealthcareImage from "@/assets/images/case-healthcare.png";
import caseWebdevImage from "@/assets/images/case-webdev.png";
import caseMobileappImage from "@/assets/images/case-mobileapp.png";
import caseAisaasImage from "@/assets/images/case-aisaas.png";
import testimonial1Image from "@/assets/images/testimonial-1.png";
import testimonial2Image from "@/assets/images/testimonial-2.png";
import testimonial3Image from "@/assets/images/testimonial-3.png";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#industries", label: "Industries" },
    { href: "#process", label: "Process" },
    { href: "#case-studies", label: "Case Studies" },
    { href: "#team", label: "Team" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      budget: "",
      timeline: "",
      message: "",
    },
  });

  const onSubmit = async (data: InsertContact) => {
    // Client-side only form submission (no backend)
    // In a production environment, you would integrate with an email service
    // or form submission service like Formspree, EmailJS, etc.
    setIsSubmitting(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      console.log("Contact form submission:", data);
      
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      image: serviceEmbeddedImage,
      title: "Embedded Systems & Firmware",
      description: "Custom firmware development for microcontrollers and real-time systems that power your connected devices.",
      deliverables: [
        "ESP32, STM32, ARM-based firmware",
        "RTOS integration and optimization",
        "Driver development (UART, SPI, I2C)",
        "Low-power design and battery optimization"
      ]
    },
    {
      image: serviceIotImage,
      title: "IoT & Cloud Platforms",
      description: "Scalable cloud infrastructure that connects your devices to intelligent backends and analytics.",
      deliverables: [
        "MQTT and AWS IoT Core integration",
        "Device provisioning and management",
        "Real-time data pipelines",
        "Secure OTA update systems"
      ]
    },
    {
      image: serviceMobileImage,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that give users seamless control over their connected devices.",
      deliverables: [
        "React Native and Flutter development",
        "iOS and Android native apps",
        "BLE and real-time communication",
        "Offline-first architecture"
      ]
    },
    {
      image: serviceAiImage,
      title: "AI SaaS & Web Platforms",
      description: "Intelligent web applications with AI-powered features that transform data into actionable insights.",
      deliverables: [
        "React, Next.js, Node.js platforms",
        "OpenAI and RAG integrations",
        "Custom dashboards and analytics",
        "Multi-tenant SaaS architecture"
      ]
    }
  ];

  const industries = [
    {
      image: industryIotImage,
      title: "Smart Devices & IoT",
      problem: "Complex device ecosystems that need seamless connectivity",
      solution: "End-to-end development from sensors to cloud dashboards"
    },
    {
      image: industryManufacturingImage,
      title: "Industrial & Manufacturing",
      problem: "Legacy systems that lack modern monitoring capabilities",
      solution: "Retrofit solutions with real-time data and predictive analytics"
    },
    {
      image: industryAutomotiveImage,
      title: "Automotive & Telematics",
      problem: "Vehicle data that's siloed and underutilized",
      solution: "Connected platforms for fleet management and diagnostics"
    },
    {
      image: industryHealthcareImage,
      title: "Healthcare & Wellness",
      problem: "Medical devices requiring strict compliance and reliability",
      solution: "Secure, compliant solutions for patient monitoring and data"
    },
    {
      image: industrySaasImage,
      title: "SaaS & Platforms",
      problem: "Scaling challenges as user bases grow",
      solution: "Robust architecture with AI capabilities built in"
    },
    {
      image: industryCleanenergyImage,
      title: "Clean Energy & Sustainability",
      problem: "Energy systems lacking smart monitoring and optimization",
      solution: "IoT-enabled platforms for renewable energy management and carbon tracking"
    }
  ];

  const teamMembers = [
    {
      image: teamCeoImage,
      name: "Alonso Fernandez",
      role: "Founder & CEO",
      bio: "20+ years in product engineering, previously led hardware teams at major tech companies. Passionate about bridging the gap between hardware and software.",
      skills: ["Leadership", "Strategy", "IoT", "Product Vision"]
    },
    {
      image: teamCtoImage,
      name: "Branislav Vejnovic",
      role: "CTO",
      bio: "Expert in low-level firmware and embedded systems. 10+ years developing reliable, efficient code for microcontrollers and real-time embedded applications.",
      skills: ["C/C++", "RTOS", "ARM", "Firmware"]
    },
    {
      image: teamProductManagerImage,
      name: "Takashi Yamamoto",
      role: "Project Manager",
      bio: "Drives product strategy and roadmap execution. 8+ years translating customer needs into successful IoT and software products.",
      skills: ["Roadmaps", "Agile", "User Stories", "Analytics"]
    },
    {
      image: teamBackendLeadImage,
      name: "Asad Raza",
      role: "Lead Backend Engineer",
      bio: "Expert in scalable cloud architectures and API design. 12+ years building high-performance backend systems for IoT and enterprise applications.",
      skills: ["Node.js", "AWS", "PostgreSQL", "API Design"]
    },
    {
      image: teamUxDesignerImage,
      name: "Viktoriia Konoplova",
      role: "Senior UX/UI Designer",
      bio: "Creates intuitive user experiences for complex IoT and mobile applications. 8+ years crafting beautiful, accessible interfaces for tech products.",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"]
    },
    {
      image: teamFullstackEngineerImage,
      name: "Kevin Barber",
      role: "Full Stack Engineer",
      bio: "Builds end-to-end solutions from database to UI. Expert in Node.js, React, and cloud infrastructure for scalable IoT platforms and web applications.",
      skills: ["Node.js", "React", "Docker", "Cloud"]
    },
    {
      image: teamMobileEngineerImage,
      name: "Alex Xiao",
      role: "Mobile Engineer",
      bio: "Develops native and cross-platform mobile applications. Expert in iOS, Android, and Flutter for connected device companion apps.",
      skills: ["iOS", "Android", "Flutter", "React Native"]
    },
    {
      image: teamFrontendEngineerImage,
      name: "Anshul Sharma",
      role: "Frontend Engineer",
      bio: "Specializes in React and modern web technologies. Passionate about building responsive, performant user interfaces for IoT dashboards and mobile-first applications.",
      skills: ["React", "TypeScript", "Tailwind", "Next.js"]
    },
    {
      image: teamEmbeddedEngineer2Image,
      name: "Hamza Shafique",
      role: "Embedded Software Engineer",
      bio: "Specializes in hardware-software integration and device drivers. Deep expertise in ARM processors and communication protocols for connected devices.",
      skills: ["ESP32", "STM32", "BLE", "Protocols"]
    },
    {
      image: teamUxDesigner2Image,
      name: "Yurika Mulase",
      role: "UX/UI Designer",
      bio: "Creates intuitive user experiences for complex technical products. Specializes in design systems and accessibility for IoT interfaces.",
      skills: ["UI Design", "Accessibility", "Wireframes", "Motion"]
    }
  ];

  const processSteps = [
    {
      icon: Search,
      title: "Discovery",
      description: "We analyze your requirements, technical constraints, and business goals to define the project scope.",
      image: processDiscoveryImage
    },
    {
      icon: PenTool,
      title: "Architecture",
      description: "Our team designs the system architecture, selects technologies, and creates detailed specifications.",
      image: processDesignImage
    },
    {
      icon: Hammer,
      title: "Build",
      description: "Iterative development with regular demos and feedback cycles to ensure alignment with your vision.",
      image: processDevelopmentImage
    },
    {
      icon: TestTube,
      title: "Test",
      description: "Comprehensive testing across hardware, firmware, and software to ensure reliability and performance.",
      image: processTestingImage
    },
    {
      icon: Rocket,
      title: "Deploy & Scale",
      description: "Launch support, monitoring setup, and ongoing optimization as your product reaches users.",
      image: processLaunchImage
    }
  ];

  const caseStudies = [
    {
      client: "Confidential",
      industry: "Smart Home",
      problem: "A consumer electronics company needed to modernize their legacy thermostat line with IoT capabilities and mobile control.",
      solution: "Developed custom ESP32 firmware with BLE provisioning, AWS IoT Core backend, and a React Native app for iOS and Android.",
      tech: ["ESP32", "AWS IoT", "React Native", "MQTT"],
      outcome: "Reduced development timeline by 40% compared to their previous vendor. Product launched on schedule.",
      image: caseSmarthomeImage
    },
    {
      client: "Confidential",
      industry: "Industrial Monitoring",
      problem: "A manufacturing company needed real-time visibility into equipment performance across multiple facilities.",
      solution: "Built a sensor network with STM32-based nodes, LoRaWAN connectivity, and a Next.js dashboard with predictive analytics.",
      tech: ["STM32", "LoRaWAN", "Next.js", "Python ML"],
      outcome: "Enabled predictive maintenance that reduced unplanned downtime by identifying issues before failures.",
      image: caseIndustrialImage
    },
    {
      client: "Confidential",
      industry: "Healthcare",
      problem: "A medical device startup required a compliant data platform for their patient monitoring devices.",
      solution: "Architected a HIPAA-compliant cloud infrastructure with secure device communication and a clinician-facing web portal.",
      tech: ["AWS", "React", "Node.js", "PostgreSQL"],
      outcome: "Successfully passed security audits and achieved compliance certification for their initial product launch.",
      image: caseHealthcareImage
    },
    {
      client: "Confidential",
      industry: "Web Development",
      problem: "A sustainable energy company needed a modern web platform to showcase their green technology solutions and capture leads.",
      solution: "Built a high-performance React-based website with SEO optimization, CMS integration, and an advanced analytics dashboard.",
      tech: ["React", "Next.js", "Tailwind CSS", "Contentful"],
      outcome: "Increased organic traffic by 200% and lead generation by 150% within six months of launch.",
      image: caseWebdevImage
    },
    {
      client: "Confidential",
      industry: "Mobile App",
      problem: "An eco-friendly retail brand wanted a mobile app to connect customers with sustainable products and track their environmental impact.",
      solution: "Developed cross-platform mobile apps with barcode scanning, carbon footprint tracking, and gamified sustainability rewards.",
      tech: ["React Native", "Firebase", "Node.js", "MongoDB"],
      outcome: "Achieved 50,000+ downloads in first quarter with 4.8-star rating and strong user engagement.",
      image: caseMobileappImage
    },
    {
      client: "Confidential",
      industry: "AI SaaS",
      problem: "A cleantech startup needed an AI-powered platform to optimize energy consumption for commercial buildings.",
      solution: "Created a machine learning SaaS platform with real-time data ingestion, predictive analytics, and automated optimization recommendations.",
      tech: ["Python", "TensorFlow", "FastAPI", "React", "AWS"],
      outcome: "Clients reported average 30% reduction in energy costs and significant carbon footprint improvements.",
      image: caseAisaasImage
    }
  ];

  const testimonials = [
    {
      quote: "Green Impact Solutions transformed our product vision into reality. Their expertise in IoT and embedded systems helped us launch 3 months ahead of schedule.",
      name: "Robert Chen",
      title: "CEO, SmartHome Innovations",
      image: testimonial1Image
    },
    {
      quote: "The team's deep understanding of sustainable technology aligned perfectly with our mission. They delivered a platform that exceeded our expectations.",
      name: "Jennifer Wu",
      title: "CTO, CleanTech Solutions",
      image: testimonial2Image
    },
    {
      quote: "Working with Green Impact was a game-changer. Their AI expertise helped us build a product that's now saving our clients millions in energy costs.",
      name: "Marcus Johnson",
      title: "Founder, EcoSmart Analytics",
      image: testimonial3Image
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            <div className="flex-shrink-0 min-w-0">
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="flex items-center gap-2 min-w-0"
                data-testid="link-logo"
              >
                <img src={logoImage} alt="Green Impact Solutions" className="h-[26px] w-[26px] flex-shrink-0" />
                <span className="text-base sm:text-lg lg:text-xl font-semibold text-foreground truncate">
                  <span className="hidden sm:inline lg:hidden">Green Impact</span>
                  <span className="hidden lg:inline">Green Impact Solutions</span>
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-shrink-0">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className="text-xs xl:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
              <Button 
                onClick={() => scrollToSection("#contact")} 
                className="text-xs xl:text-sm px-3 xl:px-4"
                data-testid="button-start-project-nav"
              >
                Start a Project
              </Button>
            </div>

            {/* Tablet/Mobile Menu Button */}
            <div className="lg:hidden flex-shrink-0">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                data-testid="button-mobile-menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile/Tablet Navigation */}
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-border py-4"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
                    data-testid={`link-nav-mobile-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                ))}
                <Button onClick={() => scrollToSection("#contact")} className="mt-2" data-testid="button-start-project-mobile">
                  Start a Project
                </Button>
              </div>
            </motion.div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-16 overflow-hidden" data-testid="section-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight" 
                data-testid="text-hero-headline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Building the Future of <span className="text-primary">Connected</span> & <span className="text-primary">Intelligent</span> Products
              </motion.h1>
              <motion.p 
                className="mt-6 text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                From embedded firmware and connected devices to cloud infrastructure and intelligent applications—we build complete product ecosystems that scale with your business.
              </motion.p>
              <motion.div 
                className="mt-8 flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Button size="lg" onClick={() => scrollToSection("#contact")} data-testid="button-start-project-hero">
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" onClick={() => scrollToSection("#contact")} data-testid="button-book-call-hero">
                  Book a Call
                </Button>
              </motion.div>

              {/* Trusted Engineering Strip */}
              <motion.div 
                className="mt-12 flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {[
                  { icon: CircuitBoard, label: "Embedded" },
                  { icon: Wifi, label: "IoT" },
                  { icon: Smartphone, label: "Mobile" },
                  { icon: Brain, label: "AI" }
                ].map((item, index) => (
                  <motion.div 
                    key={item.label}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <item.icon className="h-4 w-4 text-primary" />
                    <span>{item.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative"
            >
              <motion.div 
                className="relative rounded-xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={heroImage}
                  alt="Product engineering workspace with IoT devices and software"
                  className="w-full h-auto object-cover"
                  data-testid="img-hero"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
              </motion.div>
              {/* Decorative accent element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-card/50" data-testid="section-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground" data-testid="text-services-heading">Our Services</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete product engineering capabilities from hardware to cloud to user interfaces
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <Card className="h-full overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300" data-testid={`card-service-${index}`}>
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover blur-[0.5px]"
                    />
                  </div>
                  <CardHeader className="pt-4">
                    <CardTitle className="text-xl" data-testid={`text-service-title-${index}`}>{service.title}</CardTitle>
                    <CardDescription className="text-base mt-2">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-medium text-foreground mb-3">What we deliver:</p>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20" data-testid="section-industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground" data-testid="text-industries-heading">Industries We Serve</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Deep experience across sectors that demand reliable, connected solutions
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {industries.map((industry, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <Card className="h-full overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300" data-testid={`card-industry-${index}`}>
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={industry.image} 
                      alt={industry.title}
                      className="w-full h-full object-cover blur-[0.5px]"
                    />
                  </div>
                  <CardHeader className="pt-3 pb-2">
                    <CardTitle className="text-lg" data-testid={`text-industry-title-${index}`}>{industry.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 pt-0">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Challenge</p>
                      <p className="text-sm text-foreground mt-1">{industry.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Our Approach</p>
                      <p className="text-sm text-foreground mt-1">{industry.solution}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-card/50" data-testid="section-process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground" data-testid="text-process-heading">How We Work</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured approach that balances speed with quality
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection line for desktop */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-border" />
            
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8"
            >
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeInUp} 
                  className="relative" 
                  data-testid={`card-process-${index}`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-full aspect-video rounded-lg overflow-hidden mb-4">
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <motion.div 
                      className="relative z-10 p-3 rounded-full bg-background border-2 border-primary shadow-md -mt-8"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <step.icon className="h-5 w-5 text-primary" />
                    </motion.div>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-xs font-semibold text-primary">{String(index + 1).padStart(2, '0')}</span>
                      <h3 className="text-lg font-semibold text-foreground" data-testid={`text-process-title-${index}`}>{step.title}</h3>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20" data-testid="section-case-studies">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground" data-testid="text-case-studies-heading">Case Studies</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Real projects demonstrating our end-to-end capabilities
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-3 gap-6"
          >
            {caseStudies.map((study, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover-elevate overflow-hidden" data-testid={`card-case-study-${index}`}>
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.industry} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-primary uppercase tracking-wide" data-testid={`text-case-study-industry-${index}`}>
                        {study.industry}
                      </span>
                    </div>
                    <CardTitle className="text-lg mt-2" data-testid={`text-case-study-client-${index}`}>Client: {study.client}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Problem</p>
                      <p className="text-sm text-foreground mt-1">{study.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Solution</p>
                      <p className="text-sm text-foreground mt-1">{study.solution}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Technologies</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {study.tech.map((tech, i) => (
                          <span key={i} className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Outcome</p>
                      <p className="text-sm text-foreground mt-1">{study.outcome}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-card/50" data-testid="section-testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground" data-testid="text-testimonials-heading">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by innovative companies building sustainable technology
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover-elevate" data-testid={`card-testimonial-${index}`}>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <Avatar className="w-16 h-16 mb-4 border-2 border-primary/20">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <blockquote className="text-muted-foreground italic mb-4">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="mt-auto">
                        <p className="font-semibold text-foreground" data-testid={`text-testimonial-name-${index}`}>{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20" data-testid="section-team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground" data-testid="text-team-heading">Meet Our Team</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced engineers and product leaders building the future of connected devices
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <Card className="h-full text-center shadow-md hover:shadow-lg transition-shadow duration-300" data-testid={`card-team-${index}`}>
                  <CardContent className="pt-6">
                    <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-primary/20">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="text-2xl">{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-semibold text-foreground" data-testid={`text-team-name-${index}`}>
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-primary mt-1">{member.role}</p>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                      {member.bio}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 mt-4">
                      {member.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary" 
                          className="text-xs"
                          data-testid={`badge-skill-${index}-${skillIndex}`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20" data-testid="section-about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground" data-testid="text-about-heading">About Green Impact Solutions</h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Founded in 2023 and based in Rosamond, California, Green Impact Solutions is a product engineering company focused on building connected devices, scalable software platforms, and AI-powered applications.
                </p>
                <p>
                  We deliver complete end-to-end solutions—from custom hardware and firmware to cloud infrastructure and user-facing mobile and web applications. Our team brings together expertise across the full technology stack to help you ship products faster and with confidence.
                </p>
                <p>
                  We work with individuals, startups, and product companies building smart devices, IoT platforms, and intelligent digital products that require tight integration between hardware, cloud, and applications.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Location</h3>
                        <p className="text-muted-foreground">Rosamond, California</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Rocket className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Founded</h3>
                        <p className="text-muted-foreground">2023</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Layers className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Expertise</h3>
                        <p className="text-muted-foreground">
                          Hardware, Firmware, Cloud, Mobile, Web, AI
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20" data-testid="section-contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground" data-testid="text-contact-heading">Start Your Project</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Tell us about your project and we'll get back to you within 24 hours.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Quick Response</h3>
                    <p className="text-sm text-muted-foreground">We review every inquiry within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Discovery Call</h3>
                    <p className="text-sm text-muted-foreground">A 30-minute call to understand your needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Proposal</h3>
                    <p className="text-sm text-muted-foreground">A detailed proposal with timeline and pricing</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Rosamond, California</span>
              </div>

              <Card className="mt-8">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="w-16 h-16 border-2 border-primary/20">
                      <AvatarImage src={teamCeoImage} alt="Alonso Fernandez" />
                      <AvatarFallback>AF</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-foreground">Contact the CEO</h3>
                      <p className="text-sm text-primary">Alonso Fernandez</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <a 
                      href="https://www.linkedin.com/in/alonso-fernandezz/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-ceo-linkedin"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="text-sm">linkedin.com/in/alonso-fernandezz</span>
                    </a>
                    <a 
                      href="mailto:alonso@greenimpactsolutions.com" 
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-ceo-email"
                    >
                      <Mail className="h-4 w-4" />
                      <span className="text-sm">alonso@greenimpactsolutions.com</span>
                    </a>
                    <a 
                      href="tel:+16615551234" 
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-ceo-phone"
                    >
                      <Phone className="h-4 w-4" />
                      <span className="text-sm">(661) 555-1234</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Your name" {...field} data-testid="input-name" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="you@company.com" {...field} data-testid="input-email" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company</FormLabel>
                            <FormControl>
                              <Input placeholder="Your company" {...field} value={field.value ?? ""} data-testid="input-company" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="budget"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Budget Range</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value ?? undefined}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-budget">
                                    <SelectValue placeholder="Select budget" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="under-25k">Under $25,000</SelectItem>
                                  <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                                  <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                                  <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                                  <SelectItem value="over-250k">Over $250,000</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="timeline"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Timeline</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value ?? undefined}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-timeline">
                                    <SelectValue placeholder="Select timeline" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="asap">ASAP</SelectItem>
                                  <SelectItem value="1-3-months">1-3 months</SelectItem>
                                  <SelectItem value="3-6-months">3-6 months</SelectItem>
                                  <SelectItem value="6-plus-months">6+ months</SelectItem>
                                  <SelectItem value="flexible">Flexible</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message *</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us about your project, goals, and any technical requirements..."
                                className="min-h-[120px] resize-none"
                                {...field}
                                data-testid="textarea-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        className="w-full" 
                        disabled={isSubmitting}
                        data-testid="button-submit-contact"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                        {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border" data-testid="section-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold text-foreground" data-testid="text-footer-company">Green Impact Solutions</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Green Impact Solutions | Engineering Sustainable Technology
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Rosamond, California</span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:contact@greenimpact.solutions" className="hover:text-foreground transition-colors" data-testid="link-email">
                  contact@greenimpact.solutions
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground">Quick Links</h4>
              <ul className="mt-4 space-y-2">
                {navLinks.slice(0, 3).map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`link-footer-${link.label.toLowerCase()}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground">Company</h4>
              <ul className="mt-4 space-y-2">
                {navLinks.slice(3).map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`link-footer-${link.label.toLowerCase()}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Green Impact Solutions. Founded 2023. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
