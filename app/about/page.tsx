"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ChevronRight, Award, Briefcase, Users, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ScrollReveal from "@/components/scroll-reveal"
import ScrollToTop from "@/components/scroll-to-top"

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const skills = [
    { category: "Frontend", items: ["HTML/CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "TypeScript"] },
    { category: "Backend", items: ["Node.js", "PHP", "Laravel", "Express.js", "RESTful APIs", "GraphQL"] },
    { category: "CMS", items: ["WordPress", "Shopify", "WooCommerce", "Custom CMS", "Headless CMS"] },
    { category: "Cloud", items: ["Microsoft Azure", "AWS", "Vercel", "Netlify", "Docker", "cPanel Hosting", "CI/CD"] },
    { category: "Design", items: ["UI/UX Design", "Figma", "Adobe XD", "Responsive Design", "Wireframing"] },
    { category: "Other", items: ["SEO", "Performance Optimization", "Web Security", "Git"] },
  ]

  const experiences = [
    {
      period: "2025 - Present",
      title: "Rave AI Chat",
      company: "Freelance",
      description:
        "Developed an advanced AI chat application with real-time response capabilities and integration with multiple language models.",
    },
    {
      period: "2025",
      title: "Tailore Connect",
      company: "Freelance",
      description:
        "Created a platform connecting tailors with customers, featuring appointment scheduling, measurement tracking, and design collaboration tools.",
    },
    {
      period: "2023",
      title: "Cetrix",
      company: "Freelance",
      description:
        "Built a comprehensive business management system with CRM, inventory management, and financial reporting capabilities.",
    },
    {
      period: "2023",
      title: "Landinvestigate",
      company: "Freelance",
      description:
        "Developed a real estate due diligence platform that helps investors verify land ownership and property documentation.",
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
            <Link href="/about" className="text-sm font-medium text-blue-600">
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
                className="text-sm font-medium text-blue-600 py-2 border-b border-gray-100"
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
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <ScrollReveal direction="left" delay={0.2}>
            <div className="relative">
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
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.4}>
            <div className="space-y-6">
              <Badge className="bg-gray-100 text-black hover:bg-blue-100 px-4 py-1">About Me</Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-black">I'm </span>
                <span className="text-blue-600">Oluwatosin Aladetoyinbo</span>
              </h1>
              <p className="text-gray-600 text-lg">
                WordPress Developer • Software Engineer • SEO Specialist • Shopify Expert • Website Manager • Cloud
                Engineer
              </p>
              <p className="text-gray-600">
                I'm a versatile web developer and digital specialist based in Nigeria. With expertise spanning
                WordPress, Shopify, SEO, software development, and cloud engineering with Microsoft Azure, I create
                digital solutions that help businesses thrive online.
              </p>
              <p className="text-gray-600">
                My approach combines technical expertise with creative problem-solving to deliver websites and
                applications that not only look great but also perform exceptionally well. I also build custom WordPress
                plugins to extend functionality and create tailored solutions for specific business needs.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/contact">
                  <Button className="bg-black text-white hover:bg-blue-600">
                    Get In Touch <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button
                    variant="outline"
                    className="border-black text-black hover:bg-blue-600 hover:text-white hover:border-blue-600 bg-transparent"
                  >
                    View Projects
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <ScrollReveal direction="up" delay={0.1}>
            <Card className="bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-gray-100 p-4 rounded-full mb-4 group-hover:bg-blue-100 transition-colors">
                  <Award className="h-8 w-8 text-black group-hover:text-blue-600" />
                </div>
                <h3 className="text-gray-600 font-mono text-sm mb-2">Experience</h3>
                <p className="text-black font-bold text-3xl">9+ Years</p>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <Card className="bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-gray-100 p-4 rounded-full mb-4 group-hover:bg-blue-100 transition-colors">
                  <Briefcase className="h-8 w-8 text-black group-hover:text-blue-600" />
                </div>
                <h3 className="text-gray-600 font-mono text-sm mb-2">Projects</h3>
                <p className="text-black font-bold text-3xl">100+</p>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <Card className="bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-gray-100 p-4 rounded-full mb-4 group-hover:bg-blue-100 transition-colors">
                  <Users className="h-8 w-8 text-black group-hover:text-blue-600" />
                </div>
                <h3 className="text-gray-600 font-mono text-sm mb-2">Clients</h3>
                <p className="text-black font-bold text-3xl">67+</p>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4}>
            <Card className="bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-gray-100 p-4 rounded-full mb-4 group-hover:bg-blue-100 transition-colors">
                  <CheckCircle2 className="h-8 w-8 text-black group-hover:text-blue-600" />
                </div>
                <h3 className="text-gray-600 font-mono text-sm mb-2">Satisfaction</h3>
                <p className="text-black font-bold text-3xl">100%</p>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">My Skills</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I've developed a diverse set of skills throughout my career, allowing me to tackle various aspects of web
              development and digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-black group-hover:text-blue-600 transition-colors">
                    {skill.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="bg-gray-100 border-gray-300 text-black text-xs hover:bg-blue-100 hover:border-blue-300 transition-colors"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">Work Experience</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              My professional journey has equipped me with the expertise to deliver exceptional digital solutions across
              various industries.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 relative hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute top-6 left-6 w-3 h-3 bg-blue-600 rounded-full" />
                <div className="ml-8">
                  <Badge className="bg-gray-100 text-black hover:bg-blue-100 px-4 py-1 mb-2">{exp.period}</Badge>
                  <h3 className="text-xl font-bold mb-1 text-black">{exp.title}</h3>
                  <p className="text-blue-600 mb-4">{exp.company}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">Education</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              My educational background and professional certifications that have equipped me with the knowledge and
              skills to excel in the digital space.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 relative hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="absolute top-6 left-6 w-3 h-3 bg-blue-600 rounded-full" />
              <div className="ml-8">
                <Badge className="bg-gray-100 text-black hover:bg-blue-100 px-4 py-1 mb-2">2014 - 2018</Badge>
                <h3 className="text-xl font-bold mb-1 text-black">BSc Geography and Planning Science</h3>
                <p className="text-blue-600 mb-4">Ekiti State University</p>
                <p className="text-gray-600">
                  Graduated with a solid foundation in analytical thinking and problem-solving skills.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 relative hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="absolute top-6 left-6 w-3 h-3 bg-blue-600 rounded-full" />
              <div className="ml-8">
                <Badge className="bg-gray-100 text-black hover:bg-blue-100 px-4 py-1 mb-2">Secondary Education</Badge>
                <h3 className="text-xl font-bold mb-1 text-black">Secondary School Certificate</h3>
                <p className="text-blue-600 mb-4">Christ School Secondary Ado Ekiti</p>
                <p className="text-gray-600">
                  Received a well-rounded education with focus on sciences and mathematics.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 relative hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="absolute top-6 left-6 w-3 h-3 bg-blue-600 rounded-full" />
              <div className="ml-8">
                <Badge className="bg-gray-100 text-black hover:bg-blue-100 px-4 py-1 mb-2">
                  Professional Development
                </Badge>
                <h3 className="text-xl font-bold mb-1 text-black">Cloud Computing</h3>
                <p className="text-blue-600 mb-4">Utiva</p>
                <p className="text-gray-600">
                  Specialized training in cloud infrastructure, deployment, and management.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 relative hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="absolute top-6 left-6 w-3 h-3 bg-blue-600 rounded-full" />
              <div className="ml-8">
                <Badge className="bg-gray-100 text-black hover:bg-blue-100 px-4 py-1 mb-2">
                  Professional Development
                </Badge>
                <h3 className="text-xl font-bold mb-1 text-black">Software Engineering</h3>
                <p className="text-blue-600 mb-4">ALT School Africa</p>
                <p className="text-gray-600">
                  Comprehensive training in modern software development practices and technologies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-black">Ready to Work Together?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Let's collaborate to bring your vision to life. Whether you need a new website, a custom application, or
            digital strategy consulting, I'm here to help.
          </p>
          <Link href="/contact">
            <Button className="bg-black text-white hover:bg-blue-600 px-8 py-6 text-lg">Get In Touch</Button>
          </Link>
        </div>
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
