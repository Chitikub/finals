<template>
  <div class="signup-container">
    <div class="signup-box">
      <h2>สมัครสมาชิก</h2>
      <form @submit.prevent="submitSignup">
        <input type="text" v-model="username" placeholder="Username" required />
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">สมัครสมาชิก</button>
      </form>
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
      email: '',
      password: '',
      message: '', 
    };
  },
  methods: {
    submitSignup() {
      this.message = 'สมัครสมาชิกสำเร็จ!!';
      setTimeout(() => {
        this.message = ''; 
      }, 3000);
      this.$router.push('/signin');
    },
    closeAlert() {
      this.message = ''; 
    }
  }
};
</script>

<style scoped>
.signup-container {
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

.signup-box {
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

h2 {
  color: #333;
  margin-bottom: 25px;
  font-family: 'Roboto', sans-serif;
  font-size: 28px;
  font-weight: 600;
  margin-top: 0; 
}


input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 30px;
  background-color: #f7f7f7;
  font-size: 16px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

input:focus {
  border-color: #6e8efb;
  outline: none;
  box-shadow: 0px 0px 8px rgba(0, 123, 255, 0.5);
}


button {
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

button:hover {
  background-color: #5a7ffb;
}

button:active {
  background-color: #4e72d4;
}

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
  margin-left: 10px;
}

.alert-close-btn:hover {
  color: #ccc;
}
</style>
