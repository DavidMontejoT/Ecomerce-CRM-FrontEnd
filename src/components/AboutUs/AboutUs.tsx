import React, { useEffect, useRef, useState } from 'react';

const AboutUs: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videos = [
    '/hailuo-video.mp4',
    '/video.mp4'
  ];

  useEffect(() => {
    // Cambiar video cada 8 segundos
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Reproducir video automáticamente cuando cambia
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(console.error);
    }
  }, [currentVideo]);

  return (
    <section className="relative w-full min-h-[600px] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          key={currentVideo}
          src={videos[currentVideo]}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{
            transform: 'scale(1.1)',
            transition: 'opacity 1s ease-in-out'
          }}
        />
      </div>

      {/* Gradient Overlay - Negro con desvanecimiento */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.75) 50%, rgba(0, 0, 0, 0.85) 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full min-h-[600px] flex items-center">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl ml-auto animate-fade-in-up opacity-0">
            {/* Section Title */}
            <h2 className="text-6xl font-bold text-white mb-8 tracking-tight text-right">
              Sobre <span className="text-emerald-400">Nosotros</span>
            </h2>

            {/* Decorative Line */}
            <div className="w-32 h-1 bg-gradient-to-l from-emerald-400 to-emerald-600 mb-12 rounded-full ml-auto"></div>

            {/* Main Description */}
            <div className="text-gray-100 text-xl leading-relaxed">
              <p className="text-2xl font-light text-right">
                En <span className="text-emerald-400 font-semibold">Victory Esmeraldas</span>, somos
                apasionados artesanos de la naturaleza, dedicados a descubrir y transformar las más
                excepcionales esmeraldas colombianas en tesoros eternos.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 pt-12 border-t border-gray-600 max-w-4xl">
              <div className="text-right">
                <div className="text-6xl font-bold text-emerald-400 mb-3">25+</div>
                <div className="text-gray-300 text-lg">Años de Experiencia</div>
              </div>
              <div className="text-right">
                <div className="text-6xl font-bold text-emerald-400 mb-3">100%</div>
                <div className="text-gray-300 text-lg">Esmeraldas Colombianas</div>
              </div>
              <div className="text-right">
                <div className="text-6xl font-bold text-emerald-400 mb-3">500+</div>
                <div className="text-gray-300 text-lg">Clientes Satisfechos</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default AboutUs;
