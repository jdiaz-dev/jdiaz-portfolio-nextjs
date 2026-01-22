import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations();

  return (
    <section className="contact-me">
      <h3 className="opinion">{t("contact.messageContactMe")}</h3>
      <h3 className="email">{t("contact.emailText")}</h3>
      <p id="my-email">jonathan.a.diaz.m@gmail.com</p>
      <br />
      <h3>WhatsApp</h3>
      <p>+51 910534676</p>
    </section>
  );
}
