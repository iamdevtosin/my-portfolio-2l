import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

export default function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
  return (
    <Card className="bg-black/60 border border-[#0ff]/20 overflow-hidden group hover:border-[#0ff]/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.2)] transform hover:-translate-y-2">
      <div className="relative">
        <div className="w-full h-60 relative">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Link
              href={link}
              target="_blank"
              className="bg-[#0ff] text-black font-medium px-4 py-2 rounded-full flex items-center gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
            >
              View Project <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 font-inter group-hover:text-[#0ff] transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm mb-4 font-inter">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="bg-black/60 border-[#0ff]/20 text-[#0ff] text-xs group-hover:bg-[#0ff]/10 transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
