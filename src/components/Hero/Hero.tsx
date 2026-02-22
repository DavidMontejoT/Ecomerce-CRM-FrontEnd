import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition(null);
  };

  return (
    <section
      className="relative w-full h-[568px] overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/hero-bg.png')`,
        }}
      >
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.60) 40%, rgba(0, 0, 0, 0.35) 70%, rgba(0, 0, 0, 0.15) 100%)'
        }}></div>
      </div>

      {/* Blur Patch - Sigue al mouse */}
      {mousePosition && (
        <div
          className="absolute pointer-events-none rounded-full transition-transform duration-75 ease-out"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            width: '300px',
            height: '300px',
            transform: 'translate(-50%, -50%)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 60%)',
            maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)',
            WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)',
          }}
        ></div>
      )}

      {/* Hero Content - Centrado vertical y horizontalmente */}
      <div className="relative z-10 flex items-center justify-center h-full w-full">
        <div className="flex flex-col items-center justify-center gap-8 text-center px-20">
          <h1 className="text-white text-[56px] font-normal tracking-tight leading-tight text-center drop-shadow-2xl animate-fade-in-up opacity-0 relative z-20">
            Esmeraldas Únicas
            <br />
            Calidad Inigualable
          </h1>

          {/* Hero Actions */}
          <div className="flex items-center gap-4 animate-fade-in-up opacity-0 animation-delay-300 relative z-20">
            <button className="px-8 py-3 bg-white text-black text-base font-normal rounded-full hover:bg-[#E6F7EF] hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
              Ver Catálogo
            </button>
            <button className="px-8 py-3 bg-transparent text-white text-base font-normal rounded-full border border-white/30 hover:bg-white/10 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Contáctanos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
