"use client"

import { Building2, Home, Briefcase, Users, Building, Zap } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const audienceIcons = [Building2, Home, Briefcase, Users, Building, Zap]

export function TargetAudience() {
  const { t } = useLanguage()

  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{t.targetAudience.title}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.targetAudience.items.map((label, index) => {
              const Icon = audienceIcons[index]
              return (
                <div key={label} className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
