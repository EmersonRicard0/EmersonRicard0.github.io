import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import NeonCard from "@/components/NeonCard";

const recursos = [
  "Monte roteiros de viagem personalizados.",
  "Adicione, visualize e edite seus roteiros.",
  "Acesse seus roteiros de qualquer dispositivo.",
  "Garanta privacidade: só você vê seus roteiros.",
];

const Index = () => {
  const loggedUser = localStorage.getItem("logged_user");
  const navigate = useNavigate();

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
          <h1 className="text-4xl font-bold mb-4 tracking-tight">
            <span className="text-primary">trip er</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Organize suas viagens de forma fácil, visual e divertida. 
            Veja o que você pode fazer na plataforma:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10 px-2">
            {recursos.map((desc, i) => (
              <li key={i}>
                <NeonCard>
                  <span className="flex items-center gap-2 text-gray-700">
                    <span className="text-base">{desc}</span>
                  </span>
                </NeonCard>
              </li>
            ))}
          </ul>
          {/* Botão principal central também */}
          {loggedUser ? (
            <Button className="text-lg px-8 py-4" onClick={() => navigate("/dashboard")}>
              Acessar Dashboard
            </Button>
          ) : (
            <Link to="/login">
              <Button className="text-lg px-8 py-4">Comece Agora</Button>
            </Link>
          )}
          <div className="mt-8 text-gray-400 text-xs">
            Plataforma Lovable - Projeto Demo
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
