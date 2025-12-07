# E-Commerce Platform  ( TASK 2 - FUTURE INTERNS )

A modern, full-featured mini e-commerce platform built with React.js, Tailwind CSS, and Zustand for state management.

## Features

✅ **Product Listing**
- Browse products with beautiful card layout
- Search functionality to find products by name or description
- Category filtering (Electronics, Clothing, Footwear, Accessories, Home, Sports)
- Sort by name or price (low to high / high to low)
- Responsive grid layout

✅ **Shopping Cart**
- Add products to cart
- Quantity control with increment/decrement buttons
- Stock limit validation
- Remove items from cart
- Real-time price calculation
- Cart item counter in navigation

✅ **Checkout Simulation**
- Complete checkout form with validation
- Personal information section
- Shipping address form
- Payment information (simulated)
- Form validation with error messages
- Order summary sidebar
- Success page after order placement

## Tech Stack

- **Frontend**: React.js 18
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Routing**: React Router DOM
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar with cart counter
│   ├── ProductCard.jsx     # Individual product card component
│   ├── ProductListing.jsx  # Main product listing with filters
│   ├── ShoppingCart.jsx    # Shopping cart page
│   ├── Checkout.jsx        # Checkout form with validation
│   └── CheckoutSuccess.jsx # Order success page
├── store/
│   └── cartStore.js        # Zustand store for cart state
├── data/
│   └── products.js         # Mock product data
├── App.jsx                 # Main app component with routing
├── main.jsx                # React entry point
└── index.css               # Tailwind CSS imports
```

## State Management

The app uses Zustand for state management. The cart store (`src/store/cartStore.js`) manages:
- Cart items
- Add/remove/update cart operations
- Total price calculation
- Total items count

## Future Enhancements

- Backend integration (Node.js + Express.js)
- Database integration (MongoDB/PostgreSQL/Firebase)
- User authentication
- Order history
- Product reviews and ratings
- Payment gateway integration
- Admin dashboard



