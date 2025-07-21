"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Menu,
  X,
  ChevronRight,
  Code,
  Globe,
  Search,
  ShoppingBag,
  Database,
  Cloud,
  Award,
  Users,
  CheckCircle2,
  Briefcase,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import HeroAnimation from "@/components/hero-animation"
import ProjectCard from "@/components/project-card"
import ServiceCard from "@/components/service-card"
import ChatBot from "@/components/chat-bot"
import ScrollToTop from "@/components/scroll-to-top"
import Preloader from "@/components/preloader"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

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

  const services = [
    {
      icon: <Globe className="h-8 w-8 text-black" />,
      title: "WordPress Development",
      description: "Custom WordPress websites with responsive design, optimized for performance and SEO.",
      features: ["Custom Themes", "Plugin Development", "Performance Optimization"],
    },
    {
      icon: <Code className="h-8 w-8 text-black" />,
      title: "Software Development",
      description: "Bespoke software solutions tailored to your specific business requirements.",
      features: ["Custom Applications", "API Development", "Database Design"],
    },
    {
      icon: <Search className="h-8 w-8 text-black" />,
      title: "SEO Optimization",
      description: "Improve your search engine rankings and drive organic traffic to your website.",
      features: ["Technical SEO", "Content Optimization", "Analytics"],
    },
    {
      icon: <ShoppingBag className="h-8 w-8 text-black" />,
      title: "Shopify Development",
      description: "Custom Shopify stores with seamless checkout experiences and conversion optimization.",
      features: ["Custom Themes", "App Integration", "Payment Setup"],
    },
    {
      icon: <Database className="h-8 w-8 text-black" />,
      title: "Website Management",
      description: "Comprehensive website maintenance, updates, and security monitoring.",
      features: ["Regular Updates", "Security Monitoring", "Backup Management"],
    },
    {
      icon: <Cloud className="h-8 w-8 text-black" />,
      title: "Cloud Engineering",
      description: "Microsoft Azure solutions for scalable, secure, and reliable cloud infrastructure.",
      features: ["Azure Deployment", "Scalability", "Security"],
    },
  ]

  const featuredProjects = [
    {
      title: "ASO Nigeria",
      description: "Fashion e-commerce platform featuring vibrant African designs and contemporary styles.",
      image: "/images/asonigeria.com21.png",
      technologies: ["WordPress", "E-commerce", "Custom Design"],
      link: "https://asonigeria.com/select-store/",
    },
    {
      title: "Xapic Consulting",
      description: "Xapic Consulting is a modern consulting firm offering digital and business solutions.",
      image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/xapic.webp",
      technologies: ["WordPress", "Laravel", "Agency"],
      link: "https://xapicconsulting.com/",
    },
    {
      title: "Myvisaprocess",
      description:
        "Comprehensive visa processing platform providing streamlined visa application services and guidance.",
      image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/myvisaprocess",
      technologies: ["WordPress", "Visa Services", "Government"],
      link: "https://myvisaprocess.com/",
    },
    {
      title: "Cetrix",
      description: "Fintech platform for bill payments, airtime, data, and subscription management.",
      image:
        "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/cetrix.org%20landingpage%20fintech11-rdmWEm0qSmFvNHyw0res2kantKOdo3.png",
      technologies: ["React", "Fintech", "UI/UX Design"],
      link: "https://cetrix.org",
    },
    {
      title: "Land Investigate",
      description: "Property verification platform for investigating and validating land ownership in Nigeria.",
      image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/landinvestiga-min.png",
      technologies: ["WordPress", "Laravel", "Custom Development"],
      link: "https://landinvestigate.com",
    },
    {
      title: "Rave AI",
      description:
        "A web app that lets users train their own AI and generate a script to embed a floating chat icon on their website.",
      image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/rave-ai.webp",
      technologies: ["React", "Node.js", "UI/UX Design"],
      link: "https://ai.ravedev.com.ng",
    },
  ]

  const stats = [
    { icon: <Award className="h-8 w-8 text-black" />, label: "Experience", value: "9+ Years" },
    { icon: <Briefcase className="h-8 w-8 text-black" />, label: "Projects", value: "100+" },
    { icon: <Users className="h-8 w-8 text-black" />, label: "Clients", value: "67+" },
    { icon: <CheckCircle2 className="h-8 w-8 text-black" />, label: "Satisfaction", value: "100%" },
  ]

  return (
    <div className="min-h-screen bg-white text-black font-inter">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/90 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-2xl text-black">
              DEV<span className="text-blue-600">TOSIN</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-blue-600">
              HOME
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-blue-600 transition-colors">
              ABOUT
            </Link>
            <Link href="/pricing" className="text-sm font-medium hover:text-blue-600 transition-colors">
              PRICING
            </Link>
            <Link href="/services" className="text-sm font-medium hover:text-blue-600 transition-colors">
              SERVICES
            </Link>
            <Link href="/projects" className="text-sm font-medium hover:text-blue-600 transition-colors">
              PROJECTS
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-blue-600 transition-colors">
              BLOG
            </Link>
            <Link href="/resources" className="text-sm font-medium hover:text-blue-600 transition-colors">
              RESOURCES
            </Link>
            <Link href="/terminal" className="text-sm font-medium hover:text-blue-600 transition-colors">
              TERMINAL
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
              CONTACT
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/contact">
              <Button className="hidden md:flex bg-black text-white hover:bg-blue-600">
                <Mail className="mr-2 h-4 w-4" /> Hire Me
              </Button>
            </Link>
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
                className="text-sm font-medium text-blue-600 py-2 border-b border-gray-100"
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
                href="/pricing"
                className="text-sm font-medium hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                PRICING
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
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
                href="/blog"
                className="text-sm font-medium hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                BLOG
              </Link>
              <Link
                href="/resources"
                className="text-sm font-medium hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                RESOURCES
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
              <div className="flex gap-4 pt-2">
                <Link
                  href="https://github.com/iamdevtosin"
                  target="_blank"
                  className="text-gray-600 hover:text-blue-600"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="https://linkedin.com/in/devtosin"
                  target="_blank"
                  className="text-gray-600 hover:text-blue-600"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="https://twitter.com/devtosin" target="_blank" className="text-gray-600 hover:text-blue-600">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="https://instagram.com/dev_tosin"
                  target="_blank"
                  className="text-gray-600 hover:text-blue-600"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-gray-100 text-black hover:bg-blue-100 px-4 py-1">Oluwatosin Aladetoyinbo</Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight text-black">
                  Hi, I'm <span className="text-blue-600">Tosin</span>
                  <br />
                  Full-Stack Developer
                </h1>
                <p className="text-lg text-gray-600 max-w-lg">
                  WordPress Developer • Software Engineer • SEO Specialist • Shopify Expert • Website Manager • Cloud
                  Engineer
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/projects">
                  <Button className="bg-black text-white hover:bg-blue-600 px-8 py-3 text-lg">
                    View Projects
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-black text-black hover:bg-blue-600 hover:text-white hover:border-blue-600 px-8 py-3 text-lg bg-transparent"
                  >
                    Contact Me
                    <Mail className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-6">
                <Link
                  href="https://github.com/iamdevtosin"
                  target="_blank"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href="https://linkedin.com/in/devtosin"
                  target="_blank"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link
                  href="https://twitter.com/devtosin"
                  target="_blank"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link
                  href="https://instagram.com/dev_tosin"
                  target="_blank"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link
                  href="mailto:officialdevtosin@gmail.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <HeroAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-1">{stat.value}</h3>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 relative">
              <div className="relative rounded-lg overflow-hidden border border-gray-200 shadow-lg">
                <Image
                  src="https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/dev-tosin.webp"
                  alt="Dev Tosin"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
                <div className="text-black font-mono text-sm">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span>Available for Projects</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-2 text-black">About Me</h2>
                <div className="h-1 w-20 bg-blue-600 rounded-full mb-6" />
              </div>
              <p className="text-gray-600">
                I'm Oluwatosin Aladetoyinbo, a versatile web developer and digital specialist based in Nigeria. With
                expertise spanning WordPress, Shopify, SEO, software development, and cloud engineering with Microsoft
                Azure, I create digital solutions that help businesses thrive online.
              </p>
              <p className="text-gray-600">
                My approach combines technical expertise with creative problem-solving to deliver websites and
                applications that not only look great but also perform exceptionally well. I also build custom WordPress
                plugins to extend functionality and create tailored solutions for specific business needs.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <h3 className="text-blue-600 font-mono text-sm mb-2">Experience</h3>
                  <p className="text-black font-bold text-2xl">9+ Years</p>
                </div>
                <div>
                  <h3 className="text-blue-600 font-mono text-sm mb-2">Projects</h3>
                  <p className="text-black font-bold text-2xl">100+</p>
                </div>
                <div>
                  <h3 className="text-blue-600 font-mono text-sm mb-2">Clients</h3>
                  <p className="text-black font-bold text-2xl">67+</p>
                </div>
                <div>
                  <h3 className="text-blue-600 font-mono text-sm mb-2">Satisfaction</h3>
                  <p className="text-black font-bold text-2xl">100%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A selection of my recent work across various industries and technologies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                link={project.link}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/projects">
              <Button className="bg-black text-white hover:bg-blue-600 px-8 py-3">
                View All Projects
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">My Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I offer a comprehensive range of digital services to help businesses establish and enhance their online
              presence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services">
              <Button className="bg-black text-white hover:bg-blue-600 px-8 py-3">
                Explore Services
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Latest Blog Posts</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Insights, tutorials, and guides to help you navigate the digital landscape.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-to-r from-gray-100 to-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Globe className="h-16 w-16 text-gray-400" />
                </div>
              </div>
              <CardContent className="p-6">
                <Badge className="bg-gray-100 text-black hover:bg-blue-100 mb-3">WordPress</Badge>
                <h3 className="text-xl font-bold mb-2 text-black">Common WordPress Errors and How to Fix Them</h3>
                <p className="text-gray-600 mb-4">
                  Encountering errors in WordPress can be frustrating. Learn how to troubleshoot and fix the most common
                  WordPress errors including the white screen of death, database connection errors, and plugin
                  conflicts.
                </p>
                <Link href="/blog/wordpress-errors">
                  <Button
                    variant="outline"
                    className="border-black text-black hover:bg-blue-600 hover:text-white hover:border-blue-600 bg-transparent"
                  >
                    Read More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-to-r from-gray-100 to-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Cloud className="h-16 w-16 text-gray-400" />
                </div>
              </div>
              <CardContent className="p-6">
                <Badge className="bg-gray-100 text-black hover:bg-blue-100 mb-3">Azure</Badge>
                <h3 className="text-xl font-bold mb-2 text-black">Creating a Virtual Machine on Microsoft Azure</h3>
                <p className="text-gray-600 mb-4">
                  Microsoft Azure offers powerful cloud computing capabilities. This guide walks you through the process
                  of creating and configuring a virtual machine on Azure, including selecting the right VM size and
                  setting up networking.
                </p>
                <Link href="/blog/azure-vm">
                  <Button
                    variant="outline"
                    className="border-black text-black hover:bg-blue-600 hover:text-white hover:border-blue-600 bg-transparent"
                  >
                    Read More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-to-r from-gray-100 to-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code className="h-16 w-16 text-gray-400" />
                </div>
              </div>
              <CardContent className="p-6">
                <Badge className="bg-gray-100 text-black hover:bg-blue-100 mb-3">Tech Skills</Badge>
                <h3 className="text-xl font-bold mb-2 text-black">Best Selling Tech Skills in 2025</h3>
                <p className="text-gray-600 mb-4">
                  The tech landscape is constantly evolving. Discover the most in-demand tech skills for 2025, including
                  AI development, cloud engineering, cybersecurity, and blockchain technology, and how to position
                  yourself for success.
                </p>
                <Link href="/blog/tech-skills-2025">
                  <Button
                    variant="outline"
                    className="border-black text-black hover:bg-blue-600 hover:text-white hover:border-blue-600 bg-transparent"
                  >
                    Read More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Link href="/blog">
              <Button className="bg-black text-white hover:bg-blue-600 px-8 py-3">
                View All Posts
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help bring your ideas to life with cutting-edge web development solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-black text-white hover:bg-blue-600 px-8 py-3 text-lg">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </Link>
            <Link href="/pricing">
              <Button
                variant="outline"
                className="border-black text-black hover:bg-blue-600 hover:text-white hover:border-blue-600 px-8 py-3 text-lg bg-transparent"
              >
                View Pricing
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">DEVTOSIN</h3>
              <p className="text-gray-400">Full-Stack Developer crafting exceptional digital experiences.</p>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/iamdevtosin"
                  target="_blank"
                  className="text-gray-400 hover:text-blue-400"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="https://linkedin.com/in/devtosin"
                  target="_blank"
                  className="text-gray-400 hover:text-blue-400"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="https://twitter.com/devtosin" target="_blank" className="text-gray-400 hover:text-blue-400">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="https://instagram.com/dev_tosin"
                  target="_blank"
                  className="text-gray-400 hover:text-blue-400"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/about" className="block text-gray-400 hover:text-white">
                  About
                </Link>
                <Link href="/services" className="block text-gray-400 hover:text-white">
                  Services
                </Link>
                <Link href="/projects" className="block text-gray-400 hover:text-white">
                  Projects
                </Link>
                <Link href="/blog" className="block text-gray-400 hover:text-white">
                  Blog
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2">
                <span className="block text-gray-400">Web Development</span>
                <span className="block text-gray-400">E-commerce Solutions</span>
                <span className="block text-gray-400">Backend Development</span>
                <span className="block text-gray-400">Cloud Solutions</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-400">
                  <Mail className="h-4 w-4" />
                  <span>officialdevtosin@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Phone className="h-4 w-4" />
                  <span>+234 901 157 0271</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="h-4 w-4" />
                  <span>Lagos, Nigeria</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Dev Tosin. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <ChatBot />
      <ScrollToTop />
    </div>
  )
}
