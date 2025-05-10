"use client"

import type React from "react"

import { useState } from "react"
import { MessageCircle, X, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

type Message = {
  role: "user" | "bot"
  content: string
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Hi there! I'm Dev Tosin's virtual assistant. How can I help you today?" },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage = { role: "user" as const, content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate response delay
    setTimeout(() => {
      const response = generateResponse(input)
      setMessages((prev) => [...prev, { role: "bot", content: response }])
      setIsLoading(false)
    }, 1000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const generateResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase()

    if (lowerQuery.includes("about") || lowerQuery.includes("who are you") || lowerQuery.includes("introduction")) {
      return "I'm Oluwatosin Aladetoyinbo (Dev Tosin), a WordPress Developer, Software Engineer, SEO Specialist, and Shopify Expert with over 5 years of experience. I create digital solutions that help businesses thrive online."
    }

    if (lowerQuery.includes("services") || lowerQuery.includes("what do you do")) {
      return "I offer WordPress development, software development, SEO optimization, Shopify development, website management, and WordPress plugin development. Would you like to know more about any specific service?"
    }

    if (lowerQuery.includes("project") || lowerQuery.includes("portfolio") || lowerQuery.includes("work")) {
      return "I've worked on various projects including Tale It Media, MyVisaProcess, Land Investigate, LW Digitalz, and more. You can view my complete portfolio here: <a href='/portfolio' class='text-[#0ff] hover:underline'>View Portfolio</a>"
    }

    if (lowerQuery.includes("contact") || lowerQuery.includes("reach") || lowerQuery.includes("email")) {
      return "You can reach me at officialdevtosin@gmail.com or through the contact form on this website. I'd be happy to discuss your project!"
    }

    if (lowerQuery.includes("price") || lowerQuery.includes("cost") || lowerQuery.includes("package")) {
      return "I offer various web care packages starting from ₦300,000/year for the Standard Plan. For custom projects, please contact me for a personalized quote."
    }

    if (lowerQuery.includes("terminal")) {
      return "You can check out my interactive terminal page here: <a href='/terminal' class='text-[#0ff] hover:underline'>Open Terminal</a>"
    }

    return "I'm not sure I understand your question. Would you like to know about my services, projects, or how to contact me?"
  }

  return (
    <>
      {isOpen ? (
        <Card className="fixed bottom-6 right-6 w-80 md:w-96 shadow-lg border border-[#0ff]/20 bg-black/90 z-50">
          <CardHeader className="bg-gradient-to-r from-[#0ff]/10 to-[#f0f]/10 p-4 flex justify-between items-center border-b border-[#0ff]/20">
            <h3 className="font-bold text-white">Chat with Dev Tosin</h3>
            <Button variant="ghost" size="icon" onClick={toggleChat} className="h-8 w-8 text-white">
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-4 h-80 overflow-y-auto flex flex-col gap-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`${
                  message.role === "user" ? "ml-auto bg-[#0ff]/10" : "mr-auto bg-gray-800/50"
                } rounded-lg p-3 max-w-[80%]`}
              >
                <div
                  className="text-sm"
                  dangerouslySetInnerHTML={{
                    __html: message.content.replace(
                      /<a href='([^']+)' class='([^']+)'>([^<]+)<\/a>/g,
                      (_, href, className, text) => `<a href="${href}" class="${className}">${text}</a>`,
                    ),
                  }}
                />
              </div>
            ))}
            {isLoading && (
              <div className="mr-auto bg-gray-800/50 rounded-lg p-3">
                <Loader2 className="h-4 w-4 animate-spin text-[#0ff]" />
              </div>
            )}
          </CardContent>
          <CardFooter className="p-2 border-t border-[#0ff]/20">
            <div className="flex w-full items-center gap-2">
              <Input
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-black/60 border-[#0ff]/20 focus:border-[#0ff] focus:ring-[#0ff]/10"
              />
              <Button
                onClick={handleSend}
                size="icon"
                disabled={!input.trim() || isLoading}
                className="bg-[#0ff] text-black hover:bg-[#0ff]/80"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      ) : (
        <Button
          onClick={toggleChat}
          className="rounded-full h-14 w-14 bg-gradient-to-r from-[#0ff] to-[#f0f] text-black hover:opacity-90 shadow-lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </>
  )
}
