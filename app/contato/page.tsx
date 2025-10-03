import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContatoPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "0800 123 4567",
      description: "Seg a Sex, 8h às 20h",
    },
    {
      icon: Mail,
      title: "Email",
      info: "contato@lomba.com",
      description: "Respondemos em até 24h",
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "Av. Principal, 1000",
      description: "São Paulo - SP",
    },
    {
      icon: Clock,
      title: "Horário",
      info: "24 horas por dia",
      description: "7 dias por semana",
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
              Entre em <span className="text-primary">Contato</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
              Estamos aqui para ajudar você. Fale conosco!
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-24 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((item, index) => (
                <Card key={index} className="p-6 text-center space-y-4 hover-lift">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground mb-1">{item.title}</h3>
                    <p className="text-xl font-bold mb-1">{item.info}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <div className="max-w-3xl mx-auto">
              <Card className="p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Envie sua Mensagem</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nome Completo
                      </label>
                      <Input id="name" placeholder="Seu nome" className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="seu@email.com" className="h-12" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Telefone
                    </label>
                    <Input id="phone" type="tel" placeholder="(00) 00000-0000" className="h-12" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Assunto
                    </label>
                    <Input id="subject" placeholder="Como podemos ajudar?" className="h-12" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensagem
                    </label>
                    <Textarea id="message" placeholder="Escreva sua mensagem aqui..." className="min-h-[150px]" />
                  </div>

                  <Button type="submit" size="lg" className="w-full h-14 text-lg hover-glow font-semibold">
                    Enviar Mensagem
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
