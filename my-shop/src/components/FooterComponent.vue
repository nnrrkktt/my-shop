<template>
  <footer :class="{'fixed-footer': isFixed}" class="site-footer">
    <div class="footer-container">
      <div class="footer-section">
        <h3>Контакти</h3>
        <ul class="footer-links">
          <li><i class="fas fa-envelope"></i> info@example.com</li>
          <li><i class="fas fa-phone"></i> +380 (XX) XXX-XX-XX</li>
          <li><i class="fas fa-map-marker-alt"></i> м. Київ</li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h3>Навігація</h3>
        <ul class="footer-links">
       <li><router-link to="/" exact-active-class="active-link">Головна</router-link></li>
  <li><router-link to="/message" active-class="active-link">Відгуки</router-link>          </li>
          <li>
            <router-link to="/contacts">Контакти</router-link>
          </li>
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
  props: { 
    isFixed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
}
</script>

<style scoped>
.site-footer {
  background-color: #5a5a5a;
  color: #fff;
  padding: 40px 0 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  gap: 30px;
}

.footer-section {
  flex: 1;
  min-width: 200px;
  margin-bottom: 30px;
}

.footer-section h3 {
  color: #fff;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 600;
  position: relative;
  padding-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.footer-section h3::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 40px;
  height: 2px;
  background: #fff;
}

.contact-info li, .footer-links li {
  margin-bottom: 12px;
  list-style: none;
  line-height: 1.5;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  row-gap: 12px;
  align-items: start;
}

.contact-info i {
  margin-right: 10px;
  color: #fff;
  width: 16px;
  text-align: center;
  font-size: 12px;
}

.footer-links a {
  color: #ccc;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 400;
  display: inline-block;
  padding: 2px 0;
  font-size: 14px;
}

.footer-links a:hover {
  color: #fff;
}

.footer-bottom {
  background-color: #fff;
  padding: 15px 0;
  text-align: center;
  margin-top: 30px;
  color: #333;
  font-size: 13px;
}

.footer-bottom p {
  margin: 0;
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    gap: 30px;
  }
  
  .footer-section {
    text-align: center;
  }
  
  .footer-section h3::after {
    left: 50%;
    transform: translateX(-50%);
  }
}
.fixed-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
.has-fixed-footer {
  padding-bottom: 100px;
}
</style>