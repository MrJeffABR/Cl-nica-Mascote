import React from 'react';
import { ShoppingBag, Tag, MessageCircle } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Ração Premium Cães Adultos 15kg",
    category: "Alimentação",
    price: "R$ 249,90",
    image: "https://images.unsplash.com/photo-1589924691195-41432c84c161?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 2,
    name: "Ração Super Premium Gatos Castrados",
    category: "Alimentação",
    price: "R$ 89,90",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 3,
    name: "Cama Iglu Conforto para Gatos",
    category: "Conforto",
    price: "R$ 120,00",
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 4,
    name: "Brinquedo Mordedor Resistente",
    category: "Brinquedos",
    price: "R$ 35,00",
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 5,
    name: "Arranhador Torre 3 Andares",
    category: "Brinquedos",
    price: "R$ 280,00",
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 6,
    name: "Antipulgas e Carrapatos (Pipeta)",
    category: "Farmácia",
    price: "Sob Consulta",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=500"
  }
];

const Store: React.FC = () => {
  const whatsappNumber = "5566984242728";

  const getWhatsappLink = (productName: string) => {
    const text = `Olá! Tenho interesse no produto: ${productName}. Poderia me dar mais informações?`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="animate-fade-in bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-brand-orange py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-3 flex items-center justify-center gap-3">
            <ShoppingBag className="w-10 h-10" /> Pet Shop Mascote
          </h1>
          <p className="text-xl md:text-2xl font-medium text-orange-50 mb-6">
            Itens essenciais para o dia a dia do seu pet
          </p>
          <p className="text-orange-100 max-w-2xl mx-auto text-lg opacity-90">
            Os melhores produtos para o bem-estar do seu amigo. Rações, brinquedos e acessórios com a qualidade que você confia.
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100 group">
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-teal uppercase tracking-wide flex items-center gap-1">
                  <Tag className="w-3 h-3" /> {product.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-dark mb-2 leading-tight">{product.name}</h3>
                <p className="text-brand-orange font-bold text-lg mb-4">{product.price}</p>
                
                <a 
                  href={getWhatsappLink(product.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-brand-teal hover:bg-teal-700 text-white font-medium py-3 rounded-xl transition flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Pedir no WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Info Banner */}
        <div className="mt-16 bg-white border border-brand-teal/20 rounded-2xl p-8 text-center shadow-lg">
          <h2 className="text-2xl font-bold text-brand-dark mb-2">Não encontrou o que procura?</h2>
          <p className="text-gray-600 mb-6">Temos uma variedade muito maior em nossa loja física. Entre em contato e verifique disponibilidade.</p>
          <a 
             href={`https://wa.me/${whatsappNumber}`}
             target="_blank"
             rel="noreferrer"
             className="inline-flex items-center gap-2 text-brand-orange font-bold hover:underline"
          >
            Falar com um atendente <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Store;