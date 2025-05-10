"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronRight, Globe, Cloud, ShoppingBag, Code, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function BlogPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const blogPosts = [
    {
      title: "Common WordPress Errors and How to Fix Them",
      description:
        "Encountering errors in WordPress can be frustrating. Learn how to troubleshoot and fix the most common WordPress errors including the white screen of death, database connection errors, and plugin conflicts.",
      category: "WordPress",
      icon: <Globe className="h-16 w-16 text-[#0ff]" />,
      iconBg: "bg-[#0ff]/10",
      badgeBg: "bg-[#0ff]/10",
      badgeText: "text-[#0ff]",
      badgeHover: "hover:bg-[#0ff]/20",
      buttonBg: "bg-[#0ff]/10",
      buttonText: "text-[#0ff]",
      buttonHover: "hover:bg-[#0ff]/20",
      buttonBorder: "border-[#0ff]/50",
      link: "/blog/wordpress-errors",
      date: "May 5, 2025",
    },
    {
      title: "Creating a Virtual Machine on Microsoft Azure",
      description:
        "Microsoft Azure offers powerful cloud computing capabilities. This guide walks you through the process of creating and configuring a virtual machine on Azure, including selecting the right VM size and setting up networking.",
      category: "Azure",
      icon: <Cloud className="h-16 w-16 text-[#f0f]" />,
      iconBg: "bg-[#f0f]/10",
      badgeBg: "bg-[#f0f]/10",
      badgeText: "text-[#f0f]",
      badgeHover: "hover:bg-[#f0f]/20",
      buttonBg: "bg-[#f0f]/10",
      buttonText: "text-[#f0f]",
      buttonHover: "hover:bg-[#f0f]/20",
      buttonBorder: "border-[#f0f]/50",
      link: "/blog/azure-vm",
      date: "April 28, 2025",
    },
    {
      title: "Using WCFM – Frontend Manager for WooCommerce",
      description:
        "WCFM is a powerful frontend manager for WooCommerce that allows vendors to manage their products, orders, and store from the frontend. Learn how to set up and configure WCFM for your multi-vendor marketplace.",
      category: "WooCommerce",
      icon: <ShoppingBag className="h-16 w-16 text-[#0ff]" />,
      iconBg: "bg-[#0ff]/10",
      badgeBg: "bg-[#0ff]/10",
      badgeText: "text-[#0ff]",
      badgeHover: "hover:bg-[#0ff]/20",
      buttonBg: "bg-[#0ff]/10",
      buttonText: "text-[#0ff]",
      buttonHover: "hover:bg-[#0ff]/20",
      buttonBorder: "border-[#0ff]/50",
      link: "/blog/wcfm-guide",
      date: "April 20, 2025",
    },
    {
      title: "How to Edit Pages in Elementor Like a Pro",
      description:
        "Elementor is one of the most popular page builders for WordPress. This guide covers essential techniques for editing pages in Elementor, including using templates, creating custom sections, and optimizing for mobile.",
      category: "Elementor",
      icon: <Code className="h-16 w-16 text-[#f0f]" />,
      iconBg: "bg-[#f0f]/10",
      badgeBg: "bg-[#f0f]/10",
      badgeText: "text-[#f0f]",
      badgeHover: "hover:bg-[#f0f]/20",
      buttonBg: "bg-[#f0f]/10",
      buttonText: "text-[#f0f]",
      buttonHover: "hover:bg-[#f0f]/20",
      buttonBorder: "border-[#f0f]/50",
      link: "/blog/elementor-editing",
      date: "April 15, 2025",
    },
    {
      title: "Best Selling Tech Skills in 2025",
      description:
        "The tech landscape is constantly evolving. Discover the most in-demand tech skills for 2025, including AI development, cloud engineering, cybersecurity, and blockchain technology, and how to position yourself for success.",
      category: "Tech Skills",
      icon: <Cpu className="h-16 w-16 text-[#0ff]" />,
      iconBg: "bg-[#0ff]/10",
      badgeBg: "bg-[#0ff]/10",
      badgeText: "text-[#0ff]",
      badgeHover: "hover:bg-[#0ff]/20",
      buttonBg: "bg-[#0ff]/10",
      buttonText: "text-[#0ff]",
      buttonHover: "hover:bg-[#0ff]/20",
      buttonBorder: "border-[#0ff]/50",
      link: "/blog/tech-skills-2025",
      date: "April 10, 2025",
    },
    {
      title: "How to Start a Domain and Hosting Company in Nigeria",
      description:
        "Starting a domain and hosting company in Nigeria can be a lucrative business opportunity. Learn about the essential steps, required investments, and strategies for success in the competitive web hosting market.",
      category: "Hosting Business",
      icon: <Globe className="h-16 w-16 text-[#f0f]" />,
      iconBg: "bg-[#f0f]/10",
      badgeBg: "bg-[#f0f]/10",
      badgeText: "text-[#f0f]",
      badgeHover: "hover:bg-[#f0f]/20",
      buttonBg: "bg-[#f0f]/10",
      buttonText: "text-[#f0f]",
      buttonHover: "hover:bg-[#f0f]/20",
      buttonBorder: "border-[#f0f]/50",
      link: "https://ravehost.com.ng/start-your-hosting-company.php",
      date: "April 5, 2025",
    },
  ]

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-[#0ff]/20">
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
        {isMenuOpen && (
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
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <div className="pt-32 pb-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ff] to-[#f0f]">Blog</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Insights, tutorials, and guides to help you navigate the digital landscape.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-12">
          <Input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-black/60 border-[#0ff]/20 focus:border-[#0ff] text-white"
          />
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <Card key={index} className="bg-black/60 border border-[#0ff]/20 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-[#0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className={`h-48 ${post.iconBg} relative`}>
                <div className="absolute inset-0 flex items-center justify-center">{post.icon}</div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <Badge className={`${post.badgeBg} ${post.badgeText} ${post.badgeHover}`}>{post.category}</Badge>
                  <span className="text-gray-500 text-sm">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.description}</p>
                <Link href={post.link}>
                  <Button variant="link" className={`${post.buttonText} p-0 h-auto font-medium`}>
                    Read More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No articles found matching your search.</p>
            <Button
              variant="outline"
              className="mt-4 border-[#0ff] text-[#0ff] hover:bg-[#0ff]/10"
              onClick={() => setSearchQuery("")}
            >
              Clear Search
            </Button>
          </div>
        )}

        {/* Newsletter */}
        <div className="mt-20 bg-black/60 border border-[#0ff]/20 rounded-lg p-8 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Subscribe to My Newsletter</h2>
            <p className="text-gray-400">
              Get the latest articles, tutorials, and resources delivered straight to your inbox.
            </p>
          </div>
          <form className="flex flex-col md:flex-row gap-4">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-black/60 border-[#0ff]/20 focus:border-[#0ff] text-white flex-grow"
              required
            />
            <Button className="bg-gradient-to-r from-[#0ff] to-[#f0f] text-black hover:opacity-90">Subscribe</Button>
          </form>
        </div>
      </div>

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
              <Link href="/blog" className="text-sm text-gray-400 hover:text-[#0ff]">
                Blog
              </Link>
              <Link href="/resources" className="text-sm text-gray-400 hover:text-[#0ff]">
                Resources
              </Link>
              <Link href="/contact" className="text-sm text-gray-400 hover:text-[#0ff]">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
