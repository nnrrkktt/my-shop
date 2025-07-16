<template>
  <div class="contacts-section">
    <div class="contacts-container">
      <h2 class="section-title">Зв'яжіться з нами</h2>
      <p class="section-subtitle">Ми завжди раді допомогти вам з вибором якісної постільної білизни</p>
      
      <div class="contacts-grid">
        <div class="contact-card">
          <i class="fas fa-envelope"></i>
          <div>
            <h3>Email</h3>
            <a href="mailto:info@postelna.com">info@postelna.com</a>
          </div>
        </div>

        <div class="contact-card">
          <i class="fas fa-phone-alt"></i>
          <div>
            <h3>Телефон</h3>
            <a href="tel:+380991234567">+380 (99) 123 45 67</a>
          </div>
        </div>

        <div class="contact-card">
          <i class="fas fa-map-marker-alt"></i>
          <div>
            <h3>Адреса</h3>
            <p>м. Київ</p>
          </div>
        </div>

        <div class="contact-card">
          <i class="fas fa-clock"></i>
          <div>
            <h3>Години роботи</h3>
            <p>Пн-Нд 10:00–20:00</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactsPage'
}
</script>

<style scoped>
.contacts-section {
  background-color: #f9f9f9;
  padding: 60px 20px;
  font-family: 'Montserrat', sans-serif;
}

.contacts-container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 15px;
  font-weight: 600;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #7f8c8d;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.contacts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin: 50px 0;
}

.contact-card {
  background: white;
  padding: 30px 25px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  display: flex;
  align-items: flex-start;
  text-align: left;
  transition: transform 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-5px);
}

.contact-card i {
  font-size: 1.8rem;
  color: #3498db;
  margin-right: 20px;
  margin-top: 5px;
}

.contact-card h3 {
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 10px;
}

.contact-card a, .contact-card p {
  color: #7f8c8d;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-card a:hover {
  color: #3498db;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .contacts-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>