"use client"

import { Flame, Shield, MapPin, CreditCard, Clock, Smartphone } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

export function Features() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: Flame,
      title: "Entrega Express",
      description: "Seu botijão de gás chega em até 45 minutos. Garantimos rapidez e segurança na entrega.",
    },
    {
      icon: MapPin,
      title: "Rastreamento em Tempo Real",
      description: "Acompanhe o entregador no mapa desde a saída até a sua porta com precisão GPS.",
    },
    {
      icon: Shield,
      title: "Segurança Garantida",
      description: "Botijões certificados e entregadores treinados. Sua segurança é nossa prioridade.",
    },
    {
      icon: Clock,
      title: "Disponível 24/7",
      description: "Acabou o gás de madrugada? Sem problemas! Estamos sempre prontos para atender.",
    },
    {
      icon: CreditCard,
      title: "Pagamento Flexível",
      description: "Pague como preferir: cartão, PIX, dinheiro ou vale-gás. Tudo pelo app.",
    },
    {
      icon: Smartphone,
      title: "App Intuitivo",
      description: "Interface simples e rápida. Peça seu gás em menos de 1 minuto.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            Por que escolher o <span className="text-primary">Lomba</span>?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Tecnologia de ponta para garantir a melhor experiência em entrega de gás
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`p-6 lg:p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 hover-glow">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
