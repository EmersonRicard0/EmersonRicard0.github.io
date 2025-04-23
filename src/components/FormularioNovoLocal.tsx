
import React, { useState, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Star, Image as ImageIcon } from "lucide-react";

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
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 mt-8 space-y-3 max-w-lg mx-auto mb-6">
      <h3 className="text-lg font-semibold mb-2 text-violet-700">Compartilhe um local ou experiência</h3>
      <div className="grid gap-2">
        <Input
          placeholder="Nome do local"
          value={nome}
          onChange={e => setNome(e.target.value)}
          required
        />
        <Input
          placeholder="Cidade, País"
          value={local}
          onChange={e => setLocal(e.target.value)}
          required
        />
        <label className="flex flex-col gap-1 text-sm text-gray-600 font-medium">
          <span className="flex items-center gap-2">
            <ImageIcon size={18} /> Foto do local:
          </span>
          <Input
            type="file"
            accept="image/*"
            onChange={handleImagemChange}
            required
          />
        </label>
        {imagemSrc && (
          <div className="w-full flex justify-center">
            <img src={imagemSrc} alt="Pré-visualização do local" className="rounded-lg max-h-40 object-cover shadow mt-2" />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">Sua avaliação:</label>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, idx) => (
            <button
              type="button"
              key={idx}
              onClick={() => setEstrelas(idx + 1)}
              className="focus:outline-none"
              tabIndex={-1}
            >
              <Star
                size={20}
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
      />
      <Button type="submit" disabled={enviando} className="w-full mt-2">
        Enviar avaliação
      </Button>
    </form>
  );
};

export default FormularioNovoLocal;
