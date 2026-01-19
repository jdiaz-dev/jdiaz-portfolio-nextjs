import Image from "next/image";

export default function About() {
  const technologies = [
    "Node.js",
    "Nest.js",
    "React.js",
    "MongoDB",
    "PostgreSQL",
    "Cloudflare",
    "AWS",
  ];

  return (
    <section className="about-me">
      <div className="box-title">
        <h3>Acerca de mi</h3>
        <div></div>
      </div>
      <br />

      <div className="container-biography">
        <div className="description">
          Ingeniero de software backend especializado en Node.js con más de 5
          años de experiencia construyendo sistemas de alto rendimiento para el
          sector financiero. He desarrollado soluciones serverless que procesan
          20 millones de solicitudes mensuales y plataformas que sirven a más
          de 5 millones de usuarios. Experto en arquitecturas de
          microservicios, AWS cloud, y bases de datos Relacionales y No Relacionales. Mi enfoque se
          centra en crear sistemas escalables, seguros y mantenibles que
          resuelven problemas de negocio reales.
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
        <p>
          Aquí están las tecnologías con las que he estado trabajando
          recientemente:
        </p>
        <ul>
          {technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
