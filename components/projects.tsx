"use client"

import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { projects } from "@/lib/projects-data"
import { useLanguage } from "@/lib/language-context"

export function Projects() {
  const { t } = useLanguage()

  // Get translated project data
  const getProjectTitle = (projectId: string) => {
    const translatedProject = t.projectsData.find((p) => p.id === projectId)
    return translatedProject?.title || projects.find((p) => p.id === projectId)?.title || ""
  }

  const getProjectDescription = (projectId: string) => {
    const translatedProject = t.projectsData.find((p) => p.id === projectId)
    return translatedProject?.description || projects.find((p) => p.id === projectId)?.description || ""
  }

  // Show only first 3 projects
  const displayProjects = projects.slice(0, 3)

  return (
    <section id="projetos" className="py-24 lg:py-32 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{t.projects.title}</h2>
            <p className="text-lg text-muted-foreground">{t.projects.subtitle}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {displayProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projetos/${project.id}`}
              className="group block"
            >
              <div className="aspect-[4/3] bg-muted/30 rounded-xl mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20 group-hover:from-primary/10 group-hover:to-primary/30 transition-colors" />
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {getProjectTitle(project.id)}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-2">{getProjectDescription(project.id)}</p>
              <span className="inline-flex items-center gap-2 text-sm text-primary font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                {t.projects.caseStudy}
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/projetos"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            {t.projects.viewAll}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
