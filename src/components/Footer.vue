<template>
    <footer class="footer">
      <div class="footer-content">
        <span>GUISHOP</span>
        <span>© 2024 All Rights Reserved</span>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #b3e0ff; /* เปลี่ยนสีพื้นหลังของ footer เป็นสีฟ้า */
    padding: 20px;
    width: 100%;
    text-align: center;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between; /* จัดให้อยู่สองด้าน */
    align-items: center;
  }
  
  .footer span {
    color: #000; /* เปลี่ยนสีตัวหนังสือเป็นสีดำ */
  }
  </style>
  