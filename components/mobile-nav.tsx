"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="text-white hover:bg-white/10"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/10"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </Button>

          <nav className="flex flex-col items-center gap-8 text-lg">
            <Link href="/" className="text-white hover:text-[#0ff] transition-colors" onClick={toggleMenu}>
              HOME
            </Link>
            <Link href="#about" className="text-white hover:text-[#0ff] transition-colors" onClick={toggleMenu}>
              ABOUT
            </Link>
            <Link href="#services" className="text-white hover:text-[#0ff] transition-colors" onClick={toggleMenu}>
              SERVICES
            </Link>
            <Link href="#projects" className="text-white hover:text-[#0ff] transition-colors" onClick={toggleMenu}>
              PROJECTS
            </Link>
            <Link href="/portfolio" className="text-white hover:text-[#0ff] transition-colors" onClick={toggleMenu}>
              PORTFOLIO
            </Link>
            <Link href="/terminal" className="text-white hover:text-[#0ff] transition-colors" onClick={toggleMenu}>
              TERMINAL
            </Link>
            <Link href="#contact" className="text-white hover:text-[#0ff] transition-colors" onClick={toggleMenu}>
              CONTACT
            </Link>
          </nav>

          <div className="mt-12">
            <Link href="#contact" onClick={toggleMenu}>
              <Button className="bg-gradient-to-r from-[#0ff] to-[#f0f] text-black hover:opacity-90">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
