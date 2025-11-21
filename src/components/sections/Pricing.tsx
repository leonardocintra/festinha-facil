import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export const Pricing = () => {
  const packages = [
    {
      name: "Básico",
      price: "R$ 1.290",
      description: "Ideal para festas íntimas e econômicas.",
      features: ["Salão por 4 horas", "Mesas e cadeiras", "Limpeza inclusa", "Cozinha equipada", "Som ambiente"],
      highlight: false,
      color: "border-gray-200"
    },
    {
      name: "Completo",
      price: "R$ 2.490",
      description: "O favorito dos pais! Tudo o que você precisa.",
      features: ["Tudo do Básico", "Decoração Temática", "Monitor Infantil", "Brinquedão + Piscina de Bolinhas", "Convite Digital"],
      highlight: true,
      color: "border-purple-500 ring-2 ring-purple-500 ring-offset-2"
    },
    {
      name: "Premium",
      price: "R$ 4.990",
      description: "Experiência VIP com buffet completo.",
      features: ["Tudo do Completo", "Buffet Completo (Salgados/Doces/Bolo)", "Garçons e Copeira", "Fotógrafo por 2h", "Lembrancinhas Personalizadas"],
      highlight: false,
      color: "border-gray-200"
    }
  ];

  return (
    <section id="precos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pacotes que Cabem no <span className="text-green-500">Bolso</span>
          </h2>
          <p className="text-lg text-gray-600">
            Transparência total. Escolha a opção perfeita para o tamanho da sua festa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative p-8 ${pkg.highlight ? 'scale-105 shadow-2xl z-10' : 'shadow-lg'} ${pkg.color}`}
              hoverEffect={false}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Mais Popular
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-purple-600 mb-2">{pkg.price}</div>
                <p className="text-gray-500 text-sm">{pkg.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <div className="bg-green-100 p-1 rounded-full text-green-600 flex-shrink-0">
                      <Check size={14} />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={pkg.highlight ? 'primary' : 'outline'} 
                fullWidth
                className={pkg.highlight ? 'shadow-purple-500/25 shadow-lg' : ''}
              >
                Escolher {pkg.name}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
