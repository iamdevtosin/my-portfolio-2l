import type { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card className="bg-black/60 border border-[#0ff]/20 overflow-hidden group hover:border-[#0ff]/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.2)] transform hover:-translate-y-2">
      <CardContent className="p-6">
        <div className="mb-4 bg-black/60 w-16 h-16 rounded-lg flex items-center justify-center border border-[#0ff]/20 group-hover:border-[#0ff]/50 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-[#0ff] transition-colors">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </CardContent>
    </Card>
  )
}
