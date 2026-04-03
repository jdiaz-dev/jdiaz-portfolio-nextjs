"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElLang, setAnchorElLang] = useState<null | HTMLElement>(null);
  const lastScrollY = useRef(0);
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";

  const githubUrl = "https://github.com/jdiaz-dev";

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
    const section = document.querySelector(sectionClass);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        if (window.pageYOffset > 100) setIsVisible(false);
      }, 800);
    }
    setAnchorElNav(null);
  };

  const changeLanguage = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/"));
    setAnchorElLang(null);
    setIsLanguageOpen(false);
  };

  const navItems = [
    { label: t("header.aboutMe"), section: ".about-me" },
    { label: t("header.portfolio"), section: ".portfolio" },
    { label: t("header.contact"), section: ".contact-me" },
  ];

  const currentFlag = currentLocale === "es" ? "PE" : "US";
  const currentLangName =
    currentLocale === "es"
      ? t("header.supportedLanguages.spanish")
      : t("header.supportedLanguages.english");

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "0 10px 40px -10px #051530",
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",
      }}
    >
      <Toolbar
        sx={{ justifyContent: "flex-end", minHeight: "80px !important" }}
      >
        {/* Desktop Nav */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          {navItems.map((item) => (
            <Button
              key={item.section}
              onClick={() => scrollToSection(item.section)}
              sx={{
                color: "rgb(212, 202, 202)",
                backgroundColor: "rgb(2, 14, 26)",
                borderRadius: "4px",
                px: 2,
                textTransform: "none",
                fontSize: "0.95rem",
                "&:hover": { backgroundColor: "rgb(3, 7, 10)" },
              }}
            >
              {item.label}
            </Button>
          ))}

          {/* Desktop GitHub Link */}
          <Button
            component="a"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "rgb(212, 202, 202)",
              backgroundColor: "rgb(2, 14, 26)",
              borderRadius: "4px",
              px: 2,
              textTransform: "none",
              fontSize: "0.95rem",
              gap: 0.75,
              "&:hover": { backgroundColor: "rgb(3, 7, 10)" },
            }}
          >
            <GitHubIcon sx={{ fontSize: "1.2rem" }} />
            GitHub
          </Button>

          {/* Desktop Language Switcher */}
          <Button
            onClick={(e) => {
              setAnchorElLang(e.currentTarget);
              setIsLanguageOpen(!isLanguageOpen);
            }}
            sx={{
              color: "rgb(212, 202, 202)",
              backgroundColor: "rgb(2, 14, 26)",
              borderRadius: "4px",
              px: 2,
              textTransform: "none",
              gap: 0.75,
              "&:hover": { backgroundColor: "rgb(3, 7, 10)" },
            }}
          >
            <span style={{ fontSize: "1.25rem" }}>
              {currentLocale === "es" ? "🇵🇪" : "🇺🇸"}
            </span>
            <span>{currentLangName}</span>
            <span style={{ fontSize: "0.65rem" }}>
              {isLanguageOpen ? "▲" : "▼"}
            </span>
          </Button>
          <Menu
            anchorEl={anchorElLang}
            open={Boolean(anchorElLang)}
            onClose={() => {
              setAnchorElLang(null);
              setIsLanguageOpen(false);
            }}
            sx={{ mt: "8px" }}
          >
            <MenuItem onClick={() => changeLanguage("en")} sx={{ gap: 1.5 }}>
              <span style={{ fontSize: "1.25rem" }}>🇺🇸</span>
              <Typography>{t("header.supportedLanguages.english")}</Typography>
            </MenuItem>
            <MenuItem onClick={() => changeLanguage("es")} sx={{ gap: 1.5 }}>
              <span style={{ fontSize: "1.25rem" }}>🇵🇪</span>
              <Typography>{t("header.supportedLanguages.spanish")}</Typography>
            </MenuItem>
          </Menu>
        </Box>

        {/* Mobile Hamburger */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            onClick={(e) => setAnchorElNav(e.currentTarget)}
            color="inherit"
            aria-label="open navigation menu"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorElNav}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={Boolean(anchorElNav)}
            onClose={() => setAnchorElNav(null)}
            slotProps={{
              paper: {
                sx: {
                  backgroundColor: "#0b1c35",
                  color: "rgb(212, 202, 202)",
                  minWidth: 180,
                  borderRadius: "8px",
                },
              },
            }}
          >
            {navItems.map((item) => (
              <MenuItem
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                sx={{ "&:hover": { backgroundColor: "rgb(3, 7, 10)" } }}
              >
                <Typography>{item.label}</Typography>
              </MenuItem>
            ))}
            <Divider sx={{ borderColor: "rgba(212,202,202,0.15)", my: 0.5 }} />
            {/* Mobile GitHub Link */}
            <MenuItem
              component="a"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ gap: 1.5, "&:hover": { backgroundColor: "rgb(3, 7, 10)" } }}
            >
              <GitHubIcon sx={{ fontSize: "1.25rem" }} />
              <Typography>GitHub</Typography>
            </MenuItem>
            <Divider sx={{ borderColor: "rgba(212,202,202,0.15)", my: 0.5 }} />
            <MenuItem
              onClick={() => changeLanguage("en")}
              sx={{ gap: 1.5, "&:hover": { backgroundColor: "rgb(3, 7, 10)" } }}
            >
              <span style={{ fontSize: "1.25rem" }}>🇺🇸</span>
              <Typography>{t("header.supportedLanguages.english")}</Typography>
            </MenuItem>
            <MenuItem
              onClick={() => changeLanguage("es")}
              sx={{ gap: 1.5, "&:hover": { backgroundColor: "rgb(3, 7, 10)" } }}
            >
              <span style={{ fontSize: "1.25rem" }}>🇵🇪</span>
              <Typography>{t("header.supportedLanguages.spanish")}</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
