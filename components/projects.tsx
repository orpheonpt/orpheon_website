"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ExternalLink, FileText } from "lucide-react"
import Link from "next/link"
import { projects } from "@/lib/projects-data"
import { useLanguage } from "@/lib/language-context"

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")
  const { t, language } = useLanguage()

  const filters = [
    { label: t.projects.filterAll, value: "all" },
    { label: t.projects.filterWebsites, value: "website" },
    { label: t.projects.filterStores, value: "loja" },
    { label: t.projects.filterPlatforms, value: "plataforma" },
  ]

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter)

  // Get translated project data
  const getProjectTitle = (projectId: string) => {
    const translatedProject = t.projectsData.find((p) => p.id === projectId)
    return translatedProject?.title || projects.find((p) => p.id === projectId)?.title || ""
  }

  const getProjectDescription = (projectId: string) => {
    const translatedProject = t.projectsData.find((p) => p.id === projectId)
    return translatedProject?.description || projects.find((p) => p.id === projectId)?.description || ""
  }

  return (
    <section id="projetos" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t.projects.title}</h2>
          <p className="text-lg text-muted-foreground">{t.projects.subtitle}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        <div className="mb-12">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {filteredProjects.slice(0, 6).map((project) => (
                <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden flex flex-col h-full">
                    <div className="aspect-video bg-secondary/50 relative flex-shrink-0 overflow-hidden">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={getProjectTitle(project.id)}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50">
                          <FileText className="w-12 h-12" />
                        </div>
                      )}
                    </div>
                    <CardContent className="pt-6 flex flex-col flex-1">
                      <h3 className="text-lg font-semibold mb-2">{getProjectTitle(project.id)}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{getProjectDescription(project.id)}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-col gap-2 mt-auto items-center">
                        <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                          <Link href={`/projetos/${project.id}`} className="gap-1.5">
                            <FileText className="w-4 h-4" />
                            {t.projects.caseStudy}
                          </Link>
                        </Button>
                        {project.url && (
                          <Button asChild size="sm" className="w-full">
                            <Link href={project.url} target="_blank" rel="noopener noreferrer" className="gap-1.5">
                              <ExternalLink className="w-4 h-4" />
                              {t.projects.openDemo}
                            </Link>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild variant="outline" size="lg">
            <Link href="/projetos">{t.projects.viewAll}</Link>
          </Button>
          <Button asChild size="lg">
            <Link href="#contacto">{t.projects.wantProject}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
