import React from 'react';
import { Clock, Calendar, CreditCard, Smartphone, Users, Palette } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Respostas Instantâneas",
      description: "Sistema automatizado que confirma sua reserva em segundos, sem esperas.",
      color: "bg-blue-500"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Disponibilidade 24/7",
      description: "Consulte datas livres a qualquer momento, sem depender de horário comercial.",
      color: "bg-green-500"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Pagamento Facilitado",
      description: "Parcele no cartão ou use nosso programa de fidelidade para descontos.",
      color: "bg-purple-500"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Gestão 100% Online",
      description: "Contratos digitais, convites virtuais e gestão completa pelo celular.",
      color: "bg-pink-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Equipe Garantida",
      description: "Monitores, garçons e segurança já inclusos no pacote. Sem surpresas.",
      color: "bg-orange-500"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Pacotes Flexíveis",
      description: "Com buffet ou sem, decoração completa ou DIY. Você escolhe!",
      color: "bg-yellow-500"
    }
  ];

  return (
    <section id="vantagens" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Chega de Dor de Cabeça para <br />
            <span className="text-purple-600">Organizar Festas!</span>
          </h2>
          <p className="text-lg text-gray-600">
            Resolvemos todos os problemas comuns para que sua única preocupação seja assoprar as velinhas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-2xl ${feature.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
