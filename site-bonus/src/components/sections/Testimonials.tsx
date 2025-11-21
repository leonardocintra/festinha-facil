import React from 'react';
import { Star } from 'lucide-react';
import { Card } from '../ui/Card';

export const Testimonials = () => {
  const reviews = [
    {
      name: "Mariana Silva",
      role: "Mãe do Pedro (5 anos)",
      content: "Simplesmente incrível! A facilidade de reservar pelo site e a qualidade do salão me surpreenderam. O Pedro amou a piscina de bolinhas!",
      rating: 5
    },
    {
      name: "Carlos Oliveira",
      role: "Pai da Sofia (3 anos)",
      content: "Melhor custo-benefício da região. A equipe foi super atenciosa e cuidou de tudo. Só precisei levar o bolo e os convidados.",
      rating: 5
    },
    {
      name: "Fernanda Santos",
      role: "Mãe dos Gêmeos (7 anos)",
      content: "O pacote premium vale cada centavo. O buffet estava delicioso e a decoração impecável. Recomendo de olhos fechados!",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O Que os Pais <span className="text-yellow-500">Dizem</span>
          </h2>
          <p className="text-lg text-gray-600">
            A satisfação dos nossos clientes é o nosso maior presente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-gray-50 border-none">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{review.content}"</p>
              <div>
                <p className="font-bold text-gray-900">{review.name}</p>
                <p className="text-sm text-purple-600">{review.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
