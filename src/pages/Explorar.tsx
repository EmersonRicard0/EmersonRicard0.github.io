
import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import FormularioNovoLocal from "@/components/FormularioNovoLocal";

type ExperienciaCompartilhada = {
  nome: string;
  local: string;
  imagemSrc: string;
  estrelas: number;
  comentario: string;
};

const Explorar = () => {
  const [experiencias, setExperiencias] = useState<ExperienciaCompartilhada[]>([]);
  const [termoBusca, setTermoBusca] = useState("");

  const handleAddExperiencia = (novaExperiencia: ExperienciaCompartilhada) => {
    setExperiencias(prev => [novaExperiencia, ...prev]);
  };

  const experienciasFiltradas = experiencias.filter(exp => 
    exp.nome.toLowerCase().includes(termoBusca.toLowerCase()) ||
    exp.local.toLowerCase().includes(termoBusca.toLowerCase()) ||
    exp.comentario.toLowerCase().includes(termoBusca.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-violet-50 to-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-violet-900 mb-6">
            Explore Experiências Compartilhadas
          </h1>
          
          <div className="relative mb-10">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                <Input 
                  placeholder="Buscar experiências..." 
                  className="pl-10 pr-4 py-6"
                  value={termoBusca}
                  onChange={(e) => setTermoBusca(e.target.value)}
                />
              </div>
              <Button className="bg-violet-600 hover:bg-violet-700">
                <Search className="mr-2" size={18} />
                Buscar
              </Button>
            </div>
          </div>

          {/* Resultados da Busca */}
          {termoBusca && (
            <div className="mb-12">
              <h2 className="text-xl font-semibold mb-4">
                Resultados da busca por "{termoBusca}"
              </h2>
              {experienciasFiltradas.length === 0 ? (
                <p className="text-gray-500 text-center py-8">
                  Nenhuma experiência encontrada. Que tal compartilhar a sua?
                </p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {experienciasFiltradas.map((exp, idx) => (
                    <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <img 
                        src={exp.imagemSrc} 
                        alt={exp.nome} 
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-1">{exp.nome}</h3>
                        <p className="text-gray-600 text-sm mb-2">{exp.local}</p>
                        <div className="flex items-center gap-1 mb-2">
                          {Array.from({ length: exp.estrelas }).map((_, i) => (
                            <span key={i} className="text-amber-400">★</span>
                          ))}
                        </div>
                        <p className="text-gray-700 text-sm italic">"{exp.comentario}"</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Formulário para compartilhar experiência */}
          <div className="mt-12">
            <FormularioNovoLocal onAdd={handleAddExperiencia} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explorar;
