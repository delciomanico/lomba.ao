import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Flame, Users, Award, Heart } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function SobrePage() {
  const values = [
    {
      icon: Flame,
      title: "Rapidez",
      description: "Entregamos seu gás em até 45 minutos, garantindo que você nunca fique na mão.",
    },
    {
      icon: Users,
      title: "Compromisso",
      description: "Nossa equipe é treinada para oferecer o melhor atendimento e segurança.",
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Trabalhamos apenas com fornecedores certificados e botijões de primeira linha.",
    },
    {
      icon: Heart,
      title: "Confiança",
      description: "Mais de 50 mil clientes confiam em nosso serviço todos os dias.",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance">
              Sobre o <span className="text-primary">Lomba</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
              Revolucionando a forma como você recebe gás em casa desde 2020
            </p>
          </div>
        </section>

        {/* Nossa História */}
        <section className="py-24 px-4 bg-background">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold">Nossa História</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    O Lomba nasceu da necessidade de tornar a entrega de gás mais rápida, segura e conveniente. Em 2020,
                    percebemos que as pessoas precisavam de uma solução moderna para um problema antigo.
                  </p>
                  <p>
                    Hoje, somos a plataforma líder em entrega de gás, atendendo milhares de famílias todos os dias com
                    tecnologia de ponta e um time dedicado a oferecer a melhor experiência possível.
                  </p>
                  <p>
                    Nossa missão é simples: garantir que você nunca fique sem gás, com entregas rápidas, seguras e com o
                    melhor preço do mercado.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                  <Flame className="w-32 h-32 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nossos Valores */}
        <section className="py-24 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">Nossos Valores</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Os princípios que guiam nosso trabalho todos os dias
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="p-8 text-center space-y-4 hover-lift">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Números */}
        <section className="py-24 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Lomba em Números</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">50k+</div>
                <div className="text-muted-foreground">Clientes Ativos</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">200k+</div>
                <div className="text-muted-foreground">Entregas Realizadas</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">15</div>
                <div className="text-muted-foreground">Cidades Atendidas</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">4.9★</div>
                <div className="text-muted-foreground">Avaliação Média</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
