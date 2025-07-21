import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies?: string[]
  tags?: string[]
  liveUrl?: string
  githubUrl?: string
  link?: string
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies = [],
  tags = [],
  liveUrl,
  githubUrl,
  link,
}: ProjectCardProps) {
  // Use technologies if provided, otherwise fall back to tags
  const displayTags = technologies.length > 0 ? technologies : tags

  return (
    <Card className="bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="relative">
        <div className="w-full h-48 relative overflow-hidden">
          <Image
            src={image || "/placeholder.svg?height=200&width=400"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            {(liveUrl || link) && (
              <Link
                href={liveUrl || link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors duration-300 flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                View Live
              </Link>
            )}
            {githubUrl && (
              <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300 flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                Code
              </Link>
            )}
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 text-black group-hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2">
          {displayTags.map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-gray-100 text-black text-xs hover:bg-blue-100 transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
