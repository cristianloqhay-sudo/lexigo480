import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
            Lo que Dicen Nuestros Estudiantes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`bg-gray-800 p-8 rounded-2xl shadow-lg border-t-4 hover:shadow-2xl transition duration-300 text-white flex flex-col ${
                testimonial.highlightColor === 'primary' ? 'border-primary' : 'border-accent'
              }`}
            >
              <div className={`mb-4 ${testimonial.highlightColor === 'primary' ? 'text-primary' : 'text-accent'}`}>
                <Quote className="w-10 h-10 fill-current opacity-50" />
              </div>
              
              <p className="text-gray-400 italic mb-6 leading-relaxed flex-grow">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-gray-700 pt-4 mt-auto">
                <div className="font-bold text-white text-lg">{testimonial.author}</div>
                <div className="text-sm text-primary font-medium">{testimonial.course}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;