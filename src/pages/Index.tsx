
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowDown, Star, Calendar, Edit, User } from "lucide-react";
import NeonCard from "@/components/NeonCard";
import PontosTuristicos from "@/components/PontosTuristicos";
import React, { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Depoimentos } from "@/components/Depoimentos";

const recursos = [
  "Monte roteiros de viagem personalizados.",
  "Adicione, visualize e edite seus roteiros.",
  "Acesse seus roteiros de qualquer dispositivo.",
  "Garanta privacidade: só você vê seus roteiros.",
];

const etapas = [
  {
    icon: <User size={26} className="text-violet-600" />,
    title: "Cadastre-se",
    desc: "Crie sua conta gratuitamente para personalizar seus roteiros.",
  },
  {
    icon: <Edit size={26} className="text-rose-500" />,
    title: "Monte seus roteiros",
    desc: "Adicione destinos, datas e organize facilmente seu itinerário.",
  },
  {
    icon: <Calendar size={26} className="text-blue-400" />,
    title: "Gerencie tudo online",
    desc: "Altere, visualize e salve seus roteiros quando e onde quiser.",
  },
  {
    icon: <Star size={26} className="text-amber-400" />,
    title: "Conheça destinos",
    desc: "Veja os pontos turísticos mais visitados e inspire-se.",
  }
];

const Index = () => {
  const loggedUser = localStorage.getItem("logged_user");
  const navigate = useNavigate();
  const pontosRef = useRef<HTMLDivElement>(null);

  const scrollToPontos = () => {
    pontosRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-violet-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center py-16">
        <div className="text-center max-w-2xl mx-auto px-4">
          <p className="text-xl text-gray-600 mb-10 animate-fade-in leading-relaxed">
            Descubra e compartilhe experiências incríveis ao redor do mundo.<br />
            Veja o que você pode fazer na plataforma:
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 px-4">
            {recursos.map((desc, i) => (
              <li key={i} className="fade-in">
                <NeonCard>
                  <span className="flex items-center gap-2 text-gray-700 text-lg p-2">
                    {desc}
                  </span>
                </NeonCard>
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="space-y-4">
            <Button
              className="flex items-center mx-auto gap-2 text-lg px-10 py-6 shadow-lg hover:scale-105 transition-all bg-violet-600 hover:bg-violet-700 text-white animate-fade-in"
              onClick={scrollToPontos}
            >
              Explorar destinos <ArrowDown size={22} className="animate-bounce" />
            </Button>

            {loggedUser ? (
              <Button 
                className="text-lg px-10 py-6 animate-fade-in bg-white text-violet-700 hover:bg-violet-50" 
                variant="outline"
                onClick={() => navigate("/dashboard")}
              >
                Acessar Dashboard
              </Button>
            ) : (
              <Link to="/login">
                <Button 
                  className="text-lg px-10 py-6 animate-fade-in bg-white text-violet-700 hover:bg-violet-50" 
                  variant="outline"
                >
                  Começar Agora
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Depoimentos Section */}
      <Depoimentos />

      {/* Como funciona section */}
      <section className="w-full bg-white/60 backdrop-blur-sm py-16">
        <h2 className="text-3xl font-bold mb-10 text-center text-violet-900">Como funciona?</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto px-6">
          {etapas.map((etapa, i) => (
            <div
              key={etapa.title}
              className="rounded-xl bg-white shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-all fade-in"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="mb-4 p-3 bg-violet-50 rounded-full">{etapa.icon}</div>
              <h3 className="font-bold text-xl mb-2 text-violet-900">{etapa.title}</h3>
              <p className="text-gray-600 text-center">{etapa.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pontos Turísticos Section */}
      <div ref={pontosRef} className="bg-gradient-to-b from-white to-violet-50 py-16 px-4">
        <PontosTuristicos />
      </div>
    </div>
  );
};

export default Index;
