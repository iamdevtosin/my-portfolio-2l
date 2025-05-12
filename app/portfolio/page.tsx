"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Menu, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import ScrollReveal from "@/components/scroll-reveal"
import ScrollToTop from "@/components/scroll-to-top"

export default function PortfolioPage() {
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
      title: "Tale It Media",
      description: "Digital media agency focused on platform business growth with content strategy implementation.",
      image: "/images/taleitmedia1.webp",
      tags: ["WordPress", "Content Strategy", "SEO"],
      link: "https://taleitmedia.com",
      category: "wordpress",
    },
    {
      title: "ASO Nigeria",
      description: "Fashion e-commerce platform featuring vibrant African designs and contemporary styles.",
      image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/asonigeria.com21-SsxlnDbJBZHq5Plllq8Jg8jJFidvwv.png",
      tags: ["WordPress", "E-commerce", "Custom Design"],
      link: "https://asonigeria.com",
      category: "ecommerce",
    },
    {
      title: "Land Investigate",
      description: "Property verification platform for investigating and validating land ownership in Nigeria.",
      image: "/images/landinvestiga-min.png",
      tags: ["WordPress", "Laravel", "Custom Development"],
      link: "https://landinvestigate.com",
      category: "wordpress",
    },
    {
      title: "Ravehost",
      description: "Web hosting and domain registration service with comprehensive hosting center solutions.",
      image: "/images/ravehost.com.ng23.png",
      tags: ["Next.js", "Web Services", "UI/UX Design"],
      link: "https://ravehost.com.ng",
      category: "nextjs",
    },
    {
      title: "Freak Vault",
      description: "Fashion e-commerce platform featuring timeless elegance in contemporary clothing designs.",
      image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/freakvault.com21-MMHwPEhXb3G7ihHwA3uoVA0dxxYyag.png",
      tags: ["Shopify", "E-commerce", "Custom Theme"],
      link: "https://freakvault.com",
      category: "ecommerce",
    },
    {
      title: "Lanre Da Silva Ajayi",
      description: "Fashion designer website showcasing elegant collections and timeless glamour.",
      image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/lanredasilva.com.ng21-ubYOw8wNZD2VPBdwt570sWuTbT7r5E.png",
      tags: ["WordPress", "Fashion", "Portfolio"],
      link: "https://lanredasilva.com.ng",
      category: "wordpress",
    },
    {
      title: "Yomi Casual",
      description: "Fashion brand website featuring stylish men's collections and casual fits.",
      image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/yomicasual.africa23.png",
      tags: ["WordPress", "E-commerce", "Fashion"],
      link: "https://yomicasual.africa",
      category: "ecommerce",
    },
    {
      title: "LW Digital Z",
      description: "Digital agency website with modern design and comprehensive digital marketing services.",
      image: "/images/lwdigitalz.com.png",
      tags: ["Next.js", "Digital Marketing", "UI/UX Design"],
      link: "https://lwdigitalz.com",
      category: "nextjs",
    },
    {
      title: "Nuance Nook",
      description: "Interior design studio showcasing elegant home transformations and design services.",
      image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/nuancenook.ng21-guuRlfTAwetvOE3RY6y0aSAqXAcxmT.png",
      tags: ["WordPress", "Interior Design", "Portfolio"],
      link: "https://nuancenook.ng",
      category: "wordpress",
    },
    {
      title: "Bellislux",
      description: "Luxury real estate platform featuring high-end properties and personalized search.",
      image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/bellislux11-gZrN4QAm8OKGeCReDXe9oCDvLmvEjg.png",
      tags: ["WordPress", "Real Estate", "Property Listings"],
      link: "https://bellislux.com",
      category: "wordpress",
    },
    {
      title: "Israel Dia",
      description: "Personal brand website for a professional showcasing services and portfolio.",
      image: "/images/israeldia.com.png",
      tags: ["WordPress", "Personal Brand", "Portfolio"],
      link: "https://israeldia.com",
      category: "wordpress",
    },
    {
      title: "Dipaking Homes",
      description: "Real estate development company featuring property listings and investment opportunities.",
      image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/dipakinghomes21-SETsKl5EVGH8RR8liTIyy6DuhXuh0U.png",
      tags: ["WordPress", "Real Estate", "Property Listings"],
      link: "https://dipakinghomes.com",
      category: "wordpress",
    },
    {
      title: "Obyella",
      description: "Fashion brand featuring vibrant summer collections and African-inspired designs.",
      image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/obyella.com11-UznX64t1r9YogNfFfjCGzYBpvuAeGJ.png",
      tags: ["WordPress", "Fashion", "E-commerce"],
      link: "https://obyella.com",
      category: "wordpress",
    },
    {
      title: "Yedrick",
      description: "Fashion brand featuring classic women's collection with elegant designs.",
      image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/yedrixk.com11-ih5KttwM5FDbnaIXyNccLdnQKvHInZ.png",
      tags: ["Shopify", "Fashion", "E-commerce"],
      link: "https://yedrick.com",
      category: "ecommerce",
    },
    {
      title: "Ceora Jewelry",
      description: "Fine jewelry e-commerce store with elegant designs and luxury branding.",
      image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/ceorafinejewelry.com11-NqAEMQoZjFBcoXnFGSPTG0lISaNJhC.png",
      tags: ["Shopify", "Jewelry", "E-commerce"],
      link: "https://ceorafinejewelry.com",
      category: "ecommerce",
    },
    {
      title: "Cetrix",
      description: "Fintech platform Landing Page, for bill payments, airtime, data, and subscription management.",
      image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/cetrix.org%20landingpage%20fintech11-rdmWEm0qSmFvNHyw0res2kantKOdo3.png",
      tags: ["React", "Fintech", "UI/UX Design"],
      link: "https://cetrix.org",
      category: "react",
    },
    {
      title: "Vanskere",
      description: "African luxury menswear brand featuring modern elegance and traditional-inspired designs.",
      image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/vanskere.vom-6X9EYgJKQCHWK8TwvU53ObYI9AKg2o.png",
      tags: ["Shopify", "Fashion", "Menswear"],
      link: "https://vanskere.com",
      category: "ecommerce",
    },
    {
      title: "Fabrique By Fabz",
      description: "Fashion brand offering custom-made and ready-to-wear elegant designs with unique style.",
      image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/fabriquebyfabz.com-nq37MYER2kDnG59FuFXSd0vYPP4beF.png",
      tags: ["Shopify", "Fashion", "Custom Design"],
      link: "https://fabriquebyfabz.com",
      category: "ecommerce",
    },
    {
      title: "Ezikiel Adamu",
      description: "Ezikiel Adamu is a visionary leader, entrepreneur, and changemaker dedicated to inspiring growth.",
      image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/exekieladamu.com-mMNCZDZpd5ltuNshpQHuyrIvtdOuH0.png",
      tags: ["Wordpress", "Portfolio", "Custom Design"],
      link: "https://ezekieladamu.com",
      category: "wordpress",
    },
    {
      title: "Emmadube",
      description: "Fashion brand featuring vibrant African prints and contemporary designs.",
      image: "https://jgqdkgzx48jzkhoi.public.blob.vercel-storage.com/emmadube.com-2.png",
      tags: ["Shopify", "Fashion", "E-commerce"],
      link: "https://emmadube.com",
      category: "ecommerce",
    },
  ]

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = filter === "all" || project.category === filter
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-[#0ff]/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-5 w-5 text-[#0ff]" />
            <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#0ff] to-[#f0f]">
              DEV<span className="text-white">TOSIN</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              size="sm"
              className={
                filter === "all"
                  ? "bg-gradient-to-r from-[#0ff] to-[#f0f] text-black"
                  : "border-[#0ff]/50 text-[#0ff] hover:bg-[#0ff]/10"
              }
              onClick={() => setFilter("all")}
            >
              All Projects
            </Button>
            <Button
              variant={filter === "wordpress" ? "default" : "outline"}
              size="sm"
              className={
                filter === "wordpress"
                  ? "bg-gradient-to-r from-[#0ff] to-[#f0f] text-black"
                  : "border-[#0ff]/50 text-[#0ff] hover:bg-[#0ff]/10"
              }
              onClick={() => setFilter("wordpress")}
            >
              WordPress
            </Button>
            <Button
              variant={filter === "ecommerce" ? "default" : "outline"}
              size="sm"
              className={
                filter === "ecommerce"
                  ? "bg-gradient-to-r from-[#0ff] to-[#f0f] text-black"
                  : "border-[#0ff]/50 text-[#0ff] hover:bg-[#0ff]/10"
              }
              onClick={() => setFilter("ecommerce")}
            >
              E-commerce
            </Button>
            <Button
              variant={filter === "nextjs" ? "default" : "outline"}
              size="sm"
              className={
                filter === "nextjs"
                  ? "bg-gradient-to-r from-[#0ff] to-[#f0f] text-black"
                  : "border-[#0ff]/50 text-[#0ff] hover:bg-[#0ff]/10"
              }
              onClick={() => setFilter("nextjs")}
            >
              Next.js
            </Button>
            <Button
              variant={filter === "react" ? "default" : "outline"}
              size="sm"
              className={
                filter === "react"
                  ? "bg-gradient-to-r from-[#0ff] to-[#f0f] text-black"
                  : "border-[#0ff]/50 text-[#0ff] hover:bg-[#0ff]/10"
              }
              onClick={() => setFilter("react")}
            >
              React
            </Button>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:text-[#0ff]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && isMobile && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-[#0ff]/20 py-4">
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <button
                className={`text-sm transition-colors py-2 border-b border-[#0ff]/10 text-left ${
                  filter === "all" ? "text-[#0ff]" : "text-white hover:text-[#0ff]"
                }`}
                onClick={() => {
                  setFilter("all")
                  setIsMenuOpen(false)
                }}
              >
                All Projects
              </button>
              <button
                className={`text-sm transition-colors py-2 border-b border-[#0ff]/10 text-left ${
                  filter === "wordpress" ? "text-[#0ff]" : "text-white hover:text-[#0ff]"
                }`}
                onClick={() => {
                  setFilter("wordpress")
                  setIsMenuOpen(false)
                }}
              >
                WordPress
              </button>
              <button
                className={`text-sm transition-colors py-2 border-b border-[#0ff]/10 text-left ${
                  filter === "ecommerce" ? "text-[#0ff]" : "text-white hover:text-[#0ff]"
                }`}
                onClick={() => {
                  setFilter("ecommerce")
                  setIsMenuOpen(false)
                }}
              >
                E-commerce
              </button>
              <button
                className={`text-sm transition-colors py-2 border-b border-[#0ff]/10 text-left ${
                  filter === "nextjs" ? "text-[#0ff]" : "text-white hover:text-[#0ff]"
                }`}
                onClick={() => {
                  setFilter("nextjs")
                  setIsMenuOpen(false)
                }}
              >
                Next.js
              </button>
              <button
                className={`text-sm transition-colors py-2 border-b border-[#0ff]/10 text-left ${
                  filter === "react" ? "text-[#0ff]" : "text-white hover:text-[#0ff]"
                }`}
                onClick={() => {
                  setFilter("react")
                  setIsMenuOpen(false)
                }}
              >
                React
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <div className="pt-24 pb-16 container mx-auto px-4">
        <ScrollReveal direction="up" delay={0.2}>
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ff] to-[#f0f]">My Portfolio</span>
            </h1>
            <p className="text-gray-400 max-w-2xl">
              Browse through my projects and see how I've helped businesses establish their online presence. Each
              project represents a unique challenge and solution.
            </p>
          </div>
        </ScrollReveal>

        {/* Search and Filter (Mobile) */}
        <div className="mb-8 md:hidden">
          <div className="flex flex-col gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-black/60 border border-[#0ff]/20 rounded-lg px-4 py-2 pl-10 text-white placeholder-gray-400 focus:outline-none focus:border-[#0ff]/50"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              <Button
                variant={filter === "all" ? "default" : "outline"}
                size="sm"
                className={
                  filter === "all"
                    ? "bg-gradient-to-r from-[#0ff] to-[#f0f] text-black whitespace-nowrap"
                    : "border-[#0ff]/50 text-[#0ff] hover:bg-[#0ff]/10 whitespace-nowrap"
                }
                onClick={() => setFilter("all")}
              >
                All
              </Button>
              <Button
                variant={filter === "wordpress" ? "default" : "outline"}
                size="sm"
                className={
                  filter === "wordpress"
                    ? "bg-gradient-to-r from-[#0ff] to-[#f0f] text-black whitespace-nowrap"
                    : "border-[#0ff]/50 text-[#0ff] hover:bg-[#0ff]/10 whitespace-nowrap"
                }
                onClick={() => setFilter("wordpress")}
              >
                WordPress
              </Button>
              <Button
                variant={filter === "ecommerce" ? "default" : "outline"}
                size="sm"
                className={
                  filter === "ecommerce"
                    ? "bg-gradient-to-r from-[#0ff] to-[#f0f] text-black whitespace-nowrap"
                    : "border-[#0ff]/50 text-[#0ff] hover:bg-[#0ff]/10 whitespace-nowrap"
                }
                onClick={() => setFilter("ecommerce")}
              >
                E-commerce
              </Button>
              <Button
                variant={filter === "nextjs" ? "default" : "outline"}
                size="sm"
                className={
                  filter === "nextjs"
                    ? "bg-gradient-to-r from-[#0ff] to-[#f0f] text-black whitespace-nowrap"
                    : "border-[#0ff]/50 text-[#0ff] hover:bg-[#0ff]/10 whitespace-nowrap"
                }
                onClick={() => setFilter("nextjs")}
              >
                Next.js
              </Button>
              <Button
                variant={filter === "react" ? "default" : "outline"}
                size="sm"
                className={
                  filter === "react"
                    ? "bg-gradient-to-r from-[#0ff] to-[#f0f] text-black whitespace-nowrap"
                    : "border-[#0ff]/50 text-[#0ff] hover:bg-[#0ff]/10 whitespace-nowrap"
                }
                onClick={() => setFilter("react")}
              >
                React
              </Button>
            </div>
          </div>
        </div>

        {/* Search (Desktop) */}
        <div className="mb-8 hidden md:block">
          <div className="max-w-md relative">
            <input
              type="text"
              placeholder="Search projects by name, description, or technology..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-black/60 border border-[#0ff]/20 rounded-lg px-4 py-2 pl-10 text-white placeholder-gray-400 focus:outline-none focus:border-[#0ff]/50"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={index} direction="up" delay={0.1 * (index % 6)} threshold={0.1}>
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                link={project.link}
              />
            </ScrollReveal>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No projects found matching your criteria.</p>
            <Button
              variant="outline"
              className="mt-4 border-[#0ff]/50 text-[#0ff] hover:bg-[#0ff]/10"
              onClick={() => {
                setFilter("all")
                setSearchTerm("")
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-[#0ff]/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Dev Tosin. All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}
