
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "lucide-react";
import { useState } from "react";

interface NovoRoteiroModalProps {
  onNovoRoteiro: (roteiro: { nome: string; destino: string; dataInicio: string; dataFim: string }) => void;
}

export default function NovoRoteiroModal({ onNovoRoteiro }: NovoRoteiroModalProps) {
  const [open, setOpen] = useState(false);
  const [nome, setNome] = useState("");
  const [destino, setDestino] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!nome.trim() || !destino.trim() || !dataInicio || !dataFim) return;
    onNovoRoteiro({ nome, destino, dataInicio, dataFim });
    setNome("");
    setDestino("");
    setDataInicio("");
    setDataFim("");
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" className="gap-2">
          <Calendar size={18} /> Novo Roteiro
        </Button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <DialogHeader>
            <DialogTitle>Novo Roteiro</DialogTitle>
          </DialogHeader>
          <div>
            <label className="block text-sm font-medium mb-1">Nome do Roteiro</label>
            <Input value={nome} onChange={e => setNome(e.target.value)} placeholder="Ex: Férias em Floripa" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Destino</label>
            <Input value={destino} onChange={e => setDestino(e.target.value)} placeholder="Ex: Florianópolis/SC" />
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Início</label>
              <Input type="date" value={dataInicio} onChange={e => setDataInicio(e.target.value)} />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Fim</label>
              <Input type="date" value={dataFim} onChange={e => setDataFim(e.target.value)} />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full">Adicionar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
