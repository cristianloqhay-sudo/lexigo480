import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Facebook, Instagram } from 'lucide-react';

// Custom TikTok icon since Lucide might not have the brand icon perfectly, 
// constructing a simple path wrapper for SVG
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v6.16c0 2.52-1.12 4.84-2.9 6.24-1.72 1.36-3.88 1.86-6.04 1.45-3.09-.59-5.52-3.09-6.12-6.17-.65-3.38 1.25-6.57 4.32-7.53 1.05-.33 2.19-.38 3.3-.21v4.2c-.92-.26-1.92-.16-2.77.29-1.07.57-1.69 1.73-1.58 2.94.1 1.26.96 2.37 2.17 2.75 1.2.37 2.53-.02 3.39-.98.79-.88 1.19-2.07 1.13-3.26.01-4.72.01-9.44.02-14.16z" />
  </svg>
);

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-br from-primary to-fuchsia-600 text-white rounded-3xl shadow-2xl p-8 sm:p-16 text-center transform hover:scale-[1.01] transition duration-500 relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black opacity-10 rounded-full -ml-10 -mb-10"></div>
        
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 relative z-10">
          ¡Tu Viaje Lingüístico Comienza Hoy!
        </h2>
        <p className="text-xl text-violet-100 mb-10 max-w-2xl mx-auto relative z-10">
          No esperes más para dominar un nuevo idioma. Síguenos en nuestras redes sociales para recibir tips diarios, frases útiles y ofertas exclusivas.
        </p>

        <div className="flex justify-center items-center space-x-8 relative z-10">
          {/* Facebook */}
          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white text-white hover:text-blue-600 p-4 rounded-full transition-all duration-300 transform hover:scale-110 backdrop-blur-sm shadow-lg"
            aria-label="Facebook"
          >
            <Facebook className="w-8 h-8" />
          </a>

          {/* Instagram */}
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white text-white hover:text-pink-600 p-4 rounded-full transition-all duration-300 transform hover:scale-110 backdrop-blur-sm shadow-lg"
            aria-label="Instagram"
          >
            <Instagram className="w-8 h-8" />
          </a>

          {/* TikTok */}
          <a
            href={SOCIAL_LINKS.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white text-white hover:text-black p-4 rounded-full transition-all duration-300 transform hover:scale-110 backdrop-blur-sm shadow-lg"
            aria-label="TikTok"
          >
            <TikTokIcon className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;