
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Image } from "lucide-react";

const pontos = [
  {
    nome: "Praia de Ponta Negra",
    local: "Natal/RN",
    img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=500&q=80",
    desc: "Famosa por sua beleza, piscinas naturais e o Morro do Careca.",
  },
  {
    nome: "Torre Eiffel",
    local: "Paris, França",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80",
    desc: "O cartão postal mais icônico da cidade luz.",
  },
  {
    nome: "Plaza Mayor",
    local: "Madri, Espanha",
    img: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&w=500&q=80",
    desc: "Uma das praças mais famosas e animadas de Madri.",
  },
  {
    nome: "Coliseu",
    local: "Roma, Itália",
    img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=500&q=80",
    desc: "Antigo anfiteatro símbolo do Império Romano.",
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
            style={{ background: "linear-gradient(109.6deg,#fbfbfa 11.2%,#e5deff 91.1%)" }}
          >
            <div className="w-full h-32 overflow-hidden">
              <img
                src={ponto.img}
                alt={ponto.nome}
                className="w-full h-full object-cover"
                style={{ filter: "brightness(0.94)" }}
                loading="lazy"
              />
            </div>
            <CardContent className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <MapPin size={16} className="text-violet-600" />
                  <span className="font-semibold text-gray-700">{ponto.nome}</span>
                </div>
                <div className="text-gray-500 text-xs flex items-center gap-1 mb-2">
                  <Image size={14} className="opacity-60" /> {ponto.local}
                </div>
                <div className="text-gray-600 text-sm">{ponto.desc}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PontosTuristicos;
