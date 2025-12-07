import { Link } from 'react-router-dom';
import useCartStore from '../store/cartStore';

const ShoppingCart = () => {
  const items = useCartStore((state) => state.items);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center bg-white rounded-xl shadow-lg p-12 border border-gray-100 max-w-md mx-auto">
          <div className="mb-6">
            <svg className="mx-auto h-24 w-24 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-600 bg-clip-text text-transparent mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet</p>
          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:from-purple-500 hover:to-indigo-500 transition-all font-semibold shadow-lg hover:shadow-purple-500/50 transform hover:scale-105"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-600 bg-clip-text text-transparent mb-8">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col sm:flex-row gap-6 border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full sm:w-36 h-36 object-cover rounded-lg shadow-md"
              />
              
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center space-x-3">
                    <label className="text-sm font-semibold text-gray-700">
                      Quantity:
                    </label>
                    <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-4 py-2 hover:bg-gray-100 transition-colors font-bold text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={item.quantity <= 1}
                      >
                        −
                      </button>
                      <span className="px-5 py-2 min-w-[3rem] text-center font-semibold bg-gray-50 border-x border-gray-200">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-4 py-2 hover:bg-gray-100 transition-colors font-bold text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={item.quantity >= item.stock}
                      >
                        +
                      </button>
                    </div>
                    {item.quantity >= item.stock && (
                      <span className="text-red-500 text-xs font-medium flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        Max stock
                      </span>
                    )}
                  </div>
                  
                  <div className="text-right">
                    <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-600 bg-clip-text text-transparent">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500">
                      ${item.price.toFixed(2)} each
                    </p>
                  </div>
                </div>
                
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-4 text-red-600 hover:text-red-700 text-sm font-semibold flex items-center gap-1 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Remove from cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6 sticky top-24 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Order Summary
            </h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-600 pb-3 border-b border-gray-200">
                <span className="font-medium">Subtotal ({items.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                <span className="font-semibold">${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600 pb-3 border-b border-gray-200">
                <span className="font-medium">Shipping</span>
                <span className="text-green-600 font-semibold">Free</span>
              </div>
              <div className="pt-2">
                <div className="flex justify-between text-2xl font-bold">
                  <span className="text-gray-800">Total</span>
                  <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-600 bg-clip-text text-transparent">
                    ${getTotalPrice().toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <Link
              to="/checkout"
              className="block w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center py-3.5 rounded-lg hover:from-purple-500 hover:to-indigo-500 transition-all font-semibold mb-4 shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 active:scale-95"
            >
              Proceed to Checkout
            </Link>
            
            <Link
              to="/"
              className="block w-full text-center text-gray-600 hover:text-purple-600 transition font-medium"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

