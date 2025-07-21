import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  features?: string[]
}

export default function ServiceCard({ icon, title, description, features = [] }: ServiceCardProps) {
  return (
    <Card className="bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-black group-hover:text-blue-600 transition-colors duration-300">{icon}</div>
          <h3 className="text-xl font-bold text-black group-hover:text-blue-600 transition-colors">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        {features.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {features.map((feature, index) => (
              <Badge key={index} variant="secondary" className="bg-gray-100 text-black text-xs">
                {feature}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
