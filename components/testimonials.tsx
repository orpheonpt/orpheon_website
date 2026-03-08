"use client"

import { useLanguage } from "@/lib/language-context"

export function Testimonials() {
  const { t } = useLanguage()

  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm text-primary font-medium mb-8">{t.testimonials.label}</p>
          
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed mb-8">
            &ldquo;{t.testimonials.featured.text}&rdquo;
          </blockquote>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-lg font-semibold">
              {t.testimonials.featured.name.charAt(0)}
            </div>
            <div>
              <p className="font-semibold">{t.testimonials.featured.name}</p>
              <p className="text-sm text-muted-foreground">{t.testimonials.featured.role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
