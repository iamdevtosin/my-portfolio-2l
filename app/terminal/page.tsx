"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowLeft, X, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { JSX } from "react/jsx-runtime"

export default function TerminalPage() {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>([])
  const [output, setOutput] = useState<JSX.Element[]>([
    <div key="welcome" className="mb-4">
      <p className="text-green-400">Welcome to DevTosin Terminal v1.0.0</p>
      <p className="text-gray-400">Type 'help' to see available commands.</p>
    </div>,
  ])
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [output])

  const handleCommand = (cmd: string) => {
    const command = cmd.trim().toLowerCase()
    const args = command.split(" ")
    const mainCommand = args[0]

    setHistory((prev) => [...prev, command])

    switch (mainCommand) {
      case "help":
        return (
          <div className="mb-4">
            <p className="text-green-400 font-bold">Available Commands:</p>
            <ul className="list-disc pl-5 text-gray-300">
              <li>help - Show this help message</li>
              <li>clear - Clear the terminal</li>
              <li>about - About DevTosin</li>
              <li>skills - List my technical skills</li>
              <li>projects - List my projects</li>
              <li>contact - Get my contact information</li>
              <li>social - List my social media profiles</li>
              <li>experience - Show my work experience</li>
              <li>education - Show my educational background</li>
              <li>exit - Return to homepage</li>
            </ul>
          </div>
        )
      case "clear":
        setOutput([])
        return null
      case "about":
        return (
          <div className="mb-4">
            <p className="text-green-400 font-bold">About Me:</p>
            <p className="text-gray-300">
              I'm Oluwatosin Aladetoyinbo, a versatile web developer and digital specialist based in Nigeria. With
              expertise spanning WordPress, Shopify, SEO, and software development, I create digital solutions that help
              businesses thrive online.
            </p>
            <p className="text-gray-300 mt-2">
              My approach combines technical expertise with creative problem-solving to deliver websites and
              applications that not only look great but also perform exceptionally well.
            </p>
          </div>
        )
      case "skills":
        return (
          <div className="mb-4">
            <p className="text-green-400 font-bold">Technical Skills:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
              <div className="bg-black/30 p-2 rounded border border-[#0ff]/20">
                <p className="text-[#0ff]">Frontend</p>
                <ul className="text-gray-300 text-sm pl-4">
                  <li>HTML/CSS/JavaScript</li>
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="bg-black/30 p-2 rounded border border-[#0ff]/20">
                <p className="text-[#0ff]">Backend</p>
                <ul className="text-gray-300 text-sm pl-4">
                  <li>PHP</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>Laravel</li>
                </ul>
              </div>
              <div className="bg-black/30 p-2 rounded border border-[#0ff]/20">
                <p className="text-[#0ff]">CMS</p>
                <ul className="text-gray-300 text-sm pl-4">
                  <li>WordPress</li>
                  <li>Shopify</li>
                  <li>WooCommerce</li>
                  <li>Custom CMS</li>
                </ul>
              </div>
              <div className="bg-black/30 p-2 rounded border border-[#0ff]/20">
                <p className="text-[#0ff]">Database</p>
                <ul className="text-gray-300 text-sm pl-4">
                  <li>MySQL</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
              <div className="bg-black/30 p-2 rounded border border-[#0ff]/20">
                <p className="text-[#0ff]">DevOps</p>
                <ul className="text-gray-300 text-sm pl-4">
                  <li>Git</li>
                  <li>Docker</li>
                  <li>AWS</li>
                  <li>Vercel</li>
                  <li>cPanel Hosting</li>
                </ul>
              </div>
              <div className="bg-black/30 p-2 rounded border border-[#0ff]/20">
                <p className="text-[#0ff]">Other</p>
                <ul className="text-gray-300 text-sm pl-4">
                  <li>SEO</li>
                  <li>UI/UX Design</li>
                  <li>Technical Writing</li>
                </ul>
              </div>
            </div>
          </div>
        )
      case "projects":
        return (
          <div className="mb-4">
            <p className="text-green-400 font-bold">Featured Projects:</p>
            <div className="space-y-3 mt-2">
              <div className="bg-black/30 p-3 rounded border border-[#0ff]/20">
                <p className="text-[#0ff] font-bold">Tale It Media</p>
                <p className="text-gray-300 text-sm">Digital media agency focused on platform business growth.</p>
                <p className="text-gray-400 text-xs mt-1">WordPress, Content Strategy, SEO</p>
                <a
                  href="https://taleitmedia.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#f0f] hover:underline"
                >
                  taleitmedia.com
                </a>
              </div>
              <div className="bg-black/30 p-3 rounded border border-[#0ff]/20">
                <p className="text-[#0ff] font-bold">ASO Nigeria</p>
                <p className="text-gray-300 text-sm">Fashion e-commerce platform featuring vibrant African designs.</p>
                <p className="text-gray-400 text-xs mt-1">WordPress, E-commerce, Custom Design</p>
                <a
                  href="https://asonigeria.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#f0f] hover:underline"
                >
                  asonigeria.com
                </a>
              </div>
              <div className="bg-black/30 p-3 rounded border border-[#0ff]/20">
                <p className="text-[#0ff] font-bold">Land Investigate</p>
                <p className="text-gray-300 text-sm">Property verification platform for validating land ownership.</p>
                <p className="text-gray-400 text-xs mt-1">WordPress, Laravel, Custom Development</p>
                <a
                  href="https://landinvestigate.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#f0f] hover:underline"
                >
                  landinvestigate.com
                </a>
              </div>
              <div className="bg-black/30 p-3 rounded border border-[#0ff]/20">
                <p className="text-[#0ff] font-bold">Ravehost</p>
                <p className="text-gray-300 text-sm">Web hosting and domain registration service.</p>
                <p className="text-gray-400 text-xs mt-1">Next.js, Web Services, UI/UX Design</p>
                <a
                  href="https://ravehost.com.ng"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#f0f] hover:underline"
                >
                  ravehost.com.ng
                </a>
              </div>
              <div className="bg-black/30 p-3 rounded border border-[#0ff]/20">
                <p className="text-[#0ff] font-bold">Freak Vault</p>
                <p className="text-gray-300 text-sm">Fashion e-commerce platform featuring contemporary designs.</p>
                <p className="text-gray-400 text-xs mt-1">Shopify, E-commerce, Custom Theme</p>
                <a
                  href="https://freakvault.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#f0f] hover:underline"
                >
                  freakvault.com
                </a>
              </div>
              <div className="bg-black/30 p-3 rounded border border-[#0ff]/20">
                <p className="text-[#0ff] font-bold">Lanre Da Silva</p>
                <p className="text-gray-300 text-sm">Fashion designer website showcasing elegant collections.</p>
                <p className="text-gray-400 text-xs mt-1">WordPress, Fashion, Portfolio</p>
                <a
                  href="https://lanredasilva.com.ng"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#f0f] hover:underline"
                >
                  lanredasilva.com.ng
                </a>
              </div>
              <div className="bg-black/30 p-3 rounded border border-[#0ff]/20">
                <p className="text-[#0ff] font-bold">Yomi Casual</p>
                <p className="text-gray-300 text-sm">Fashion brand website featuring stylish men's collections.</p>
                <p className="text-gray-400 text-xs mt-1">WordPress, E-commerce, Fashion</p>
                <a
                  href="https://yomicasual.africa"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#f0f] hover:underline"
                >
                  yomicasual.africa
                </a>
              </div>
              <div className="bg-black/30 p-3 rounded border border-[#0ff]/20">
                <p className="text-[#0ff] font-bold">LW Digital Z</p>
                <p className="text-gray-300 text-sm">Digital agency website with modern design.</p>
                <p className="text-gray-400 text-xs mt-1">Next.js, Digital Marketing, UI/UX Design</p>
                <a
                  href="https://lwdigitalz.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#f0f] hover:underline"
                >
                  lwdigitalz.com
                </a>
              </div>
              <div className="bg-black/30 p-3 rounded border border-[#0ff]/20">
                <p className="text-[#0ff] font-bold">vanskere</p>
                <p className="text-gray-300 text-sm">
                  African luxury menswear brand featuring modern elegance and traditional-inspired designs.
                </p>
                <p className="text-gray-400 text-xs mt-1">Shopify, Fashion, Menswear</p>
                <a
                  href="https://vanskere.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#f0f] hover:underline"
                >
                  vanskere.com
                </a>
              </div>
              <div className="bg-black/30 p-3 rounded border border-[#0ff]/20">
                <p className="text-[#0ff] font-bold">fabriquebyfabz</p>
                <p className="text-gray-300 text-sm">
                  Fashion brand offering custom-made and ready-to-wear elegant designs with unique style.
                </p>
                <p className="text-gray-400 text-xs mt-1">Shopify, Fashion, Custom Design</p>
                <a
                  href="https://fabriquebyfabz.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#f0f] hover:underline"
                >
                  fabriquebyfabz.com
                </a>
              </div>
              <p className="text-gray-400 text-sm mt-2">
                Type 'portfolio' to visit my portfolio page with all projects.
              </p>
            </div>
          </div>
        )
      case "contact":
        return (
          <div className="mb-4">
            <p className="text-green-400 font-bold">Contact Information:</p>
            <ul className="text-gray-300 mt-2">
              <li>
                <span className="text-[#0ff]">Email:</span> officialdevtosin@gmail.com
              </li>
              <li>
                <span className="text-[#0ff]">Phone/WhatsApp:</span> +234 901 157 0271
              </li>
              <li>
                <span className="text-[#0ff]">Website:</span> devtosin.com.ng
              </li>
            </ul>
          </div>
        )
      case "social":
        return (
          <div className="mb-4">
            <p className="text-green-400 font-bold">Social Media:</p>
            <ul className="text-gray-300 mt-2">
              <li>
                <span className="text-[#0ff]">GitHub:</span>{" "}
                <a
                  href="https://github.com/iamdevtosin"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#f0f] hover:underline"
                >
                  github.com/iamdevtosin
                </a>
              </li>
              <li>
                <span className="text-[#0ff]">LinkedIn:</span>{" "}
                <a
                  href="https://linkedin.com/in/devtosin"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#f0f] hover:underline"
                >
                  linkedin.com/in/devtosin
                </a>
              </li>
              <li>
                <span className="text-[#0ff]">Twitter:</span>{" "}
                <a
                  href="https://twitter.com/devtosin"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#f0f] hover:underline"
                >
                  twitter.com/devtosin
                </a>
              </li>
              <li>
                <span className="text-[#0ff]">Instagram:</span>{" "}
                <a
                  href="https://instagram.com/dev_tosin"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#f0f] hover:underline"
                >
                  instagram.com/dev_tosin
                </a>
              </li>
            </ul>
          </div>
        )
      case "experience":
        return (
          <div className="mb-4">
            <p className="text-green-400 font-bold">Work Experience:</p>
            <div className="space-y-3 mt-2">
              <div className="bg-black/30 p-3 rounded border border-[#0ff]/20">
                <p className="text-[#0ff] font-bold">Freelance Web Developer & Digital Specialist</p>
                <p className="text-gray-400 text-sm">2018 - Present</p>
                <ul className="text-gray-300 text-sm list-disc pl-5 mt-1">
                  <li>Developed and maintained over 100 websites for clients across various industries</li>
                  <li>Specialized in WordPress, Shopify, and custom web development</li>
                  <li>Provided SEO optimization, website management, and digital marketing services</li>
                </ul>
              </div>
              <div className="bg-black/30 p-3 rounded border border-[#0ff]/20">
                <p className="text-[#0ff] font-bold">Senior WordPress Developer</p>
                <p className="text-gray-400 text-sm">Digital Agency XYZ • 2020 - 2022</p>
                <ul className="text-gray-300 text-sm list-disc pl-5 mt-1">
                  <li>Led development of enterprise WordPress solutions for high-profile clients</li>
                  <li>Implemented custom plugins and themes to meet specific business requirements</li>
                  <li>Mentored junior developers and established development best practices</li>
                </ul>
              </div>
              <div className="bg-black/30 p-3 rounded border border-[#0ff]/20">
                <p className="text-[#0ff] font-bold">Web Developer</p>
                <p className="text-gray-400 text-sm">Tech Solutions Inc • 2018 - 2020</p>
                <ul className="text-gray-300 text-sm list-disc pl-5 mt-1">
                  <li>Developed responsive websites and web applications for clients</li>
                  <li>Collaborated with design team to implement UI/UX improvements</li>
                  <li>Maintained and updated existing client websites</li>
                </ul>
              </div>
            </div>
          </div>
        )
      case "education":
        return (
          <div className="mb-4">
            <p className="text-green-400 font-bold">Education:</p>
            <div className="space-y-3 mt-2">
              <div className="bg-black/30 p-3 rounded border border-[#0ff]/20">
                <p className="text-[#0ff] font-bold">BSc Geography and Planning Science</p>
                <p className="text-gray-400 text-sm">Ekiti State University • 2014 - 2018</p>
                <p className="text-gray-300 text-sm mt-1">
                  Graduated with a solid foundation in analytical thinking and problem-solving skills.
                </p>
              </div>
              <div className="bg-black/30 p-3 rounded border border-[#0ff]/20">
                <p className="text-[#0ff] font-bold">Secondary School Certificate</p>
                <p className="text-gray-400 text-sm">Christ School Secondary Ado Ekiti</p>
                <p className="text-gray-300 text-sm mt-1">
                  Received a well-rounded education with focus on sciences and mathematics.
                </p>
              </div>
              <div className="bg-black/30 p-3 rounded border border-[#0ff]/20">
                <p className="text-[#0ff] font-bold">Professional Certifications</p>
                <ul className="text-gray-300 text-sm list-disc pl-5 mt-1">
                  <li>Cloud Computing - Utiva</li>
                  <li>Software Engineering - ALT School Africa</li>
                  <li>WordPress Developer Certification</li>
                  <li>Shopify Partner Certification</li>
                </ul>
              </div>
            </div>
          </div>
        )
      case "exit":
        window.location.href = "/"
        return null
      case "portfolio":
        window.location.href = "/portfolio"
        return null
      default:
        if (command === "") {
          return null
        }
        return (
          <div className="mb-4">
            <p className="text-red-400">Command not found: {command}. Type 'help' to see available commands.</p>
          </div>
        )
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmedInput = input.trim()

    setOutput(
      (prev) =>
        [
          ...prev,
          <div key={`input-${history.length}`} className="mb-2 font-mono">
            <span className="text-[#0ff]">devtosin@portfolio</span>:<span className="text-[#f0f]">~$</span>{" "}
            {trimmedInput}
          </div>,
          handleCommand(trimmedInput),
        ].filter(Boolean) as JSX.Element[],
    )

    setInput("")
  }

  const handleQuickCommand = (cmd: string) => {
    setInput(cmd)
    setTimeout(() => {
      handleSubmit(new Event("submit") as any)
    }, 100)
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
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
              variant="outline"
              size="sm"
              className="border-[#0ff]/50 text-[#0ff] hover:bg-[#0ff]/10"
              onClick={() => handleQuickCommand("about")}
            >
              About
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-[#0ff]/50 text-[#0ff] hover:bg-[#0ff]/10"
              onClick={() => handleQuickCommand("skills")}
            >
              Skills
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-[#0ff]/50 text-[#0ff] hover:bg-[#0ff]/10"
              onClick={() => handleQuickCommand("projects")}
            >
              Projects
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-[#0ff]/50 text-[#0ff] hover:bg-[#0ff]/10"
              onClick={() => handleQuickCommand("contact")}
            >
              Contact
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
                className="text-sm hover:text-[#0ff] transition-colors py-2 border-b border-[#0ff]/10 text-left"
                onClick={() => {
                  handleQuickCommand("about")
                  setIsMenuOpen(false)
                }}
              >
                About
              </button>
              <button
                className="text-sm hover:text-[#0ff] transition-colors py-2 border-b border-[#0ff]/10 text-left"
                onClick={() => {
                  handleQuickCommand("skills")
                  setIsMenuOpen(false)
                }}
              >
                Skills
              </button>
              <button
                className="text-sm hover:text-[#0ff] transition-colors py-2 border-b border-[#0ff]/10 text-left"
                onClick={() => {
                  handleQuickCommand("projects")
                  setIsMenuOpen(false)
                }}
              >
                Projects
              </button>
              <button
                className="text-sm hover:text-[#0ff] transition-colors py-2 border-b border-[#0ff]/10 text-left"
                onClick={() => {
                  handleQuickCommand("contact")
                  setIsMenuOpen(false)
                }}
              >
                Contact
              </button>
              <button
                className="text-sm hover:text-[#0ff] transition-colors py-2 border-b border-[#0ff]/10 text-left"
                onClick={() => {
                  handleQuickCommand("social")
                  setIsMenuOpen(false)
                }}
              >
                Social
              </button>
              <button
                className="text-sm hover:text-[#0ff] transition-colors py-2 border-b border-[#0ff]/10 text-left"
                onClick={() => {
                  handleQuickCommand("experience")
                  setIsMenuOpen(false)
                }}
              >
                Experience
              </button>
              <button
                className="text-sm hover:text-[#0ff] transition-colors py-2 border-b border-[#0ff]/10 text-left"
                onClick={() => {
                  handleQuickCommand("education")
                  setIsMenuOpen(false)
                }}
              >
                Education
              </button>
              <button
                className="text-sm hover:text-[#0ff] transition-colors py-2 border-b border-[#0ff]/10 text-left"
                onClick={() => {
                  handleQuickCommand("help")
                  setIsMenuOpen(false)
                }}
              >
                Help
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Terminal */}
      <div className="flex-1 pt-20 pb-20 md:pb-4 px-4 flex flex-col">
        <div className="w-full max-w-4xl mx-auto bg-black/80 border border-[#0ff]/30 rounded-lg shadow-lg flex flex-col flex-1">
          <div className="border-b border-[#0ff]/20 p-2 flex items-center">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 text-center text-sm text-gray-400 font-mono">devtosin@portfolio:~</div>
          </div>
          <div
            ref={terminalRef}
            className="flex-1 p-4 overflow-y-auto font-mono text-sm md:text-base"
            onClick={() => inputRef.current?.focus()}
          >
            {output}
            <div className="flex items-center">
              <span className="text-[#0ff]">devtosin@portfolio</span>:<span className="text-[#f0f]">~$</span>{" "}
              <form onSubmit={handleSubmit} className="flex-1">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="bg-transparent border-none outline-none text-white w-full ml-1 font-mono text-sm md:text-base"
                  autoFocus
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Command Buttons */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-md border-t border-[#0ff]/20 py-3 px-4 overflow-x-auto">
          <div className="flex gap-2 justify-start items-center w-full">
            <Button
              size="sm"
              variant="outline"
              className="border-[#0ff]/50 text-[#0ff] hover:bg-[#0ff]/10 whitespace-nowrap text-xs"
              onClick={() => handleQuickCommand("help")}
            >
              help
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-[#0ff]/50 text-[#0ff] hover:bg-[#0ff]/10 whitespace-nowrap text-xs"
              onClick={() => handleQuickCommand("about")}
            >
              about
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-[#0ff]/50 text-[#0ff] hover:bg-[#0ff]/10 whitespace-nowrap text-xs"
              onClick={() => handleQuickCommand("skills")}
            >
              skills
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-[#0ff]/50 text-[#0ff] hover:bg-[#0ff]/10 whitespace-nowrap text-xs"
              onClick={() => handleQuickCommand("projects")}
            >
              projects
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-[#0ff]/50 text-[#0ff] hover:bg-[#0ff]/10 whitespace-nowrap text-xs"
              onClick={() => handleQuickCommand("contact")}
            >
              contact
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-[#0ff]/50 text-[#0ff] hover:bg-[#0ff]/10 whitespace-nowrap text-xs"
              onClick={() => handleQuickCommand("clear")}
            >
              clear
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
