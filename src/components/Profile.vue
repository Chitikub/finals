<template>
  <div class="profile">
    <h1>Profile</h1>
    <div class="profile-container">
      <div class="profile-picture">
        <img :src="profileImage" alt="Profile Image" />
        <input type="file" @change="onImageChange" accept="image/*" />
      </div>
      <div class="profile-info">
        <label>Name</label>
        <div v-if="!editMode">{{ profile.name }}</div>
        <input v-else v-model="profile.name" type="text" />

        <label>Email</label>
        <div v-if="!editMode">{{ profile.email }}</div>
        <input v-else v-model="profile.email" type="email" />

        <label>Password</label>
        <div v-if="!editMode">{{ '********' }}</div>
        <input v-else v-model="profile.password" type="password" />

        <button @click="toggleEditMode">
          {{ editMode ? 'บันทึก' : 'แก้ไข' }}
        </button>
      </div>
    </div>

    <div class="order-status">
      <p>สถานะ</p>
      <p>ส่งเเล้ว: <span class="status green">{{ orderStatus.ordered }}</span></p>
      <p>กำลังส่ง: <span class="status yellow">{{ orderStatus.shipping }}</span></p>
      <p>ยกเลิก: <span class="status red">{{ orderStatus.cancelled }}</span></p>
    </div>

    <div v-if="message" class="alert-message">
      <div class="alert-content">
        <p>{{ message }}</p>
        <button @click="closeAlert" class="alert-close-btn">×</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile: {
        name: "",
        email: "",
        password: "",
      },
      orderStatus: {
        ordered: 3,
        shipping: 1,
        cancelled: 0,
      },
      profileImage: "https://via.placeholder.com/150",
      editMode: false,
      message: '',
    };
  },
  methods: {
    toggleEditMode() {
      if (this.editMode) {
        this.message = 'แก้ไขข้อมูลสำเร็จ!!'; 
        setTimeout(() => {
          this.message = ''; 
        }, 3000);
      }
      this.editMode = !this.editMode;
    },
    onImageChange(event) {
      const file = event.target.files[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.profileImage = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        alert('กรุณาเลือกไฟล์รูปภาพที่ถูกต้อง');
      }
    },
    closeAlert() {
      this.message = ''; 
    }
  }
};
</script>

<style scoped>
.profile {
  width: 50%;
  margin: 0 auto;
  position: absolute;
  margin-top: 100px;
  left: 300px;
  padding: 50px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  font-size: 32px;
  margin-bottom: 30px;
  color: #333;
}

.profile-container {
  display: flex;
  align-items: center;
  gap: 105px;
  margin-bottom: 20px;
}

.profile-picture {
  position: relative;
}

.profile-picture img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid #f0f0f0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.profile-picture input {
  position: absolute;
  bottom: 0;
  right: 0;
  opacity: 0;
  width: 120px;
  height: 120px;
  cursor: pointer;
}

.profile-info {
  flex-grow: 1;
}

.profile-info label {
  display: block;
  font-size: 14px;
  color: #000;
  margin-bottom: 5px;
}

.profile-info div {
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  background-color: #f9f9f9;
  border-radius: 45px;
  color: #0000008e;
}

.profile-info input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 45px;
  background-color: #f9f9f9;
  box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.05);
  color: #000;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 45px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.order-status {
  margin-top: 30px;
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.order-status h3 {
  font-size: 24px; 
  margin-left: 0px; 
  margin-bottom: 15px;
  color: #333; 
}

.order-status p {
  font-size: 18px;
  margin: 5px 0;
  color: #333;
}

.order-status .status {
  font-weight: bold;
  padding: 2px 10px;
  border-radius: 5px;
}

.green {
  background-color: #e0f7e9;
  color: #28a745;
}

.yellow {
  background-color: #fff8e1;
  color: #ffa726;
}

.red {
  background-color: #fdecea;
  color: #e57373;
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
