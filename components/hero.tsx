"use client"

import { Button } from "@/components/ui/button"
import { handleDownload } from "@/lib/utils"
import { Flame, Zap, MapPin, Clock } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-32 pb-20 md:pt-40 md:pb-32 px-4">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float-slow"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float-medium"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-scale-pulse" />

        <Flame className="absolute top-32 right-20 w-12 h-12 text-primary/10 animate-float-slow" />
        <Flame className="absolute bottom-40 left-32 w-16 h-16 text-primary/10 animate-float-medium" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 animate-slide-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary hover-glow">
              <Zap className="w-4 h-4" />
              Entrega em até 45 minutos
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-balance">
              Gás na sua casa{" "}
              <span className="text-primary relative inline-block">
                rapidinho
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="12"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10C50 2 150 2 198 10"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="text-primary"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
              Acabou o gás? Peça pelo app e receba em minutos. Seguro, rápido e com o melhor preço da região.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={handleDownload}  size="lg" className="text-lg h-14 px-8 gap-2 group hover-glow shadow-lg">
                <Flame className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Baixar Agora
              </Button>
              <Button
                onClick={()=> location.href= "#how-do-work"}
                size="lg"
                variant="outline"
                className="text-lg h-14 px-8 bg-background/50 backdrop-blur hover-lift"
              >
                Ver Como Funciona
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="text-3xl md:text-4xl font-bold text-primary">45min</div>
                <div className="text-sm text-muted-foreground">Entrega média</div>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <div className="text-3xl md:text-4xl font-bold text-primary">4.9★</div>
                <div className="text-sm text-muted-foreground">Avaliação</div>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Disponível</div>
              </div>
            </div>
          </div>

          <div className="relative lg:h-[650px] flex items-center justify-center animate-slide-in-right">
            <div className="relative animate-float-slow">
              {/* Phone frame */}
              <div className="relative w-[300px] h-[600px] bg-gradient-to-br from-secondary to-secondary/80 rounded-[3rem] p-3 shadow-2xl hover-lift">
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 via-accent/10 to-background flex items-center justify-center">
                    <img
                      src="/delivery-app-interface-with-map-and-orders.jpg"
                      alt="Interface do App Lomba"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div
                className="absolute -top-6 -right-6 bg-card p-4 rounded-2xl shadow-xl hover-glow animate-bounce-subtle border border-primary/20"
                style={{ animationDelay: "0.2s" }}
              >
                <Flame className="w-8 h-8 text-primary" />
              </div>
              <div
                className="absolute top-1/3 -left-8 bg-card px-4 py-3 rounded-2xl shadow-xl hover-glow animate-fade-in-up border border-primary/20"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold">45 min</span>
                </div>
              </div>
              <div
                className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-xl hover-glow animate-bounce-subtle border border-primary/20"
                style={{ animationDelay: "0.6s" }}
              >
                <MapPin className="w-8 h-8 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
