"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {
  const t = useTranslations();

  return (
    <section className="about-me">
      <div className="box-title">
        <h3> {t("about.aboutMe")}</h3>
        <div></div>
      </div>
      <br />

      <div className="container-biography">
        <div className="description">
          {t("about.biography")}

          <br />
          <br />
        </div>
        <div className="image">
          <Image
            src="/images/jonathan alejandro.png"
            alt="Jonathan Díaz"
            width={300}
            height={300}
          />
        </div>
      </div>

      <div className="my-technologies">
        <p>{t("about.recentTechnologies")}</p>
        <ul>
          {(t.raw("about.technologiesList") as unknown as string[]).map(
            (tech, index) => (
              <li key={index}>{tech}</li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}
