"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function About() {
  const { t } = useLanguage()

  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">{t.about.title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t.about.text}</p>
            <Link
              href="#contacto"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              {t.about.cta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="bg-muted/30 rounded-2xl p-8 lg:p-12">
            <div className="space-y-8">
              {t.about.values.map((value: { title: string; description: string }, index: number) => (
                <div key={index} className="border-l-2 border-primary pl-6">
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
