import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-indigo-900/85 to-teal-900/90"></div>
        {/* Additional overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 bg-clip-text text-transparent text-sm font-semibold uppercase tracking-wider px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              Welcome to ShopVista
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-white via-purple-100 to-teal-100 bg-clip-text text-transparent drop-shadow-2xl">
              Discover Your
            </span>
            <span className="block bg-gradient-to-r from-purple-300 via-pink-300 to-teal-300 bg-clip-text text-transparent">
              Perfect Style
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl mb-10 text-purple-100 leading-relaxed max-w-3xl mx-auto font-light">
            Shop the latest trends, discover amazing products, and find everything you need at unbeatable prices. Your one-stop destination for quality shopping.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              to="/#products"
              className="group bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-purple-500 hover:to-indigo-500 transition-all shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span>Start Shopping</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all shadow-xl"
            >
              Contact Us
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-16 border-t border-white/20">
            <div className="group">
              <div className="text-5xl md:text-6xl font-extrabold mb-3 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                500+
              </div>
              <div className="text-purple-200 text-lg font-medium">Premium Products</div>
            </div>
            <div className="group">
              <div className="text-5xl md:text-6xl font-extrabold mb-3 bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
                50K+
              </div>
              <div className="text-purple-200 text-lg font-medium">Happy Customers</div>
            </div>
            <div className="group">
              <div className="text-5xl md:text-6xl font-extrabold mb-3 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-purple-200 text-lg font-medium">Customer Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Smooth fade-out gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-purple-50/20 to-gray-50 pointer-events-none"></div>
    </section>
  );
};

export default Hero;

