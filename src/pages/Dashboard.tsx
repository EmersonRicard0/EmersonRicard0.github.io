import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Edit, Trash } from "lucide-react";
import NovoRoteiroModal from "@/components/NovoRoteiroModal";
import PontosTuristicos from "@/components/PontosTuristicos";
import FooterGaleria from "@/components/FooterGaleria";

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

function getUserRoteiros(email: string) {
  const data = localStorage.getItem(`roteiros_${email}`);
  if (data) return JSON.parse(data);
  // Se não houver roteiros salvos, salvar exemplo inicial só na primeira vez
  localStorage.setItem(`roteiros_${email}`, JSON.stringify(roteirosExemplo));
  return roteirosExemplo;
}

function setUserRoteiros(email: string, roteiros: any[]) {
  localStorage.setItem(`roteiros_${email}`, JSON.stringify(roteiros));
}

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
  const navigate = useNavigate();
  const [nomeUsuario, setNomeUsuario] = useState<string>("Viajante");
  const [roteiros, setRoteiros] = useState<any[]>([]);

  // Verifica se está logado
  useEffect(() => {
    const userEmail = localStorage.getItem("logged_user");
    if (!userEmail) {
      navigate("/login", { replace: true });
      return;
    }
    setNomeUsuario(userEmail.split("@")[0] || "Viajante");
    setRoteiros(getUserRoteiros(userEmail));
  }, [navigate]);

  function handleNovoRoteiro(novo: { nome: string; destino: string; dataInicio: string; dataFim: string }) {
    const userEmail = localStorage.getItem("logged_user");
    if (!userEmail) return;
    const newRoteiros = [
      ...roteiros,
      {
        ...novo,
        id: Date.now(),
      },
    ];
    setRoteiros(newRoteiros);
    setUserRoteiros(userEmail, newRoteiros);
  }

  function handleDelete(id: number) {
    const userEmail = localStorage.getItem("logged_user");
    if (!userEmail) return;
    const updated = roteiros.filter((r) => r.id !== id);
    setRoteiros(updated);
    setUserRoteiros(userEmail, updated);
  }

  function handleEdit(id: number) {
    alert("Funcionalidade de edição ainda não implementada!");
  }

  function handleLogout() {
    localStorage.removeItem("logged_user");
    navigate("/login", { replace: true });
  }

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-3xl font-bold">
          Olá, {nomeUsuario} 👋
        </h1>
        <Button variant="outline" size="sm" onClick={handleLogout}>
          Sair
        </Button>
      </div>
      <p className="text-muted-foreground mb-8">
        Aqui estão seus roteiros de viagem.
      </p>
      <div className="flex justify-end mb-4">
        <NovoRoteiroModal onNovoRoteiro={handleNovoRoteiro} />
      </div>
      <RoteirosList roteiros={roteiros} onDelete={handleDelete} onEdit={handleEdit} />

      {/* NOVA SEÇÃO: Pontos Turísticos */}
      <PontosTuristicos />

      {/* RODAPÉ DE IMAGENS */}
      <FooterGaleria />
    </div>
  );
}
