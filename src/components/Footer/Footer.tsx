import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black border-t border-white/25">
      <div className="px-20 py-10">
        {/* Footer Content */}
        <div className="flex justify-between gap-8 mb-8">
          {/* Brand Column */}
          <div className="flex flex-col gap-3 animate-slide-in-left opacity-0">
            <h3 className="text-white text-lg font-semibold">Victory Esmeraldas</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Las mejores esmeraldas de Colombia
              <br />
              directamente para ti
            </p>
          </div>

          {/* Links Column */}
          <div className="flex flex-col gap-3 animate-fade-in opacity-0 animation-delay-100">
            <h4 className="text-white text-base font-medium">Enlaces</h4>
            <a href="#" className="text-white/60 text-sm hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
              Catálogo
            </a>
            <a href="#" className="text-white/60 text-sm hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
              Sobre Nosotros
            </a>
            <a href="#" className="text-white/60 text-sm hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
              Contacto
            </a>
            <a href="#" className="text-white/60 text-sm hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
              Política de Privacidad
            </a>
          </div>

          {/* Legal Column */}
          <div className="flex flex-col gap-3 animate-fade-in opacity-0 animation-delay-200">
            <h4 className="text-white text-base font-medium">Legal</h4>
            <a href="#" className="text-white/60 text-sm hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
              Términos y Condiciones
            </a>
            <a href="#" className="text-white/60 text-sm hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
              Política de Devoluciones
            </a>
            <a href="#" className="text-white/60 text-sm hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
              Garantía
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex items-center justify-between pt-8 border-t border-[#3D3D3D] animate-fade-in opacity-0 animation-delay-300">
          {/* Copyright */}
          <p className="text-[#8A8A8A] text-xs hover:text-white transition-colors duration-300 cursor-default">
            2026 Copyrights David Montejo
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#E1306C] hover:scale-110 transition-all duration-300 group"
            >
              <Instagram className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#1877F2] hover:scale-110 transition-all duration-300 group"
            >
              <Facebook className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#1DA1F2] hover:scale-110 transition-all duration-300 group"
            >
              <Twitter className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
