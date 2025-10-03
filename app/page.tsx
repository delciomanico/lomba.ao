import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { Stats } from "@/components/stats"
import { Download } from "@/components/download"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <Download />
        <Footer />
      </main>
    </>
  )
}
