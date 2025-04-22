
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

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
        <div className="text-center max-w-lg mx-auto">
          <h1 className="text-4xl font-bold mb-4 tracking-tight">
            <span className="text-primary">trip er</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Organize suas viagens de forma fácil, visual e divertida. 
            Veja o que você pode fazer na plataforma:
          </p>
          <ul className="text-base text-zinc-700 mb-8 text-left space-y-2 max-w-md mx-auto">
            {recursos.map((desc, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>{desc}</span>
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
