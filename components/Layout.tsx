import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Instagram, MapPin, Ambulance } from 'lucide-react';
import Bot from './Bot';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Início', path: '/' },
    { label: 'Sobre Nós', path: '/sobre' },
    { label: 'Serviços', path: '/servicos' },
    { label: 'Laboratório', path: '/laboratorio' },
    { label: 'Loja', path: '/loja' },
    { label: 'Contato', path: '/contato' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Contact Constants
  const WHATSAPP_NUMBER = "5566984242728";
  const DISPLAY_PHONE = "(66) 98424-2728";
  const MAPS_LINK = "https://maps.app.goo.gl/7J1wbEzhPj5gLEt29";

  return (
    <div className="flex flex-col min-h-screen text-gray-800 font-sans">
      {/* Top Bar - Contact Info */}
      <div className="bg-brand-teal text-white py-2 text-xs md:text-sm">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
             <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Confresa, MT</span>
             <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex items-center gap-1 hover:text-brand-light transition"><Phone className="w-3 h-3" /> {DISPLAY_PHONE}</a>
             <span className="flex items-center gap-1 font-bold bg-brand-orange px-2 py-0.5 rounded text-brand-dark animate-pulse">
               <Ambulance className="w-3 h-3" /> Plantão 24h | Emergências
             </span>
          </div>
          <div className="flex items-center gap-3">
            <span>Siga-nos:</span>
            <a href="https://www.instagram.com/mascoteclab/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group" onClick={() => setIsMenuOpen(false)}>
              <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-brand-dark font-bold text-xl group-hover:scale-105 transition duration-300">
                M
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display font-bold text-xl text-brand-teal tracking-wide">CLÍNICA MASCOTE</span>
                <span className="text-xs text-brand-dark font-medium tracking-widest uppercase">Veterinária & Lab</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-brand-teal ${
                    isActive(link.path) ? 'text-brand-teal font-bold' : 'text-gray-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank" 
                rel="noreferrer"
                className="bg-brand-orange text-brand-dark px-5 py-2 rounded-full font-bold text-sm hover:bg-yellow-400 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Agendar
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute top-full left-0 w-full shadow-lg z-50 max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col p-4 gap-4 pb-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base py-3 border-b border-gray-50 ${
                    isActive(link.path) ? 'text-brand-teal font-bold' : 'text-gray-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="bg-brand-orange text-brand-dark text-center py-3 rounded-lg font-bold mt-2 shadow-sm active:scale-95 transition-transform"
              >
                Agendar no WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>
      
      {/* Floating Chat Bot */}
      <Bot />

      {/* Footer */}
      <footer className="bg-brand-dark text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Column 1 */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-brand-teal rounded-full flex items-center justify-center font-bold text-white">M</div>
                <span className="font-display font-bold text-xl">Clínica Mascote</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Dedicados à saúde e bem-estar do seu melhor amigo em Confresa. Tecnologia, carinho e confiança desde 2019.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/mascoteclab/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-800 p-2 rounded-full hover:bg-brand-orange hover:text-brand-dark transition"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href={MAPS_LINK}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-800 p-2 rounded-full hover:bg-brand-orange hover:text-brand-dark transition"
                  aria-label="Ver no Google Maps"
                >
                  <MapPin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="font-display font-bold text-lg mb-4 text-brand-light">Links Rápidos</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/sobre" className="hover:text-brand-orange transition">Sobre Nós</Link></li>
                <li><Link to="/servicos" className="hover:text-brand-orange transition">Nossos Serviços</Link></li>
                <li><Link to="/laboratorio" className="hover:text-brand-orange transition">Mascote Lab</Link></li>
                <li><Link to="/loja" className="hover:text-brand-orange transition">Loja Pet</Link></li>
                <li><Link to="/contato" className="hover:text-brand-orange transition">Fale Conosco</Link></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="font-display font-bold text-lg mb-4 text-brand-light">Contato</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-teal mt-0.5 shrink-0" />
                  <a 
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-orange transition"
                  >
                    Av. Mato Grosso, 86<br/>Confresa - MT, 78652-000
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-teal shrink-0" />
                  <span>{DISPLAY_PHONE}</span>
                </li>
                <li className="flex items-center gap-3 text-brand-orange font-bold">
                  <Ambulance className="w-5 h-5 shrink-0" />
                  <span>Plantão 24h</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} Clínica Mascote. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;