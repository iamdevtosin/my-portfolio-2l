"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronRight,
  Code,
  Globe,
  Search,
  ShoppingBag,
  Database,
  Cpu,
  Twitter,
  Instagram,
  Menu,
  X,
  Cloud,
  Phone,
  MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import HeroAnimation from "@/components/hero-animation"
import ProjectCard from "@/components/project-card"
import ServiceCard from "@/components/service-card"
import ChatBot from "@/components/chat-bot"
import { useState, useEffect } from "react"
import ScrollToTop from "@/components/scroll-to-top"
import Preloader from "@/components/preloader"
import { useRouter } from "next/navigation"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const router = useRouter()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => {
      window.removeEventListener("resize", checkMobile)
      clearTimeout(timer)
    }
  }, [])

  if (isLoading) {
    return <Preloader />
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-inter">
      {/* Navbar */}
      <header className="fixed w-full z-50 backdrop-blur-md bg-black/50 border-b border-[#0ff]/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#0ff] to-[#f0f]">
              DEV<span className="text-white">TOSIN</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm hover:text-[#0ff] transition-colors">
              HOME
            </Link>
            <Link href="/about" className="text-sm hover:text-[#0ff] transition-colors">
              ABOUT
            </Link>
            <Link href="/pricing" className="text-sm hover:text-[#0ff] transition-colors">
              PRICING
            </Link>
            <Link href="/services" className="text-sm hover:text-[#0ff] transition-colors">
              SERVICES
            </Link>
            <Link href="/projects" className="text-sm hover:text-[#0ff] transition-colors">
              PROJECTS
            </Link>
            <Link href="/blog" className="text-sm hover:text-[#0ff] transition-colors">
              BLOG
            </Link>
            <Link href="/resources" className="text-sm hover:text-[#0ff] transition-colors">
              RESOURCES
            </Link>
            <Link href="/terminal" className="text-sm hover:text-[#0ff] transition-colors">
              TERMINAL
            </Link>
            <Link href="/contact" className="text-sm hover:text-[#0ff] transition-colors">
              CONTACT
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/contact">
              <Button variant="outline" className="border-[#0ff] text-[#0ff] hover:bg-[#0ff]/10 hidden md:flex">
                <Mail className="mr-2 h-4 w-4" /> Hire Me
              </Button>
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white hover:text-[#0ff]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && isMobile && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-[#0ff]/20 py-4">
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <Link
                href="/"
                className="text-sm hover:text-[#0ff] transition-colors py-2 border-b border-[#0ff]/10"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                href="/about"
                className="text-sm hover:text-[#0ff] transition-colors py-2 border-b border-[#0ff]/10"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                href="/services"
                className="text-sm hover:text-[#0ff] transition-colors py-2 border-b border-[#0ff]/10"
                onClick={() => setIsMenuOpen(false)}
              >
                SERVICES
              </Link>
              <Link
                href="/projects"
                className="text-sm hover:text-[#0ff] transition-colors py-2 border-b border-[#0ff]/10"
                onClick={() => setIsMenuOpen(false)}
              >
                PROJECTS
              </Link>
              <Link
                href="/blog"
                className="text-sm hover:text-[#0ff] transition-colors py-2 border-b border-[#0ff]/10"
                onClick={() => setIsMenuOpen(false)}
              >
                BLOG
              </Link>
              <Link
                href="/resources"
                className="text-sm hover:text-[#0ff] transition-colors py-2 border-b border-[#0ff]/10"
                onClick={() => setIsMenuOpen(false)}
              >
                RESOURCES
              </Link>
              <Link
                href="/terminal"
                className="text-sm hover:text-[#0ff] transition-colors py-2 border-b border-[#0ff]/10"
                onClick={() => setIsMenuOpen(false)}
              >
                TERMINAL
              </Link>
              <Link
                href="/contact"
                className="text-sm hover:text-[#0ff] transition-colors py-2 border-b border-[#0ff]/10"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>
              <div className="flex gap-4 pt-2">
                <Link href="https://github.com/iamdevtosin" target="_blank" className="text-gray-400 hover:text-[#0ff]">
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="https://linkedin.com/in/devtosin"
                  target="_blank"
                  className="text-gray-400 hover:text-[#0ff]"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="https://twitter.com/devtosin" target="_blank" className="text-gray-400 hover:text-[#0ff]">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="https://instagram.com/dev_tosin"
                  target="_blank"
                  className="text-gray-400 hover:text-[#0ff]"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-30 z-0" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-[#0ff]/10 text-[#0ff] hover:bg-[#0ff]/20 px-4 py-1">Oluwatosin Aladetoyinbo</Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">I Build </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ff] to-[#f0f]">
                  Digital Experiences
                </span>
              </h1>
              <p className="text-gray-400 text-lg max-w-lg">
                WordPress Developer • Software Engineer • SEO Specialist • Shopify Expert • Website Manager • Cloud
                Engineer
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/projects">
                  <Button className="bg-gradient-to-r from-[#0ff] to-[#f0f] text-black hover:opacity-90">
                    View Projects <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-[#0ff] text-[#0ff] hover:bg-[#0ff]/10">
                    Contact Me
                  </Button>
                </Link>
              </div>
              <div className="flex gap-4 pt-4">
                <Link href="https://github.com/iamdevtosin" target="_blank" className="text-gray-400 hover:text-[#0ff]">
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href="https://linkedin.com/in/devtosin"
                  target="_blank"
                  className="text-gray-400 hover:text-[#0ff]"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="https://twitter.com/devtosin" target="_blank" className="text-gray-400 hover:text-[#0ff]">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link
                  href="https://instagram.com/dev_tosin"
                  target="_blank"
                  className="text-gray-400 hover:text-[#0ff]"
                >
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="mailto:officialdevtosin@gmail.com" className="text-gray-400 hover:text-[#0ff]">
                  <Mail className="h-6 w-6" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <HeroAnimation />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ff]/50 to-transparent" />
      </section>

      {/* Projects Section - MOVED BEFORE SERVICES */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ff] to-[#f0f]">
                Featured Projects
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A selection of my recent work across various industries and technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "ASO Nigeria",
                description: "Fashion e-commerce platform featuring vibrant African designs and contemporary styles.",
                image: "/images/asonigeria.com21.png",
                tags: ["WordPress", "E-commerce", "Custom Design"],
                link: "https://asonigeria.com/select-store/",
              },
              {
                title: "Xapic Consulting",
                description: "Xapic Consulting is a modern consulting firm offering digital and business solutions.",
                image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/xapic.webp",
                tags: ["WordPress", "Laravel", "Agency"],
                link: "https://xapicconsulting.com/",
              },
              {
                title: "Myvisaprocess",
                description:
                  "Comprehensive visa processing platform providing streamlined visa application services and guidance.",
                image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/myvisaprocess",
                tags: ["WordPress", "Visa Services", "Government"],
                link: "https://myvisaprocess.com/",
              },
              {
                title: "Cetrix",
                description: "Fintech platform for bill payments, airtime, data, and subscription management.",
                image:
                  "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/cetrix.org%20landingpage%20fintech11-rdmWEm0qSmFvNHyw0res2kantKOdo3.png",
                tags: ["React", "Fintech", "UI/UX Design"],
                link: "https://cetrix.org",
              },
              {
                title: "Land Investigate",
                description:
                  "Property verification platform for investigating and validating land ownership in Nigeria.",
                image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/landinvestiga-min.png",
                tags: ["WordPress", "Laravel", "Custom Development"],
                link: "https://landinvestigate.com",
              },
              {
                title: "Rave AI",
                description:
                  "A web app that lets users train their own AI and generate a script to embed a floating chat icon on their website.",
                image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/rave-ai.webp",
                tags: ["React", "Node.js", "UI/UX Design"],
                link: "https://ai.ravedev.com.ng",
              },
              {
                title: "LW Digital Z",
                description: "Fashion e-commerce platform with modern design and comprehensive product catalog.",
                image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/lwdigitalz.com.png",
                tags: ["WordPress", "Fashion", "E-commerce"],
                link: "https://lwdigitalz.com",
              },
              {
                title: "Ravehost",
                description: "Web hosting and domain registration service with comprehensive hosting center solutions.",
                image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/ravehost.com.ng23.png",
                tags: ["Next.js", "Web Services", "UI/UX Design"],
                link: "https://ravehost.com.ng",
              },
              {
                title: "Israel Dia",
                description: "Fashion e-commerce store featuring contemporary clothing and accessories.",
                image:
                  "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/israeldia.com%20%282%29-WsxuzJFr2IoXirG8qNNQWNuh6Or20D.png",
                tags: ["WordPress", "Fashion", "E-commerce"],
                link: "https://israeldia.com",
              },
              {
                title: "Olivia Rose Media",
                description: "Media production company specializing in creative content and digital storytelling.",
                image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/oliviarosemedia.webp",
                tags: ["WordPress", "Media", "Portfolio"],
                link: "https://oliviarosemedia.com",
              },
              {
                title: "Vanskere",
                description:
                  "African luxury menswear brand featuring modern elegance and traditional-inspired designs.",
                image:
                  "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/vanskere.vom-6X9EYgJKQCHWK8TwvU53ObYI9AKg2o.png",
                tags: ["Shopify", "Fashion", "E-commerce"],
                link: "https://vanskere.com",
              },
              {
                title: "Bellislux",
                description: "Luxury real estate platform featuring high-end properties and personalized search.",
                image:
                  "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/bellislux11-gZrN4QAm8OKGeCReDXe9oCDvLmvEjg.png",
                tags: ["WordPress", "Real Estate", "Property Listings"],
                link: "https://bellisluxerealty.com/home-2/",
              },
              {
                title: "Tale It Media",
                description:
                  "Digital media agency focused on platform business growth with content strategy implementation.",
                image:
                  "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/taleitmedia1-Pmhmb9i6CptRg8nbsk4WzZa16G5EsK.webp",
                tags: ["WordPress", "Content Strategy", "SEO"],
                link: "https://taleitmedia.com",
              },
            ].map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                link={project.link}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/projects">
              <Button variant="outline" className="border-[#0ff] text-[#0ff] hover:bg-[#0ff]/10">
                View All Projects <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 relative">
              <div className="relative rounded-lg overflow-hidden border border-[#0ff]/20 shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                <Image
                  src="https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/dev-tosin.webp"
                  alt="Dev Tosin"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-black p-4 border border-[#0ff]/20 rounded-lg">
                <div className="text-[#0ff] font-mono text-sm">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-3 h-3 bg-[#0f0] rounded-full animate-pulse" />
                    <span>Status: Available for Projects</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ff] to-[#f0f]">About Me</span>
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-[#0ff] to-[#f0f] rounded-full mb-6" />
              </div>
              <p className="text-gray-400">
                I'm Oluwatosin Aladetoyinbo, a versatile web developer and digital specialist based in Nigeria. With
                expertise spanning WordPress, Shopify, SEO, software development, and cloud engineering with Microsoft
                Azure, I create digital solutions that help businesses thrive online.
              </p>
              <p className="text-gray-400">
                My approach combines technical expertise with creative problem-solving to deliver websites and
                applications that not only look great but also perform exceptionally well. I also build custom WordPress
                plugins to extend functionality and create tailored solutions for specific business needs.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <h3 className="text-[#0ff] font-mono text-sm mb-2">Experience</h3>
                  <p className="text-white font-bold text-2xl">9+ Years</p>
                </div>
                <div>
                  <h3 className="text-[#0ff] font-mono text-sm mb-2">Projects</h3>
                  <p className="text-white font-bold text-2xl">100+</p>
                </div>
                <div>
                  <h3 className="text-[#0ff] font-mono text-sm mb-2">Clients</h3>
                  <p className="text-white font-bold text-2xl">67+</p>
                </div>
                <div>
                  <h3 className="text-[#0ff] font-mono text-sm mb-2">Satisfaction</h3>
                  <p className="text-white font-bold text-2xl">100%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative bg-black/50">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ff] to-[#f0f]">My Services</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I offer a comprehensive range of digital services to help businesses establish and enhance their online
              presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Globe className="h-10 w-10 text-[#0ff]" />,
                title: "WordPress Development",
                description: "Custom WordPress websites with responsive design, optimized for performance and SEO.",
              },
              {
                icon: <Code className="h-10 w-10 text-[#f0f]" />,
                title: "Software Development",
                description: "Bespoke software solutions tailored to your specific business requirements.",
              },
              {
                icon: <Search className="h-10 w-10 text-[#0ff]" />,
                title: "SEO Optimization",
                description: "Improve your search engine rankings and drive organic traffic to your website.",
              },
              {
                icon: <ShoppingBag className="h-10 w-10 text-[#f0f]" />,
                title: "Shopify Development",
                description: "Custom Shopify stores with seamless checkout experiences and conversion optimization.",
              },
              {
                icon: <Database className="h-10 w-10 text-[#0ff]" />,
                title: "Website Management",
                description: "Comprehensive website maintenance, updates, and security monitoring.",
              },
              {
                icon: <Cloud className="h-10 w-10 text-[#f0f]" />,
                title: "Cloud Engineering",
                description: "Microsoft Azure solutions for scalable, secure, and reliable cloud infrastructure.",
              },
              {
                icon: <Cpu className="h-10 w-10 text-[#0ff]" />,
                title: "WordPress Plugin Development",
                description: "Custom WordPress plugins to extend functionality and create tailored solutions.",
              },
            ].map((service, index) => (
              <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/services">
              <Button className="bg-gradient-to-r from-[#0ff] to-[#f0f] text-black hover:opacity-90">
                Explore Services <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 relative bg-black/50">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ff] to-[#f0f]">
                Web Care Packages
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive website maintenance and support packages to keep your digital presence running smoothly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Standard Plan */}
            <Card className="bg-black/60 border border-[#0ff]/20 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-[#0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2">Standard Plan</h3>
                  <div className="h-1 w-12 bg-[#0ff] rounded-full" />
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">₦300,000</span>
                  <span className="text-gray-400">/year</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#0ff] shrink-0 mt-0.5" />
                    <span className="text-gray-300">Domain & hosting renewal</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#0ff] shrink-0 mt-0.5" />
                    <span className="text-gray-300">Monthly website maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#0ff] shrink-0 mt-0.5" />
                    <span className="text-gray-300">Minor text & image edits (5/month)</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#0ff] shrink-0 mt-0.5" />
                    <span className="text-gray-300">Uptime monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#0ff] shrink-0 mt-0.5" />
                    <span className="text-gray-300">WhatsApp support</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#0ff] shrink-0 mt-0.5" />
                    <span className="text-gray-300">48-hour response time</span>
                  </li>
                </ul>
                {/* Standard Plan - Replace the Button */}
                <div
                  onClick={() => (window.location.href = "/contact")}
                  className="w-full bg-[#0ff]/10 text-[#0ff] hover:bg-[#0ff]/20 border border-[#0ff]/50 px-4 py-2 rounded-md font-medium transition-colors cursor-pointer text-center"
                >
                  Get Started
                </div>
              </CardContent>
            </Card>

            {/* Pro Support Plan */}
            <Card className="bg-black/60 border border-[#f0f]/30 overflow-hidden relative group transform scale-105 shadow-[0_0_25px_rgba(255,0,255,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-b from-[#f0f]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#0ff] to-[#f0f] text-black text-center text-sm font-bold py-1">
                MOST POPULAR
              </div>
              <CardContent className="p-6 pt-10">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2">Pro Support Plan</h3>
                  <div className="h-1 w-12 bg-[#f0f] rounded-full" />
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">₦500,000</span>
                  <span className="text-gray-400">/year</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#f0f] shrink-0 mt-0.5" />
                    <span className="text-gray-300">Everything in Standard Plan</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#f0f] shrink-0 mt-0.5" />
                    <span className="text-gray-300">3 major feature integrations yearly</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#f0f] shrink-0 mt-0.5" />
                    <span className="text-gray-300">6 priority content updates monthly</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#f0f] shrink-0 mt-0.5" />
                    <span className="text-gray-300">SEO monitoring & basic reports</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#f0f] shrink-0 mt-0.5" />
                    <span className="text-gray-300">Priority WhatsApp support</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#f0f] shrink-0 mt-0.5" />
                    <span className="text-gray-300">Google Meet video calls (2/month)</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#f0f] shrink-0 mt-0.5" />
                    <span className="text-gray-300">Instant response time</span>
                  </li>
                </ul>
                {/* Pro Support Plan - Replace the Button */}
                <div
                  onClick={() => (window.location.href = "/contact")}
                  className="w-full bg-gradient-to-r from-[#0ff] to-[#f0f] text-black hover:opacity-90 px-4 py-2 rounded-md font-medium transition-opacity cursor-pointer text-center"
                >
                  Get Started
                </div>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="bg-black/60 border border-[#0ff]/20 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-[#0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2">Premium Plan</h3>
                  <div className="h-1 w-12 bg-[#0ff] rounded-full" />
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">₦800,000</span>
                  <span className="text-gray-400">/year</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#0ff] shrink-0 mt-0.5" />
                    <span className="text-gray-300">Everything in Pro Support Plan</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#0ff] shrink-0 mt-0.5" />
                    <span className="text-gray-300">Unlimited content updates</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#0ff] shrink-0 mt-0.5" />
                    <span className="text-gray-300">Advanced SEO optimization</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#0ff] shrink-0 mt-0.5" />
                    <span className="text-gray-300">Monthly performance reports</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#0ff] shrink-0 mt-0.5" />
                    <span className="text-gray-300">Dedicated account manager</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#0ff] shrink-0 mt-0.5" />
                    <span className="text-gray-300">24/7 priority support</span>
                  </li>
                </ul>
                {/* Premium Plan - Replace the Button */}
                <div
                  onClick={() => (window.location.href = "/contact")}
                  className="w-full bg-[#0ff]/10 text-[#0ff] hover:bg-[#0ff]/20 border border-[#0ff]/50 px-4 py-2 rounded-md font-medium transition-colors cursor-pointer text-center"
                >
                  Get Started
                </div>
              </CardContent>
            </Card>

            {/* Partner Retainer Plan - NEW */}
            <Card className="bg-black/60 border border-[#0ff]/30 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-[#0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2">Partner Retainer Plan</h3>
                  <div className="h-1 w-12 bg-[#0ff] rounded-full" />
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">₦150,000</span>
                  <span className="text-gray-400">/month</span>
                  <p className="text-xs text-[#0ff] mt-1">Only pay when you request support</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#0ff] shrink-0 mt-0.5" />
                    <span className="text-gray-300">Full website management</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#0ff] shrink-0 mt-0.5" />
                    <span className="text-gray-300">Unlimited feature integrations</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#0ff] shrink-0 mt-0.5" />
                    <span className="text-gray-300">Dedicated developer access</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#0ff] shrink-0 mt-0.5" />
                    <span className="text-gray-300">24/7 technical support</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#0ff] shrink-0 mt-0.5" />
                    <span className="text-gray-300">Unlimited strategy calls</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#0ff] shrink-0 mt-0.5" />
                    <span className="text-gray-300">Weekly reports & consultation</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#0ff] shrink-0 mt-0.5" />
                    <span className="text-gray-300">Funnel & marketing setup</span>
                  </li>
                </ul>
                {/* Partner Retainer Plan - Replace the Button */}
                <div
                  onClick={() => (window.location.href = "/contact")}
                  className="w-full bg-[#0ff]/10 text-[#0ff] hover:bg-[#0ff]/20 border border-[#0ff]/50 px-4 py-2 rounded-md font-medium transition-colors cursor-pointer text-center"
                >
                  Get Started
                </div>
                <p className="text-xs mt-3 text-center text-gray-400">
                  *Hosting & Domain billed separately: ₦200,000/year
                </p>
              </CardContent>
            </Card>

            {/* Enterprise Plan - MOVED TO LAST */}
            <Card className="bg-black/60 border border-[#0ff]/20 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-[#0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2">Enterprise Solutions</h3>
                  <div className="h-1 w-12 bg-[#0ff] rounded-full" />
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">Custom</span>
                  <span className="text-gray-400">/project</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#0ff] shrink-0 mt-0.5" />
                    <span className="text-gray-300">Fintech product development</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#0ff] shrink-0 mt-0.5" />
                    <span className="text-gray-300">Custom enterprise applications</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#0ff] shrink-0 mt-0.5" />
                    <span className="text-gray-300">Dedicated development team</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#0ff] shrink-0 mt-0.5" />
                    <span className="text-gray-300">Comprehensive consultation</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#0ff] shrink-0 mt-0.5" />
                    <span className="text-gray-300">Tailored maintenance plans</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#0ff] shrink-0 mt-0.5" />
                    <span className="text-gray-300">Partner retainer package</span>
                  </li>
                </ul>
                {/* Enterprise Plan - Replace the Button */}
                <div
                  onClick={() => (window.location.href = "/contact")}
                  className="w-full bg-[#0ff]/10 text-[#0ff] hover:bg-[#0ff]/20 border border-[#0ff]/50 px-4 py-2 rounded-md font-medium transition-colors cursor-pointer text-center"
                >
                  Contact for Consultation
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Need a custom plan? Contact me for a tailored solution.</p>
            <Link href="/contact">
              <Button variant="outline" className="border-[#0ff] text-[#0ff] hover:bg-[#0ff]/10">
                Contact for Custom Plan
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ff] to-[#f0f]">
                Latest Blog Posts
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Insights, tutorials, and guides to help you navigate the digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <Card className="bg-black/60 border border-[#0ff]/20 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-[#0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="h-48 bg-gradient-to-r from-[#0ff]/10 to-[#f0f]/10 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Globe className="h-16 w-16 text-[#0ff]" />
                </div>
              </div>
              <CardContent className="p-6">
                <Badge className="bg-[#0ff]/10 text-[#0ff] hover:bg-[#0ff]/20 mb-3">WordPress</Badge>
                <h3 className="text-xl font-bold mb-2">Common WordPress Errors and How to Fix Them</h3>
                <p className="text-gray-400 mb-4">
                  Encountering errors in WordPress can be frustrating. Learn how to troubleshoot and fix the most common
                  WordPress errors including the white screen of death, database connection errors, and plugin
                  conflicts.
                </p>
                {/* Blog Post 1 */}
                <div
                  onClick={() => (window.location.href = "/blog/wordpress-errors")}
                  className="inline-flex items-center text-[#0ff] hover:text-[#0ff]/80 font-medium cursor-pointer"
                >
                  Read More <ChevronRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>

            {/* Blog Post 2 */}
            <Card className="bg-black/60 border border-[#0ff]/20 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-[#0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="h-48 bg-gradient-to-r from-[#0ff]/10 to-[#f0f]/10 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Cloud className="h-16 w-16 text-[#f0f]" />
                </div>
              </div>
              <CardContent className="p-6">
                <Badge className="bg-[#f0f]/10 text-[#f0f] hover:bg-[#f0f]/20 mb-3">Azure</Badge>
                <h3 className="text-xl font-bold mb-2">Creating a Virtual Machine on Microsoft Azure</h3>
                <p className="text-gray-400 mb-4">
                  Microsoft Azure offers powerful cloud computing capabilities. This guide walks you through the process
                  of creating and configuring a virtual machine on Azure, including selecting the right VM size and
                  setting up networking.
                </p>
                {/* Blog Post 2 */}
                <div
                  onClick={() => (window.location.href = "/blog/azure-vm")}
                  className="inline-flex items-center text-[#f0f] hover:text-[#f0f]/80 font-medium cursor-pointer"
                >
                  Read More <ChevronRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>

            {/* Blog Post 3 */}
            <Card className="bg-black/60 border border-[#0ff]/20 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-[#0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="h-48 bg-gradient-to-r from-[#0ff]/10 to-[#f0f]/10 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <ShoppingBag className="h-16 w-16 text-[#0ff]" />
                </div>
              </div>
              <CardContent className="p-6">
                <Badge className="bg-[#0ff]/10 text-[#0ff] hover:bg-[#0ff]/20 mb-3">WooCommerce</Badge>
                <h3 className="text-xl font-bold mb-2">Using WCFM – Frontend Manager for WooCommerce</h3>
                <p className="text-gray-400 mb-4">
                  WCFM is a powerful frontend manager for WooCommerce that allows vendors to manage their products,
                  orders, and store from the frontend. Learn how to set up and configure WCFM for your multi-vendor
                  marketplace.
                </p>
                {/* Blog Post 3 */}
                <div
                  onClick={() => (window.location.href = "/blog/wcfm-guide")}
                  className="inline-flex items-center text-[#0ff] hover:text-[#0ff]/80 font-medium cursor-pointer"
                >
                  Read More <ChevronRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>

            {/* Blog Post 4 */}
            <Card className="bg-black/60 border border-[#0ff]/20 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-[#0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="h-48 bg-gradient-to-r from-[#0ff]/10 to-[#f0f]/10 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code className="h-16 w-16 text-[#f0f]" />
                </div>
              </div>
              <CardContent className="p-6">
                <Badge className="bg-[#f0f]/10 text-[#f0f] hover:bg-[#f0f]/20 mb-3">Elementor</Badge>
                <h3 className="text-xl font-bold mb-2">How to Edit Pages in Elementor Like a Pro</h3>
                <p className="text-gray-400 mb-4">
                  Elementor is one of the most popular page builders for WordPress. This guide covers essential
                  techniques for editing pages in Elementor, including using templates, creating custom sections, and
                  optimizing for mobile.
                </p>
                {/* Blog Post 4 */}
                <div
                  onClick={() => (window.location.href = "/blog/elementor-editing")}
                  className="inline-flex items-center text-[#f0f] hover:text-[#f0f]/80 font-medium cursor-pointer"
                >
                  Read More <ChevronRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>

            {/* Blog Post 5 */}
            <Card className="bg-black/60 border border-[#0ff]/20 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-[#0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="h-48 bg-gradient-to-r from-[#0ff]/10 to-[#f0f]/10 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Cpu className="h-16 w-16 text-[#0ff]" />
                </div>
              </div>
              <CardContent className="p-6">
                <Badge className="bg-[#0ff]/10 text-[#0ff] hover:bg-[#0ff]/20 mb-3">Tech Skills</Badge>
                <h3 className="text-xl font-bold mb-2">Best Selling Tech Skills in 2025</h3>
                <p className="text-gray-400 mb-4">
                  The tech landscape is constantly evolving. Discover the most in-demand tech skills for 2025, including
                  AI development, cloud engineering, cybersecurity, and blockchain technology, and how to position
                  yourself for success.
                </p>
                {/* Blog Post 5 */}
                <div
                  onClick={() => (window.location.href = "/blog/tech-skills-2025")}
                  className="inline-flex items-center text-[#0ff] hover:text-[#0ff]/80 font-medium cursor-pointer"
                >
                  Read More <ChevronRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>

            {/* Blog Post 6 */}
            <Card className="bg-black/60 border border-[#0ff]/20 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-[#0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="h-48 bg-gradient-to-r from-[#0ff]/10 to-[#f0f]/10 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Globe className="h-16 w-16 text-[#f0f]" />
                </div>
              </div>
              <CardContent className="p-6">
                <Badge className="bg-[#f0f]/10 text-[#f0f] hover:bg-[#f0f]/20 mb-3">Hosting Business</Badge>
                <h3 className="text-xl font-bold mb-2">How to Start a Domain and Hosting Company in Nigeria</h3>
                <p className="text-gray-400 mb-4">
                  Starting a domain and hosting company in Nigeria can be a lucrative business opportunity. Learn about
                  the essential steps, required investments, and strategies for success in the competitive web hosting
                  market.
                </p>
                {/* Blog Post 6 */}
                <div
                  onClick={() => window.open("https://ravehost.com.ng/start-your-hosting-company.php", "_blank")}
                  className="inline-flex items-center text-[#f0f] hover:text-[#f0f]/80 font-medium cursor-pointer"
                >
                  Read More & Purchase eBook <ChevronRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Link href="/blog">
              <Button variant="outline" className="border-[#0ff] text-[#0ff] hover:bg-[#0ff]/10">
                View All Articles <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative bg-black/60">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ff] to-[#f0f]">Get In Touch</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or need assistance with your digital presence? I'm here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-black/60 border border-[#0ff]/20 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-[#0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-[#0ff]/10 p-4 rounded-full mb-4">
                  <Mail className="h-6 w-6 text-[#0ff]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-gray-400 mb-4">For inquiries and project discussions</p>
                <a href="mailto:officialdevtosin@gmail.com" className="text-[#0ff] hover:underline">
                  officialdevtosin@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border border-[#f0f]/30 overflow-hidden relative group transform scale-105 shadow-[0_0_25px_rgba(255,0,255,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-b from-[#f0f]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-[#f0f]/10 p-4 rounded-full mb-4">
                  <Phone className="h-6 w-6 text-[#f0f]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p className="text-gray-400 mb-4">Available for calls and WhatsApp</p>
                <a href="tel:+2349011570271" className="text-[#f0f] hover:underline">
                  +234 901 157 0271
                </a>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border border-[#0ff]/20 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-[#0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-[#0ff]/10 p-4 rounded-full mb-4">
                  <MapPin className="h-6 w-6 text-[#0ff]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Location</h3>
                <p className="text-gray-400 mb-4">Based in</p>
                <p className="text-white">Lagos, Nigeria</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-400 mb-6 text-center max-w-2xl">
              Ready to discuss your project? Reach out through any of the channels above or use the contact form on the
              contact page.
            </p>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-[#0ff] to-[#f0f] text-black hover:opacity-90">
                Contact Form <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[#0ff]/20 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="flex items-center gap-2">
                <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#0ff] to-[#f0f]">
                  DEV<span className="text-white">TOSIN</span>
                </span>
              </Link>
              <p className="text-gray-400 text-sm mt-2">© {new Date().getFullYear()} Dev Tosin. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap gap-6">
              <Link href="/about" className="text-sm text-gray-400 hover:text-[#0ff]">
                About
              </Link>
              <Link href="/services" className="text-sm text-gray-400 hover:text-[#0ff]">
                Services
              </Link>
              <Link href="/projects" className="text-sm text-gray-400 hover:text-[#0ff]">
                Projects
              </Link>
              <Link href="#pricing" className="text-sm text-gray-400 hover:text-[#0ff]">
                Pricing
              </Link>
              <Link href="/contact" className="text-sm text-gray-400 hover:text-[#0ff]">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500">
              Designed and developed with <span className="text-[#f0f]">♥</span> by Dev Tosin
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Chat Icon */}
      <div className="fixed bottom-6 right-6 z-50">
        <ChatBot />
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}
