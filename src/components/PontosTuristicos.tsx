import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Image } from "lucide-react";
import ImagemCarrossel from "./ImagemCarrossel";
import AvaliacaoComentario from "./AvaliacaoComentario";
import FormularioNovoLocal from "./FormularioNovoLocal";

// Dados iniciais simulando busca
const pontosIniciais = [
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

type NovoLocal = {
  nome: string;
  local: string;
  imagemSrc: string;
  estrelas: number;
  comentario: string;
};

const PontosTuristicos = () => {
  const [novosLocais, setNovosLocais] = useState<NovoLocal[]>([]);

  function handleAddNovoLocal(data: NovoLocal) {
    setNovosLocais(prev => [data, ...prev]);
  }

  return (
    <section className="mt-16 max-w-7xl mx-auto px-4">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">
          Locais mais visitados & Pontos Turísticos
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Descubra destinos incríveis compartilhados por nossa comunidade de viajantes 
          e compartilhe suas próprias experiências
        </p>
      </div>

      {/* Novos locais adicionados pelo usuário */}
      {novosLocais.length > 0 && (
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <h3 className="text-xl font-semibold text-violet-600">Experiências da Comunidade</h3>
            <span className="px-3 py-1 bg-violet-100 text-violet-600 text-sm font-medium rounded-full">
              Novo
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {novosLocais.map((p, i) => (
              <Card key={i} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={p.imagemSrc}
                    alt={p.nome}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={e => (e.currentTarget.src = '/placeholder.svg')}
                  />
                </div>
                <CardContent className="p-5">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-violet-600 shrink-0" />
                      <h4 className="font-semibold text-gray-800 line-clamp-1">{p.nome}</h4>
                    </div>
                    <div className="text-gray-500 text-sm flex items-center gap-1">
                      <Image size={14} className="opacity-60 shrink-0" /> 
                      <span className="line-clamp-1">{p.local}</span>
                    </div>
                    <AvaliacaoComentario
                      nome="Visitante"
                      estrelas={p.estrelas}
                      comentario={p.comentario}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Lista fixa de pontos turísticos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pontosIniciais.map((ponto, i) => (
          <Card
            key={i}
            className="group overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <div className="relative">
              <ImagemCarrossel images={ponto.imagens} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <CardContent className="p-5">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-violet-600 shrink-0" />
                  <h4 className="font-semibold text-gray-800 line-clamp-1">{ponto.nome}</h4>
                </div>
                <div className="text-gray-500 text-sm flex items-center gap-1">
                  <Image size={14} className="opacity-60 shrink-0" /> 
                  <span className="line-clamp-1">{ponto.local}</span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">{ponto.desc}</p>
                <div className="space-y-2">
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

      {/* Formulário para enviar novo local */}
      <FormularioNovoLocal onAdd={handleAddNovoLocal} />
    </section>
  );
};

export default PontosTuristicos;
