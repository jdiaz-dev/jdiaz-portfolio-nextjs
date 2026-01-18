'use client';

import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;

      // Detectar si estamos en la parte superior
      if (currentScrollY === 0) {
        setIsAtTop(true);
        setIsVisible(true);
      } else {
        setIsAtTop(false);
        
        // Mostrar header al hacer scroll hacia arriba
        if (currentScrollY < lastScrollY.current) {
          setIsVisible(true);
        } 
        // Ocultar header al hacer scroll hacia abajo
        else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          setIsVisible(false);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    // Agregar el event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionClass: string) => {
    const section = document.querySelector(`.${sectionClass}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      
      // Ocultar header después de hacer clic (opcional)
      // Espera a que termine el scroll suave
      setTimeout(() => {
        if (window.pageYOffset > 100) {
          setIsVisible(false);
        }
      }, 800);
    }
  };

  return (
    <header
      ref={headerRef}
      className={`
        ${isVisible ? 'header-visible' : 'header-hidden'}
        ${isAtTop ? 'header-at-top' : 'header-scrolled'}
      `}
    >
      <ul>
        <li className="about" onClick={() => scrollToSection('about-me')}>
          Acerca de mi
        </li>
        <li className="work" onClick={() => scrollToSection('projects')}>
          Trabajos
        </li>
        <li className="contact" onClick={() => scrollToSection('contact-me')}>
          Contacto
        </li>
      </ul>
    </header>
  );
}