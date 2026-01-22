"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0);
  const headerRef = useRef<HTMLElement>(null);
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY =
        window.pageYOffset || document.documentElement.scrollTop;

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
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionClass: string) => {
    const section = document.querySelector(`.${sectionClass}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });

      // Ocultar header después de hacer clic (opcional)
      // Espera a que termine el scroll suave
      setTimeout(() => {
        if (window.pageYOffset > 100) {
          setIsVisible(false);
        }
      }, 800);
    }
  };

  const changeLanguage = (locale: string) => {
    // Obtener la ruta actual sin el locale
    const segments = pathname.split("/");
    segments[1] = locale; // Reemplazar el locale
    const newPath = segments.join("/");

    router.push(newPath);
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`
        ${isVisible ? "header-visible" : "header-hidden"}
        ${isAtTop ? "header-at-top" : "header-scrolled"}
      `}
      >
        <ul>
          <li className="about" onClick={() => scrollToSection("about-me")}>
            {t("header.aboutMe")}
          </li>
          <li className="work" onClick={() => scrollToSection("portfolio")}>
            {t("header.portfolio")}
          </li>
          <li className="contact" onClick={() => scrollToSection("contact-me")}>
            {t("header.contact")}
          </li>
          <li className="language-switcher">
            <button
              onClick={() => changeLanguage("en")}
              aria-label="Change to English"
              className="flag-button"
            >
              🇺🇸
            </button>
            <button
              onClick={() => changeLanguage("es")}
              aria-label="Cambiar a Español"
              className="flag-button"
            >
              🇵🇪
            </button>
          </li>
        </ul>
      </header>
      <style jsx>
        {`
          /* Add these styles to your existing header styles */

          .language-switcher {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .flag-button {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0.25rem;
            transition:
              transform 0.2s ease,
              opacity 0.2s ease;
            opacity: 0.8;
          }

          .flag-button:hover {
            transform: scale(1.2);
            opacity: 1;
          }

          .flag-button:active {
            transform: scale(1.1);
          }

          /* Optional: Add a subtle border or background on hover */
          .flag-button:focus {
            outline: 2px solid currentColor;
            outline-offset: 2px;
            border-radius: 4px;
          }
        `}
      </style>
    </>
  );
}
