"use client";

import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations();

  return (
    <>
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

      <style jsx>{`
        .front {
          width: 100%;
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          flex-direction: column;
        }
        .hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .first-sentence h2,
        .my-name h1,
        .my-activity h2,
        .litle-description {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
        }
        div.first-sentence h2 {
          font-size: 200%;
          color: rgba(67, 136, 201, 0.808);
        }
        div.my-name h1 {
          font-size: 550%;
          color: rgb(15, 158, 158);
        }
        div.my-activity h2 {
          font-size: 400%;
        }
        div.litle-description {
          font-size: 150%;
        }
      `}</style>
    </>
  );
}
