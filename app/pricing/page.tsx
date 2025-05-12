"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  const pricingPlans = [
    {
      name: "Basic",
      description: "Essential web development services for small businesses",
      price: billingCycle === "monthly" ? 499 : 4999,
      features: [
        "Custom WordPress Website",
        "Mobile Responsive Design",
        "5 Pages Included",
        "Basic SEO Setup",
        "Contact Form",
        "1 Month Support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      description: "Complete solution for growing businesses",
      price: billingCycle === "monthly" ? 999 : 9999,
      features: [
        "Custom WordPress or Next.js Website",
        "Mobile Responsive Design",
        "10 Pages Included",
        "Advanced SEO Setup",
        "Contact Form & Newsletter",
        "E-commerce Integration",
        "3 Months Support",
        "Weekly Backups",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Advanced solutions for established businesses",
      price: billingCycle === "monthly" ? 1999 : 19999,
      features: [
        "Custom Next.js Website",
        "Mobile Responsive Design",
        "Unlimited Pages",
        "Advanced SEO & Analytics",
        "Full E-commerce Solution",
        "Custom Integrations",
        "6 Months Support",
        "Daily Backups",
        "Performance Optimization",
        "Security Hardening",
      ],
      cta: "Contact Me",
      popular: false,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-24">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Transparent Pricing Plans</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. All plans include consultation, design, development, and
            deployment.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <Tabs defaultValue="monthly" className="w-full max-w-5xl mx-auto mb-8">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="monthly" onClick={() => setBillingCycle("monthly")}>
                Monthly
              </TabsTrigger>
              <TabsTrigger value="yearly" onClick={() => setBillingCycle("yearly")}>
                Yearly (Save 15%)
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="monthly" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan) => (
                <PricingCard key={plan.name} plan={plan} billingCycle={billingCycle} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="yearly" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan) => (
                <PricingCard key={plan.name} plan={plan} billingCycle={billingCycle} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </ScrollReveal>

      <ScrollReveal>
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-muted-foreground mb-6">
            I offer tailored solutions for unique business requirements. Let's discuss your project and create a custom
            plan that fits your needs and budget.
          </p>
          <Button size="lg">Schedule a Consultation</Button>
        </div>
      </ScrollReveal>
    </div>
  )
}

interface PricingCardProps {
  plan: {
    name: string
    description: string
    price: number
    features: string[]
    cta: string
    popular: boolean
  }
  billingCycle: "monthly" | "yearly"
}

function PricingCard({ plan, billingCycle }: PricingCardProps) {
  return (
    <Card className={`flex flex-col h-full ${plan.popular ? "border-primary shadow-lg" : ""}`}>
      {plan.popular && (
        <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-medium">Most Popular</div>
      )}
      <CardHeader>
        <CardTitle>{plan.name}</CardTitle>
        <CardDescription>{plan.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-6">
          <span className="text-4xl font-bold">${(plan.price / 100).toFixed(2)}</span>
          <span className="text-muted-foreground">/{billingCycle === "monthly" ? "month" : "year"}</span>
        </div>
        <ul className="space-y-2">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
          {plan.cta}
        </Button>
      </CardFooter>
    </Card>
  )
}
