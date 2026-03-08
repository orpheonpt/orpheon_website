"use client"

import { useLanguage } from "@/lib/language-context"

export function Testimonials() {
  const { t } = useLanguage()

  return (
    <section className="py-16 lg:py-20 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs text-primary font-medium mb-4">{t.testimonials.label}</p>
          
          <blockquote className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed mb-6">
            &ldquo;{t.testimonials.featured.text}&rdquo;
          </blockquote>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-semibold">
              {t.testimonials.featured.name.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-sm">{t.testimonials.featured.name}</p>
              <p className="text-xs text-muted-foreground">{t.testimonials.featured.role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
