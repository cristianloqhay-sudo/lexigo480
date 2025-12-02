import { CourseLink, EbookLink, Testimonial } from './types';

export const EBOOKS: EbookLink[] = [
  {
    language: 'Inglés',
    flag: '🇺🇸',
    url: 'https://cristianloqhay-sudo.github.io/ingles1/'
  },
  {
    language: 'Portugués',
    flag: '🇧🇷',
    url: 'https://cristianloqhay-sudo.github.io/portugues/'
  },
  {
    language: 'Italiano',
    flag: '🇮🇹',
    url: 'https://cristianloqhay-sudo.github.io/italiano/'
  }
];

export const COURSES: CourseLink[] = [
  {
    title: 'Curso Inglés',
    language: 'Inglés',
    flag: '🇺🇸',
    url: 'https://go.hotmart.com/C103156556U'
  },
  {
    title: 'Curso Portugués',
    language: 'Portugués',
    flag: '🇧🇷',
    url: 'https://go.hotmart.com/R103170159Q'
  },
  {
    title: 'Curso Italiano',
    language: 'Italiano',
    flag: '🇮🇹',
    url: 'https://go.hotmart.com/U103170151V'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    content: "Gracias a Lexigo, conseguí ese ascenso en mi trabajo. Las clases de conversación con hablantes nativos son increíbles y muy efectivas.",
    author: "María P.",
    course: "Curso de Inglés Avanzado",
    highlightColor: 'accent'
  },
  {
    id: 2,
    content: "Empecé el curso de Portugués sin saber nada y ahora puedo comunicarme perfectamente en mis viajes a Brasil. ¡Muy recomendado!",
    author: "Javier M.",
    course: "Curso de Portugués Básico",
    highlightColor: 'primary'
  },
  {
    id: 3,
    content: "La plataforma es muy intuitiva y el enfoque cultural del curso de Italiano es fascinante. Aprender es divertido y fácil de seguir.",
    author: "Sofía G.",
    course: "Curso de Italiano Intermedio",
    highlightColor: 'accent'
  }
];

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/profile.php?id=61583705050960',
  instagram: 'https://www.instagram.com/lexigo2.0/',
  tiktok: 'https://www.tiktok.com/@lexigo2.0'
};