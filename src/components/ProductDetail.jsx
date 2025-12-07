import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import useCartStore from '../store/cartStore';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const addToCart = useCartStore((state) => state.addToCart);
  
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center bg-white rounded-xl shadow-lg p-12 border border-gray-100 max-w-md mx-auto">
          <svg className="mx-auto h-24 w-24 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-600 bg-clip-text text-transparent mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist</p>
          <button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:from-purple-500 hover:to-indigo-500 transition-all font-semibold shadow-lg hover:shadow-purple-500/50 transform hover:scale-105"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="text-purple-600 hover:text-purple-700 mb-6 font-semibold flex items-center gap-2 transition-colors group"
      >
        <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded-xl shadow-lg"
          />
        </div>
        
        <div>
          <span className="inline-block bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4 shadow-md">
            {product.category}
          </span>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-600 bg-clip-text text-transparent mb-6">
            ${product.price.toFixed(2)}
          </p>
          
          <p className="text-gray-600 mb-6 leading-relaxed text-lg">
            {product.description}
          </p>
          
          <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-700 mb-2 font-semibold">
              <span className="text-gray-500">Stock:</span> <span className="text-purple-600 font-semibold">{product.stock}</span> available
            </p>
            {product.stock < 10 && (
              <div className="flex items-center gap-2 text-red-500 text-sm font-medium mt-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Only {product.stock} left in stock!
              </div>
            )}
          </div>
          
          <button
            onClick={handleAddToCart}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

