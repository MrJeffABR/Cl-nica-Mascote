import React from 'react';
import { Stethoscope, FlaskConical, Syringe, Scissors, ShoppingBag, HeartPulse, Activity, Bed } from 'lucide-react';

const servicesList = [
  {
    icon: <Stethoscope className="w-10 h-10" />,
    title: "Consultas Veterinárias",
    description: "Atendimento clínico para cães e gatos. Check-ups preventivos, pediatria, geriatria e clínica geral com profissionais atenciosos."
  },
  {
    icon: <Bed className="w-10 h-10" />,
    title: "Internação 24h",
    description: "Estrutura completa de internação para monitoramento constante e recuperação segura do seu pet, com acompanhamento profissional."
  },
  {
    icon: <Activity className="w-10 h-10" />,
    title: "Ultrassom e Eletrocardiograma",
    description: "Exames de diagnóstico por imagem e cardiológicos (ECG) realizados na clínica para diagnósticos precisos e rápidos."
  },
  {
    icon: <HeartPulse className="w-10 h-10" />,
    title: "Cirurgias",
    description: "Centro cirúrgico equipado para procedimentos de tecidos moles, castrações eletivas e terapêuticas, com monitoramento anestésico constante."
  },
  {
    icon: <FlaskConical className="w-10 h-10" />,
    title: "Mascote Lab",
    description: "Laboratório de análises clínicas integrado. Hemogramas, bioquímicos e exames parasitológicos com resultados rápidos."
  },
  {
    icon: <Syringe className="w-10 h-10" />,
    title: "Vacinação",
    description: "Protocolos vacinais personalizados para proteger seu amigo contra doenças virais graves. Importado e nacional."
  },
  {
    icon: <Scissors className="w-10 h-10" />,
    title: "Banho e Tosa",
    description: "Estética animal com produtos hipoalergênicos, tosa higiênica, tosa da raça e hidratação. Cuidado e carinho na hora do banho."
  },
  {
    icon: <ShoppingBag className="w-10 h-10" />,
    title: "Loja Pet",
    description: "Medicamentos veterinários, rações premium e super premium, acessórios e brinquedos para enriquecimento ambiental."
  }
];

const Services: React.FC = () => {
  return (
    <div className="animate-fade-in bg-gray-50 min-h-screen">
      <div className="bg-brand-teal py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Nossos Serviços</h1>
          <p className="text-teal-100 max-w-2xl mx-auto text-lg">
            Soluções completas para a saúde e felicidade do seu pet em um só lugar. Plantão 24 horas.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col h-full">
              <div className="bg-brand-light w-20 h-20 rounded-2xl flex items-center justify-center text-brand-teal mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Visual Break */}
      <div className="container mx-auto px-4 py-12 mb-12">
        <div className="bg-brand-orange rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-brand-dark shadow-xl">
            <div className="mb-6 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 font-display">Precisa de um exame específico?</h3>
                <p className="font-medium opacity-90">Realizamos Ultrassom, Eletrocardiograma e Exames Laboratoriais.</p>
            </div>
            <a href="https://wa.me/5566984242728" className="bg-white text-brand-dark px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition whitespace-nowrap shadow-md">
                Consultar Disponibilidade
            </a>
        </div>
      </div>
    </div>
  );
};

export default Services;