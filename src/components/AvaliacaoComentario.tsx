
import React from "react";
import { Star } from "lucide-react";

interface AvaliacaoComentarioProps {
  nome: string;
  estrelas: number; // de 1 a 5
  comentario: string;
}

const AvaliacaoComentario: React.FC<AvaliacaoComentarioProps> = ({
  nome,
  estrelas,
  comentario,
}) => {
  return (
    <div className="mb-3">
      <div className="flex items-center gap-2">
        <span className="font-medium text-sm text-gray-700">{nome}</span>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Star
              key={idx}
              size={14}
              className={
                idx < estrelas ? "text-amber-400 fill-amber-400" : "text-gray-300"
              }
              strokeWidth={2}
              fill={idx < estrelas ? "#FACC15" : "none"}
            />
          ))}
        </div>
      </div>
      <div className="text-xs text-gray-500 mt-1 italic">"{comentario}"</div>
    </div>
  );
};

export default AvaliacaoComentario;

