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
        <h3>Посилання</h3>
        <ul class="footer-links">
          <li><router-link to="/about">Про нас</router-link></li>
          <li><router-link to="/delivery">Доставка</router-link></li>
          <li><router-link to="/privacy">Політика конфіденційності</router-link></li>
        </ul>
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
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.site-footer {
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 20px 0 0;
  margin-top: 40px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
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
  margin-bottom: 20px;
  padding: 0 15px;
}

.footer-section h3 {
  color: #f39c12;
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.contact-info li, .footer-links li {
  margin-bottom: 10px;
  list-style: none;
}

.contact-info i {
  margin-right: 10px;
  color: #f39c12;
  width: 20px;
  text-align: center;
}

.footer-links a {
  color: #ecf0f1;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #f39c12;
}

.footer-bottom {
  background-color: #1a252f;
  padding: 15px 0;
  text-align: center;
  margin-top: 20px;
}

.footer-bottom p {
  margin: 0;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-section {
    flex: 100%;
    text-align: center;
  }
  
  .contact-info, .footer-links {
    padding-left: 0;
  }
}
</style>