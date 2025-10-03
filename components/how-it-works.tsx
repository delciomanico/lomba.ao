"use client"

import { Smartphone, MapPin, Truck, CheckCircle } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function HowItWorks() {
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

  const steps = [
    {
      icon: Smartphone,
      title: "Abra o App",
      description: "Selecione o tipo de botijão (P13, P20, P45) e a quantidade desejada",
      number: "01",
    },
    {
      icon: MapPin,
      title: "Confirme o Endereço",
      description: "Verifique seu endereço e escolha a forma de pagamento",
      number: "02",
    },
    {
      icon: Truck,
      title: "Acompanhe a Entrega",
      description: "Veja em tempo real o entregador chegando até você",
      number: "03",
    },
    {
      icon: CheckCircle,
      title: "Receba seu Gás",
      description: "Entregador instala o botijão e você avalia o serviço",
      number: "04",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">Como funciona?</h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Simples, rápido e seguro. Em 4 passos você tem gás em casa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative group ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-[60%] w-full h-1 bg-gradient-to-r from-primary to-accent -z-10 opacity-30" />
              )}

              <div className="text-center space-y-4 hover-lift">
                <div className="relative inline-flex">
                  <div className="w-28 h-28 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300">
                    <step.icon className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-xl lg:text-2xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed px-2">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
