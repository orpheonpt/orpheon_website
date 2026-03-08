"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, FileText, ExternalLink } from "lucide-react"
import { projects } from "@/lib/projects-data"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

export default function ProjectsPage() {
  const { t, language } = useLanguage()

  const getProjectTitle = (projectId: string) => {
    const translatedProject = t.projectsData.find((p) => p.id === projectId)
    return translatedProject?.title || projects.find((p) => p.id === projectId)?.title || ""
  }

  const getProjectDescription = (projectId: string) => {
    const translatedProject = t.projectsData.find((p) => p.id === projectId)
    return translatedProject?.description || projects.find((p) => p.id === projectId)?.description || ""
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <Button asChild variant="ghost" className="mb-8 -ml-4">
              <Link href="/#projetos" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                {language === "pt" ? "Voltar ao início" : "Back to home"}
              </Link>
            </Button>

            <div className="max-w-3xl mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {language === "pt" ? "Todos os Projetos" : "All Projects"}
              </h1>
              <p className="text-xl text-muted-foreground">
                {language === "pt"
                  ? "Explore os casos de estudo e veja como ajudamos negócios a crescer com soluções digitais à medida."
                  : "Explore case studies and see how we help businesses grow with custom digital solutions."}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="group bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden flex flex-col"
                >
                  <div className="aspect-video bg-secondary/50 relative flex-shrink-0">
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50">
                      <FileText className="w-12 h-12" />
                    </div>
                  </div>
                  <CardContent className="pt-6 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{getProjectTitle(project.id)}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{getProjectDescription(project.id)}</p>
                    <div className="flex flex-col gap-2 mt-auto items-center">
                      <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                        <Link href={`/projetos/${project.id}`} className="gap-1.5">
                          <FileText className="w-4 h-4" />
                          {t.projects.caseStudy}
                        </Link>
                      </Button>
                      <Button size="sm" className="w-full gap-1.5" disabled>
                        <ExternalLink className="w-4 h-4" />
                        {t.projects.openDemo}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <Button asChild size="lg">
                <Link href="/#contacto">{t.projects.wantProject}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
