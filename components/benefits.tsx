"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const benefitLinks = [
  "/servicos#development",
  "/servicos#discovery",
  "/servicos#design",
  "/servicos#support",
]

export function Benefits() {
  const { t } = useLanguage()

  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          <div className="lg:col-span-6">
            <p className="text-sm text-primary font-medium mb-4">{t.benefits.label}</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{t.benefits.title}</h2>
            <p className="text-lg text-muted-foreground">{t.benefits.subtitle}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {t.benefits.items.map((benefit: { title: string; description: string; link: string }, index: number) => (
            <div key={index} className="group">
              <div className="border-l-2 border-border group-hover:border-primary pl-6 transition-colors">
                <h3 className="text-xl md:text-2xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground mb-4">{benefit.description}</p>
                <Link
                  href={benefitLinks[index] || "/servicos"}
                  className="inline-flex items-center gap-2 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {benefit.link}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
