import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { TargetAudience } from "@/components/target-audience"
import { Benefits } from "@/components/benefits"
import { Projects } from "@/components/projects"
import { Process } from "@/components/process"
import { Pricing } from "@/components/pricing"
import { Extras } from "@/components/extras"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <TargetAudience />
      <Benefits />
      <Projects />
      <Process />
      <Pricing />
      <Extras />
      <Testimonials />
      <FAQ />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
