
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Image } from "lucide-react";
import ImagemCarrossel from "./ImagemCarrossel";
import AvaliacaoComentario from "./AvaliacaoComentario";

// Fotos simulando busca no Google (urls públicas)
const pontos = [
  {
    nome: "Praia de Ponta Negra",
    local: "Natal/RN",
    imagens: [
      { url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=500&q=80", alt: "Praia de Ponta Negra vista principal" },
      { url: "https://images.unsplash.com/photo-1527049979667-990472c3c66e?auto=format&fit=crop&w=500&q=80", alt: "Orla de Natal RN" },
      { url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=500&q=80", alt: "Morro do Careca ao fundo" },
    ],
    desc: "Famosa por sua beleza, piscinas naturais e o Morro do Careca.",
    avaliacoes: [
      {
        nome: "Juliana M.",
        estrelas: 5,
        comentario: "Lugar incrível! Viagem inesquecível com a família.",
      },
      {
        nome: "Carlos S.",
        estrelas: 4,
        comentario: "Paisagem maravilhosa e ótima estrutura!",
      },
    ]
  },
  {
    nome: "Torre Eiffel",
    local: "Paris, França",
    imagens: [
      { url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80", alt: "Torre Eiffel ao entardecer" },
      { url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80", alt: "Torre Eiffel com luzes a noite" },
      { url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=500&q=80", alt: "Vista lateral da Torre Eiffel" },
    ],
    desc: "O cartão postal mais icônico da cidade luz.",
    avaliacoes: [
      {
        nome: "Camille P.",
        estrelas: 5,
        comentario: "A Torre Eiffel ao entardecer é mágica! Recomendo.",
      },
      {
        nome: "Ana Clara",
        estrelas: 4,
        comentario: "Fila grande, mas vale cada segundo!",
      },
    ]
  },
  {
    nome: "Plaza Mayor",
    local: "Madri, Espanha",
    imagens: [
      { url: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&w=500&q=80", alt: "Vista geral da Plaza Mayor" },
      { url: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=500&q=80", alt: "Eventos culturais na Plaza Mayor" },
      { url: "https://images.unsplash.com/photo-1444065381814-865dc9da92c0?auto=format&fit=crop&w=500&q=80", alt: "Cafés clássicos da Plaza Mayor" },
    ],
    desc: "Uma das praças mais famosas e animadas de Madri.",
    avaliacoes: [
      {
        nome: "Diego R.",
        estrelas: 5,
        comentario: "Café delicioso nos arredores. Adorei o clima!",
      },
      {
        nome: "Luciana",
        estrelas: 4,
        comentario: "Música e arte de rua em toda parte! Sensacional.",
      },
    ]
  },
  {
    nome: "Coliseu",
    local: "Roma, Itália",
    imagens: [
      { url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=500&q=80", alt: "Coliseu visto de fora na luz do dia" },
      { url: "https://images.unsplash.com/photo-1433878455169-4698b20b5b20?auto=format&fit=crop&w=500&q=80", alt: "Coliseu por dentro" },
      { url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=500&q=80", alt: "Coliseu após o pôr do sol" },
    ],
    desc: "Antigo anfiteatro símbolo do Império Romano.",
    avaliacoes: [
      {
        nome: "Gabriela F.",
        estrelas: 5,
        comentario: "História viva! Me senti em um filme.",
      }
    ]
  },
];

const PontosTuristicos = () => {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold mb-6">Locais mais visitados & Pontos Turísticos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pontos.map((ponto, i) => (
          <Card
            key={i}
            className="minimal-card p-0 overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
            style={{
              background: "linear-gradient(109.6deg,#fbfbfa 11.2%,#e5deff 91.1%)"
            }}
          >
            <ImagemCarrossel images={ponto.imagens} />
            <CardContent className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <MapPin size={16} className="text-violet-600" />
                  <span className="font-semibold text-gray-700">{ponto.nome}</span>
                </div>
                <div className="text-gray-500 text-xs flex items-center gap-1 mb-2">
                  <Image size={14} className="opacity-60" /> {ponto.local}
                </div>
                <div className="text-gray-600 text-sm mb-2">{ponto.desc}</div>
                {/* Avaliações */}
                <div>
                  {ponto.avaliacoes && ponto.avaliacoes.map((avaliacao, idx) => (
                    <AvaliacaoComentario
                      key={idx}
                      nome={avaliacao.nome}
                      estrelas={avaliacao.estrelas}
                      comentario={avaliacao.comentario}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PontosTuristicos;

