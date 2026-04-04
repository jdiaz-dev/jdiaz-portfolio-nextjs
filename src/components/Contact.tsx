"use client";

import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations();

  return (
    <>
      <section className="contact-me">
        <h3 className="opinion">{t("contact.messageContactMe")}</h3>
        <h3 className="email">{t("contact.emailText")}</h3>
        <p id="my-email">jonathan.a.diaz.m@gmail.com</p>
        <br />
        <h3>WhatsApp</h3>
        <p>+51 910534676</p>
      </section>
      <style jsx>{`
        .contact-me {
          font-family: "Catamaran-Regular";
          text-align: center;
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
      `}</style>
    </>
  );
}
