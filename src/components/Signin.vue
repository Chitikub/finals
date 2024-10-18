<template>
  <div class="login-container">
    <div class="login-box">
      <h2>LOGIN</h2>

      <input type="text" placeholder="Username" v-model="username" />

      <input type="password" placeholder="Password" v-model="password" />


      <a href="#" class="forgot-password">Forgot password?</a>

      <button class="login-btn" @click="login">LOGIN</button>


      <div class="divider">
        <hr />
        <span>OR</span>
        <hr />
      </div>

      <a href="https://www.facebook.com/r.php" target="_blank" class="facebook-login">
        <i class="fab fa-facebook"></i> SIGN UP WITH FACEBOOK
      </a>

      <p class="signup-text">
        Don't have an account? <a @click.prevent="goToSignup">Sign up</a>
      </p>
    </div>
  </div>


  <div v-if="message" class="alert-message">
    <div class="alert-content">
      <p>{{ message }}</p>
      <button @click="closeAlert" class="alert-close-btn">×</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      message: '', 
    };
  },
  methods: {
    login() {
      if (this.username && this.password) {

        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        this.message = `ลงชื่อเข้าใช้สำเร็จ!! เวลา: ${currentTime}`;
        
        setTimeout(() => {
          this.message = ''; 
        }, 3000);

       
        this.$router.push('/');
      } else {
   
        this.message = 'กรุณาใส่ username เเละ password ครับ!!';
        setTimeout(() => {
          this.message = ''; 
        }, 3000);
      }
    },
    goToSignup() {
      this.$router.push('/Signup');
    },
    closeAlert() {
      this.message = ''; 
    }
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  padding-top: 0px;
  height: 100vh;
  background-color: #f9f9f9;
  margin-top: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
}

.login-box {
  max-width: 400px;
  width: 100%;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  text-align: center;
  margin-top: 0px;
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

h2 {
  color: #333;
  font-size: 28px;
  margin-bottom: 30px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 30px;
  background-color: #f5f5f5;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

input:focus {
  border-color: #6e8efb;
  outline: none;
}

.forgot-password {
  display: block;
  margin-bottom: 20px;
  color: #333;
  font-size: 14px;
  text-decoration: none;
}

.login-btn {
  width: 100%;
  padding: 15px;
  border: none;
  background-color: #6e8efb;
  color: white;
  border-radius: 30px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-btn:hover {
  background-color: #5a7ffb;
}

.divider {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
}

.divider hr {
  width: 30%;
  border: 0;
  height: 1px;
  background-color: #ccc;
}

.divider span {
  margin: 0 10px;
  color: #999;
}

.facebook-login {
  width: 100%;
  padding: 15px;
  border: none;
  background-color: #3b5998;
  color: white;
  border-radius: 30px;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
}

.facebook-login i {
  margin-right: 10px;
}

.facebook-login:hover {
  background-color: #2d4373;
}

.signup-text {
  margin-top: 20px;
  color: #333;
}

.signup-text a {
  color: #007bff;
  text-decoration: none;
}

.signup-text a:hover {
  text-decoration: underline;


.alert-message {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 15px 30px;
  background-color: #28a745; 
  color: white;
  border-radius: 5px;
  text-align: center;
  z-index: 1000;
  font-size: 1.2em;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 250px;
}

.alert-message.error {
  background-color: #f44336; 
}

.alert-content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.alert-message p {
  margin: 0;
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
};
}
</style>
