"use client"

import { Button } from "@/components/ui/button"
import { Apple, Smartphone, Flame } from "lucide-react"
import { useEffect, useState } from "react"

export function Download() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        />
        <Flame className="absolute top-10 right-1/4 w-20 h-20 text-primary/5 animate-float-slow" />
        <Flame className="absolute bottom-10 left-1/4 w-24 h-24 text-accent/5 animate-float-medium" />
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-primary via-primary to-accent rounded-3xl lg:rounded-[2.5rem] p-8 md:p-12 lg:p-16 text-center space-y-8 shadow-2xl hover-lift relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full" />
            <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-white rounded-full" />
            <Flame className="absolute top-1/2 left-1/4 w-16 h-16 text-white animate-float-slow" />
            <Flame className="absolute top-1/3 right-1/4 w-20 h-20 text-white animate-float-medium" />
          </div>

          <div className="space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur rounded-full text-sm font-semibold text-white">
              <Flame className="w-4 h-4" />
              Oferta Especial
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance">
              Baixe agora e ganhe <span className="underline decoration-wavy">2.000 Kz OFF</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto text-pretty">
              No seu primeiro pedido. Disponível para iOS e Android.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg h-16 px-10 gap-3 min-w-[220px] hover-glow font-semibold"
            >
              <Apple className="w-7 h-7" />
              App Store
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="text-lg h-16 px-10 gap-3 min-w-[220px] hover-glow font-semibold"
            >
              <Smartphone className="w-7 h-7" />
              Google Play
            </Button>
          </div>

          <div className="pt-6 relative z-10">
            <p className="text-base md:text-lg text-white/90 font-medium">
              Mais de 50 mil downloads • Avaliação 4.9★ • Entrega em 45min
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
