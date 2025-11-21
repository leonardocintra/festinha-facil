"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ = () => {
  const faqs = [
    {
      question: "Como funciona o pagamento?",
      answer: "Trabalhamos com sinal de 30% para reserva da data e o restante pode ser parcelado no cartão de crédito em até 12x ou pago via PIX com 5% de desconto até 2 dias antes da festa."
    },
    {
      question: "Posso levar minha própria decoração?",
      answer: "Sim! No pacote 'Básico' você tem total liberdade para trazer sua decoração e fornecedores externos. Nos pacotes 'Completo' e 'Premium', a decoração já está inclusa, mas podemos personalizar conforme seu gosto."
    },
    {
      question: "Qual a capacidade do salão?",
      answer: "Nosso salão comporta confortavelmente até 120 convidados sentados, com espaço amplo para circulação e área de brinquedos separada."
    },
    {
      question: "O que acontece se eu precisar cancelar?",
      answer: "Cancelamentos feitos com até 30 dias de antecedência têm reembolso integral do sinal. Entre 29 e 7 dias, o valor fica como crédito para uma data futura. Menos de 7 dias, há retenção de 50% do sinal."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Dúvidas <span className="text-purple-600">Frequentes</span>
          </h2>
          <p className="text-lg text-gray-600">
            Tudo o que você precisa saber antes de reservar.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-purple-600" />
                ) : (
                  <ChevronDown className="text-gray-400" />
                )}
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
