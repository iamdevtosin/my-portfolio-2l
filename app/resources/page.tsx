"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Download, FileText, Code, Book, Video, Globe, ChevronRight, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function ResourcesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ff] to-[#f0f]">Resources</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of helpful resources, tools, and guides to help you succeed in your digital journey.
          </p>
        </div>

        <Tabs defaultValue="ebooks" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="ebooks" className="data-[state=active]:bg-[#0ff]/10 data-[state=active]:text-[#0ff]">
              eBooks & Guides
            </TabsTrigger>
            <TabsTrigger value="tools" className="data-[state=active]:bg-[#0ff]/10 data-[state=active]:text-[#0ff]">
              Tools & Software
            </TabsTrigger>
            <TabsTrigger value="templates" className="data-[state=active]:bg-[#0ff]/10 data-[state=active]:text-[#0ff]">
              Templates
            </TabsTrigger>
            <TabsTrigger value="tutorials" className="data-[state=active]:bg-[#0ff]/10 data-[state=active]:text-[#0ff]">
              Tutorials
            </TabsTrigger>
          </TabsList>

          {/* eBooks & Guides */}
          <TabsContent value="ebooks" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* eBook 1 */}
              <Card className="bg-black/60 border border-[#0ff]/20 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-6">
                  <div className="flex items-center justify-center h-16 w-16 bg-[#0ff]/10 rounded-lg mb-4">
                    <Globe className="h-8 w-8 text-[#0ff]" />
                  </div>
                  <Badge className="bg-[#0ff]/10 text-[#0ff] hover:bg-[#0ff]/20 mb-3">Hosting</Badge>
                  <h3 className="text-xl font-bold mb-2">Start Your Hosting Company</h3>
                  <p className="text-gray-400 mb-4">
                    A comprehensive guide on how to start and grow a successful domain and hosting company in Nigeria.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#0ff] font-bold">₦15,000</span>
                    <Link href="https://ravehost.com.ng/start-your-hosting-company.php">
                      <Button size="sm" className="bg-[#0ff]/10 text-[#0ff] hover:bg-[#0ff]/20 border border-[#0ff]/50">
                        <Download className="mr-2 h-4 w-4" /> Buy Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* eBook 2 */}
              <Card className="bg-black/60 border border-[#0ff]/20 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-6">
                  <div className="flex items-center justify-center h-16 w-16 bg-[#f0f]/10 rounded-lg mb-4">
                    <Code className="h-8 w-8 text-[#f0f]" />
                  </div>
                  <Badge className="bg-[#f0f]/10 text-[#f0f] hover:bg-[#f0f]/20 mb-3">WordPress</Badge>
                  <h3 className="text-xl font-bold mb-2">WordPress Development Mastery</h3>
                  <p className="text-gray-400 mb-4">
                    Learn how to build custom WordPress themes and plugins from scratch with this comprehensive guide.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#f0f] font-bold">₦12,000</span>
                    <Link href="/resources/wordpress-development-mastery">
                      <Button size="sm" className="bg-[#f0f]/10 text-[#f0f] hover:bg-[#f0f]/20 border border-[#f0f]/50">
                        <Download className="mr-2 h-4 w-4" /> Buy Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* eBook 3 */}
              <Card className="bg-black/60 border border-[#0ff]/20 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-6">
                  <div className="flex items-center justify-center h-16 w-16 bg-[#0ff]/10 rounded-lg mb-4">
                    <FileText className="h-8 w-8 text-[#0ff]" />
                  </div>
                  <Badge className="bg-[#0ff]/10 text-[#0ff] hover:bg-[#0ff]/20 mb-3">SEO</Badge>
                  <h3 className="text-xl font-bold mb-2">SEO Strategies for 2025</h3>
                  <p className="text-gray-400 mb-4">
                    Discover the latest SEO techniques and strategies to improve your website's search engine rankings.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#0ff] font-bold">₦8,000</span>
                    <Link href="/resources/seo-strategies">
                      <Button size="sm" className="bg-[#0ff]/10 text-[#0ff] hover:bg-[#0ff]/20 border border-[#0ff]/50">
                        <Download className="mr-2 h-4 w-4" /> Buy Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Link href="/contact">
                <Button variant="outline" className="border-[#0ff] text-[#0ff] hover:bg-[#0ff]/10">
                  Request Custom Resource <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </TabsContent>

          {/* Tools & Software */}
          <TabsContent value="tools" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Tool 1 */}
              <Card className="bg-black/60 border border-[#0ff]/20 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-6">
                  <div className="flex items-center justify-center h-16 w-16 bg-[#0ff]/10 rounded-lg mb-4">
                    <Code className="h-8 w-8 text-[#0ff]" />
                  </div>
                  <Badge className="bg-[#0ff]/10 text-[#0ff] hover:bg-[#0ff]/20 mb-3">Development</Badge>
                  <h3 className="text-xl font-bold mb-2">WordPress Plugin Boilerplate</h3>
                  <p className="text-gray-400 mb-4">
                    A standardized, organized, object-oriented foundation for building high-quality WordPress plugins.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#0ff] font-bold">Free</span>
                    <Link href="/resources/wp-plugin-boilerplate">
                      <Button size="sm" className="bg-[#0ff]/10 text-[#0ff] hover:bg-[#0ff]/20 border border-[#0ff]/50">
                        <Download className="mr-2 h-4 w-4" /> Download
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Tool 2 */}
              <Card className="bg-black/60 border border-[#0ff]/20 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-6">
                  <div className="flex items-center justify-center h-16 w-16 bg-[#f0f]/10 rounded-lg mb-4">
                    <Globe className="h-8 w-8 text-[#f0f]" />
                  </div>
                  <Badge className="bg-[#f0f]/10 text-[#f0f] hover:bg-[#f0f]/20 mb-3">SEO</Badge>
                  <h3 className="text-xl font-bold mb-2">SEO Audit Toolkit</h3>
                  <p className="text-gray-400 mb-4">
                    A collection of tools and spreadsheets to help you perform comprehensive SEO audits for your
                    websites.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#f0f] font-bold">₦5,000</span>
                    <Link href="/resources/seo-audit-toolkit">
                      <Button size="sm" className="bg-[#f0f]/10 text-[#f0f] hover:bg-[#f0f]/20 border border-[#f0f]/50">
                        <Download className="mr-2 h-4 w-4" /> Buy Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Tool 3 */}
              <Card className="bg-black/60 border border-[#0ff]/20 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-6">
                  <div className="flex items-center justify-center h-16 w-16 bg-[#0ff]/10 rounded-lg mb-4">
                    <FileText className="h-8 w-8 text-[#0ff]" />
                  </div>
                  <Badge className="bg-[#0ff]/10 text-[#0ff] hover:bg-[#0ff]/20 mb-3">Business</Badge>
                  <h3 className="text-xl font-bold mb-2">Client Proposal Templates</h3>
                  <p className="text-gray-400 mb-4">
                    Professional proposal templates for web development, SEO, and digital marketing services.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#0ff] font-bold">₦3,500</span>
                    <Link href="/resources/proposal-templates">
                      <Button size="sm" className="bg-[#0ff]/10 text-[#0ff] hover:bg-[#0ff]/20 border border-[#0ff]/50">
                        <Download className="mr-2 h-4 w-4" /> Buy Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Templates */}
          <TabsContent value="templates" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Template 1 */}
              <Card className="bg-black/60 border border-[#0ff]/20 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-6">
                  <div className="flex items-center justify-center h-16 w-16 bg-[#0ff]/10 rounded-lg mb-4">
                    <Globe className="h-8 w-8 text-[#0ff]" />
                  </div>
                  <Badge className="bg-[#0ff]/10 text-[#0ff] hover:bg-[#0ff]/20 mb-3">WordPress</Badge>
                  <h3 className="text-xl font-bold mb-2">Business Pro WordPress Theme</h3>
                  <p className="text-gray-400 mb-4">
                    A professional WordPress theme designed for businesses with modern design and powerful features.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#0ff] font-bold">₦25,000</span>
                    <Link href="/resources/business-pro-theme">
                      <Button size="sm" className="bg-[#0ff]/10 text-[#0ff] hover:bg-[#0ff]/20 border border-[#0ff]/50">
                        <Download className="mr-2 h-4 w-4" /> Buy Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Template 2 */}
              <Card className="bg-black/60 border border-[#0ff]/20 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-6">
                  <div className="flex items-center justify-center h-16 w-16 bg-[#f0f]/10 rounded-lg mb-4">
                    <ShoppingBag className="h-8 w-8 text-[#f0f]" />
                  </div>
                  <Badge className="bg-[#f0f]/10 text-[#f0f] hover:bg-[#f0f]/20 mb-3">E-commerce</Badge>
                  <h3 className="text-xl font-bold mb-2">Fashion Store Shopify Theme</h3>
                  <p className="text-gray-400 mb-4">
                    A beautiful and conversion-optimized Shopify theme designed specifically for fashion stores.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#f0f] font-bold">₦35,000</span>
                    <Link href="/resources/fashion-store-theme">
                      <Button size="sm" className="bg-[#f0f]/10 text-[#f0f] hover:bg-[#f0f]/20 border border-[#f0f]/50">
                        <Download className="mr-2 h-4 w-4" /> Buy Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Template 3 */}
              <Card className="bg-black/60 border border-[#0ff]/20 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-6">
                  <div className="flex items-center justify-center h-16 w-16 bg-[#0ff]/10 rounded-lg mb-4">
                    <FileText className="h-8 w-8 text-[#0ff]" />
                  </div>
                  <Badge className="bg-[#0ff]/10 text-[#0ff] hover:bg-[#0ff]/20 mb-3">Landing Page</Badge>
                  <h3 className="text-xl font-bold mb-2">SaaS Landing Page Template</h3>
                  <p className="text-gray-400 mb-4">
                    A high-converting landing page template designed specifically for SaaS products and services.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#0ff] font-bold">₦15,000</span>
                    <Link href="/resources/saas-landing-template">
                      <Button size="sm" className="bg-[#0ff]/10 text-[#0ff] hover:bg-[#0ff]/20 border border-[#0ff]/50">
                        <Download className="mr-2 h-4 w-4" /> Buy Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tutorials */}
          <TabsContent value="tutorials" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Tutorial 1 */}
              <Card className="bg-black/60 border border-[#0ff]/20 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-6">
                  <div className="flex items-center justify-center h-16 w-16 bg-[#0ff]/10 rounded-lg mb-4">
                    <Video className="h-8 w-8 text-[#0ff]" />
                  </div>
                  <Badge className="bg-[#0ff]/10 text-[#0ff] hover:bg-[#0ff]/20 mb-3">WordPress</Badge>
                  <h3 className="text-xl font-bold mb-2">WordPress Speed Optimization</h3>
                  <p className="text-gray-400 mb-4">
                    Learn how to optimize your WordPress website for maximum speed and performance.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#0ff] font-bold">Free</span>
                    <Link href="/resources/wordpress-speed-tutorial">
                      <Button size="sm" className="bg-[#0ff]/10 text-[#0ff] hover:bg-[#0ff]/20 border border-[#0ff]/50">
                        <ChevronRight className="mr-2 h-4 w-4" /> Watch Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Tutorial 2 */}
              <Card className="bg-black/60 border border-[#0ff]/20 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-6">
                  <div className="flex items-center justify-center h-16 w-16 bg-[#f0f]/10 rounded-lg mb-4">
                    <Video className="h-8 w-8 text-[#f0f]" />
                  </div>
                  <Badge className="bg-[#f0f]/10 text-[#f0f] hover:bg-[#f0f]/20 mb-3">Elementor</Badge>
                  <h3 className="text-xl font-bold mb-2">Elementor Masterclass</h3>
                  <p className="text-gray-400 mb-4">
                    A comprehensive video tutorial series on building professional websites with Elementor.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#f0f] font-bold">₦10,000</span>
                    <Link href="/resources/elementor-masterclass">
                      <Button size="sm" className="bg-[#f0f]/10 text-[#f0f] hover:bg-[#f0f]/20 border border-[#f0f]/50">
                        <ChevronRight className="mr-2 h-4 w-4" /> Buy Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Tutorial 3 */}
              <Card className="bg-black/60 border border-[#0ff]/20 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-6">
                  <div className="flex items-center justify-center h-16 w-16 bg-[#0ff]/10 rounded-lg mb-4">
                    <Book className="h-8 w-8 text-[#0ff]" />
                  </div>
                  <Badge className="bg-[#0ff]/10 text-[#0ff] hover:bg-[#0ff]/20 mb-3">Azure</Badge>
                  <h3 className="text-xl font-bold mb-2">Microsoft Azure Fundamentals</h3>
                  <p className="text-gray-400 mb-4">
                    Learn the basics of Microsoft Azure cloud services and how to deploy your applications.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#0ff] font-bold">Free</span>
                    <Link href="/resources/azure-fundamentals">
                      <Button size="sm" className="bg-[#0ff]/10 text-[#0ff] hover:bg-[#0ff]/20 border border-[#0ff]/50">
                        <ChevronRight className="mr-2 h-4 w-4" /> Read Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Request Custom Resource */}
        <div className="mt-20 bg-black/60 border border-[#0ff]/20 rounded-lg p-8 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Need a Custom Resource?</h2>
            <p className="text-gray-400">
              Don't see what you're looking for? I can create custom resources tailored to your specific needs.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-[#0ff] to-[#f0f] text-black hover:opacity-90">
                Request Custom Resource
              </Button>
            </Link>
            <Link href="https://wa.me/2349011570271">
              <Button variant="outline" className="border-[#0ff] text-[#0ff] hover:bg-[#0ff]/10">
                Chat on WhatsApp
              </Button>
            </Link>
          </div>
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
