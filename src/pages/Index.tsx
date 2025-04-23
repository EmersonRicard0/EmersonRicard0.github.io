
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogIn, ArrowDown, Star, Calendar, Edit, User } from "lucide-react";
import NeonCard from "@/components/NeonCard";
import PontosTuristicos from "@/components/PontosTuristicos";
import React, { useRef } from "react";

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
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Top bar com botão de login/dashboard à direita */}
      <div className="w-full flex justify-end p-4">
        {loggedUser ? (
          <Button onClick={() => navigate("/dashboard")} variant="outline">
            Dashboard
          </Button>
        ) : (
          <Link to="/login">
            <Button className="flex items-center gap-2" variant="outline">
              <LogIn size={18} /> Login
            </Button>
          </Link>
        )}
      </div>
      {/* Conteúdo central */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center max-w-xl mx-auto w-full">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight flex justify-center items-center gap-2">
            <span className="text-primary drop-shadow-glow">trip</span>
            <span className="bg-gradient-to-r from-violet-500 to-pink-400 bg-clip-text text-transparent drop-shadow-glow">er</span>
            <span className="text-2xl animate-bounce mt-1 text-amber-400">★</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 animate-fade-in">
            Organize suas viagens de forma fácil, visual e divertida.<br />
            Veja o que você pode fazer na plataforma:
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10 px-2">
            {recursos.map((desc, i) => (
              <li key={i} className="fade-in">
                <NeonCard>
                  <span className="flex items-center gap-2 text-gray-700">
                    <span className="text-base">{desc}</span>
                  </span>
                </NeonCard>
              </li>
            ))}
          </ul>

          {/* Scroll para Pontos Turísticos */}
          <Button
            className="flex items-center mx-auto gap-2 text-lg px-8 py-4 shadow-lg hover:scale-105 transition-transform mb-4 bg-violet-600 text-white animate-fade-in"
            onClick={scrollToPontos}
            variant="default"
          >
            Conheça destinos populares <ArrowDown size={22} className="animate-bounce" />
          </Button>

          {/* Botão principal central também */}
          {loggedUser ? (
            <Button className="text-lg px-8 py-4 animate-fade-in" onClick={() => navigate("/dashboard")}>
              Acessar Dashboard
            </Button>
          ) : (
            <Link to="/login">
              <Button className="text-lg px-8 py-4 animate-fade-in">Comece Agora</Button>
            </Link>
          )}
          <div className="mt-8 text-gray-400 text-xs">
            Plataforma Lovable - Projeto Demo
          </div>
        </div>
      </div>

      {/* SEÇÃO COMO FUNCIONA */}
      <section className="w-full bg-white/60 backdrop-blur-sm py-12 animate-fade-in">
        <h2 className="text-2xl font-bold mb-8 text-center">Como funciona?</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-5xl mx-auto px-4">
          {etapas.map((etapa, i) => (
            <div
              key={etapa.title}
              className="rounded-xl bg-white shadow minimal-card p-6 flex flex-col items-center hover:scale-105 transition-transform fade-in"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="mb-3">{etapa.icon}</div>
              <div className="font-semibold text-lg mb-1">{etapa.title}</div>
              <div className="text-gray-500 text-sm">{etapa.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO PONTOS TURÍSTICOS */}
      <div ref={pontosRef}>
        <PontosTuristicos />
      </div>
    </div>
  );
};

export default Index;
