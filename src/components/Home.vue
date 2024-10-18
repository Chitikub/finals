<template>
  <div class="home-page">

    <section class="banner">
      <div class="slideshow-container">
        <div class="mySlides fade" v-for="(image, index) in images" :key="index">
          <img :src="image.src" :alt="image.alt" />
        </div>
        <a class="prev" @click="plusSlides(-1)">&#10094;</a>
        <a class="next" @click="plusSlides(1)">&#10095;</a>
      </div>
    </section>


    <section class="categories">
      <h2>Shop by Category</h2>
      <div class="category-list">
        <div class="category-card" v-for="category in categories" :key="category.id">
          <img :src="category.image" alt="Category" />
          <h3>{{ category.name }}</h3>
          <button @click="goToCategory(category)">Shop Now</button>
        </div>
      </div>
    </section>

    <section class="featured-products">
      <h2>Featured Products</h2>
      <div class="product-list">
        <div class="product-card" v-for="product in featuredProducts" :key="product.id">
          <img :src="product.image" alt="Product Image" />
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <p>Price: {{ product.price | currency }}</p>
          <button @click="addToCart(product)">Add to Cart</button>
        </div>
      </div>
    </section>

    <section class="offer">
      <h2>Special Offer!</h2>
      <p>Get 10% off on all products using code: <strong>DISCOUNT10</strong></p>
      <button @click="goToShop">Shop Now</button>
    </section>
  </div>
</template>

<script>
import img1 from '@/assets/images/1.png';
import img2 from '@/assets/images/2.png';
import img3 from '@/assets/images/3.png';
import img4 from '@/assets/images/4.png';
import img5 from '@/assets/images/s1.png';
import img6 from '@/assets/images/gpu1.jpg';
import img7 from '@/assets/images/B1.png';

export default {
  data() {
    return {
      slideIndex: 1,
      images: [
        { src: img1, alt: "GeForce RTX Laptops" },
        { src: img2, alt: "GeForce RTX Laptops 2" },
        { src: img7, alt: "GeForce RTX Laptops 3" },
      ],
      categories: [
        { id: 1, name: "CPU", image: "https://img.advice.co.th/images_nas/pic_product4/A0140933/A0140933OK_BIG_1.jpg" },
        { id: 2, name: "VGA", image: "https://ihcupload.s3.ap-southeast-1.amazonaws.com/img/product/products42659_150.jpg" },
        { id: 3, name: "RAM", image: "https://ihcupload.s3.ap-southeast-1.amazonaws.com/img/product/products45220_150.jpg" },
      ],
      featuredProducts: [
        {
          id: 1,
          name: "AMD Ryzen 5 4500",
          price: 2790,
          image: img5,
          description: "High performance CPU for gaming",
        },
        {
          id: 2,
          name: "GeForce GTX 3060",
          price: 4990,
          image: img6,
          description: "Powerful graphics card for gaming",
        },
      ],
    };
  },
  mounted() {
    this.showSlides(this.slideIndex);
    setInterval(() => {
      this.plusSlides(1);
    }, 3000);
  },
  methods: {
    plusSlides(n) {
      this.showSlides((this.slideIndex += n));
    },
    showSlides(n) {
      const slides = document.getElementsByClassName("mySlides");
      if (n > slides.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = slides.length;
      }
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[this.slideIndex - 1].style.display = "block";
    },
    goToShop() {
      this.$router.push('/shop');
    },
    goToCategory(category) {
      this.$router.push(`/shop/category/${category.id}`);
    },
    addToCart(product) {
      this.$store.dispatch('addToCart', product);
      alert(`${product.name} added to cart!`);
    },
  },
};
</script>

<style scoped>
.home-page {
  padding: 20px;
}

.banner {
  position: relative;
  left:250px;
  width: 80%;
  height: 400px;
  overflow: hidden;
}

.slideshow-container {
  position: relative;
  height: 100%;
}

.mySlides {
  display: none;
}

.banner img {
  width: 80%;
  height: 50%;
  object-fit: cover;
  margin-top:80px;
  border-radius: 0px;
}

.banner-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}

.banner-content h1 {
  font-size: 3rem;
  font-weight: bold;
}

.banner-content p {
  font-size: 1.2rem;
  margin: 10px 0;
}

.banner-content button {
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.banner-content button:hover {
  background-color: #218838;
}

.categories, .featured-products, .offer {
  margin-top: 40px;
}

h2 {
  font-size: 2rem;
  margin-top: 100px;
  text-align: center;
  margin-bottom: 20px;
}

.category-list, .product-list {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.category-card, .product-card {
  text-align: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 200px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.category-card img, .product-card img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 5px;
}

.category-card button, .product-card button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.category-card button:hover, .product-card button:hover {
  background-color: #0056b3;
}

.offer {
  background-color: #f8f9fa;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
}

.offer h2 {
  font-size: 2rem;
  color: #28a745;
}

.offer p {
  font-size: 1.2rem;
  margin: 10px 0;
}

.offer button {
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.offer button:hover {
  background-color: #218838;
}
</style>
