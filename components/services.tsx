"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const serviceIds = ["discovery", "design", "development", "webapps", "ecommerce", "support"]

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="servicos" className="py-24 lg:py-32 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{t.services.title}</h2>
            <p className="text-lg text-muted-foreground">{t.services.subtitle}</p>
          </div>
        </div>

        <div className="space-y-0 border-t border-border">
          {t.services.items.map((service, index) => (
            <Link
              key={service.title}
              href={`/servicos#${serviceIds[index]}`}
              className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-border hover:bg-muted/30 transition-colors px-4 -mx-4"
            >
              <div className="flex items-start gap-6 md:gap-8 flex-1">
                <span className="text-sm text-muted-foreground font-mono">{`{${String(index + 1).padStart(2, "0")}}`}</span>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all mt-4 md:mt-0 ml-auto md:ml-8" />
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-end">
          <Link
            href="/servicos"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            {t.services.cta}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
