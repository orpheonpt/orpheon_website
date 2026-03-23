"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Calendar, Shield } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge variant="secondary" className="gap-1.5 px-3 py-1.5 text-sm">
              <Zap className="w-3.5 h-3.5 text-primary" />
              {t.hero.badge1}
            </Badge>
            <Badge variant="secondary" className="gap-1.5 px-3 py-1.5 text-sm">
              <Calendar className="w-3.5 h-3.5 text-primary" />
              {t.hero.badge2}
            </Badge>
            <Badge variant="secondary" className="gap-1.5 px-3 py-1.5 text-sm">
              <Shield className="w-3.5 h-3.5 text-primary" />
              {t.hero.badge3}
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 text-balance">
            {t.hero.title} <span className="text-primary">{t.hero.titleHighlight}</span> {t.hero.titleEnd}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button asChild size="lg" className="text-base px-8">
              <Link href="#contacto" className="gap-2">
                {t.hero.cta1}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 bg-transparent">
              <Link href="#projetos">{t.hero.cta2}</Link>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            {t.hero.stack} <span className="text-foreground font-medium">React, Node, PHP, MySQL</span>{" "}
            {t.hero.stackEnd}
          </p>
        </div>
      </div>
    </section>
  )
}