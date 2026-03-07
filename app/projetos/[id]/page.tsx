"use client"

import { notFound, useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Calendar, Clock, CheckCircle2 } from "lucide-react"
import { projects } from "@/lib/projects-data"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

export default function CaseStudyPage() {
  const params = useParams()
  const id = params.id as string
  const { t } = useLanguage()

  const project = projects.find((p) => p.id === id)
  const translatedProject = t.projectsData.find((p) => p.id === id)

  if (!project || !translatedProject) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <Button asChild variant="ghost" className="mb-8 -ml-4">
              <Link href="/#projetos" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                {t.caseStudy.backToProjects}
              </Link>
            </Button>

            <div className="max-w-4xl">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
                {translatedProject.title}
              </h1>

              <p className="text-xl text-muted-foreground mb-8">{translatedProject.description}</p>

              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>
                    {t.caseStudy.duration}: {translatedProject.duration}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {t.caseStudy.year}: {translatedProject.year}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Image */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="aspect-video max-w-5xl mx-auto bg-secondary rounded-xl flex items-center justify-center">
              <span className="text-muted-foreground">Imagem do projeto</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              {/* Overview */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">{t.caseStudy.overview}</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  {translatedProject.fullDescription.split("\n\n").map((paragraph, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Challenge */}
              <Card className="mb-8 bg-card border-border">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-destructive">{t.caseStudy.challenge}</h3>
                  <p className="text-muted-foreground leading-relaxed">{translatedProject.challenge}</p>
                </CardContent>
              </Card>

              {/* Solution */}
              <Card className="mb-12 bg-card border-border">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">{t.caseStudy.solution}</h3>
                  <p className="text-muted-foreground leading-relaxed">{translatedProject.solution}</p>
                </CardContent>
              </Card>

              {/* Results */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">{t.caseStudy.results}</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {translatedProject.results.map((result, i) => (
                    <Card key={i} className="bg-secondary/50 border-border">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{result}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Card className="bg-primary/10 border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">{t.caseStudy.wantProject}</h3>
                  <p className="text-muted-foreground mb-6">{t.caseStudy.wantProjectText}</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild size="lg">
                      <Link href="/#contacto">{t.caseStudy.requestQuote}</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link href="#" className="gap-2">
                        <ExternalLink className="w-4 h-4" />
                        {t.caseStudy.viewDemo}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
