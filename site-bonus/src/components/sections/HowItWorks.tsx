import React from 'react';
import { CalendarCheck, Palette, PartyPopper } from 'lucide-react';
import { Card } from '../ui/Card';

export const HowItWorks = () => {
  const steps = [
    {
      icon: <CalendarCheck size={40} />,
      title: "1. Escolha Data e Pacote",
      description: "Selecione a data ideal e o pacote que melhor se adapta ao seu orçamento e número de convidados.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Palette size={40} />,
      title: "2. Personalize Tudo",
      description: "Escolha o tema da decoração, opções de buffet e atrações extras com apenas alguns cliques.",
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: <PartyPopper size={40} />,
      title: "3. Confirme e Relaxe",
      description: "Finalize a reserva online. Nossa equipe cuida de todos os detalhes para o grande dia.",
      color: "bg-yellow-100 text-yellow-600"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Organizar uma Festa Nunca Foi Tão <span className="text-purple-600">Fácil</span>
          </h2>
          <p className="text-lg text-gray-600">
            Simplificamos todo o processo para que você possa focar no que realmente importa: a felicidade do seu filho.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gray-100 -z-10" />

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full text-center pt-12 pb-8 px-6 flex flex-col items-center gap-4 border-none shadow-lg hover:shadow-xl">
                <div className={`absolute -top-8 p-4 rounded-2xl ${step.color} shadow-lg`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
