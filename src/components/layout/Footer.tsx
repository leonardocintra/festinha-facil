import React from 'react';
import Link from 'next/link';
import { PartyPopper, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '../ui/Button';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="bg-purple-500 p-2 rounded-xl text-white">
                <PartyPopper size={24} />
              </div>
              <span className="text-2xl font-bold font-heading">Festinha Fácil</span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-8">
              Transformando festas infantis em memórias mágicas desde 2023. 
              Simplificamos o aluguel de salões para que você aproveite cada momento.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="#como-funciona" className="hover:text-purple-400 transition-colors">Como Funciona</Link></li>
              <li><Link href="#vantagens" className="hover:text-purple-400 transition-colors">Vantagens</Link></li>
              <li><Link href="#galeria" className="hover:text-purple-400 transition-colors">Galeria</Link></li>
              <li><Link href="#precos" className="hover:text-purple-400 transition-colors">Pacotes</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-4 text-gray-400">
              <li>contato@festinhafacil.com.br</li>
              <li>(11) 99999-9999</li>
              <li>Av. das Festas, 123 - São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 Festinha Fácil. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </div>

      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-4 left-4 right-4 md:hidden z-40">
        <Button fullWidth className="shadow-2xl shadow-purple-500/50">
          Reservar Agora - 10% OFF
        </Button>
      </div>
    </footer>
  );
};
