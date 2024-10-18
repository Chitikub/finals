import { createStore } from 'vuex';

export default createStore({
  state: {
    cartItems: [], // สถานะสำหรับเก็บรายการสินค้าในรถเข็น
  },
  mutations: {
    // Mutation สำหรับเพิ่มสินค้าไปยังรถเข็น
    ADD_TO_CART(state, product) {
      const existingItem = state.cartItems.find(item => item.id === product.id);
      if (!existingItem) {
        state.cartItems.push({ ...product, quantity: 1 });
      } else {
        existingItem.quantity++; // ถ้ามีแล้วให้เพิ่มจำนวนสินค้า
      }
    },
    
    // Mutation สำหรับลบสินค้าออกจากรถเข็น
    REMOVE_FROM_CART(state, productId) {
      state.cartItems = state.cartItems.filter(item => item.id !== productId);
    },

    // Mutation สำหรับเคลียร์สินค้าในรถเข็นทั้งหมด
    CLEAR_CART(state) {
      state.cartItems = [];
    },
    
    // Mutation สำหรับอัปเดตจำนวนสินค้า
    UPDATE_ITEM_QUANTITY(state, { productId, quantity }) {
      const item = state.cartItems.find(item => item.id === productId);
      if (item && quantity > 0) { // ตรวจสอบจำนวนสินค้าไม่ให้เป็นลบ
        item.quantity = quantity;
      }
    },
  },
  getters: {
    // Getter สำหรับดึงรายการสินค้าในรถเข็น
    cartItems: state => state.cartItems,
    
    // Getter สำหรับคำนวณราคารวมของสินค้าในรถเข็น
    totalPrice: state => {
      return state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    
    // Getter สำหรับดึงจำนวนสินค้าทั้งหมดในรถเข็น
    cartItemCount: state => {
      return state.cartItems.reduce((total, item) => total + item.quantity, 0);
    },
  },
  actions: {
    // Action สำหรับการเพิ่มสินค้าไปยังรถเข็น
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product);
    },

    // Action สำหรับการลบสินค้าออกจากรถเข็น
    removeFromCart({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId);
    },

    // Action สำหรับการเคลียร์สินค้าในรถเข็นทั้งหมด
    clearCart({ commit }) {
      commit('CLEAR_CART');
    },

    // Action สำหรับการอัปเดตจำนวนสินค้า
    updateItemQuantity({ commit }, { productId, quantity }) {
      commit('UPDATE_ITEM_QUANTITY', { productId, quantity });
    },
  },
});
