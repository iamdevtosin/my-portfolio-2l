"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import ScrollReveal from "@/components/scroll-reveal"
import ScrollToTop from "@/components/scroll-to-top"

export default function ProjectsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [filter, setFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const projects = [
    {
      title: "ASO Nigeria",
      description: "Fashion e-commerce platform featuring vibrant African designs and contemporary styles.",
      image:
        "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/asonigeria.com21-SsxlnDbJBZHq5Plllq8Jg8jJFidvwv.png",
      technologies: ["WordPress", "E-commerce", "Custom Design"],
      liveUrl: "https://asonigeria.com/select-store/",
      category: "ecommerce",
    },
    {
      title: "Keoo AI",
      description:
        "AI-powered content creation platform that turns ideas into stunning videos, images, and content with advanced AI tools.",
      image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/keoo-AI",
      technologies: ["WordPress", "React", "AI", "Content Creation"],
      liveUrl: "https://keoo.ai",
      category: "wordpress",
    },
    {
      title: "Yomi Casual",
      description: "High-end fashion brand e-commerce platform showcasing luxury African-inspired clothing.",
      image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/yomicasual.africa.latest",
      technologies: ["WordPress", "WooCommerce", "Custom Design", "Inventory Management"],
      liveUrl: "https://yomicasual.africa",
      category: "ecommerce",
    },
    {
      title: "Olivia Rose Media Agency",
      description:
        "Digital media agency specializing in content creation, social media management, and brand development.",
      image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/oliviarosemediaagency",
      technologies: ["WordPress", "Digital Marketing", "Content Strategy"],
      liveUrl: "https://oliviarosemediaagency.com",
      category: "wordpress",
    },
    {
      title: "Cetrix",
      description: "Fintech platform for bill payments, airtime, data, and subscription management.",
      image:
        "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/cetrix.org%20landingpage%20fintech11-rdmWEm0qSmFvNHyw0res2kantKOdo3.png",
      technologies: ["React", "Fintech", "Laravel", "UI/UX Design"],
      liveUrl: "https://cetrix.org",
      category: "react",
    },
    {
      title: "Xapic Consulting",
      description: "Xapic Consulting is a modern consulting firm offering digital and business solutions.",
      image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/xapic.webp",
      technologies: ["WordPress", "Laravel", "Agency"],
      liveUrl: "https://xapicconsulting.com/",
      category: "wordpress",
    },
    {
      title: "Land Investigate",
      description: "Property verification platform for investigating and validating land ownership in Nigeria.",
      image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/landinvestiga-min.png",
      technologies: ["WordPress", "Laravel", "Custom Development"],
      liveUrl: "https://landinvestigate.com/dev/",
      category: "wordpress",
    },
    {
      title: "Oasis Gem Spa",
      description: "Luxury spa and wellness center offering premium beauty and relaxation services.",
      image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/oasisgemspa.com",
      technologies: ["WordPress", "E-commerce", "Booking System"],
      liveUrl: "https://oasisgemspa.com",
      category: "ecommerce",
    },
    {
      title: "Sunny Shoes",
      description: "Handmade footwear store specializing in custom and artisan-crafted shoes.",
      image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/sunnyshoes.ng",
      technologies: ["WordPress", "WooCommerce", "Marketplace"],
      liveUrl: "http://sunnyshoes.ng",
      category: "ecommerce",
    },
    {
      title: "Timbuktu Hub",
      description: "Collaborative workspace and innovation hub providing modern coworking solutions.",
      image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/timbuktuhub.ca",
      technologies: ["WordPress", "Custom Design", "Workspace"],
      liveUrl: "https://timbuktuhub.ca/",
      category: "wordpress",
    },
    {
      title: "LW Digital Z",
      description: "Fashion e-commerce platform with modern design and comprehensive product catalog.",
      image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/lwdigitalz.com.png",
      technologies: ["WordPress", "Fashion", "E-commerce"],
      liveUrl: "https://lwdigitalz.com",
      category: "ecommerce",
    },
    {
      title: "Bstyle",
      description:
        "Fashion store featuring contemporary clothing and lifestyle products with modern design aesthetics.",
      image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/bstyle23.png",
      technologies: ["WordPress", "Fashion", "E-commerce"],
      liveUrl: "https://bstyle.com.ng",
      category: "ecommerce",
    },
    {
      title: "Vanskere",
      description: "E-commerce platform for premium fashion and lifestyle products.",
      image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/vanskere.vom-6X9EYgJKQCHWK8TwvU53ObYI9AKg2o.png",
      technologies: ["WordPress", "E-commerce", "Fashion"],
      liveUrl: "https://vanskere.com",
      category: "ecommerce",
    },
    {
      title: "Nuance Nook",
      description: "Fashion e-commerce platform featuring contemporary clothing and accessories.",
      image:
        "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/nuancenook.ng21-guuRlfTAwetvOE3RY6y0aSAqXAcxmT.png",
      technologies: ["WordPress", "Fashion", "E-commerce"],
      liveUrl: "https://nuancenook.ng",
      category: "ecommerce",
    },
    {
      title: "Ravehost",
      description: "Web hosting and domain registration service with comprehensive hosting center solutions.",
      image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/ravehost.com.ng23.png",
      technologies: ["Next.js", "Web Hosting", "Laravel"],
      liveUrl: "https://ravehost.com.ng",
      category: "nextjs",
    },
    {
      title: "Israel Dia",
      description: "Fashion e-commerce store featuring contemporary clothing and accessories.",
      image:
        "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/israeldia.com%20%282%29-WsxuzJFr2IoXirG8qNNQWNuh6Or20D.png",
      technologies: ["WordPress", "Fashion", "E-commerce"],
      liveUrl: "https://israeldia.com",
      category: "ecommerce",
    },
    {
      title: "Dipaking Homes",
      description: "Real estate platform showcasing premium properties and investment opportunities.",
      image:
        "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/dipakinghomes21-SETsKl5EVGH8RR8liTIyy6DuhXuh0U.png",
      technologies: ["WordPress", "Real Estate", "Property"],
      liveUrl: "https://dipakinghomes.ng",
      category: "wordpress",
    },
    {
      title: "Fabrique by Fabz",
      description: "Fashion brand website featuring contemporary designs and custom tailoring services.",
      image:
        "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/fabriquebyfabz.com-nq37MYER2kDnG59FuFXSd0vYPP4beF.png",
      technologies: ["WordPress", "Fashion", "E-commerce"],
      liveUrl: "https://fabriquebyfabz.com",
      category: "ecommerce",
    },
    {
      title: "Lanre Da Silva Ajayi",
      description: "High-end fashion brand website showcasing luxury African-inspired designs and couture collections.",
      image:
        "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/lanredasilva.com.ng21-ubYOw8wNZD2VPBdwt570sWuTbT7r5E.png",
      technologies: ["WordPress", "Fashion", "E-commerce"],
      liveUrl: "https://lanredasilva.com.ng",
      category: "ecommerce",
    },
    {
      title: "Billis Luxe Home",
      description:
        "Premium home decor and luxury furniture e-commerce platform featuring elegant interior design solutions.",
      image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/bellislux11-gZrN4QAm8OKGeCReDXe9oCDvLmvEjg.png",
      technologies: ["WordPress", "E-commerce", "Home Decor"],
      liveUrl: "https://billisluxehome.com",
      category: "ecommerce",
    },
    {
      title: "Ceora Jewelry",
      description: "Fine jewelry e-commerce platform featuring exquisite handcrafted pieces and luxury accessories.",
      image:
        "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/ceorafinejewelry.com11-NqAEMQoZjFBcoXnFGSPTG0lISaNJhC.png",
      technologies: ["WordPress", "E-commerce", "Jewelry"],
      liveUrl: "https://ceorafinejewelry.com",
      category: "ecommerce",
    },
    {
      title: "Phabeya Chic",
      description: "Contemporary fashion store offering trendy clothing and accessories for the modern woman.",
      image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/phabeya-chic",
      technologies: ["Shopify", "Fashion", "E-commerce"],
      liveUrl: "https://h0smv8-qc.myshopify.com/?pb=0",
      category: "ecommerce",
    },
    {
      title: "Maison Mystic",
      description: "Luxury fashion brand offering mystical and elegant designs with sophisticated styling.",
      image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/maisonmystic",
      technologies: ["WordPress", "Fashion", "E-commerce"],
      liveUrl: "https://themaisonmystic.com",
      category: "ecommerce",
    },
    {
      title: "Roar",
      description:
        "Bold fashion brand featuring contemporary designs and statement pieces for the confident individual.",
      image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/roar1",
      technologies: ["WordPress", "Fashion", "E-commerce"],
      liveUrl: "https://roar.com.ng",
      category: "ecommerce",
    },
    {
      title: "Rave AI",
      description:
        "A web app that lets users train their own AI and generate a script to embed a floating chat icon on their website.",
      image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/rave-ai.webp",
      technologies: ["React", "Node.js", "UI/UX Design"],
      liveUrl: "https://ai.ravedev.com.ng",
      category: "react",
    },
    {
      title: "Tale It Media",
      description: "Digital media agency focused on platform business growth with content strategy implementation.",
      image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/taleitmedia1-Pmhmb9i6CptRg8nbsk4WzZa16G5EsK.webp",
      technologies: ["WordPress", "Content Strategy", "SEO"],
      liveUrl: "https://taleitmedia.com",
      category: "wordpress",
    },
    {
      title: "Myvisaprocess",
      description:
        "Comprehensive visa processing platform providing streamlined visa application services and guidance.",
      image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/myvisaprocess",
      technologies: ["WordPress", "Visa Services", "Government"],
      liveUrl: "https://myvisaprocess.com/",
      category: "wordpress",
    },
    {
      title: "Freak Vault",
      description: "Digital marketplace for creative assets and design resources.",
      image:
        "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/freakvault.com21-MMHwPEhXb3G7ihHwA3uoVA0dxxYyag.png",
      technologies: ["WordPress", "Marketplace", "E-commerce"],
      liveUrl: "https://freakvault.com",
      category: "ecommerce",
    },
    {
      title: "Exekiel Adamu",
      description: "Personal portfolio website showcasing creative work and professional achievements.",
      image:
        "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/exekieladamu.com-mMNCZDZpd5ltuNshpQHuyrIvtdOuH0.png",
      technologies: ["WordPress", "Portfolio", "Personal Brand"],
      liveUrl: "https://exekieladamu.com",
      category: "wordpress",
    },
  ]

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "wordpress", label: "WordPress" },
    { id: "react", label: "React" },
    { id: "nextjs", label: "Next.js" },
    { id: "ecommerce", label: "E-commerce" },
  ]

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = filter === "all" || project.category === filter
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesFilter && matchesSearch
  })

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
            <Link href="/services" className="text-sm font-medium hover:text-blue-600 transition-colors">
              SERVICES
            </Link>
            <Link href="/projects" className="text-sm font-medium text-blue-600">
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
                className="text-sm font-medium hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                SERVICES
              </Link>
              <Link
                href="/projects"
                className="text-sm font-medium text-blue-600 py-2 border-b border-gray-100"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">My Projects</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A showcase of my recent work spanning WordPress development, custom software solutions, e-commerce
              platforms, and modern web applications.
            </p>
          </div>
        </ScrollReveal>

        {/* Filters and Search */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  variant={filter === category.id ? "default" : "outline"}
                  className={
                    filter === category.id
                      ? "bg-black text-white hover:bg-blue-600"
                      : "border-gray-300 text-black hover:bg-blue-600 hover:text-white hover:border-blue-600 bg-transparent"
                  }
                >
                  {category.label}
                </Button>
              ))}
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
              />
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={index} direction="up" delay={0.1 + (index % 3) * 0.1} threshold={0.1}>
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                liveUrl={project.liveUrl}
              />
            </ScrollReveal>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">No projects found matching your criteria.</p>
          </div>
        )}

        <ScrollReveal direction="up" delay={0.3}>
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4 text-black">Have a Project in Mind?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Let's collaborate to bring your vision to life. Contact me today to discuss your project requirements and
              how I can help you achieve your goals.
            </p>
            <Link href="/contact">
              <Button className="bg-black text-white hover:bg-blue-600 px-8 py-6 text-lg">Start Your Project</Button>
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
