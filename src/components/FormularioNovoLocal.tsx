import React, { useState, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Star, Upload } from "lucide-react";

interface NovoLocalFormProps {
  onAdd: (novo: {
    nome: string;
    local: string;
    imagemSrc: string;
    estrelas: number;
    comentario: string;
  }) => void;
}

const FormularioNovoLocal: React.FC<NovoLocalFormProps> = ({ onAdd }) => {
  const [nome, setNome] = useState("");
  const [local, setLocal] = useState("");
  const [imagemSrc, setImagemSrc] = useState<string>("");
  const [imagemFile, setImagemFile] = useState<File | null>(null);
  const [estrelas, setEstrelas] = useState(5);
  const [comentario, setComentario] = useState("");
  const [enviando, setEnviando] = useState(false);

  // Preview handler
  function handleImagemChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setImagemFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagemSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagemFile(null);
      setImagemSrc("");
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);

    if (nome && local && imagemSrc && comentario && estrelas > 0) {
      onAdd({
        nome,
        local,
        imagemSrc,
        estrelas,
        comentario
      });
      setNome("");
      setLocal("");
      setImagemSrc("");
      setImagemFile(null);
      setComentario("");
      setEstrelas(5);
    }
    setEnviando(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 mt-8 space-y-4 max-w-lg mx-auto mb-8">
      <h3 className="text-2xl font-bold mb-4 text-violet-700 text-center">Compartilhe sua Experiência</h3>
      <div className="grid gap-3">
        <Input
          placeholder="Nome do local"
          value={nome}
          onChange={e => setNome(e.target.value)}
          required
          className="text-lg"
        />
        <Input
          placeholder="Cidade, País"
          value={local}
          onChange={e => setLocal(e.target.value)}
          required
          className="text-lg"
        />
        
        <div className="flex flex-col items-center gap-4 p-6 border-2 border-dashed border-violet-200 rounded-xl bg-violet-50/50 hover:bg-violet-50 transition-colors">
          <Button
            type="button"
            variant="outline"
            className="w-full h-20 flex flex-col gap-2 bg-white hover:bg-violet-100"
            onClick={() => document.querySelector<HTMLInputElement>('input[type="file"]')?.click()}
          >
            <Upload className="h-6 w-6 text-violet-600" />
            <span>Escolher foto do local</span>
          </Button>
          <input
            type="file"
            accept="image/*"
            onChange={handleImagemChange}
            className="hidden"
            required
          />
          {imagemSrc && (
            <div className="w-full">
              <img 
                src={imagemSrc} 
                alt="Pré-visualização do local" 
                className="rounded-lg w-full h-48 object-cover shadow-md" 
              />
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">Sua avaliação:</label>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, idx) => (
            <button
              type="button"
              key={idx}
              onClick={() => setEstrelas(idx + 1)}
              className="focus:outline-none transition-transform hover:scale-110"
              tabIndex={-1}
            >
              <Star
                size={24}
                className={idx < estrelas ? "text-amber-400 fill-amber-400" : "text-gray-300"}
                strokeWidth={2}
                fill={idx < estrelas ? "#FACC15" : "none"}
              />
            </button>
          ))}
        </div>
      </div>

      <Textarea
        placeholder="Conte como foi sua experiência nesse local..."
        value={comentario}
        onChange={e => setComentario(e.target.value)}
        required
        className="min-h-[120px] text-lg"
      />

      <Button 
        type="submit" 
        disabled={enviando} 
        className="w-full py-6 text-lg font-semibold bg-violet-600 hover:bg-violet-700"
      >
        Compartilhar Experiência
      </Button>
    </form>
  );
};

export default FormularioNovoLocal;
