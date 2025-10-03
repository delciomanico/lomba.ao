"use client"

import { useEffect, useState, useRef } from "react"

export function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { value: "45min", label: "Entrega média", color: "text-primary" },
    { value: "24/7", label: "Disponível", color: "text-accent" },
    { value: "50k+", label: "Clientes", color: "text-primary" },
    { value: "4.9★", label: "Avaliação", color: "text-accent" },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-scale-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-scale-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center group ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div
                className={`text-5xl md:text-6xl lg:text-7xl font-bold ${stat.color} mb-3 group-hover:scale-110 transition-transform duration-300`}
              >
                {stat.value}
              </div>
              <div className="text-sm md:text-base lg:text-lg text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
