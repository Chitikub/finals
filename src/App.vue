<template>
  <div id="app">
    <nav>
      <div class="logo">GUI SHOP</div>
      <ul :class="{ open: isMenuOpen }" class="menu">
        <li><router-link to="/" class="menu-item" @click="closeMenu">Home</router-link></li>
        <li><router-link to="/shop" class="menu-item" @click="closeMenu">Shop</router-link></li>
        <li><router-link to="/about" class="menu-item" @click="closeMenu">About</router-link></li>
        <li><router-link to="/profile" class="menu-item" @click="closeMenu">Profile</router-link></li>
        <li><router-link to="/cart" class="menu-item" @click="closeMenu">Cart</router-link></li>
        <li><router-link to="/signin" class="menu-item" @click="closeMenu">Login</router-link></li>
      </ul>
    </nav>
    <router-view />
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2024 GUI SHOP. All rights reserved.</p>
        <div class="footer-links">
          <a href="/privacy-policy" class="footer-link">Privacy Policy</a>
          <a href="/terms" class="footer-link">Terms of Service</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import MenuToggle from './components/MenuToggle.vue';

export default {
  components: {
    MenuToggle, 
  },
  data() {
    return {
      isMenuOpen: false, 
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; 
    },
    closeMenu() {
      this.isMenuOpen = false; 
    }
  }
};
</script>

<style scoped>
#app {
  font-family: 'Josefin Slab', sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

nav {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  padding: 15px 20px;
  background-color: #000000;
  color: white;
  border-radius: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav .logo {
  font-size: 1.8rem;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
}

nav .menu {
  display: flex;
  gap: 20px;
}

nav .menu-item {
  text-decoration: none;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

nav .menu-item:hover {
  color: #6e8efb;
}

nav .menu-item.router-link-exact-active {
  color: #ff9900;
}

@media screen and (max-width: 768px) {
  nav {
    width: 100%;
    padding: 15px;
  }

  nav .menu {
    display: none;
    flex-direction: column;
    gap: 10px;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #333;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  nav .menu.open {
    display: flex;
  }

  nav .menu-toggle {
    display: block;
    font-size: 1.8rem;
    color: white;
    cursor: pointer;
  }
}

.footer {
  background-color: #000;
  color: white;
  text-align: center;
  padding: 20px;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-links {
  margin-top: 10px;
}

.footer-link {
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-size: 0.9rem;
}

.footer-link:hover {
  color: #6e8efb;
}
</style>
