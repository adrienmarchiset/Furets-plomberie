
'use client';



import React, { useState, useEffect } from 'react';
import { Wrench, Zap, Trophy, ArrowDown } from 'lucide-react';

export default function FuretPlomberie() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="overflow-hidden bg-white">
      {/* Header Hero */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-blue-50 to-blue-100">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute text-9xl opacity-10"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          >
            🔧
          </div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-2xl">
          <div className="inline-block mb-8" style={{ animation: 'bounce 2s infinite' }}>
            <Wrench className="w-24 h-24 text-orange-500" />
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-blue-900 mb-6">
            Les Furets en Plomberie
          </h1>
          
          <p className="text-2xl md:text-3xl text-orange-600 font-semibold mb-8">
            Votre solution simple et efficace pour déboucher vos canalisations
          </p>
          
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Découvrez l'outil incontournable des plombiers professionnels
          </p>

          <div style={{ animation: 'float 3s ease-in-out infinite' }}>
            <ArrowDown className="w-8 h-8 text-blue-600 mx-auto" />
          </div>

          <style>{`
            @keyframes bounce {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-15px); }
            }
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(10px); }
            }
          `}</style>
        </div>
      </header>

      {/* Section 1: Qu'est-ce que c'est */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-blue-900 mb-6">
              Qu'est-ce qu'un furet ?
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              className="relative h-80 rounded-2xl overflow-hidden shadow-2xl"
              style={{
                transform: `translateY(${Math.max(0, scrollY - 600) * 0.08}px)`,
              }}
            >
              <img 
                src="/images.jpg" 
                alt="Furet plomberie" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Le <span className="font-bold text-orange-600">furet</span> est un ressort hélicoïdal flexible, l'allié indispensable de tout plombier.
              </p>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                C'est un outil mécanique robuste qui s'enroule dans vos tuyauteries pour déboucher les canalisations les plus récalcitrantes.
              </p>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                <span className="font-bold text-blue-600">Simple, efficace et éprouvé</span> depuis des décennies, le furet reste le choix préféré des professionnels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Avantages */}
      <section className="py-24 px-6 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-blue-900 mb-6">
              Pourquoi choisir un furet ?
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Zap />, title: 'Rapide', desc: 'Débouche vos tuyaux en quelques minutes' },
              { icon: <Trophy />, title: 'Efficace', desc: 'Élimine les bouchons les plus tenaces' },
              { icon: <Wrench />, title: 'Écologique', desc: 'Pas de produits chimiques agressifs' }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                style={{ animation: `slideIn 0.6s ease-out ${idx * 0.2}s backwards` }}
              >
                <div className="text-orange-500 mb-4 mx-auto w-fit">
                  {React.cloneElement(item.icon, { className: 'w-12 h-12' })}
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-3 text-center">{item.title}</h3>
                <p className="text-gray-700 text-center">{item.desc}</p>
              </div>
            ))}
          </div>

          <style>{`
            @keyframes slideIn {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
        </div>
      </section>

      {/* Section 3: Comment ça marche */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-blue-900 mb-6">
              Comment utiliser un furet ?
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-6">
            {[
              { num: '1', step: 'Préparer', desc: 'Rassemblez votre équipement et mettez des gants de protection.' },
              { num: '2', step: 'Insérer', desc: 'Guidez délicatement le furet dans le tuyau bouché.' },
              { num: '3', step: 'Tourner', desc: 'Tournez la manivelle pour progresser et casser le bouchon.' },
              { num: '4', step: 'Succès !', desc: 'Profitez d\'une canalisation débouchée et libre ! 🎉' }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="flex gap-6 p-8 bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl hover:from-blue-100 hover:to-orange-100 transition-all duration-300 border-l-4 border-orange-500"
                style={{
                  transform: `translateX(${Math.max(0, (scrollY - 2200 - idx * 100)) * 0.05}px)`,
                }}
              >
                <div className="text-4xl font-bold text-orange-500 flex-shrink-0">{item.num}</div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">{item.step}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Image et témoignage */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
              style={{
                transform: `translateY(${Math.max(0, scrollY - 3000) * 0.08}px)`,
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=400&fit=crop" 
                alt="Plombier professionnel" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="text-white space-y-6">
              <h2 className="text-4xl font-bold mb-6">
                Recommandé par les professionnels
              </h2>
              
              <p className="text-lg leading-relaxed">
                Les plombiers professionnels font confiance aux furets depuis plus de 50 ans. C'est l'outil de base de tout atelier qui fonctionne.
              </p>
              
              <p className="text-lg leading-relaxed">
                Utilisé quotidiennement par des milliers de professionnels, le furet s'est avéré être le meilleur investissement pour déboucher efficacement et rapidement.
              </p>
              
              <p className="text-lg italic text-orange-300">
                "Un furet, c'est l'outil qui ne lâche jamais !" - Expert plomberie
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Prêt à déboucher ? 🔧
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Commandez votre furet dès maintenant et profitez d'une qualité professionnelle.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            Commander maintenant
          </button>
        </div>
      </section>
    </div>
  );
}
