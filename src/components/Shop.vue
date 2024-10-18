<template>
  <div class="shop">
    <h1>ร้านค้า</h1>

    <div class="filters">
      <label for="category">Category:</label>
      <select v-model="selectedCategory" @change="filterProducts">
        <option value="all">All</option>
        <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
      </select>

      <label for="sort">Sort By:</label>
      <select v-model="sortOrder" @change="sortProducts">
        <option value="asc">Price Low to High</option>
        <option value="desc">Price High to Low</option>
      </select>

      <label for="search">Search:</label>
      <input type="text" v-model="searchQuery" @input="filterProducts" placeholder="Search for products..." />
    </div>

    <div class="products">
      <div class="product" v-for="product in paginatedProducts" :key="product.id">
        <img :src="product.image" :alt="product.name" />
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p>Price: {{ currency(product.price) }}</p>

        <!-- เพิ่มจำนวนสินค้า -->
        <label for="quantity">Quantity:</label>
        <input type="number" v-model="product.quantity" :min="1" :max="10" />

        <button @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>

    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>

    <!-- แสดงข้อความแจ้งเตือน -->
    <div v-if="message" class="alert-message">
      <div class="alert-content">
        <p>{{ message }}</p>
        <button @click="closeAlert" class="alert-close-btn">×</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import img1 from '@/assets/images/s1.png';
import img2 from '@/assets/images/s3.png';
import img3 from '@/assets/images/s2.png';
import img4 from '@/assets/images/s6.png';
import img5 from '@/assets/images/gpu1.jpg';
import img6 from '@/assets/images/gpu2.jpg';
import img7 from '@/assets/images/r1.jpg';
import img8 from '@/assets/images/r2.jpg';

export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: "AMD RYZEN 5 4500 [AM4]",
          price: 2790,
          image: img1,
          category: "CPU",
          quantity: 1,
        },
        {
          id: 2,
          name: "INTEL CORE I3-12100F [700]",
          price: 2890,
          image: img2,
          category: "CPU",
          quantity: 1,
        },
        {
          id: 3,
          name: "CPU (ซีพียู) AMD AM4 RYZEN 5 5500 3.6GHz ",
          price: 3290,
          image: img3,
          category: "CPU",
          quantity: 1,
        },
        {
          id: 4,
          name: "CPU (ซีพียู) INTEL 1700 CORE I5-12400F2.5GHz 6C 12T",
          price: 4090,
          image: img4,
          category: "CPU",
          quantity: 1,
        },
        {
          id: 5,
          name: "VGA(การ์ดจอ) PALIT GEFORCE RTX 3050 STORM X 6GB GDDR6 (NE63050018JE-1070F) (3Y)",
          price: 5990,
          image: img5,
          category: "VGA",
          quantity: 1,
        },
        {
          id: 6,
          name: "VGA(การ์ดจอ) ASUS DUAL GEFORCE RTX 3050 O6G - 6GB GDDR6 (DUAL-RTX3050-O6G) (3Y)",
          price: 6650,
          image: img6,
          category: "VGA",
          quantity: 1,
        },
        {
          id: 7,
          name: "RAM (แรม) CORSAIR VENGEANCE LPX 16GB (8x2) DDR4 3200MHz BLACK (CMK16GX4M2E3200C16)",
          price: 1490,
          image: img7,
          category: "RAM",
          quantity: 1,
        },
        {
          id: 8,
          name: "RAM (แรม) KINGSTON FURY BEAST 32GB (16x2) DDR4 3200MHz BLACK (KF432C16BBK2/32)",
          price: 2890,
          image: img8,
          category: "RAM",
          quantity: 1,
        },
        
      ],
      categories: ["CPU", "VGA", "RAM"],
      selectedCategory: "all",
      sortOrder: "asc",
      currentPage: 1,
      itemsPerPage: 3,
      searchQuery: "",
      message: "", // สำหรับข้อความแจ้งเตือน
    };
  },
  computed: {
    filteredProducts() {
      let filtered = this.selectedCategory === "all"
        ? this.products
        : this.products.filter(product => product.category === this.selectedCategory);

      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(product => product.name.toLowerCase().includes(query));
      }

      return filtered;
    },
    sortedProducts() {
      return this.filteredProducts.sort((a, b) => {
        return this.sortOrder === "asc" ? a.price - b.price : b.price - a.price;
      });
    },
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.sortedProducts.slice(start, start + this.itemsPerPage);
    },
    totalPages() {
      return Math.ceil(this.sortedProducts.length / this.itemsPerPage);
    },
  },
  methods: {
    ...mapMutations(['ADD_TO_CART']),
    addToCart(product) {
      if (product.quantity < 1) {
        this.message = "กรุณาเลือกจำนวนสินค้าก่อนเพิ่ม!";
        return;
      }

      this.ADD_TO_CART({ ...product, quantity: product.quantity });
      this.message = `${product.name} ได้ถูกเพิ่มไปยังตะกร้าเรียบร้อยแล้ว!`;

      setTimeout(() => {
        this.message = ""; // ลบข้อความแจ้งเตือนหลังจาก 3 วินาที
      }, 3000);
    },
    closeAlert() {
      this.message = ""; // ปิดข้อความแจ้งเตือนเมื่อกดปุ่ม ×
    },
    filterProducts() {
      this.currentPage = 1;
    },
    sortProducts() {
      this.currentPage = 1;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    currency(value) {
      return `฿${value.toFixed(2)}`;
    },
  },
};
</script>

