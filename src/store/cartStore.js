import { create } from 'zustand';

const useCartStore = create((set) => ({
  items: [],
  
  addToCart: (product) => {
    set((state) => {
      const existingItem = state.items.find(item => item.id === product.id);
      
      if (existingItem) {
        // If item exists, increase quantity (but not beyond stock)
        if (existingItem.quantity < product.stock) {
          return {
            items: state.items.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          };
        }
        return state; // Stock limit reached
      }
      
      // Add new item to cart
      return {
        items: [...state.items, { ...product, quantity: 1 }]
      };
    });
  },
  
  removeFromCart: (productId) => {
    set((state) => ({
      items: state.items.filter(item => item.id !== productId)
    }));
  },
  
  updateQuantity: (productId, quantity) => {
    set((state) => {
      const product = state.items.find(item => item.id === productId);
      if (!product) return state;
      
      // Ensure quantity doesn't exceed stock
      const newQuantity = Math.min(Math.max(1, quantity), product.stock);
      
      return {
        items: state.items.map(item =>
          item.id === productId
            ? { ...item, quantity: newQuantity }
            : item
        )
      };
    });
  },
  
  clearCart: () => {
    set({ items: [] });
  },
  
  getTotalPrice: () => {
    return useCartStore.getState().items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  },
  
  getTotalItems: () => {
    return useCartStore.getState().items.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }
}));

export default useCartStore;

