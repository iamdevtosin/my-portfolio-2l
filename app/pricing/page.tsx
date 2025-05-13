"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Pricing Section */}
      <section id="pricing" className="py-20 relative bg-black/50">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ff] to-[#f0f]">
                Web Care Packages
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive website maintenance and support packages to keep your digital presence running smoothly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Standard Plan */}
            <Card className="bg-black/60 border border-[#0ff]/20 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-[#0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2">Standard Plan</h3>
                  <div className="h-1 w-12 bg-[#0ff] rounded-full" />
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">₦300,000</span>
                  <span className="text-gray-400">/year</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#0ff] shrink-0 mt-0.5" />
                    <span className="text-gray-300">Domain & hosting renewal</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#0ff] shrink-0 mt-0.5" />
                    <span className="text-gray-300">Monthly website maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#0ff] shrink-0 mt-0.5" />
                    <span className="text-gray-300">Minor text & image edits (5/month)</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#0ff] shrink-0 mt-0.5" />
                    <span className="text-gray-300">Uptime monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#0ff] shrink-0 mt-0.5" />
                    <span className="text-gray-300">WhatsApp support</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#0ff] shrink-0 mt-0.5" />
                    <span className="text-gray-300">48-hour response time</span>
                  </li>
                </ul>
                <Link
                  href={`https://wa.me/+2348168522189?text=${encodeURIComponent("I am contacting you from your website, I am interested in the Standard Plan package, how long will it take to design this website?")}`}
                >
                  <Button className="w-full bg-[#0ff]/10 text-[#0ff] hover:bg-[#0ff]/20 border border-[#0ff]/50">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Pro Support Plan */}
            <Card className="bg-black/60 border border-[#f0f]/30 overflow-hidden relative group transform scale-105 shadow-[0_0_25px_rgba(255,0,255,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-b from-[#f0f]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#0ff] to-[#f0f] text-black text-center text-sm font-bold py-1">
                MOST POPULAR
              </div>
              <CardContent className="p-6 pt-10">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2">Pro Support Plan</h3>
                  <div className="h-1 w-12 bg-[#f0f] rounded-full" />
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">₦500,000</span>
                  <span className="text-gray-400">/year</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#f0f] shrink-0 mt-0.5" />
                    <span className="text-gray-300">Everything in Standard Plan</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#f0f] shrink-0 mt-0.5" />
                    <span className="text-gray-300">3 major feature integrations yearly</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#f0f] shrink-0 mt-0.5" />
                    <span className="text-gray-300">6 priority content updates monthly</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#f0f] shrink-0 mt-0.5" />
                    <span className="text-gray-300">SEO monitoring & basic reports</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#f0f] shrink-0 mt-0.5" />
                    <span className="text-gray-300">Priority WhatsApp support</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#f0f] shrink-0 mt-0.5" />
                    <span className="text-gray-300">Google Meet video calls (2/month)</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#f0f] shrink-0 mt-0.5" />
                    <span className="text-gray-300">Instant response time</span>
                  </li>
                </ul>
                <Link
                  href={`https://wa.me/+2348168522189?text=${encodeURIComponent("I am contacting you from your website, I am interested in the Pro Support Plan package, how long will it take to design this website?")}`}
                >
                  <Button className="w-full bg-gradient-to-r from-[#0ff] to-[#f0f] text-black hover:opacity-90">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="bg-black/60 border border-[#0ff]/20 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-[#0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2">Premium Plan</h3>
                  <div className="h-1 w-12 bg-[#0ff] rounded-full" />
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">₦800,000</span>
                  <span className="text-gray-400">/year</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#0ff] shrink-0 mt-0.5" />
                    <span className="text-gray-300">Everything in Pro Support Plan</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#0ff] shrink-0 mt-0.5" />
                    <span className="text-gray-300">Unlimited content updates</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#0ff] shrink-0 mt-0.5" />
                    <span className="text-gray-300">Advanced SEO optimization</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#0ff] shrink-0 mt-0.5" />
                    <span className="text-gray-300">Monthly performance reports</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#0ff] shrink-0 mt-0.5" />
                    <span className="text-gray-300">Dedicated account manager</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#0ff] shrink-0 mt-0.5" />
                    <span className="text-gray-300">24/7 priority support</span>
                  </li>
                </ul>
                <Link
                  href={`https://wa.me/+2348168522189?text=${encodeURIComponent("I am contacting you from your website, I am interested in the Premium Plan package, how long will it take to design this website?")}`}
                >
                  <Button className="w-full bg-[#0ff]/10 text-[#0ff] hover:bg-[#0ff]/20 border border-[#0ff]/50">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Need a custom plan? Contact me for a tailored solution.</p>
            <Link
              href={`https://wa.me/+2348168522189?text=${encodeURIComponent("I am contacting you from your website, I am interested in a Custom Plan package, how long will it take to design this website?")}`}
            >
              <Button variant="outline" className="border-[#0ff] text-[#0ff] hover:bg-[#0ff]/10">
                Contact for Custom Plan
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
