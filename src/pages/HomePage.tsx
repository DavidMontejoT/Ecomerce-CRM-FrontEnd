import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import type { Product } from '../services/api';
import Hero from '../components/Hero/Hero';
import ProductCard from '../components/ProductCard/ProductCard';
import { productApi } from '../services/api';

const HomePage: React.FC = () => {
  console.log('🟢 HomePage.tsx renderizando...');

  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 6;

  useEffect(() => {
    console.log('🟢 HomePage useEffect - cargando productos...');
    loadProducts();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
    setCurrentPage(1);
  }, [searchQuery, products]);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const data = await productApi.getAllProducts();
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.error('Error loading products:', error);
      // Load mock data for demo
      const mockProducts: Product[] = [
        {
          id: 1,
          name: 'Esmeralda Colombiana 2ct',
          description: 'Esmeralda natural de origen colombiano, color verde intenso, 2 quilates',
          price: 2500,
          imageUrl: '',
          category: 'Anillo',
          stock: 1,
          available: true,
          whatsappNumber: '573001234567',
        },
        {
          id: 2,
          name: 'Collar de Esmeraldas',
          description: 'Collar de oro blanco con esmeraldas certificadas, diseño exclusivo',
          price: 5500,
          imageUrl: '',
          category: 'Collar',
          stock: 1,
          available: true,
          whatsappNumber: '573001234567',
        },
        {
          id: 3,
          name: 'Pendientes Esmeralda',
          description: 'Pendientes de esmeraldas cortadas, engastadas en oro de 18k',
          price: 1800,
          imageUrl: '',
          category: 'Pendientes',
          stock: 1,
          available: true,
          whatsappNumber: '573001234567',
        },
      ];
      setProducts(mockProducts);
      setFilteredProducts(mockProducts);
    } finally {
      setLoading(false);
    }
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 600, behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <div className="w-full bg-[#100404]">
        <div className="px-20 py-15">
          {/* Section Header */}
          <div className="flex flex-col gap-3 mb-10 animate-fade-in-up opacity-0">
            <h2 className="text-[#E6F7EF] text-[48px] font-normal tracking-tight">
              Catálogo de Esmeraldas
            </h2>
            <p className="text-[#E6F7EF] text-lg font-normal">
              Explora nuestra colección exclusiva
            </p>
          </div>

          {/* Search Section */}
          <div className="flex gap-3 mb-10 animate-fade-in-up opacity-0 animation-delay-100">
            <div className="flex-1 flex items-center gap-3 h-12 px-5 bg-white/30 rounded-full border border-[#E8E4DF] hover:bg-white/40 transition-all duration-300">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por nombre o descripción..."
                className="flex-1 bg-transparent text-white text-sm outline-none placeholder-white/50"
              />
              <Search className="w-5 h-5 text-white/70" />
            </div>
            <button className="px-7 py-3 bg-[#2D2D2D] hover:bg-[#3D3D3D] rounded-full border border-white hover:scale-105 transition-all duration-300">
              <span className="text-white text-sm font-medium">Buscar</span>
            </button>
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="flex flex-col items-center justify-center h-64 animate-fade-in gap-4">
              <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
              <div className="text-white text-lg animate-pulse">Cargando productos...</div>
            </div>
          ) : (
            <>
              {/* Product Grid */}
              {currentProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                  {currentProducts.map((product, index) => (
                    <div key={product.id} className={`animate-scale-in opacity-0`} style={{ animationDelay: `${Math.min(index * 0.1, 0.5)}s` }}>
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center h-64 animate-fade-in">
                  <div className="text-white text-lg">
                    No se encontraron productos
                  </div>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center gap-2 animate-fade-in">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium transition-all duration-300 ${
                        currentPage === page
                          ? 'bg-[#2D2D2D] text-white scale-110'
                          : 'bg-transparent text-white border border-[#E8E4DF] hover:bg-white/10 hover:scale-105'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  {currentPage < totalPages && (
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-transparent text-white border border-[#E8E4DF] hover:bg-white/10 hover:scale-105 transition-all duration-300"
                    >
                      →
                    </button>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
