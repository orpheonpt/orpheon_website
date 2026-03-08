"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const serviceIds = ["discovery", "design", "development", "webapps", "ecommerce", "support"]

export default function ServicosPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-16 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.servicesPage.back}
          </Link>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{t.servicesPage.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">{t.servicesPage.subtitle}</p>
        </div>
      </section>

      {t.services.items.map((service: { title: string; description: string }, index: number) => (
        <section
          key={serviceIds[index]}
          id={serviceIds[index]}
          className="py-24 border-b border-border"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <span className="text-sm text-primary font-mono mb-4 block">{`{${String(index + 1).padStart(2, "0")}}`}</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{service.title}</h2>
                <p className="text-lg text-muted-foreground mb-8">{service.description}</p>
                <Button asChild>
                  <Link href="#contacto" className="gap-2">
                    {t.servicesPage.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <div className="bg-muted/30 rounded-2xl p-8 lg:p-12">
                <h3 className="font-semibold mb-6">{t.servicesPage.includes}</h3>
                <ul className="space-y-4">
                  {(t.servicesPage.serviceDetails[index]?.features || []).map((feature: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section id="contacto" className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.servicesPage.contactTitle}</h2>
            <p className="text-lg text-muted-foreground mb-8">{t.servicesPage.contactSubtitle}</p>
            <Button asChild size="lg">
              <Link href="mailto:ola@orpheon.studio" className="gap-2">
                {t.servicesPage.contactCta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
