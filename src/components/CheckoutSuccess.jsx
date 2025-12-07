import { Link } from 'react-router-dom';

const CheckoutSuccess = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto text-center bg-white rounded-xl shadow-lg p-12 border border-gray-100">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 mb-4 shadow-lg animate-pulse">
            <svg
              className="w-14 h-14 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-4">
          Order Placed Successfully! 🎉
        </h1>
        
        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
          Thank you for your purchase! Your order has been received and is being processed.
          You will receive a confirmation email shortly with your order details.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:from-purple-500 hover:to-indigo-500 transition-all font-semibold shadow-lg hover:shadow-purple-500/50 transform hover:scale-105"
          >
            Continue Shopping
          </Link>
          <Link
            to="/cart"
            className="inline-block bg-gray-100 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-200 transition-all font-semibold border-2 border-gray-200"
          >
            View Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;

