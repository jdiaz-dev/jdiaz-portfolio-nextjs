export default function Hero() {
  return (
    <>
      <section className="front">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="background-video"
        >
          <source src="/videos/intro.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>

        <div className="video-overlay"></div>

        <div className="hero-content">
          <div className="first-sentence">
            <h2>Hola, mi nombre es</h2>
          </div>
          <div className="my-name">
            <h1>Jonathan Díaz</h1>
          </div>
          <div className="my-activity">
            <h2>Ingeniero de Software Backend</h2>
          </div>
          <div className="litle-description">
            Especialista en sistemas de alto rendimiento para el sector financiero
          </div>
        </div>
      </section>

      <style jsx>{`
        .front {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .background-video {
          position: absolute;
          top: 50%;
          left: 50%;
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          transform: translate(-50%, -50%);
          z-index: -2;
          object-fit: cover;
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(15, 32, 39, 0.7);
          z-index: -1;
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
      `}</style>
    </>
  );
}