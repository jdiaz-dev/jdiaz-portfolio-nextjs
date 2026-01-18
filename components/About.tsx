import Image from 'next/image';

export default function About() {
  const technologies = [
    'Node.js',
    'Nest.js',
    'React.js',
    'MongoDB',
    'PostgreSQL',
    'Cloudflare',
    'AWS'
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
          Disfruto resolver problemas de las personas usando código y construyendo aplicaciones. 
          Mi objetivo es siempre construir productos y soluciones que proporcionen una experiencia única.
          <br /><br />
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
          Aquí están las tecnologías con las que he estado trabajando recientemente:
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