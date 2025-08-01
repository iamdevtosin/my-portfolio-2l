"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Globe, Code, Search, ShoppingBag, Database, Cpu, Cloud, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollReveal from "@/components/scroll-reveal"
import ScrollToTop from "@/components/scroll-to-top"

export default function ServicesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const services = [
    {
      icon: <Globe className="h-12 w-12 text-black" />,
      title: "WordPress Development",
      description:
        "Custom WordPress websites with responsive design, optimized for performance and SEO. I create tailored solutions that align with your brand identity and business goals.",
      features: [
        "Custom theme development",
        "Plugin integration and customization",
        "E-commerce functionality with WooCommerce",
        "Performance optimization",
        "SEO-friendly structure",
        "Mobile-responsive design",
        "Security implementation",
      ],
    },
    {
      icon: <Code className="h-12 w-12 text-black" />,
      title: "Software Development",
      description:
        "Bespoke software solutions tailored to your specific business requirements. I develop custom applications that streamline your operations and enhance user experience.",
      features: [
        "Web application development",
        "Custom CMS solutions",
        "API development and integration",
        "Database design and optimization",
        "Front-end development with React/Next.js",
        "Back-end development with Node.js/PHP",
        "Progressive Web Apps (PWAs)",
      ],
    },
    {
      icon: <Search className="h-12 w-12 text-black" />,
      title: "SEO Optimization",
      description:
        "Improve your search engine rankings and drive organic traffic to your website. I implement proven SEO strategies to increase your online visibility and reach.",
      features: [
        "Keyword research and analysis",
        "On-page SEO optimization",
        "Technical SEO audits",
        "Content strategy development",
        "Local SEO optimization",
        "Performance optimization",
        "SEO reporting and analytics",
      ],
    },
    {
      icon: <ShoppingBag className="h-12 w-12 text-black" />,
      title: "Shopify Development",
      description:
        "Custom Shopify stores with seamless checkout experiences and conversion optimization. I create e-commerce solutions that drive sales and enhance customer satisfaction.",
      features: [
        "Custom Shopify theme development",
        "Store setup and configuration",
        "Product catalog management",
        "Payment gateway integration",
        "Shipping and tax setup",
        "App integration and customization",
        "Conversion rate optimization",
      ],
    },
    {
      icon: <Database className="h-12 w-12 text-black" />,
      title: "Website Management",
      description:
        "Comprehensive website maintenance, updates, and security monitoring. I ensure your website remains secure, up-to-date, and performing optimally at all times.",
      features: [
        "Regular software updates",
        "Security monitoring and hardening",
        "Performance optimization",
        "Content updates and management",
        "Backup and recovery solutions",
        "Technical support and troubleshooting",
        "Monthly maintenance reports",
      ],
    },
    {
      icon: <Cloud className="h-12 w-12 text-black" />,
      title: "Cloud Engineering",
      description:
        "Microsoft Azure solutions for scalable, secure, and reliable cloud infrastructure. I design and implement cloud architectures that optimize performance and reduce costs.",
      features: [
        "Azure infrastructure setup and management",
        "Cloud migration strategies",
        "Serverless application development",
        "DevOps implementation",
        "Continuous integration/deployment",
        "Cloud security implementation",
        "Cost optimization strategies",
      ],
    },
    {
      icon: <Cpu className="h-12 w-12 text-black" />,
      title: "WordPress Plugin Development",
      description:
        "Custom WordPress plugins to extend functionality and create tailored solutions for specific business needs. I develop plugins that enhance your website's capabilities.",
      features: [
        "Custom plugin development",
        "Plugin customization and extension",
        "Integration with third-party services",
        "Performance optimization",
        "Security implementation",
        "Documentation and support",
        "Regular updates and maintenance",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/90 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-2xl text-black">
              DEV<span className="text-blue-600">TOSIN</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium hover:text-blue-600 transition-colors">
              HOME
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-blue-600 transition-colors">
              ABOUT
            </Link>
            <Link href="/services" className="text-sm font-medium text-blue-600">
              SERVICES
            </Link>
            <Link href="/projects" className="text-sm font-medium hover:text-blue-600 transition-colors">
              PROJECTS
            </Link>
            <Link href="/terminal" className="text-sm font-medium hover:text-blue-600 transition-colors">
              TERMINAL
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
              CONTACT
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-black hover:text-blue-600"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && isMobile && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <Link
                href="/"
                className="text-sm font-medium hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium text-blue-600 py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                SERVICES
              </Link>
              <Link
                href="/projects"
                className="text-sm font-medium hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                PROJECTS
              </Link>
              <Link
                href="/terminal"
                className="text-sm font-medium hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                TERMINAL
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <div className="pt-32 pb-16 container mx-auto px-4">
        <ScrollReveal direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">My Services</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I offer a comprehensive range of digital services to help businesses establish and enhance their online
              presence. Each service is tailored to meet your specific needs and goals.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-16">
          {services.map((service, index) => (
            <ScrollReveal key={index} direction="up" delay={0.2 + index * 0.1} threshold={0.1}>
              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg hover:border-blue-300 hover:shadow-xl transition-all duration-500">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1 flex flex-col items-center md:items-start">
                    <div className="bg-gray-100 p-6 rounded-lg border border-gray-200 mb-6 hover:bg-blue-100 transition-colors">
                      {service.icon}
                    </div>
                    <h2 className="text-2xl font-bold mb-4 text-center md:text-left text-black">{service.title}</h2>
                    <div className="h-1 w-20 bg-blue-600 rounded-full mb-6" />
                  </div>

                  <div className="md:col-span-2">
                    <p className="text-gray-600 mb-6">{service.description}</p>

                    <h3 className="text-lg font-semibold mb-4 text-black">What's Included:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex justify-end">
                      <Link href="/contact">
                        <Button className="bg-black text-white hover:bg-blue-600">Inquire About This Service</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.3}>
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4 text-black">Ready to Start Your Project?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Let's collaborate to bring your vision to life. Contact me today to discuss your project requirements and
              how I can help you achieve your goals.
            </p>
            <Link href="/contact">
              <Button className="bg-black text-white hover:bg-blue-600 px-8 py-6 text-lg">Get In Touch</Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Dev Tosin. All rights reserved.</p>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  )
}
