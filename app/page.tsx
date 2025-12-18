'use client';

import React, { useState, useEffect } from 'react';
import { Wrench, Zap, Trophy } from 'lucide-react';

export default function FuretPlomberie() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Header avec animation */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute text-9xl opacity-5 transform"
            style={{ 
              transform: `translateY(${scrollY * 0.5}px) rotate(${scrollY * 0.1}deg)` 
            }}
          >
            🦡
          </div>
        </div>
        
        <div className="relative z-10 text-center text-white">
          <div 
            className="inline-block mb-6"
            style={{
              animation: 'bounce 2s infinite',
              transformOrigin: 'center bottom'
            }}
          >
            <Wrench className="w-20 h-20 mx-auto" />
          </div>
          <h1 className="text-6xl font-bold mb-4">Les Furets Plomberie</h1>
          <p className="text-2xl text-blue-100">Vos alliés pour déboucher vos tuyaux ! 🐿️</p>
        </div>

        <style>{`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
        `}</style>
      </header>

      {/* Section 1: Introduction */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              className="relative h-96 rounded-xl overflow-hidden shadow-2xl"
              style={{
                transform: `translateY(${Math.max(0, scrollY - 800) * 0.1}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-amber-300 to-orange-400 flex items-center justify-center text-8xl">
                🦡
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Qu'est-ce qu'un furet ?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Le furet est l'outil incontournable du plombier ! Bien que ce ne soit pas un vrai animal (dommage 🦡), c'est un ressort hélicoïdal flexible qui s'enroule dans vos tuyauteries pour déboucher les canalisations les plus récalcitrantes.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Simple mais efficace, le furet mécanique a fait ses preuves depuis des décennies. C'est l'allié discret de chaque plombier qui se respecte !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Avantages */}
      <section className="py-20 px-6 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">Pourquoi choisir un furet ?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Zap />, title: 'Rapide', desc: 'Débouche vos tuyaux en quelques minutes' },
              { icon: <Trophy />, title: 'Efficace', desc: 'Élimine les bouchons les plus tenaces' },
              { icon: <Wrench />, title: 'Écolo', desc: 'Pas de produits chimiques agressifs' }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:scale-105"
                style={{
                  animation: `slideIn 0.6s ease-out ${idx * 0.2}s backwards`,
                  transformOrigin: 'center'
                }}
              >
                <div className="text-blue-600 mb-4 mx-auto w-fit">
                  {React.cloneElement(item.icon, { className: 'w-12 h-12' })}
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
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
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Comment utiliser un furet ?</h2>
          
          <div className="space-y-8">
            {[
              { num: '1️⃣', step: 'Préparer', desc: 'Rassemblez votre équipement et mettez des gants de protection.' },
              { num: '2️⃣', step: 'Insérer', desc: 'Guidez délicatement le furet dans le tuyau bouché.' },
              { num: '3️⃣', step: 'Tourner', desc: 'Tournez la manivelle pour progresser et casser le bouchon.' },
              { num: '4️⃣', step: 'Succès !', desc: 'Profitez d\'une canalisation débouchée et libre ! 🎉' }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="flex gap-6 p-6 bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg hover:from-blue-200 hover:to-blue-100 transition-all"
                style={{
                transform: `translateX(${Math.max(0, (scrollY - 2200 - idx * 100)) * 0.05}px)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <div className="text-5xl flex-shrink-0">{item.num}</div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">{item.step}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Fun fact */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-7xl mb-6 inline-block" style={{ animation: 'spin 3s linear infinite' }}>
            🦡
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Saviez-vous que... ?</h2>
          <p className="text-xl text-white mb-4">
            Le furet tire son nom de l'animal qui ressemble à la forme du spiral ! Un petit clin d'œil à la nature. 🌿
          </p>
          <p className="text-lg text-purple-100">
            Aujourd'hui, les furets électriques existent aussi, mais le classique reste un incontournable !
          </p>

          <style>{`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Prêt à déboucher ? 🔧</h2>
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            Commander un furet maintenant
          </button>
        </div>
      </section>
    </div>
  );
}