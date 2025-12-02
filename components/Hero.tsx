import React from 'react';
import { EBOOKS } from '../constants';
import Logo from './Logo';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
      <div className="bg-secondary rounded-2xl shadow-xl border border-gray-800 overflow-hidden relative">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="px-6 py-16 lg:py-24 text-center lg:text-left relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            
            <div className="mb-8 transform hover:scale-105 transition duration-500">
                <Logo large />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 text-center">
              Domina Nuevos <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Idiomas</span> con Lexigo
            </h1>

            <p className="text-xl text-gray-400 mb-10 max-w-2xl text-center leading-relaxed">
              Ofrecemos cursos online de alta calidad para que aprendas Inglés, Portugués e Italiano desde cero y a tu propio ritmo. ¡Tu fluidez comienza aquí!
            </p>

            <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 w-full border border-primary/30 hover:border-primary/50 transition-colors shadow-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
                Elige tu idioma y empieza hoy mismo, ¡es totalmente <span className="text-accent">GRATIS</span>!
              </h3>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {EBOOKS.map((ebook) => (
                  <a
                    key={ebook.language}
                    href={ebook.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-primary hover:bg-primary/80 text-white text-lg font-semibold px-8 py-4 rounded-xl transition duration-300 shadow-lg transform hover:-translate-y-1 flex items-center justify-center space-x-3 w-full sm:w-auto"
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300 grayscale-0">
                      {ebook.flag}
                    </span>
                    <span>{ebook.language}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;