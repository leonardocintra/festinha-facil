import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { Gallery } from "@/components/sections/Gallery";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-purple-100 selection:text-purple-900">
      <Header />
      
      <Hero />
      <HowItWorks />
      <Features />
      <Gallery />
      <Pricing />
      <Testimonials />
      <FAQ />

      {/* CTA Final Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para a Melhor Festa da Sua Vida?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Não deixe para a última hora. Garanta sua data hoje mesmo e ganhe 10% de desconto na primeira reserva!
          </p>
          <Button 
            size="lg" 
            className="bg-white text-purple-600 hover:bg-gray-100 hover:scale-105 shadow-2xl"
          >
            Reserve Agora e Ganhe 10% OFF
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
