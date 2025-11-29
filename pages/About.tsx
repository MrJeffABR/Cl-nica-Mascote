import React from 'react';
import { Target, ShieldCheck, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="bg-brand-light py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-4">Nossa História</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Desde 2019 sendo referência em Confresa pelo amor aos animais e excelência técnica.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
             <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
              alt="Veterinária cuidando de um paciente na clínica" 
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-display font-bold text-brand-dark mb-6">Compromisso com a vida</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Fundada em 2019, a <strong>Clínica Mascote</strong> nasceu do sonho de oferecer à população de Confresa um atendimento veterinário digno, moderno e, acima de tudo, humano.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Sabemos que seu pet é parte da família. Por isso, oferecemos estrutura completa com <strong>Plantão 24 horas</strong>, internação, centro cirúrgico e diagnósticos avançados como Ultrassom e Eletrocardiograma.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Hoje, somos orgulhosos de contar com o <strong>Mascote Lab</strong>, nosso laboratório interno que agiliza diagnósticos e salva vidas.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Target className="text-brand-teal" />
                <span className="font-semibold text-brand-dark">Missão de Cuidar</span>
              </div>
               <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <ShieldCheck className="text-brand-teal" />
                <span className="font-semibold text-brand-dark">Ética Profissional</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-12">Nossos Pilares</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-orange">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Equipe Especializada</h3>
              <p className="text-gray-400">Veterinários apaixonados e em constante atualização científica.</p>
            </div>
            <div className="p-6">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-teal">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Segurança</h3>
              <p className="text-gray-400">Protocolos rigorosos de higiene e segurança em todos os procedimentos.</p>
            </div>
            <div className="p-6">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-400">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Tecnologia</h3>
              <p className="text-gray-400">Ultrassom, Eletrocardiograma e Laboratório Próprio.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;