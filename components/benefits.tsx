"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Zap, HeartHandshake, Rocket } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const benefitIcons = [TrendingUp, Zap, HeartHandshake, Rocket]

export function Benefits() {
  const { t } = useLanguage()

  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t.benefits.title}</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {t.benefits.items.map((benefit, index) => {
            const Icon = benefitIcons[index]
            return (
              <Card key={benefit.title} className="bg-card border-border text-center">
                <CardContent className="pt-8 pb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
