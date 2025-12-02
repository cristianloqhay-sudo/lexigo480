import React, { useState, useEffect } from 'react';
import { COURSES } from '../constants';
import { ChevronRight } from 'lucide-react';

const Courses: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 5 seconds delay before showing the courses
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Use visibility: hidden to keep layout stable if needed, but the original request implies a show effect.
  // Using conditional rendering with animation for a smooth entrance.
  if (!isVisible) {
    return (
        <section id="cursos-nav" className="min-h-[200px] flex items-center justify-center">
             <div className="animate-pulse flex flex-col items-center gap-4 text-gray-600">
                <div className="h-2 w-24 bg-gray-800 rounded"></div>
                <p className="text-sm font-mono">Cargando ofertas especiales...</p>
             </div>
        </section>
    );
  }

  return (
    <section 
      id="cursos-nav" 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up transition-all duration-1000"
    >
      <div className="bg-gradient-to-r from-gray-800 to-secondary p-6 rounded-lg border-l-4 border-accent shadow-sm mb-10 max-w-3xl mx-auto text-center">
        <p className="text-xl text-gray-200 font-medium italic">
          "¡No pospongas más tus sueños! Elige el idioma que siempre quisiste aprender y comienza hoy mismo con nuestros cursos diseñados para tu éxito."
        </p>
      </div>

      <h2 className="text-3xl font-bold text-center text-white mb-8">Elige tu Próximo Idioma</h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {COURSES.map((course) => (
          <a
            key={course.title}
            href={course.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto min-w-[280px] bg-secondary border-2 border-primary text-white hover:bg-primary hover:text-white text-xl font-bold px-8 py-6 rounded-2xl transition-all duration-300 shadow-md hover:shadow-2xl hover:shadow-primary/20 transform hover:-translate-y-2 text-center flex flex-col items-center group"
          >
            <span className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-md">
              {course.flag}
            </span>
            <span className="mb-2">{course.title}</span>
            <span className="text-xs font-normal opacity-70 group-hover:opacity-100 flex items-center gap-1">
              Ver Oferta <ChevronRight className="w-3 h-3" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Courses;