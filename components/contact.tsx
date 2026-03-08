"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contacto" className="py-24 lg:py-32 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{t.contact.title}</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl">{t.contact.subtitle}</p>

          <div className="flex flex-col sm:flex-row items-start gap-4 mb-16">
            <Button asChild size="lg" className="text-base px-8 h-14">
              <Link href="mailto:ola@orpheon.studio" className="gap-2">
                {t.contact.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 h-14 bg-transparent">
              <Link href="tel:+351000000000" className="gap-2">
                <Phone className="w-4 h-4" />
                {t.contact.bookCall}
              </Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 pt-8 border-t border-border">
            <div>
              <p className="text-sm text-muted-foreground mb-2">{t.contact.emailLabel}</p>
              <Link href="mailto:ola@orpheon.studio" className="text-lg font-medium hover:text-primary transition-colors">
                ola@orpheon.studio
              </Link>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">{t.contact.phoneLabel}</p>
              <Link href="tel:+351000000000" className="text-lg font-medium hover:text-primary transition-colors">
                +351 XXX XXX XXX
              </Link>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">{t.contact.locationLabel}</p>
              <p className="text-lg font-medium">{t.contact.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
