
import React, { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";

const imagens = [
  {
    nome: "Praia de Ponta Negra",
    local: "Natal/RN",
    url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=600&q=80",
  },
  {
    nome: "Torre Eiffel",
    local: "Paris, França",
    url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
  },
  {
    nome: "Plaza Mayor",
    local: "Madri, Espanha",
    url: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&w=600&q=80",
  },
  {
    nome: "Coliseu",
    local: "Roma, Itália",
    url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
  },
  {
    nome: "Grand Canyon",
    local: "Arizona, EUA",
    url: "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=600&q=80",
  },
  {
    nome: "Santorini",
    local: "Santorini, Grécia",
    url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80",
  },
  {
    nome: "Taj Mahal",
    local: "Agra, Índia",
    url: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=600&q=80",
  },
  {
    nome: "Machu Picchu",
    local: "Cusco, Peru",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
];

export default function FooterGaleria() {
  const [busca, setBusca] = useState("");

  const imagensFiltradas = imagens.filter((img) => {
    const termo = busca.toLowerCase();
    return (
      img.nome.toLowerCase().includes(termo) ||
      img.local.toLowerCase().includes(termo)
    );
  });

  return (
    <footer className="w-full bg-gradient-to-r from-[#f6f6f7] to-[#e5deff] py-5 px-0 mt-12">
      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        <div className="flex justify-between items-center mb-1">
          <h3 className="font-medium text-base text-zinc-900">
            Descubra mais destinos turísticos
          </h3>
          <Input
            placeholder="Buscar local ou nome do ponto turístico"
            className="max-w-xs text-sm"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>
        <Carousel opts={{ align: "start" }} className="relative w-full">
          <CarouselPrevious />
          <CarouselContent>
            {imagensFiltradas.length === 0 && (
              <p className="h-36 flex items-center justify-center text-sm text-zinc-400">
                Nenhum local encontrado para sua busca.
              </p>
            )}
            {imagensFiltradas.map((img, i) => (
              <CarouselItem
                key={img.nome + i}
                className="basis-2/3 sm:basis-1/3 md:basis-1/4 xl:basis-1/6 p-2"
              >
                <div className="rounded-lg shadow hover-scale border bg-white overflow-hidden flex flex-col h-36">
                  <img
                    src={img.url}
                    alt={img.nome}
                    className="w-full h-4/6 object-cover"
                    loading="lazy"
                  />
                  <div className="p-2 flex-1">
                    <div className="font-semibold text-xs text-zinc-700">{img.nome}</div>
                    <div className="text-[11px] text-zinc-500">{img.local}</div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </div>
    </footer>
  );
}
