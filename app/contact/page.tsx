"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, Mail, Phone, Globe, Github, Linkedin, Twitter, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, CheckCircle2 } from "lucide-react"

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
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  // State for the magnetic repulsion button
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 })
  const [isButtonRepelling, setIsButtonRepelling] = useState(false)
  const buttonRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(false)
    setSubmitSuccess(false)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormData({ name: "", email: "", subject: "", message: "" })
        setSubmitSuccess(true)
        setErrorMessage("")
      } else {
        const errorData = await response.json()
        setSubmitError(true)
        setErrorMessage(errorData.message || "An error occurred. Please try again.")
      }
    } catch (error: any) {
      setSubmitError(true)
      setErrorMessage(error.message || "An unexpected error occurred. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }

    // Hide messages after 5 seconds
    setTimeout(() => {
      setSubmitSuccess(false)
      setSubmitError(false)
      setErrorMessage("")
    }, 5000)
  }

  // Magnetic repulsion effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || !buttonRef.current) return

    const container = containerRef.current.getBoundingClientRect()
    const button = buttonRef.current.getBoundingClientRect()

    // Get mouse position relative to container
    const mouseX = e.clientX - container.left
    const mouseY = e.clientY - container.top

    // Get button center position
    const buttonCenterX = buttonPosition.x + button.width / 2
    const buttonCenterY = buttonPosition.y + button.height / 2

    // Calculate distance between mouse and button center
    const deltaX = buttonCenterX - mouseX
    const deltaY = buttonCenterY - mouseY
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

    // Repulsion threshold - button starts moving when cursor is within this distance
    const repulsionRadius = 120

    if (distance < repulsionRadius && distance > 0) {
      setIsButtonRepelling(true)

      // Calculate repulsion force (stronger when closer)
      const force = Math.max(0, (repulsionRadius - distance) / repulsionRadius)
      const repulsionStrength = 60 * force

      // Normalize direction vector
      const directionX = deltaX / distance
      const directionY = deltaY / distance

      // Calculate new position (move away from cursor)
      let newX = buttonPosition.x + directionX * repulsionStrength * 0.1
      let newY = buttonPosition.y + directionY * repulsionStrength * 0.1

      // Keep button within container bounds with padding
      const padding = 20
      const maxX = container.width - button.width - padding
      const maxY = container.height - button.height - padding

      newX = Math.max(padding, Math.min(newX, maxX))
      newY = Math.max(padding, Math.min(newY, maxY))

      setButtonPosition({ x: newX, y: newY })
    } else {
      setIsButtonRepelling(false)
    }
  }

  // Reset button position when mouse leaves container
  const handleMouseLeave = () => {
    setIsButtonRepelling(false)
    // Smoothly return to center
    setTimeout(() => {
      if (containerRef.current && buttonRef.current) {
        const container = containerRef.current.getBoundingClientRect()
        const button = buttonRef.current.getBoundingClientRect()
        const centerX = (container.width - button.width) / 2
        const centerY = (container.height - button.height) / 2 - 20
        setButtonPosition({ x: centerX, y: centerY })
      }
    }, 1000)
  }

  // Initialize button position
  useEffect(() => {
    if (containerRef.current && buttonRef.current) {
      const container = containerRef.current.getBoundingClientRect()
      const centerX = (container.width - 200) / 2 // Approximate button width
      const centerY = 80 // Position below text
      setButtonPosition({ x: centerX, y: centerY })
    }
  }, [])

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
            <Link href="/terminal" className="text-sm hover:text-[#0ff] transition-colors">
              TERMINAL
            </Link>
            <Link href="/contact" className="text-sm hover:text-[#0ff] transition-colors">
              CONTACT
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-[#0ff] to-[#f0f] text-black hover:opacity-90">Hire Me</Button>
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ff] to-[#f0f]">Get In Touch</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss how I can help your business? Reach out and let's create something
            amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-black/60 border border-[#0ff]/20 p-8 rounded-lg shadow-[0_0_15px_rgba(0,255,255,0.1)]">
            <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>

            {submitSuccess && (
              <Alert className="mb-6 border-green-500/50 bg-green-500/10">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <AlertDescription className="text-green-400">
                  Thank you for your message! I'll get back to you as soon as possible.
                </AlertDescription>
              </Alert>
            )}

            {submitError && (
              <Alert className="mb-6 border-red-500/50 bg-red-500/10">
                <AlertCircle className="h-4 w-4 text-red-500" />
                <AlertDescription className="text-red-400">{errorMessage}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="bg-black/60 border-[#0ff]/20 focus:border-[#0ff] mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="bg-black/60 border-[#0ff]/20 focus:border-[#0ff] mt-2"
                />
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  className="bg-black/60 border-[#0ff]/20 focus:border-[#0ff] mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  required
                  className="bg-black/60 border-[#0ff]/20 focus:border-[#0ff] mt-2 min-h-[150px]"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#0ff] to-[#f0f] text-black hover:opacity-90"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-black/60 border border-[#0ff]/20 p-8 rounded-lg shadow-[0_0_15px_rgba(0,255,255,0.1)]">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#0ff]/10 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-[#0ff]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:officialdevtosin@gmail.com" className="text-white hover:text-[#0ff] font-medium">
                      officialdevtosin@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#0ff]/10 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-[#0ff]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone/WhatsApp</p>
                    <a href="tel:+2349011570271" className="text-white hover:text-[#0ff] font-medium">
                      +234 901 157 0271
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#0ff]/10 p-3 rounded-lg mr-4">
                    <Globe className="h-6 w-6 text-[#0ff]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Website</p>
                    <a
                      href="https://devtosin.com.ng"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white hover:text-[#0ff] font-medium"
                    >
                      devtosin.com.ng
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black/60 border border-[#0ff]/20 p-8 rounded-lg shadow-[0_0_15px_rgba(0,255,255,0.1)]">
              <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/iamdevtosin"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 bg-black/60 p-4 rounded-lg border border-[#0ff]/20 hover:border-[#0ff]/50 transition-colors group"
                >
                  <Github className="h-6 w-6 text-gray-400 group-hover:text-[#0ff]" />
                  <div>
                    <p className="text-white font-medium group-hover:text-[#0ff]">GitHub</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/devtosin"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 bg-black/60 p-4 rounded-lg border border-[#0ff]/20 hover:border-[#0ff]/50 transition-colors group"
                >
                  <Linkedin className="h-6 w-6 text-gray-400 group-hover:text-[#0ff]" />
                  <div>
                    <p className="text-white font-medium group-hover:text-[#0ff]">LinkedIn</p>
                  </div>
                </a>

                <a
                  href="https://twitter.com/devtosin"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 bg-black/60 p-4 rounded-lg border border-[#0ff]/20 hover:border-[#0ff]/50 transition-colors group"
                >
                  <Twitter className="h-6 w-6 text-gray-400 group-hover:text-[#0ff]" />
                  <div>
                    <p className="text-white font-medium group-hover:text-[#0ff]">Twitter</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/dev_tosin"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 bg-black/60 p-4 rounded-lg border border-[#0ff]/20 hover:border-[#0ff]/50 transition-colors group"
                >
                  <Instagram className="h-6 w-6 text-gray-400 group-hover:text-[#0ff]" />
                  <div>
                    <p className="text-white font-medium group-hover:text-[#0ff]">Instagram</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Magnetic Repulsion Schedule Button */}
            <div
              ref={containerRef}
              className="bg-black/60 border border-[#0ff]/20 p-8 rounded-lg shadow-[0_0_15px_rgba(0,255,255,0.1)] relative overflow-hidden min-h-[200px]"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <h2 className="text-2xl font-bold mb-4">Schedule a Call</h2>
              <p className="text-gray-400 mb-6">
                Prefer to discuss your project over a call? Try to catch the button if you can! 🧲
              </p>
              <div
                ref={buttonRef}
                className="absolute transition-all duration-200 ease-out"
                style={{
                  transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px)`,
                  zIndex: 10,
                }}
              >
                <div
                  className={`inline-flex items-center gap-2 bg-gradient-to-r from-[#0ff] to-[#f0f] text-black px-6 py-3 rounded-lg font-medium cursor-pointer select-none transition-all duration-200 ${
                    isButtonRepelling
                      ? "scale-110 shadow-[0_0_20px_rgba(0,255,255,0.5)] animate-pulse"
                      : "hover:scale-105 shadow-[0_0_10px_rgba(0,255,255,0.3)]"
                  }`}
                >
                  Schedule a Call {isButtonRepelling ? "🧲" : "📅"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-[#0ff]/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Dev Tosin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
