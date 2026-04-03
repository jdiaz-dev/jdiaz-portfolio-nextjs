"use client";

import { useTranslations } from "next-intl";
import CardMedia from "@mui/material/CardMedia";

export default function About() {
  const t = useTranslations();

  return (
    <>
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
          <div
            className="image"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <CardMedia
              component="img"
              image="/images/jonathan alejandro.png"
              alt="Jonathan Díaz"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
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
      <style jsx>{`
        section.about-me {
          font-size: 120%;
          margin-top: 25%;
        }
        h3 {
          font-family: "Rajdhani-Bold";
        }
        .container-biography {
          display: flex;
          flex-flow: row;
          justify-content: space-between;
        }
        .description {
          flex-basis: 50%;
        }
        .image {
          flex-basis: 50%;
          text-align: center;
        }
        img {
          width: 60%;
        }
      `}</style>
    </>
  );
}
