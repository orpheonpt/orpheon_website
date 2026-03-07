"use client"

import { useLanguage } from "@/lib/language-context"

export function About() {
  const { t } = useLanguage()

  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">{t.about.title}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{t.about.text}</p>
        </div>
      </div>
    </section>
  )
}
