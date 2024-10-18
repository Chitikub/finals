<template>
  <div class="about-page">
    <header>
      <h1>เกี่ยวกับเรา</h1>
    </header>

    <section class="contact">
      <h2>ข้อมูลติดต่อ</h2>
      <div class="social-media">
        <div class="profile-image">
          <img src="@/assets/images/logo.jpg" alt="Profile Image" />
        </div>
        <div class="contact-details">
          <p><strong>GUI SHOP</strong></p>
          <p>
            <a href="https://www.facebook.com/chitipat.churhor" target="_blank" class="social-link facebook">
              <i class="fab fa-facebook"></i> Facebook
            </a>
          </p>
          <p>
            <a href="https://www.instagram.com/gxdctpz_/" target="_blank" class="social-link instagram">
              <i class="fab fa-instagram"></i> Instagram
            </a>
          </p>
          <p>
            <a href="https://line.me/ti/p/~godjikab" target="_blank" class="social-link line">
              <i class="fab fa-line"></i> Line
            </a>
          </p>
        </div>
      </div>
    </section>

    <section class="about-store">
      <h2>เกี่ยวกับร้าน</h2>
      <p>
        ร้านจำหน่ายอุปกรณ์คอมพิวเตอร์ โน้ตบุ๊ก ซีพียู แรม การ์ดจอ เมนบอร์ด ฮาร์ดดิสก์ พาวเวอร์ซัพพลาย 
        เคสเมส คีย์บอร์ด จอคอมพิวเตอร์ อุปกรณ์เสริมไอที และอุปกรณ์เกมมิ่งเกียร์ รับประกันทุกชิ้น
        บริการซ่อมคอมพิวเตอร์ ตามการใช้งานในงบประมาณที่ลูกค้าเลือกได้เอง
      </p>
      <p>
        ถ้าคุณจะซื้อคอมพิวเตอร์ ราคาประหยัดต้อง GUI SP เท่านั้น ในการซื้อคอมพิวเตอร์นั้น
        ผู้ซื้อต้องควรมีความรู้และความเข้าใจพื้นฐานเพื่อให้ซื้อของมาใช้งานได้อย่างมีประสิทธิภาพ
        และร้านจะคัดสรรอุปกรณ์หรือคอมพิวเตอร์ที่ตรงกับความต้องการของลูกค้าอย่างดีที่สุด
        เลือกชิ้นที่มีไว้ได้เลยหากไม่ถูกใจสามารถให้ทางร้านจัดหาสินค้าเพิ่มเติมได้ตามต้องการ
        บริการสุดประทับใจต้องที่ GUI SP รับประกันการให้บริการตลอดการใช้งานนานกว่า 9 ปี !!
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
};
</script>

<style scoped>
.about-page {
  max-width: 800px; 
  padding: 40px;
  font-family: 'Arial', sans-serif;
  position: absolute;
  top: 50%;
  left: 50%; 
  transform: translate(-50%, -50%); 
  background-color: #f9f9f9; 
  border-radius: 15px; 
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); 
  overflow: auto; 
  margin-top: 100px; 
  color: #333;
}

header h1 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
  font-weight: 600;
  margin-top: 120px; 
  text-transform: uppercase;
}

.contact {
  margin-top: 20px;
}

.social-media {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
}

.profile-image img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid #ddd;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
}

.contact-details {
  text-align: center;
  margin-left: 20px;
}

.contact-details p {
  margin: 5px 0;
  color: #333;
}

.contact-details .social-link {
  display: inline-flex;
  align-items: center;
  font-size: 16px;
  color: #333;
  text-decoration: none;
  margin: 5px 0;
  padding: 5px 0;
  transition: color 0.3s ease;
}

.contact-details .social-link i {
  margin-right: 10px;
}

.contact-details .facebook:hover {
  color: #3b5998;
}

.contact-details .instagram:hover {
  color: #e4405f;
}

.contact-details .line:hover {
  color: #00b900;
}

.about-store {
  margin-top: 40px;
  color: #333;
}

.about-store h2 {
  font-size: 1.75rem;
  color: #333;
  margin-bottom: 20px;
  font-weight: 600;
}

.about-store p {
  margin: 10px 0;
  line-height: 1.8;
  font-size: 16px;
  color: #555;
  text-align: justify;
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

</style>
