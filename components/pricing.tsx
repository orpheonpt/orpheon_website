"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function Pricing() {
  const { t } = useLanguage()

  return (
    <section id="precos" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t.pricing.title}</h2>
          <p className="text-lg text-muted-foreground">{t.pricing.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {t.pricing.plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative bg-card border-border ${plan.popular ? "border-primary ring-1 ring-primary" : ""}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">{t.pricing.mostChosen}</Badge>
              )}
              <CardHeader className="text-center pb-4">
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{plan.name}</span>
                <CardTitle className="text-4xl font-bold mt-2">
                  {plan.price}
                  <span className="text-lg font-normal text-muted-foreground">{plan.period}</span>
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {t.pricing.setup} <span className="text-foreground">{plan.setup}</span>
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-center text-muted-foreground mb-6 pb-6 border-b border-border">
                  {t.pricing.idealFor} {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full" variant={plan.popular ? "default" : "outline"}>
                  <Link href="#contacto">{t.pricing.wantPlan}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <Button asChild variant="outline" size="lg">
              <Link href="#contacto">{t.pricing.unsure}</Link>
            </Button>
          </div>

          <div className="text-xs text-muted-foreground space-y-2 text-center">
            <p>
              <strong>Nota:</strong> {t.pricing.note}
            </p>
            <p>{t.pricing.terms}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
