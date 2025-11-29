import React from 'react';
import { CheckCircle, Microscope } from 'lucide-react';

const Lab: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="w-full lg:w-1/2">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4">
                <Microscope size={14} /> Tecnologia em Diagnóstico
             </div>
             <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-6">
               Mascote Lab: Precisão que salva vidas.
             </h1>
             <p className="text-gray-600 text-lg mb-6 leading-relaxed">
               Entendemos que na medicina veterinária, tempo é crucial. Por isso, a Clínica Mascote conta com um laboratório interno de ponta.
             </p>
             <p className="text-gray-600 mb-8 leading-relaxed">
               Realizamos coletas e processamos exames no próprio local, garantindo resultados rápidos para que o veterinário possa definir o melhor tratamento imediatamente.
             </p>
             
             <ul className="space-y-4">
               {[
                 "Hemograma Completo",
                 "Bioquímicos (Renal e Hepático)",
                 "Pesquisa de Hemoparasitas",
                 "Exames de Urina e Fezes",
                 "Testes Rápidos (Parvo, Cinomose, FIV/FeLV)"
               ].map((item, idx) => (
                 <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                   <CheckCircle className="text-brand-teal w-5 h-5" />
                   {item}
                 </li>
               ))}
             </ul>
          </div>

          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=600" 
              className="rounded-2xl shadow-lg w-full h-64 object-cover transform translate-y-8" 
              alt="Microscópio de laboratório" 
            />
             <img 
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=600" 
              className="rounded-2xl shadow-lg w-full h-64 object-cover" 
              alt="Tubos de ensaio para exames" 
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Lab;