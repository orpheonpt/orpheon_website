import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Orpheon Studio | Websites e Plataformas que Dão Lucro",
  description:
    "Criamos websites e plataformas à medida com manutenção incluída. Desenvolvimento web fullstack em Portugal - React, Node, PHP, MySQL.",
  keywords: ["agência web portugal", "site profissional empresas", "plataforma online customizada", "desenvolvimento fullstack", "manutenção website"],
    icons: {
      icon: '/icons/favicon.ico',
      apple: '/icons/apple-touch-icon.png',
    },
    openGraph: {
      type: 'website',
      url: 'https://orpheon.pt',
      title: 'Orpheon Studio | Websites e Plataformas que Dão Lucro',
      description: 'Criamos websites e plataformas à medida com manutenção incluída.',
      images: [
        {
          url: 'https://orpheon.pt/icons/android-chrome-512x512.png',
          width: 512,
          height: 512,
          alt: 'Orpheon Studio'
        }
      ]
    }
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
      <body className={`font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
