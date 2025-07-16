<template>
  <div class="app-header">
    <header class="top-header">
      <div class="header-container">
        <div class="contact-info">
          <div class="contact-item">
            <i class="fas fa-phone"></i>
            <span>+380 XXX XXX-XX-XX</span>
          </div>
          <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <span>info@postelna.com</span>
          </div>
          <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <span>м. Київ</span>
          </div>
        </div>
      </div>
    </header>
    <nav class="main-nav">
      <div class="nav-container">
        <div class="nav-brand">
          <router-link to="/" class="site-title">POSTELNA</router-link>
        </div>
        <div class="categories-container">
          <div class="categories-bar">
            <router-link
              v-for="category in categories"
              :key="category.id"
              :to="category.route"
              class="category-btn"
              :class="{ 'active': $route.path.includes(category.route) }"
            >
              {{ category.name }}
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      categories: [
        {id: 1, name:'Головна', route: '/category/manage'},
        { id: 5, name: 'Постільна білизна', route: '/category/bedding' },
        { id: 2, name: 'Пледи', route: '/category/blankets' },
        { id: 3, name: 'Ковдри', route: '/category/comforters' },
        { id: 4, name: 'Подушки', route: '/category/pillows' }
      ]
    }
  }
}
</script>

<style scoped>

.top-header {
  background: #f8f8f8;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e0e0e0;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.contact-info {
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #555;
}

.main-nav {
  background: white;
  padding: 0.5rem 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.nav-container {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.nav-brand {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
}

.site-title {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  text-decoration: none;
}

.categories-container {
  width: 100%;
  padding: 0.5rem 0;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
}

.categories-bar {
  display: flex;
  gap: 0.8rem;
  padding: 0.5rem 0;
  overflow-x: auto;
  scrollbar-width: none;
}

.categories-bar::-webkit-scrollbar {
  display: none;
}

.category-btn {
  padding: 0.5rem 1rem;
  border: none;
  background: transparent;
  color: #555;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.2s ease;
  font-size: 0.95rem;
  border-radius: 4px;
}

.category-btn:hover {
  background: #f5f5f5;
  color: #333;
}

.category-btn.active {
  background: #000;
  color: white;
  font-weight: 500;
}

@media (max-width: 768px) {
  .header-container,
  .nav-container {
    padding: 0 1rem;
  }

  .contact-info {
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .categories-bar {
    gap: 0.5rem;
  }

  .category-btn {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .contact-info {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
  
  .site-title {
    font-size: 1.5rem;
  }
}
</style>