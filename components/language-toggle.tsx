"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
      className="px-2 font-medium text-xs uppercase tracking-wider"
    >
      {language === "pt" ? "EN" : "PT"}
    </Button>
  )
}
