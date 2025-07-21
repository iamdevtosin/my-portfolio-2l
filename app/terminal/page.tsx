"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, TerminalIcon } from "lucide-react"
import ScrollToTop from "@/components/scroll-to-top"

export default function TerminalPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<Array<{ command: string; output: string; timestamp: string }>>([])
  const [currentPath, setCurrentPath] = useState("~")
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
    // Add welcome message
    setHistory([
      {
        command: "",
        output: `Welcome to Dev Tosin's Terminal Interface
Type 'help' to see available commands.
        
████████▄     ▄████████  ▄█    █▄       ▄████████  ▄██████▄     ▄████████  ▄█  ███▄▄▄▄   
███   ▀███   ███    ███ ███    ███     ███    ███ ███    ███   ███    ███ ███  ███▀▀▀██▄ 
███    ███   ███    █▀  ███    ███     ███    ███ ███    ███   ███    █▀  ███▄▄▄▄██▀   
███    ███  ▄███▄▄▄     ███    ███     ███    ███ ███    ███   ███        ▀▀▀▀▀▀█▄     
███    ███ ▀▀███▀▀▀     ███    ███   ▀███████████ ███    ███ ▀███████████ ▄██   ███    
███    ███   ███    █▄  ███    ███     ███    ███ ███    ███          ███ ███   ███    
███   ▄███   ███    ███ ███    ███     ███    ███ ███    ███    ▄█    ███ ███   ███    
████████▀    ██████████  ▀██████▀      ███    █▀   ▀██████▀   ▄████████▀   ▀█   █▀     

Full-Stack Developer | WordPress Expert | Cloud Engineer`,
        timestamp: new Date().toLocaleTimeString(),
      },
    ])
  }, [])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const commands = {
    help: () => `Available commands:
  help          - Show this help message
  about         - Learn about Dev Tosin
  skills        - View technical skills
  projects      - List recent projects
  contact       - Get contact information
  services      - View available services
  experience    - Show work experience
  education     - View educational background
  clear         - Clear terminal
  whoami        - Display current user
  date          - Show current date and time
  pwd           - Print working directory
  ls            - List directory contents
  cat [file]    - Display file contents
  echo [text]   - Display text
  history       - Show command history`,

    about: () => `Dev Tosin - Full-Stack Developer & Digital Solutions Expert

I'm Oluwatosin Aladetoyinbo, a versatile web developer and digital specialist 
based in Nigeria. With 9+ years of experience, I specialize in:

• WordPress Development & Custom Plugins
• Software Engineering (React, Next.js, Laravel)
• SEO Optimization & Digital Marketing
• Shopify E-commerce Solutions
• Cloud Engineering with Microsoft Azure
• Website Management & Maintenance

I've successfully delivered 100+ projects for 67+ clients worldwide,
maintaining a 100% client satisfaction rate.`,

    skills: () => `Technical Skills:

Frontend Development:
├── HTML5/CSS3/JavaScript (ES6+)
├── React.js & Next.js
├── TypeScript
├── Tailwind CSS
└── Responsive Design

Backend Development:
├── Node.js & Express.js
├── PHP & Laravel
├── RESTful APIs & GraphQL
├── Database Design (MySQL, PostgreSQL)
└── Server Management

CMS & E-commerce:
├── WordPress (Custom Themes & Plugins)
├── WooCommerce
├── Shopify
└── Headless CMS Solutions

Cloud & DevOps:
├── Microsoft Azure
├── AWS Basics
├── Docker
├── CI/CD Pipelines
└── cPanel & Server Management

Other Skills:
├── SEO Optimization
├── Performance Optimization
├── Web Security
├── Git Version Control
└── UI/UX Design Principles`,

    projects: () => `Recent Projects:

1. Rave AI Chat (2025)
   └── Advanced AI chat application with real-time responses
   └── Tech: React, Node.js, AI Integration

2. Tailore Connect (2025)
   └── Platform connecting tailors with customers
   └── Tech: Next.js, Laravel, Real-time Features

3. Cetrix (2023)
   └── Fintech platform for bill payments and subscriptions
   └── Tech: React, Laravel, Payment Integration

4. Land Investigate (2023)
   └── Property verification platform for Nigeria
   └── Tech: WordPress, Laravel, Custom Development

5. ASO Nigeria
   └── Fashion e-commerce with African designs
   └── Tech: WordPress, WooCommerce, Custom Design

6. Ravehost
   └── Web hosting and domain registration service
   └── Tech: Next.js, Laravel, Hosting Integration

Type 'cat projects.json' for detailed project information.`,

    contact: () => `Contact Information:

📧 Email: officialdevtosin@gmail.com
📱 Phone: +234 901 157 0271
🌍 Location: Lagos, Nigeria
💼 LinkedIn: linkedin.com/in/devtosin
🐙 GitHub: github.com/devtosin
🌐 Website: devtosin.com

Available for:
• Freelance Projects
• Consulting
• Long-term Partnerships
• Technical Support

Response Time: Usually within 24 hours`,

    services: () => `Available Services:

1. WordPress Development
   ├── Custom theme development
   ├── Plugin development & customization
   ├── WooCommerce integration
   └── Performance optimization

2. Software Development
   ├── Web application development
   ├── Custom CMS solutions
   ├── API development
   └── Progressive Web Apps

3. SEO Optimization
   ├── Technical SEO audits
   ├── On-page optimization
   ├── Content strategy
   └── Performance optimization

4. Shopify Development
   ├── Custom theme development
   ├── Store setup & configuration
   ├── App integration
   └── Conversion optimization

5. Cloud Engineering
   ├── Azure infrastructure setup
   ├── Cloud migration
   ├── DevOps implementation
   └── Cost optimization

6. Website Management
   ├── Regular maintenance
   ├── Security monitoring
   ├── Content updates
   └── Technical support`,

    experience: () => `Work Experience:

2025 - Present | Rave AI Chat
└── Developed advanced AI chat application
└── Integrated multiple language models
└── Implemented real-time response capabilities

2025 | Tailore Connect
└── Created tailor-customer connection platform
└── Built appointment scheduling system
└── Developed measurement tracking tools

2023 | Cetrix
└── Built comprehensive fintech platform
└── Implemented payment gateway integration
└── Developed user management system

2023 | Land Investigate
└── Created property verification platform
└── Built document validation system
└── Implemented search and filter functionality

2016 - Present | Freelance Developer
└── 100+ projects completed
└── 67+ satisfied clients
└── Specializing in WordPress & custom development`,

    education: () => `Educational Background:

🎓 BSc Geography and Planning Science (2014-2018)
   └── Ekiti State University
   └── Analytical thinking and problem-solving foundation

🏫 Secondary Education
   └── Christ School Secondary Ado Ekiti
   └── Strong foundation in sciences and mathematics

📚 Professional Development:
   ├── Cloud Computing - Utiva
   ├── Software Engineering - ALT School Africa
   ├── Various online certifications
   └── Continuous learning in emerging technologies

🏆 Certifications:
   ├── Microsoft Azure Fundamentals
   ├── WordPress Development
   ├── SEO Optimization
   └── Digital Marketing`,

    clear: () => {
      setHistory([])
      return ""
    },

    whoami: () => "devtosin",

    date: () => new Date().toString(),

    pwd: () => `/home/devtosin${currentPath === "~" ? "" : currentPath}`,

    ls: () => `total 8
drwxr-xr-x  2 devtosin devtosin 4096 Jan 21 2025 projects/
drwxr-xr-x  2 devtosin devtosin 4096 Jan 21 2025 skills/
-rw-r--r--  1 devtosin devtosin 1024 Jan 21 2025 about.txt
-rw-r--r--  1 devtosin devtosin 2048 Jan 21 2025 projects.json
-rw-r--r--  1 devtosin devtosin  512 Jan 21 2025 contact.txt
-rw-r--r--  1 devtosin devtosin 1536 Jan 21 2025 resume.pdf`,

    history: () => {
      const commandHistory = history
        .filter((item) => item.command)
        .map((item, index) => `${index + 1}  ${item.command}`)
        .join("\n")
      return commandHistory || "No command history available."
    },
  }

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()
    const [command, ...args] = trimmedCmd.split(" ")

    let output = ""

    if (command === "") {
      output = ""
    } else if (command === "cat") {
      const file = args[0]
      if (file === "about.txt") {
        output = commands.about()
      } else if (file === "contact.txt") {
        output = commands.contact()
      } else if (file === "projects.json") {
        output = `{
  "projects": [
    {
      "name": "Rave AI Chat",
      "year": 2025,
      "description": "Advanced AI chat application",
      "technologies": ["React", "Node.js", "AI Integration"],
      "status": "Live"
    },
    {
      "name": "Tailore Connect",
      "year": 2025,
      "description": "Tailor-customer connection platform",
      "technologies": ["Next.js", "Laravel", "Real-time"],
      "status": "Live"
    },
    {
      "name": "Cetrix",
      "year": 2023,
      "description": "Fintech payment platform",
      "technologies": ["React", "Laravel", "Payment APIs"],
      "status": "Live"
    }
  ]
}`
      } else {
        output = `cat: ${file}: No such file or directory`
      }
    } else if (command === "echo") {
      output = args.join(" ")
    } else if (commands[command as keyof typeof commands]) {
      output = commands[command as keyof typeof commands]()
    } else {
      output = `Command not found: ${command}. Type 'help' for available commands.`
    }

    if (command !== "clear") {
      setHistory((prev) => [
        ...prev,
        {
          command: cmd,
          output,
          timestamp: new Date().toLocaleTimeString(),
        },
      ])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      handleCommand(input)
      setInput("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault()
      // Could implement command history navigation here
    }
  }

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/90 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <TerminalIcon className="h-6 w-6 text-green-400" />
            <span className="font-bold text-xl text-green-400">DEV TOSIN TERMINAL</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-gray-300 hover:text-green-400 transition-colors">
              HOME
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-green-400 transition-colors">
              ABOUT
            </Link>
            <Link href="/services" className="text-sm font-medium text-gray-300 hover:text-green-400 transition-colors">
              SERVICES
            </Link>
            <Link href="/projects" className="text-sm font-medium text-gray-300 hover:text-green-400 transition-colors">
              PROJECTS
            </Link>
            <Link href="/terminal" className="text-sm font-medium text-green-400">
              TERMINAL
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-300 hover:text-green-400 transition-colors">
              CONTACT
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-green-400 hover:text-green-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && isMobile && (
          <div className="md:hidden bg-black border-t border-gray-800 py-4">
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <Link
                href="/"
                className="text-sm font-medium text-gray-300 hover:text-green-400 transition-colors py-2 border-b border-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-gray-300 hover:text-green-400 transition-colors py-2 border-b border-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium text-gray-300 hover:text-green-400 transition-colors py-2 border-b border-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                SERVICES
              </Link>
              <Link
                href="/projects"
                className="text-sm font-medium text-gray-300 hover:text-green-400 transition-colors py-2 border-b border-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                PROJECTS
              </Link>
              <Link
                href="/terminal"
                className="text-sm font-medium text-green-400 py-2 border-b border-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                TERMINAL
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-gray-300 hover:text-green-400 transition-colors py-2 border-b border-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Terminal */}
      <div className="pt-20 p-4 h-screen flex flex-col">
        <div className="bg-gray-900 rounded-lg border border-gray-700 flex-1 flex flex-col overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-gray-300 text-sm ml-4">devtosin@terminal:~</span>
          </div>

          {/* Terminal Content */}
          <div ref={terminalRef} className="flex-1 overflow-y-auto p-4 space-y-2">
            {history.map((item, index) => (
              <div key={index}>
                {item.command && (
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">devtosin@terminal:{currentPath}$</span>
                    <span className="text-white">{item.command}</span>
                  </div>
                )}
                {item.output && (
                  <pre className="text-green-400 whitespace-pre-wrap text-sm leading-relaxed mb-2">{item.output}</pre>
                )}
              </div>
            ))}
          </div>

          {/* Terminal Input */}
          <div className="border-t border-gray-700 p-4">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <span className="text-green-400 shrink-0">devtosin@terminal:{currentPath}$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-white outline-none"
                placeholder="Type a command..."
                autoFocus
              />
            </form>
          </div>
        </div>
      </div>

      <ScrollToTop />
    </div>
  )
}
