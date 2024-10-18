<template>
    <div class="cart">
      <h1>รถเข็นของคุณ</h1>
  
      <!-- ถ้าไม่มีสินค้าในรถเข็น -->
      <div v-if="cartItems.length === 0" class="empty-cart">
        <p>ไม่มีสินค้าในรถเข็น</p>
      </div>
  
      <!-- แสดงสินค้าในตะกร้า -->
      <div v-else>
        <div v-for="(item, index) in cartItems" :key="item.id" class="cart-item">
          <img :src="item.image" alt="Product Image" class="product-image" />
          <div class="item-details">
            <h3>{{ item.name }}</h3>
            <p>ราคา: {{ item.price | currency }} x {{ item.quantity }}</p>
  
            <!-- ปุ่มเพิ่มและลดจำนวนสินค้า -->
            <div class="quantity-control">
              <button @click="changeQuantity(index, 'decrease')" :disabled="item.quantity <= 1">-</button>
              <span>{{ item.quantity }}</span>
              <button @click="changeQuantity(index, 'increase')">+</button>
            </div>
  
            <button @click="removeItem(index, item)">ลบ</button>
          </div>
        </div>
        <div class="cart-summary">
          <h3>รวมราคา: {{ totalPrice | currency }} บาท</h3>
          <button class="checkout-button">ชำระเงิน</button>
        </div>
      </div>
  
      <!-- ข้อความแจ้งเตือน -->
      <div v-if="message" class="alert-message">
        <div class="alert-content">
          <p>{{ message }}</p>
          <button @click="closeAlert" class="alert-close-btn">×</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['cartItems', 'totalPrice']),
    },
    data() {
      return {
        message: '',
      };
    },
    methods: {
      ...mapActions(['updateItemQuantity', 'removeFromCart']), // ดึง action จาก Vuex
  
      changeQuantity(index, action) {
        const item = this.cartItems[index];
        let newQuantity = item.quantity;
  
        if (action === 'increase') {
          newQuantity = item.quantity + 1;
        } else if (action === 'decrease' && item.quantity > 1) {
          newQuantity = item.quantity - 1;
        }
  
        // เรียกใช้ action เพื่ออัปเดตจำนวนสินค้า
        this.updateItemQuantity({ productId: item.id, quantity: newQuantity });
  
        this.message = `${item.name} จำนวนสินค้าถูกปรับเป็น ${newQuantity}`;
        
        setTimeout(() => {
          this.message = ''; // ลบข้อความแจ้งเตือนหลังจาก 3 วินาที
        }, 3000);
      },
  
      removeItem(index, item) {
        this.removeFromCart(item.id); // ลบสินค้าจากตะกร้า
        this.message = `${item.name} ถูกลบออกจากตะกร้าแล้ว!`;
  
        setTimeout(() => {
          this.message = ''; // ลบข้อความแจ้งเตือนหลังจาก 3 วินาที
        }, 3000);
      },
  
      closeAlert() {
        this.message = '';
      },
    },
    filters: {
      currency(value) {
        return `฿${value.toFixed(2)}`;
      },
    },
  };
  </script>
  <style>
  .cart {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 100px;
  padding: 30px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
  font-size: 2em;
  margin-bottom: 20px;
  margin-top: -10px; 
}

h3 {
  text-align: right;
  color: #333;
  font-size: 1.2em;
}

.empty-cart {
  text-align: center;
  color: #999;
  font-size: 1.5em;
  padding: 20px;
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.cart-item:hover {
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
}

.product-image {
  width: 100px;
  height: 100px;
  border-radius: 5px;
  margin-right: 20px;
}

.item-details {
  flex-grow: 1;
}

.item-details h3 {
  color: #000;
  font-size: 1.1em;
}

.item-details p {
  color: #666;
  font-size: 1em;
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

/* การจัดการเพิ่ม/ลดจำนวนสินค้า */
.quantity-control {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.quantity-control button {
  padding: 8px 12px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 10px;
  transition: background-color 0.3s ease;
}

.quantity-control button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.quantity-control span {
  font-size: 1.2em;
}

.cart-summary {
  margin-top: 30px;
  text-align: right;
  font-size: 1.2em;
}

.checkout-button {
  padding: 12px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2em;
  transition: background-color 0.3s ease;
}

.checkout-button:hover {
  background-color: #218838;
}

/* การออกแบบข้อความแจ้งเตือน */
.alert-message {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 15px 30px;
  background-color: #f0ad4e;
  color: white;
  border-radius: 5px;
  text-align: center;
  z-index: 1000;
  font-size: 1.2em;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
}

.alert-close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 1.5em;
  cursor: pointer;
}

.alert-close-btn:hover {
  color: #ccc;
}

/* เพิ่มความสวยงามให้กับปุ่มปิดข้อความแจ้งเตือน */
.alert-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.alert-message p {
  margin: 0;
}
</style>