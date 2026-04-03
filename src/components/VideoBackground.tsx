import React from "react";

function VideoBackground() {
  return (
    <>
      <div>
        <video autoPlay loop muted playsInline className="background-video">
          <source src="/videos/intro.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
        <div className="video-overlay"></div>
      </div>
      <style jsx>{`
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
          min-width: 100%;
          min-height: 108.5%;
          background: rgba(15, 32, 39, 0.7);
          z-index: -1;
        }
      `}</style>
    </>
  );
}

export default VideoBackground;
