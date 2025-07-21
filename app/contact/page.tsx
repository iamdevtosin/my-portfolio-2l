"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ScrollReveal from "@/components/scroll-reveal"
import ScrollToTop from "@/components/scroll-to-top"

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-black" />,
      title: "Email",
      value: "officialdevtosin@gmail.com",
      href: "mailto:officialdevtosin@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-black" />,
      title: "Phone",
      value: "+234 901 157 0271",
      href: "tel:+2349011570271",
    },
    {
      icon: <MapPin className="h-6 w-6 text-black" />,
      title: "Location",
      value: "Lagos, Nigeria",
      href: "#",
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
            <Link href="/services" className="text-sm font-medium hover:text-blue-600 transition-colors">
              SERVICES
            </Link>
            <Link href="/projects" className="text-sm font-medium hover:text-blue-600 transition-colors">
              PROJECTS
            </Link>
            <Link href="/terminal" className="text-sm font-medium hover:text-blue-600 transition-colors">
              TERMINAL
            </Link>
            <Link href="/contact" className="text-sm font-medium text-blue-600">
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
                className="text-sm font-medium text-blue-600 py-2 border-b border-gray-100"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">Get In Touch</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to start your next project? I'd love to hear from you. Send me a message and I'll respond as soon as
              possible.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <ScrollReveal direction="left" delay={0.3}>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-black">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card
                      key={index}
                      className="bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="bg-gray-100 p-3 rounded-lg group-hover:bg-blue-100 transition-colors">
                            {info.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-black">{info.title}</h3>
                            {info.href === "#" ? (
                              <p className="text-gray-600">{info.value}</p>
                            ) : (
                              <a href={info.href} className="text-gray-600 hover:text-blue-600 transition-colors">
                                {info.value}
                              </a>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-black">Why Work With Me?</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>9+ years of experience in web development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>100+ successful projects delivered</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>Expertise in WordPress, React, and cloud solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>Dedicated support and maintenance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>SEO optimization and performance focus</span>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right" delay={0.4}>
            <Card className="bg-white border border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-black">Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white text-black"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white text-black"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white text-black"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white text-black"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {submitStatus === "success" && (
                    <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg border border-green-200">
                      <CheckCircle2 className="h-5 w-5" />
                      <span>Message sent successfully! I'll get back to you soon.</span>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg border border-red-200">
                      <AlertCircle className="h-5 w-5" />
                      <span>Failed to send message. Please try again or contact me directly.</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-black text-white hover:bg-blue-600 py-6 text-lg"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>

        {/* FAQ Section */}
        <ScrollReveal direction="up" delay={0.5}>
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-black">What's your typical project timeline?</h3>
                  <p className="text-gray-600">
                    Project timelines vary based on complexity. Simple WordPress sites take 1-2 weeks, while custom
                    applications can take 4-8 weeks. I'll provide a detailed timeline during our initial consultation.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-black">Do you provide ongoing support?</h3>
                  <p className="text-gray-600">
                    Yes! I offer comprehensive maintenance packages including security updates, performance
                    optimization, content updates, and technical support to keep your website running smoothly.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-black">What technologies do you work with?</h3>
                  <p className="text-gray-600">
                    I specialize in WordPress, React, Next.js, PHP, Laravel, and cloud solutions with Microsoft Azure. I
                    also work with Shopify, SEO optimization, and custom plugin development.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-black">How do you handle project communication?</h3>
                  <p className="text-gray-600">
                    I maintain regular communication through email, WhatsApp, or your preferred platform. You'll receive
                    progress updates, and I'm always available to discuss any questions or concerns.
                  </p>
                </CardContent>
              </Card>
            </div>
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