<style scoped>
.shop {
  padding: 20px;
  margin-top: 100px;
}

.filters {
  .filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  gap: 20px; /* กำหนดระยะห่างระหว่างฟอร์ม */
}
}
.filters label {
  font-size: 1em;
  color: #333;
  margin-right: 10px;
}
.filters select, 
.filters input {
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 200px;
  background-color: #fff;
  transition: all 0.3s ease;
}

/* เพิ่มสีเมื่อกรอกหรือเลือก */
.filters select:focus, 
.filters input:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0px 0px 5px rgba(0, 123, 255, 0.5);
}

/* ปรับปรุงฟอร์มค้นหาสินค้า */
.filters input {
  width: 300px;
}

/* ปรับปรุงฟอร์มเลือกประเภทสินค้า */
.filters select {
  width: 180px;
}

.products {
  display: flex;
  flex-wrap: wrap;
}

.product {
  background-color: #fff; 
  border: 1px solid #ddd; 
  border-radius: 45px; 
  margin: 20px; 
  padding: 20px; 
  width: 250px; 
  text-align: center; 
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); 
  transition: transform 0.3s ease, box-shadow 0.3s ease; 
  display: flex; 
  flex-direction: column; 
  justify-content: space-between; 
  align-items: center; 
}

.product:hover {
  transform: translateY(-5px); 
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2); 
}

.product img {
  max-width: 100%;
  height: auto; 
  border-radius: 5px;
  margin-bottom: 15px; 
}

.product h2 {
  font-size: 1.2em;
  font-weight: bold; 
  color: #333; 
  margin: 10px 0;
  
}



.product p {
  color: #666; 
  font-size: 1em; 
  margin: 10px 0;
}

.product button {
  padding: 12px 20px;
  background-color: #007bff; 
  color: #fff; 
  border: none; 
  border-radius: 35px; 
  cursor: pointer; 
  transition: background-color 0.3s ease;
}

.product button:hover {
  background-color: #0056b3; 
}

.pagination {
  margin-top: 20px;
}

.alert-message {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 15px;
  background-color: #28a745;
  color: white;
  border-radius: 5px;
  text-align: center;
  z-index: 1000;
  font-size: 1.2em;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.alert-close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 1.5em;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
}

.alert-close-btn:hover {
  color: #ccc;
}
</style>
