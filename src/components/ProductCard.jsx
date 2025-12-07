import { Link } from 'react-router-dom';
import useCartStore from '../store/cartStore';

const ProductCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-gray-100 group">
        <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="absolute top-3 right-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
            {product.category}
          </span>
        </div>
        
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
            <div>
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-600 bg-clip-text text-transparent">
                ${product.price.toFixed(2)}
              </span>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-2.5 rounded-lg hover:from-purple-500 hover:to-indigo-500 transition-all font-semibold shadow-md hover:shadow-purple-500/50 transform hover:scale-105 active:scale-95"
            >
              Add to Cart
            </button>
          </div>
          
          {product.stock < 10 && (
            <div className="mt-3 flex items-center gap-1 text-red-500 text-xs font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Only {product.stock} left in stock!
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

