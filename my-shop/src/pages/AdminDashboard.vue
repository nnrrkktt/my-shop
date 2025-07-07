<template>
  <div class="app-container">
    <nav class="main-nav">
      <div class="nav-container">
        <div class="nav-brand">
          <span class="logo-text">Знайди швидко товар</span>
          <div class="search-container">
            <input 
              v-model="searchQuery" 
              placeholder="Пошук товарів..."
              class="search-input"
            />
            <i class="fas fa-search search-icon"></i>
           
          </div>
        </div>
<div class="nav-links">
  <router-link 
    to="/admin/products" 
    class="nav-link"
    active-class="active-link"
  >
    <i class="fas fa-home"></i> Головна
  </router-link>
  <router-link 
    to="/admin/reviews" 
    class="nav-link"
    active-class="active-link"
  >
    <i class="fas fa-comment-alt"></i> Відгуки
  </router-link>
  <router-link
    to="/profile"
    class="nav-link"
    active-class="active-link"
  >
    <i class="fas fa-user-circle"></i> Особистий кабінет
  </router-link>
</div>
      </div>
    </nav>
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      searchQuery: ''
    }
  }
};
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-nav {
  background: linear-gradient(135deg, #2c3e50 0%, #1a252f 100%);
  padding: 0.8rem 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  gap: 1.5rem;
}

.nav-brand {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex-grow: 1;
  max-width: 400px;
}

.logo-text {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  white-space: nowrap;
}

.search-container {
  position: relative;
  width: 100%;
}

.search-input {
  width: 100%;
  padding: 0.6rem 1rem 0.6rem 2.5rem;
  border-radius: 25px;
  border: none;
  background-color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.search-input:focus {
  outline: none;
  background-color: white;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #7f8c8d;
  font-size: 0.9rem;
}

.nav-links {
  display: flex;
  gap: 0.8rem;
}

.nav-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  background-color: rgba(255, 255, 255, 0.05);
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.15);
  color: white;
  transform: translateY(-2px);
}

.nav-link i {
  font-size: 1rem;
}

.active-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  background-color: rgba(255, 255, 255, 0.05);
}

.content {
  flex: 1;
  padding: 2rem;
  background-color: #f8f9fa;
}

@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    padding: 0.8rem;
    gap: 1rem;
  }
  
  .nav-brand {
    width: 100%;
    max-width: 100%;
    align-items: center;
  }
  
  .logo-text {
    font-size: 1.1rem;
  }
  
  .search-input {
    padding: 0.5rem 1rem 0.5rem 2.2rem;
  }
  
  .nav-links {
    width: 100%;
    justify-content: center;
  }
  
  .nav-link {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .nav-links {
    gap: 0.4rem;
  }
  
  .nav-link {
    padding: 0.5rem 0.8rem;
  }
  
  .nav-link i {
    display: none;
  }
}
</style>