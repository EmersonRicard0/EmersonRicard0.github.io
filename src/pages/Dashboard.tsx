
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const roteirosExemplo = [
  {
    id: 1,
    nome: "Praias do Nordeste",
    destino: "Natal/RN",
    dataInicio: "2024-07-02",
    dataFim: "2024-07-10",
  },
  {
    id: 2,
    nome: "Tour Europa",
    destino: "Paris, Roma, Madri",
    dataInicio: "2024-09-15",
    dataFim: "2024-10-05",
  },
];

function RoteirosList() {
  const [roteiros, setRoteiros] = useState(roteirosExemplo);

  function handleNovoRoteiro() {
    // Próximo passo: abrir modal ou navegar para form de criação
    alert("Funcionalidade de criação de roteiro ainda não implementada!");
  }

  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Meus Roteiros</h2>
        <Button onClick={handleNovoRoteiro}>
          <Plus /> Novo Roteiro
        </Button>
      </div>
      <ul className="space-y-3">
        {roteiros.map((roteiro) => (
          <li key={roteiro.id} className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between bg-muted">
            <div>
              <span className="font-bold">{roteiro.nome}</span>
              <span className="block text-muted-foreground text-sm">{roteiro.destino}</span>
              <span className="block text-xs text-zinc-500">
                {roteiro.dataInicio} até {roteiro.dataFim}
              </span>
            </div>
            <div className="flex gap-2 mt-2 md:mt-0">
              <Button size="sm" variant="outline">
                Editar
              </Button>
              <Button size="sm" variant="destructive">
                Excluir
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Dashboard() {
  const nomeUsuario = "Viajante"; // Depois preencher do usuário logado

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-2">Olá, {nomeUsuario} 👋</h1>
      <p className="text-muted-foreground mb-8">Aqui estão seus roteiros de viagem.</p>
      <RoteirosList />
    </div>
  );
}
