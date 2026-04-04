"use client";

import { useTranslations } from "next-intl";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Instagram from "@mui/icons-material/Instagram";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" width="1.25rem" height="1.5rem" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
  </svg>
);

export default function Contact() {
  const t = useTranslations();

  const whatsappUrl = `https://wa.me/51910534676`;

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/jdiaz-dev",
      icon: <GitHubIcon />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jonathandiazdev",
      icon: <LinkedInIcon />,
    },

    {
      label: "Email",
      href: "https://www.instagram.com/jonathanalejandro369",
      icon: <Instagram />,
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@jonathan.diaz.software",
      icon: <TikTokIcon />,
    },
  ];

  return (
    <>
      <section className="contact-me">
        <h3 className="opinion">{t("contact.messageContactMe")}</h3>
        <h3 className="email">{t("contact.emailText")}</h3>
        <p id="my-email">jonathan.a.diaz.m@gmail.com</p>
        <br />

        <div
          style={{
            display: "flex",
            width: "25%",
          }}
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
            style={{
              width: "100%",
              justifyContent: "center",
            }}
          >
            <WhatsAppIcon style={{ fontSize: "1.2rem" }} />
            WhattApp
          </a>
        </div>

        <div className="socials">
          {socials.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="social-icon"
            >
              {icon}
            </a>
          ))}
        </div>
      </section>

      <style jsx>{`
        .contact-me {
          font-family: "Catamaran-Regular";
          text-align: center;
          justify-content: center;
          flex-direction: column;
          align-items: center;
        }
        h3,
        p {
          width: 47%;
          margin: 0px auto;
        }
        h3.email {
          margin-bottom: 8px;
        }
        p {
          font-size: 130%;
          text-align: center;
        }
        h3.opinion {
          padding-bottom: 5px;
          border-bottom: 1px solid rgb(15, 158, 158);
          margin-bottom: 17px;
          font-size: 170%;
        }

        .whatsapp-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #25d366;
          color: #fff;
          text-decoration: none;
          font-family: "Catamaran-Regular";
          font-size: 1rem;
          font-weight: 600;
          padding: 10px 24px;
          border-radius: 8px;
          margin-top: 4px;
          transition: background-color 0.2s ease;
        }
        .whatsapp-btn:hover {
          background-color: #1ebe5d;
        }

        .socials {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 20px;
        }
        .social-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: rgb(212, 202, 202);
          background-color: rgb(2, 14, 26);
          border: 1px solid rgba(212, 202, 202, 0.15);
          border-radius: 8px;
          padding: 10px;
          transition: all 0.2s ease;
          text-decoration: none;
        }
        .social-icon:hover {
          border-color: rgba(212, 202, 202, 0.4);
          transform: translateY(-2px);
        }
      `}</style>
    </>
  );
}
