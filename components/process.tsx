"use client"

import { MessageSquare, FileCheck, Code, Rocket } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const stepIcons = [MessageSquare, FileCheck, Code, Rocket]

export function Process() {
  const { t } = useLanguage()

  return (
    <section id="processo" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t.process.title}</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.process.steps.map((step, index) => {
              const Icon = stepIcons[index]
              return (
                <div key={step.title} className="relative">
                  {index < t.process.steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border -translate-x-1/2 z-0" />
                  )}
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <span className="text-xs font-mono text-primary mb-2 block">{step.number}</span>
                    <h3 className="text-lg font-semibold mb-1">
                      {step.title}
                      {step.subtitle && <span className="text-muted-foreground font-normal"> {step.subtitle}</span>}
                    </h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
