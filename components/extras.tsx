"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Palette, PenTool, Camera, MapPin, Megaphone } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const extraIcons = [Palette, PenTool, Camera, MapPin, Megaphone]

export function Extras() {
  const { t } = useLanguage()

  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {t.extras.title} <span className="text-muted-foreground">{t.extras.titleMuted}</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {t.extras.items.map((extra, index) => {
            const Icon = extraIcons[index]
            return (
              <Card key={extra.title} className="bg-card border-border">
                <CardContent className="pt-6 text-center">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{extra.title}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{extra.description}</p>
                  <p className="text-sm font-medium text-primary">{extra.price}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
