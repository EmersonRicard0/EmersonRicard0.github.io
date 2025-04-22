
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Edit, Trash } from "lucide-react";
import NovoRoteiroModal from "@/components/NovoRoteiroModal";

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

function RoteirosList({
  roteiros,
  onDelete,
  onEdit,
}: {
  roteiros: typeof roteirosExemplo;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}) {
  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Meus Roteiros</h2>
        {/* O botão de novo roteiro agora fica no modal */}
        <NovoRoteiroModal onNovoRoteiro={() => {}} />
      </div>
      <ul className="space-y-3">
        {roteiros.map((roteiro) => (
          <li
            key={roteiro.id}
            className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between bg-muted"
          >
            <div>
              <span className="font-bold">{roteiro.nome}</span>
              <span className="block text-muted-foreground text-sm">
                {roteiro.destino}
              </span>
              <span className="block text-xs text-zinc-500">
                {roteiro.dataInicio} até {roteiro.dataFim}
              </span>
            </div>
            <div className="flex gap-2 mt-2 md:mt-0">
              <Button size="sm" variant="outline" onClick={() => onEdit(roteiro.id)}>
                <Edit size={16} /> Editar
              </Button>
              <Button size="sm" variant="destructive" onClick={() => onDelete(roteiro.id)}>
                <Trash size={16} /> Excluir
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Dashboard() {
  const nomeUsuario = "Viajante";
  const [roteiros, setRoteiros] = useState(roteirosExemplo);

  function handleNovoRoteiro(novo: { nome: string; destino: string; dataInicio: string; dataFim: string }) {
    setRoteiros((prev) =>
      [
        ...prev,
        {
          ...novo,
          id: Date.now(),
        },
      ]
    );
  }

  function handleDelete(id: number) {
    setRoteiros((prev) => prev.filter((r) => r.id !== id));
  }

  function handleEdit(id: number) {
    alert("Funcionalidade de edição ainda não implementada!");
  }

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-2">
        Olá, {nomeUsuario} 👋
      </h1>
      <p className="text-muted-foreground mb-8">
        Aqui estão seus roteiros de viagem.
      </p>
      <div className="flex justify-end mb-4">
        <NovoRoteiroModal onNovoRoteiro={handleNovoRoteiro} />
      </div>
      <RoteirosList roteiros={roteiros} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}
