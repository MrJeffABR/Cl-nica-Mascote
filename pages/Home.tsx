import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Activity, Scissors, Stethoscope, Ambulance } from 'lucide-react';

const Home: React.FC = () => {
  const whatsappLink = "https://wa.me/5566984242728";

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-brand-light overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 z-10">
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="inline-block bg-white px-3 py-1 rounded-full border border-gray-200 text-brand-teal text-xs font-bold tracking-wider shadow-sm">
                CONFRESA - MT
              </div>
              <div className="inline-flex items-center gap-1 bg-red-100 px-3 py-1 rounded-full border border-red-200 text-red-600 text-xs font-bold tracking-wider shadow-sm animate-pulse">
                <Ambulance className="w-3 h-3" /> PLANTÃO 24H
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-brand-dark leading-tight mb-6">
              Amor e cuidado que seu pet <span className="text-brand-teal">merece.</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-lg">
              Na Clínica Mascote, oferecemos medicina veterinária de excelência. Consultas, internações, cirurgias, ultrassom, raio-x e exames laboratoriais completos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={whatsappLink}
                className="bg-brand-teal hover:bg-teal-700 text-white px-8 py-3.5 rounded-full font-semibold transition shadow-lg text-center flex items-center justify-center gap-2"
              >
                Agendar Consulta <ArrowRight className="w-4 h-4" />
              </a>
              <Link 
                to="/servicos" 
                className="bg-white hover:bg-gray-50 text-brand-dark border border-gray-200 px-8 py-3.5 rounded-full font-semibold transition shadow-sm text-center"
              >
                Conhecer Serviços
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition duration-500 ease-out">
              <img 
                src="https://images.unsplash.com/photo-1553688738-a278b9f063e0?auto=format&fit=crop&q=80&w=1000" 
                alt="Veterinária examinando um cachorro feliz" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            {/* Decorative Element - Since 2019 */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce hidden md:flex">
              <div className="bg-brand-orange/20 p-2 rounded-full text-2xl">
                🐶🐱
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase">Cuidando com amor</p>
                <p className="font-bold text-brand-teal">Desde 2019</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl"></div>
      </section>

      {/* Highlights / Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-brand-dark mb-4">Por que escolher a Mascote?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Combinamos tecnologia diagnóstica com um ambiente acolhedor. Estrutura completa para emergências e rotina.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Stethoscope className="w-8 h-8 text-brand-teal" />}
              title="Clínica e Internação"
              desc="Atendimento clínico completo, plantão e internação 24h para monitoramento constante."
            />
            <FeatureCard 
              icon={<Activity className="w-8 h-8 text-brand-orange" />}
              title="Ultrassom e Cardio"
              desc="Diagnóstico por imagem preciso com Ultrassom e Eletrocardiograma na própria clínica."
            />
            <FeatureCard 
              icon={<Scissors className="w-8 h-8 text-brand-teal" />}
              title="Estética Animal"
              desc="Banho e tosa com produtos de qualidade para o bem-estar do seu pet."
            />
             <FeatureCard 
              icon={<Heart className="w-8 h-8 text-brand-orange" />}
              title="Mascote Lab"
              desc="Laboratório próprio para exames rápidos e precisos para diagnósticos imediatos."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-teal text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-6 font-bold text-sm">
             <Ambulance className="w-4 h-4" /> EMERGÊNCIA 24 HORAS
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Seu pet precisa de ajuda agora?</h2>
          <p className="text-teal-50 text-lg mb-8 max-w-2xl mx-auto">
            Não espere o quadro agravar. Nossa equipe de plantão está pronta para acolher e cuidar do seu melhor amigo.
          </p>
          <a 
            href={whatsappLink}
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-yellow-400 text-brand-dark font-bold py-3 px-8 rounded-full shadow-lg transition transform hover:-translate-y-1"
          >
            Falar com Veterinário
          </a>
        </div>
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{icon: React.ReactNode, title: string, desc: string}> = ({ icon, title, desc }) => (
  <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition duration-300 border border-transparent hover:border-gray-100 group">
    <div className="mb-4 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-brand-dark mb-3">{title}</h3>
    <p className="text-gray-500 leading-relaxed text-sm">
      {desc}
    </p>
  </div>
);

export default Home;