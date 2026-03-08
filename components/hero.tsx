"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
            {t.hero.title}
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-12 leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 mb-16">
            <Button asChild size="lg" className="text-base px-8 h-14">
              <Link href="#contacto" className="gap-2">
                {t.hero.cta1}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 h-14 bg-transparent">
              <Link href="#projetos">{t.hero.cta2}</Link>
            </Button>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-4 text-sm text-muted-foreground border-t border-border pt-8">
            <div>
              <span className="text-3xl md:text-4xl font-bold text-foreground block">{t.hero.stat1Value}</span>
              <span>{t.hero.stat1Label}</span>
            </div>
            <div>
              <span className="text-3xl md:text-4xl font-bold text-foreground block">{t.hero.stat2Value}</span>
              <span>{t.hero.stat2Label}</span>
            </div>
            <div>
              <span className="text-3xl md:text-4xl font-bold text-foreground block">{t.hero.stat3Value}</span>
              <span>{t.hero.stat3Label}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
