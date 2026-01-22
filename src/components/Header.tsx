"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const lastScrollY = useRef(0);
  const headerRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  // Get current locale from pathname
  const currentLocale = pathname.split("/")[1] || "en";

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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
    const segments = pathname.split("/");
    segments[1] = locale;
    const newPath = segments.join("/");

    router.push(newPath);
    setIsLanguageOpen(false);
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
          <li className="language-switcher" ref={dropdownRef}>
            <button
              className="language-toggle"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              aria-label="Change language"
            >
              <span className="flag">
                {currentLocale === "es" ? "🇵🇪" : "🇺🇸"}
              </span>
              <span className="language-name">
                {currentLocale === "es" ? "Español" : "English"}
              </span>
              <span className="dropdown-arrow">
                {isLanguageOpen ? "▲" : "▼"}
              </span>
            </button>
            {isLanguageOpen && (
              <div className="language-dropdown">
                <button
                  className="language-option"
                  onClick={() => changeLanguage("en")}
                >
                  <span className="flag">🇺🇸</span>
                  <span>English</span>
                </button>
                <button
                  className="language-option"
                  onClick={() => changeLanguage("es")}
                >
                  <span className="flag">🇵🇪</span>
                  <span>Español</span>
                </button>
              </div>
            )}
          </li>
        </ul>
      </header>
      <style jsx>
        {`
          /* Language Switcher Dropdown Styles */

          .language-switcher {
            position: relative;
            display: flex;
            align-items: center;
          }

          .language-toggle {
            background: none;
            border: none;
            cursor: pointer;
            padding: 0.5rem 0.75rem;
            transition: opacity 0.2s ease;
            opacity: 0.9;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: inherit;
          }

          .language-toggle:hover {
            opacity: 1;
          }

          .language-toggle .flag {
            font-size: 1.25rem;
            display: flex;
            align-items: center;
          }

          .language-toggle .language-name {
            font-size: 1rem;
            font-weight: 400;
          }

          .dropdown-arrow {
            font-size: 0.65rem;
            transition: transform 0.2s ease;
          }

          .language-toggle:hover {
            transform: scale(1.1);
            opacity: 1;
          }

          .language-dropdown {
            position: absolute;
            top: 100%;
            right: 0;
            margin-top: 0.5rem;
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            overflow: hidden;
            z-index: 1000;
            min-width: 150px;
            animation: dropdownFadeIn 0.2s ease;
          }

          @keyframes dropdownFadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .language-option {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            width: 100%;
            padding: 0.75rem 1rem;
            background: none;
            border: none;
            cursor: pointer;
            font-size: 1rem;
            text-align: left;
            transition: background-color 0.2s ease;
            color: #333;
          }

          .language-option .flag {
            font-size: 1.25rem;
            display: flex;
            align-items: center;
          }

          .language-option:hover {
            background-color: #f5f5f5;
          }

          .language-option:active {
            background-color: #e8e8e8;
          }

          /* Dark theme support (optional) */
          @media (prefers-color-scheme: dark) {
            .language-dropdown {
              background: #2a2a2a;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            }

            .language-option {
              color: #e0e0e0;
            }

            .language-option:hover {
              background-color: #3a3a3a;
            }

            .language-option:active {
              background-color: #4a4a4a;
            }
          }
        `}
      </style>
    </>
  );
}
