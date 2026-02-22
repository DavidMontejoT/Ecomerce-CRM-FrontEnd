import React from 'react';
import { MessageCircle } from 'lucide-react';
import type { Product } from '../../services/api';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(price);
  };

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      `Hola, estoy interesado en la esmeralda: ${product.name}`
    );
    const phone = product.whatsappNumber || '573001234567'; // Default phone number
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <div className="relative w-full h-[500px] rounded-3xl overflow-hidden group border border-white animate-scale-in opacity-0 hover:shadow-2xl hover:shadow-green-900/20 transition-all duration-500">
      {/* Product Image - Fondo completo de la tarjeta */}
      <div className="absolute inset-0">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-100 to-green-200">
            <span className="text-6xl">💎</span>
          </div>
        )}
      </div>

      {/* Category Badge - Arriba */}
      {product.category && (
        <div className="absolute top-4 left-4 px-4 py-2 bg-black/70 backdrop-blur-md rounded-full border border-white/30 z-10 animate-fade-in opacity-0 hover:bg-black/80 hover:scale-105 transition-all duration-300">
          <span className="text-white text-xs font-semibold tracking-wide uppercase">{product.category}</span>
        </div>
      )}

      {/* Overlay con blur para la información - Parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 p-6 backdrop-blur-xl border-t border-white/20 group-hover:bg-black/90 transition-all duration-500" style={{
        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.75) 40%, rgba(0, 0, 0, 0.50) 70%, rgba(0, 0, 0, 0.30) 100%)'
      }}>
        {/* Contenido de información - Alineado a la izquierda */}
        <div className="flex flex-col gap-3 text-left relative z-10">
          {/* Título */}
          <h3 className="text-white text-xl font-semibold leading-tight drop-shadow-lg group-hover:text-green-50 transition-colors duration-300">
            {product.name}
          </h3>

          {/* Descripción */}
          <p className="text-white/90 text-sm line-clamp-2 leading-relaxed drop-shadow-md">
            {product.description}
          </p>

          {/* Precio y CTA */}
          <div className="flex items-center justify-between mt-2">
            <div className="group/price">
              <p className="text-[#E6F7EF] text-xs mb-1 drop-shadow-sm">Precio</p>
              <p className="text-white text-2xl font-bold drop-shadow-lg group-hover/price:scale-105 transition-transform duration-300 origin-left">{formatPrice(product.price)}</p>
            </div>

            <button
              onClick={handleWhatsAppContact}
              className="flex items-center gap-2 px-6 py-3 bg-[#2D2D2D] hover:bg-[#25D366] rounded-full transition-all duration-300 border border-white/30 hover:border-white/50 hover:scale-110 shadow-lg hover:shadow-xl hover:shadow-green-500/30"
            >
              <MessageCircle className="w-5 h-5 text-[#E6F7EF] group-hover:text-white transition-colors duration-300" />
              <span className="text-white text-sm font-medium drop-shadow-md">Contactar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
