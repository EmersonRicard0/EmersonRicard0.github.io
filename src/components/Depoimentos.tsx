
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const depoimentos = [
  {
    nome: "Maria Silva",
    foto: "https://i.pravatar.cc/150?img=1",
    texto: "Incrível como o Triper facilitou o planejamento da minha viagem! Super recomendo.",
    cargo: "Viajante Frequente"
  },
  {
    nome: "João Santos",
    foto: "https://i.pravatar.cc/150?img=2",
    texto: "A melhor ferramenta que já usei para organizar roteiros. Simplesmente perfeita!",
    cargo: "Blogger de Viagens"
  },
  {
    nome: "Ana Costa",
    foto: "https://i.pravatar.cc/150?img=3",
    texto: "Adorei a facilidade de criar e compartilhar roteiros. Interface muito intuitiva.",
    cargo: "Fotógrafa de Viagens"
  },
  {
    nome: "Pedro Lima",
    foto: "https://i.pravatar.cc/150?img=4",
    texto: "Excelente para planejar viagens em grupo. Salvou nossas férias em família!",
    cargo: "Viajante Aventureiro"
  }
];

export const Depoimentos = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-violet-50/50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-violet-900">
          O que nossos viajantes dizem
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {depoimentos.map((depoimento, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="p-6 h-full">
                  <div className="flex flex-col h-full space-y-4">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={depoimento.foto} alt={depoimento.nome} />
                        <AvatarFallback>{depoimento.nome.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{depoimento.nome}</h4>
                        <p className="text-sm text-gray-500">{depoimento.cargo}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 flex-grow">{depoimento.texto}</p>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  )
}
