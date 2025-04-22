
// Página inicial (home) com link para dashboard

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 tracking-tight">
          <span className="text-primary">trip er</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Monte e organize seus roteiros de viagem de forma fácil, visual e divertida.
        </p>
        <Link to="/dashboard">
          <Button className="text-lg px-8 py-4">Acessar Dashboard</Button>
        </Link>
        <div className="mt-8 text-gray-400 text-xs">
          Plataforma Lovable - Projeto Demo
        </div>
      </div>
    </div>
  );
};

export default Index;
