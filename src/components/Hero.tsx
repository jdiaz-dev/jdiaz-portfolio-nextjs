import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations();

  return (
    <section className="front">
      <div className="first-sentence">
        <h2>{t("hero.greeting")}</h2>
      </div>
      <div className="my-name">
        <h1>{t("hero.name")}</h1>
      </div>
      <div className="my-activity">
        <h2>{t("hero.profession")}</h2>
      </div>
      <div className="litle-description">{t("hero.description")}</div>
    </section>
  );
}
