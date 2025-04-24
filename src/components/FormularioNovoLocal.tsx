
import React, { useState, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Star, Upload, Camera } from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

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
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 mt-12 space-y-6 max-w-2xl mx-auto mb-16">
      <div className="text-center space-y-2">
        <h3 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">
          Compartilhe sua Experiência
        </h3>
        <p className="text-gray-500">Inspire outros viajantes com suas descobertas</p>
      </div>

      <Separator className="my-6" />

      <div className="grid gap-6">
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
        
        <div className="flex flex-col items-center gap-4">
          <Button
            type="button"
            variant="outline"
            className={cn(
              "w-full h-32 flex flex-col gap-3 border-2 border-dashed transition-all",
              !imagemSrc && "hover:border-violet-400 hover:bg-violet-50/50",
              imagemSrc && "border-violet-500 bg-violet-50/50"
            )}
            onClick={() => document.querySelector<HTMLInputElement>('input[type="file"]')?.click()}
          >
            {!imagemSrc ? (
              <>
                <Camera className="h-8 w-8 text-violet-600" />
                <span className="text-violet-600 font-medium">Escolher foto do local</span>
                <span className="text-sm text-gray-500">Clique para selecionar</span>
              </>
            ) : (
              <>
                <Upload className="h-6 w-6 text-violet-600" />
                <span className="text-violet-600">Alterar foto</span>
              </>
            )}
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
                className="rounded-xl w-full h-64 object-cover shadow-lg" 
              />
            </div>
          )}
        </div>
      </div>

      <div className="space-y-3">
        <label className="text-sm font-medium text-gray-700">Sua avaliação</label>
        <div className="flex items-center justify-center gap-2 p-4 bg-violet-50 rounded-lg">
          {Array.from({ length: 5 }).map((_, idx) => (
            <button
              type="button"
              key={idx}
              onClick={() => setEstrelas(idx + 1)}
              className="focus:outline-none transition-transform hover:scale-110"
              tabIndex={-1}
            >
              <Star
                size={32}
                className={idx < estrelas ? "text-amber-400 fill-amber-400" : "text-gray-300"}
                strokeWidth={2}
                fill={idx < estrelas ? "#FACC15" : "none"}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Seu comentário</label>
        <Textarea
          placeholder="Conte como foi sua experiência nesse local..."
          value={comentario}
          onChange={e => setComentario(e.target.value)}
          required
          className="min-h-[120px] text-lg resize-none"
        />
      </div>

      <Button 
        type="submit" 
        disabled={enviando} 
        className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-violet-600 to-pink-500 hover:from-violet-700 hover:to-pink-600"
      >
        Compartilhar Experiência
      </Button>
    </form>
  );
};

export default FormularioNovoLocal;
