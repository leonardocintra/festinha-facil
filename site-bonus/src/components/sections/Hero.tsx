import React from 'react';
import Image from 'next/image';
import { CheckCircle, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-purple-200/30 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-pink-200/30 blur-3xl" />
        <div className="absolute top-[20%] left-[10%] w-20 h-20 bg-yellow-300 rounded-full blur-xl opacity-50 animate-bounce duration-[3000ms]" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold border border-purple-100">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
              </span>
              Agenda 2025 Aberta!
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Transforme o Sonho da Festa do Seu Filho em <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Realidade!</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              Alugue nosso salão completo em minutos. Nós cuidamos de tudo para você apenas aproveitar momentos inesquecíveis com quem ama.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2 shadow-purple-500/25 shadow-xl">
                Reservar Minha Data <ArrowRight size={20} />
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                Ver Disponibilidade <Calendar size={20} />
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              {["Confirmação Imediata", "Pagamento Facilitado", "Equipe Especializada"].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-gray-600 text-sm font-medium">
                  <CheckCircle size={18} className="text-green-500" />
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Image Content */}
          <div className="relative">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/images/hero.png"
                alt="Crianças felizes em festa de aniversário"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 animate-bounce duration-[4000ms]">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-100 p-2 rounded-full text-yellow-600">
                  <span className="text-xl">⭐</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">4.9/5.0</p>
                  <p className="text-xs text-gray-500">Avaliação dos Pais</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
