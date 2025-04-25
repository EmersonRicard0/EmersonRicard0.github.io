
import React from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Map } from "lucide-react";
import PontosTuristicos from "@/components/PontosTuristicos";

const Explorar = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-violet-50 to-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-violet-900 mb-6">
            Explore Destinos Incríveis
          </h1>
          
          <div className="relative mb-10">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                <Input 
                  placeholder="Buscar destinos..." 
                  className="pl-10 pr-4 py-6"
                />
              </div>
              <Button className="bg-violet-600 hover:bg-violet-700">
                <Search className="mr-2" size={18} />
                Buscar
              </Button>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 mb-10">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Map className="text-violet-600" size={20} />
              Destinos Populares
            </h2>
            <PontosTuristicos />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explorar;
