import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useCartStore from '../store/cartStore';

const Navbar = () => {
  const totalItems = useCartStore((state) => state.getTotalItems());
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-purple-700 via-indigo-700 to-teal-700 shadow-xl sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white hover:text-purple-100 transition-colors flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-teal-400 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
              <span className="text-2xl">🛍️</span>
            </div>
            <span className="bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">ShopVista</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className={`font-medium transition-all px-4 py-2 rounded-lg ${
                isActive('/') 
                  ? 'bg-white/20 text-white shadow-lg' 
                  : 'text-white hover:text-purple-100 hover:bg-white/10'
              }`}
            >
              Home
            </Link>
            <Link
              to="/"
              className={`font-medium transition-all px-4 py-2 rounded-lg ${
                location.pathname === '/' && location.hash === '#products'
                  ? 'bg-white/20 text-white shadow-lg' 
                  : 'text-white hover:text-purple-100 hover:bg-white/10'
              }`}
            >
              Products
            </Link>
            <Link
              to="/contact"
              className={`font-medium transition-all px-4 py-2 rounded-lg ${
                isActive('/contact') 
                  ? 'bg-white/20 text-white shadow-lg' 
                  : 'text-white hover:text-purple-100 hover:bg-white/10'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/cart"
              className="relative text-white hover:text-purple-100 font-medium transition-all px-4 py-2 rounded-lg hover:bg-white/10"
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Cart
              </span>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse shadow-lg">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-2 rounded-lg transition-colors ${
                isActive('/') 
                  ? 'bg-white/20 text-white' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              Home
            </Link>
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            >
              Products
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-2 rounded-lg transition-colors ${
                isActive('/contact') 
                  ? 'bg-white/20 text-white' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/cart"
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative block px-4 py-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Cart
                {totalItems > 0 && (
                  <span className="ml-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
                    {totalItems}
                  </span>
                )}
              </span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

