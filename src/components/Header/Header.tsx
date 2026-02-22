import { useState } from 'react';
import { Search, ShoppingCart } from 'lucide-react';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl animate-fade-in">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />

      <div className="relative flex items-center justify-between px-20 py-5">
        {/* Logo Section */}
        <div className="flex items-center gap-2.5 group cursor-pointer">
          <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-180">
            <div className="absolute inset-0 bg-black border border-white rounded-full"></div>
            <div className="absolute inset-1 bg-[#00ff00] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
          </div>
          <span className="text-white text-xl font-normal tracking-tight group-hover:text-[#E6F7EF] transition-colors duration-300">
            Victory
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <a
            href="#"
            className="text-white text-sm font-normal hover:text-[#E6F7EF] hover:scale-110 transition-all duration-300 relative group"
          >
            Inicio
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00ff00] group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#productos"
            className="text-white text-sm font-normal hover:text-[#E6F7EF] hover:scale-110 transition-all duration-300 relative group"
          >
            Productos
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00ff00] group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#nosotros"
            className="text-white text-sm font-normal hover:text-[#E6F7EF] hover:scale-110 transition-all duration-300 relative group"
          >
            Sobre Nosotros
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00ff00] group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#contacto"
            className="text-white text-sm font-normal hover:text-[#E6F7EF] hover:scale-110 transition-all duration-300 relative group"
          >
            Contacto
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00ff00] group-hover:w-full transition-all duration-300"></span>
          </a>
        </nav>

        {/* Header Actions */}
        <div className="flex items-center gap-3">
          {/* Search Box */}
          <form onSubmit={handleSearch} className="relative group">
            <div className="flex items-center gap-3 h-11 px-4 bg-white/10 rounded-full border border-[#E8E4DF] hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:w-60">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar esmeraldas..."
                className="bg-transparent text-white text-sm outline-none w-40 placeholder-white/50 group-hover:w-52 transition-all duration-300"
              />
              <Search className="w-4 h-4 text-white/70 group-hover:scale-110 transition-transform duration-300 cursor-pointer" />
            </div>
          </form>

          {/* Cart Icon */}
          <button className="relative w-11 h-11 flex items-center justify-center bg-white/70 rounded-full border border-[#E8E4DF] hover:bg-white hover:scale-110 transition-all duration-300 group">
            <ShoppingCart className="w-5 h-5 text-black group-hover:scale-110 transition-transform duration-300" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
