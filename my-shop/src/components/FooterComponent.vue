<template>
  <footer class="site-footer">
    <div class="footer-container">
      <div class="footer-section">
        <h3>Контактна інформація</h3>
        <ul class="contact-info">
          <li><i class="fas fa-envelope"></i> info@example.com</li>
          <li><i class="fas fa-phone"></i> +380 (XX) XXX-XX-XX</li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h3>Навігація</h3>
        <ul class="footer-links">
          <li><router-link to="/">Головна</router-link></li>
          <li><router-link to="/reviews">Відгуки</router-link></li>
          <li><router-link to="/about">Про нас</router-link></li>
        </ul>
      </div>
      
      <div class="footer-section message-section">
        <h3>Зворотній зв'язок</h3>
        <div class="message-container">
          <input 
            v-model="message" 
            class="message-input"
            placeholder="Напишіть свій відгук..."
          />
          <p class="message-preview">Ви написали: <span>{{ message || '...' }}</span></p>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} Всі права захищені</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      currentYear: new Date().getFullYear(),
      message: ''
    };
  }
};
</script>

<style scoped>
.site-footer {
  background-color:  #2c3e50;
  color: #cacaca;
  padding: 40px 0 0;
  margin-top: 60px;
  box-shadow: 0 -2px 15px rgba(0, 0, 0, 0.05);
  border-top: 1px solid #e9ecef;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-section {
  flex: 1;
  min-width: 200px;
  margin-bottom: 30px;
  padding: 0 20px;
}

.footer-section h3 {
   color: #cacaca;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 600;
  position: relative;
  padding-bottom: 10px;
}

.footer-section h3::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50px;
  height: 2px;
  background:  rgb(29, 29, 53);
}

.contact-info li, .footer-links li {
  margin-bottom: 12px;
  list-style: none;
  line-height: 1.6;
}

.contact-info i {
  margin-right: 10px;
    color: #cacaca;
  width: 20px;
  text-align: center;
}

.footer-links a {
  color: #cacaca;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 500;
  display: inline-block;
  padding: 2px 0;
}

.footer-links a:hover {
  color: #ffffff;
  transform: translateX(5px);
}

.message-section {
  max-width: 300px;
}

.message-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.message-input {
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background-color: rgb(255, 255, 255);
  color:  #2c3e50;
  font-size: 14px;
  transition: all 0.3s ease;
  width: 100%;
  box-shadow: 0 1px 3px rgba(167, 167, 167, 0.89);
}

.message-input:focus {
  outline: none;
  border-color: #ffffff;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.651);
}

.message-input::placeholder {
  color: #999;
}

.message-preview {
  color: #bebebe;
  font-size: 14px;
  margin: 5px 0 0;
  min-height: 20px;
}

.message-preview span {
  color: #ffffff;
  font-weight: 600;
}

.footer-bottom {
  background-color:  rgba(255, 255, 255, 0.397);
  padding: 20px 0;
  text-align: center;
  margin-top: 30px;
  color: #bdbdbd;
  font-size: 14px;
}

.footer-bottom p {
  margin: 0;
}

@media (max-width: 768px) {
  .footer-section {
    flex: 100%;
    text-align: center;
    padding: 0 10px;
  }
  
  .footer-section h3::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .message-section {
    max-width: 100%;
  }
  
  .footer-links a:hover {
    transform: none;
  }
}
</style>