import type React from "react"
import type { Metadata, Viewport } from "next"
import { Space_Grotesk, Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"
import "./globals.css"

const _spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-heading" })
const _inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Orpheon Studio | Websites e Plataformas que Dão Lucro",
  description:
    "Criamos websites e plataformas à medida com manutenção incluída. Desenvolvimento web fullstack em Portugal - React, Node, PHP, MySQL.",
  keywords: ["web development", "websites", "portugal", "desenvolvimento web", "react", "node", "plataformas"],
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#1a1a1f",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-PT" className="dark" suppressHydrationWarning>
      <body className={`${_spaceGrotesk.variable} ${_inter.variable} ${_geistMono.variable} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
