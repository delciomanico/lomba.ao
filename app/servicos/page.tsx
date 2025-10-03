import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Flame, Package, Wrench, Clock, Shield, CreditCard } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ServicosPage() {
  const services = [
    {
      icon: Flame,
      title: "Entrega de Botijões",
      description: "P13, P20 e P45 disponíveis para entrega imediata em até 45 minutos.",
      features: ["Entrega rápida", "Botijões certificados", "Instalação incluída"],
    },
    {
      icon: Package,
      title: "Troca de Botijão",
      description: "Troque seu botijão vazio por um cheio sem complicação.",
      features: ["Sem taxa extra", "Retirada do vazio", "Pagamento facilitado"],
    },
    {
      icon: Wrench,
      title: "Instalação e Manutenção",
      description: "Instalamos e fazemos manutenção do seu sistema de gás com segurança.",
      features: ["Técnicos certificados", "Garantia de serviço", "Agendamento flexível"],
    },
    {
      icon: Clock,
      title: "Entrega Agendada",
      description: "Agende sua entrega para o dia e horário que preferir.",
      features: ["Escolha o melhor horário", "Lembretes automáticos", "Sem custo adicional"],
    },
    {
      icon: Shield,
      title: "Plano de Assinatura",
      description: "Receba seu gás automaticamente antes de acabar.",
      features: ["Desconto especial", "Prioridade na entrega", "Cancele quando quiser"],
    },
    {
      icon: CreditCard,
      title: "Pagamento Flexível",
      description: "Pague como preferir: cartão, PIX, dinheiro ou vale-gás.",
      features: ["Múltiplas opções", "Pagamento seguro", "Parcelamento disponível"],
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
              Nossos <span className="text-primary">Serviços</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
              Soluções completas para todas as suas necessidades de gás
            </p>
          </div>
        </section>

        {/* Serviços */}
        <section className="py-24 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-8 space-y-6 hover-lift">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-primary via-primary to-accent">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">Pronto para experimentar?</h2>
            <p className="text-xl text-white/90 text-pretty">
              Baixe o app agora e receba 2.000 Kz OFF no seu primeiro pedido
            </p>
            <Button size="lg" variant="secondary" className="text-lg h-16 px-10 hover-glow font-semibold">
              Baixar App Grátis
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
