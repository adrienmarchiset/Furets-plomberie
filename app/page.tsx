'use client';

import { useState, useEffect } from 'react';
import { Sparkles, Cake, Heart, Volume2, VolumeX, Play } from 'lucide-react';

export default function BirthdayPage() {
  const [particles, setParticles] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setShowMessage(true);
    
    // Créer des particules de confettis
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 1,
    }));
    setParticles(newParticles);
  }, []);

  const playBirthdaySong = () => {
    setIsMuted(false);
    setIsPlaying(true);

    // Fréquences des notes (Hz)
    const noteFreqs = {
      'C4': 261.63, 'D4': 293.66, 'E4': 329.63, 'F4': 349.23,
      'G4': 391.99, 'A4': 440, 'B4': 493.88
    };

    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Mélodie "Joyeux Anniversaire"
    const notes = [
      { freq: noteFreqs['C4'], duration: 0.3 },
      { freq: noteFreqs['C4'], duration: 0.3 },
      { freq: noteFreqs['D4'], duration: 0.6 },
      { freq: noteFreqs['C4'], duration: 0.6 },
      { freq: noteFreqs['F4'], duration: 0.6 },
      { freq: noteFreqs['E4'], duration: 1.2 },
      { freq: noteFreqs['C4'], duration: 0.3 },
      { freq: noteFreqs['C4'], duration: 0.3 },
      { freq: noteFreqs['D4'], duration: 0.6 },
      { freq: noteFreqs['C4'], duration: 0.6 },
      { freq: noteFreqs['G4'], duration: 0.6 },
      { freq: noteFreqs['F4'], duration: 1.2 },
    ];

    let startTime = audioContext.currentTime;

    notes.forEach(note => {
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();

      osc.frequency.value = note.freq;
      osc.type = 'sine';

      gain.gain.setValueAtTime(0.3, startTime);
      gain.gain.exponentialRampToValueAtTime(0.01, startTime + note.duration);

      osc.connect(gain);
      gain.connect(audioContext.destination);

      osc.start(startTime);
      osc.stop(startTime + note.duration);

      startTime += note.duration;
    });

    setTimeout(() => setIsPlaying(false), startTime * 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Confettis animés */}
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-bounce"
          style={{
            left: `${p.left}%`,
            top: '-10px',
            animation: `fall ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}

      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-fade-scale {
          animation: fadeInScale 1s ease-out forwards;
        }
      `}</style>

      <div className="relative z-10 text-center max-w-2xl">
        {/* Bouton volume */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-md p-3 rounded-full transition-all border border-white/30"
          aria-label="Toggle sound"
        >
          {isMuted ? (
            <VolumeX className="w-6 h-6 text-white" />
          ) : (
            <Volume2 className="w-6 h-6 text-white" />
          )}
        </button>

        {/* Icônes décoratives */}
        <div className="flex justify-center gap-4 mb-8">
          <Sparkles className="w-12 h-12 text-yellow-300 animate-spin" style={{ animationDuration: '3s' }} />
          <Cake className="w-12 h-12 text-red-400 animate-bounce" />
          <Sparkles className="w-12 h-12 text-yellow-300 animate-spin" style={{ animationDuration: '3s' }} />
        </div>

        {/* Message principal */}
        <h1 className={`text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg ${showMessage ? 'animate-fade-scale' : ''}`}>
          Joyeux Anniversaire Marion ! 🎉
        </h1>

        {/* Sous-titre */}
        <p className="text-2xl md:text-3xl text-white mb-8 drop-shadow-md animate-fade-scale" style={{ animationDelay: '0.3s' }}>
          Que cette journée soit remplie de moments magiques et de sourires
        </p>

        {/* Bouton musique */}
        <button
          onClick={playBirthdaySong}
          disabled={isPlaying}
          className={`mb-8 px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 mx-auto transition-all ${
            isPlaying
              ? 'bg-white/30 text-white cursor-not-allowed'
              : 'bg-white/20 hover:bg-white/40 text-white border-2 border-white/30 hover:border-white/50'
          } animate-fade-scale`}
          style={{ animationDelay: '0.6s' }}
        >
          <Play className="w-5 h-5" />
          {isPlaying ? 'Musique en cours...' : '🎵 Jouer la musique'}
        </button>

        {/* Cœurs */}
        <div className="flex justify-center gap-4 mb-8 animate-fade-scale" style={{ animationDelay: '0.6s' }}>
          <Heart className="w-10 h-10 text-red-500 fill-red-500 animate-bounce" />
          <Heart className="w-10 h-10 text-pink-500 fill-pink-500 animate-bounce" style={{ animationDelay: '0.2s' }} />
          <Heart className="w-10 h-10 text-red-500 fill-red-500 animate-bounce" style={{ animationDelay: '0.4s' }} />
        </div>

        {/* Message personnel */}
        <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 mb-8 border-2 border-white/30 animate-fade-scale" style={{ animationDelay: '0.9s' }}>
          <p className="text-xl text-white font-semibold leading-relaxed">
            Un grand merci pour ta présence, ta gentillesse et tous les bons moments qu'on partage ensemble. 
            Que cette année t'apporte encore plus de bonheur, de réussite et de belles surprises ! 🌟
          </p>
        </div>

        {/* Gâteau emoji animé */}
        <div className="text-7xl mb-8 animate-bounce" style={{ animationDuration: '1.5s' }}>
          🎂
        </div>
      </div>
    </div>
  );
}