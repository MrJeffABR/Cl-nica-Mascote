import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="animate-fade-in bg-white">
      <div className="bg-brand-dark text-white py-16 text-center">
         <h1 className="text-3xl md:text-4xl font-display font-bold">Fale Conosco</h1>
         <p className="text-gray-400 mt-2">Estamos prontos para atender você e seu pet.</p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             <ContactCard 
               icon={<MapPin className="w-6 h-6 text-brand-teal" />}
               title="Endereço"
               lines={["Av. Mato Grosso, 86", "Confresa - MT", "CEP 78652-000"]}
             />
             <ContactCard 
               icon={<Phone className="w-6 h-6 text-brand-teal" />}
               title="Telefone / WhatsApp"
               lines={["(66) 98424-2728"]}
             />
             <ContactCard 
               icon={<Clock className="w-6 h-6 text-brand-teal" />}
               title="Horário de Atendimento"
               lines={["Seg - Sex: 08h às 18h", "Sáb: 08h às 12h", "Domingo: Fechado"]}
             />
             <ContactCard 
               icon={<Mail className="w-6 h-6 text-brand-teal" />}
               title="Email"
               lines={["contato@clinicamascote.com.br"]}
             />
          </div>

          {/* Map & Action */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col h-full">
            <h3 className="text-2xl font-bold text-brand-dark mb-6">Localização</h3>
            
            {/* Google Maps Embed */}
            <div className="w-full h-64 rounded-xl mb-6 overflow-hidden shadow-sm bg-gray-200">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7842.098031981902!2d-51.5665278!3d-10.6533002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x931a09108c37bb4f%3A0x25bdda4d673ec6!2sCl%C3%ADnica%20Veterin%C3%A1ria%20Mascote!5e0!3m2!1spt-BR!2sbr!4v1764351412266!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{border: 0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa Clínica Mascote"
              ></iframe>
            </div>
            
            <p className="text-gray-600 mb-6">
              Fácil acesso na Avenida Mato Grosso. Estacionamento disponível para clientes.
            </p>

            <a 
              href="https://wa.me/5566984242728"
              target="_blank"
              rel="noreferrer"
              className="mt-auto w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl text-center shadow-md transition flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Agendar via WhatsApp
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

const ContactCard: React.FC<{icon: React.ReactNode, title: string, lines: string[]}> = ({ icon, title, lines }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-brand-teal/30 transition">
    <div className="mb-4 bg-teal-50 w-12 h-12 rounded-full flex items-center justify-center">
      {icon}
    </div>
    <h4 className="font-bold text-gray-800 mb-2">{title}</h4>
    {lines.map((line, i) => (
      <p key={i} className="text-gray-500 text-sm">{line}</p>
    ))}
  </div>
);

export default Contact;