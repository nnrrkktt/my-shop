<template>
  <div class="app-container">
    <div class="manage-products">
      <div class="hero-banner">
        <div class="hero-content">
          <h1>LUXURY BEDDING</h1>
          <p>Ексклюзивна колекція постільної білизни для вашого комфорту</p>
        </div>
      </div>
      
      <div class="categories-section">
        <h2>Наші категорії</h2>
        <div class="categories-grid">
          <div 
            class="category-card" 
            v-for="(category, index) in categories" 
            :key="index"
          >
            <img 
              :src="category.image" 
              :alt="category.name" 
              loading="lazy"
            >
            <div class="category-overlay">
              <h3>{{ category.name }}</h3>
              <router-link 
                :to="category.link" 
                class="category-link"
              >
                Переглянути
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ManageProducts',
  data() {
    return {
      categories: [
        {
          name: "Постільна білизна",
          image: "https://i.pinimg.com/736x/d9/7c/7f/d97c7f25b0a773b1c704764c7f844dbf.jpg",
          link: "/category/bedding"
        },
        {
          name: "Пледи",
          image: "https://i.pinimg.com/736x/e8/1b/9a/e81b9a83bdb472b24974e4e25e072be7.jpg",
          link: "/category/blankets"
        },
        {
          name: "Ковдри",
          image: "https://i.pinimg.com/736x/15/0f/75/150f75b11d2a430637c297c4a4955d9e.jpg",
          link: "/category/duvets"
        },
        {
          name: "Подушки",
          image: "https://malva-style.com.ua/media/cache/ac/4d/ac4d338cac8d1e9c8fd4beb6cc406d08.webp",
          link: "/category/pillows"
        }
      ]
    };
  }
};
</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
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
.search-container {
  position: relative;
  width: 100%;
  padding: 0.8rem 0;
}

.search-input {
  width: 100%;
  padding: 0.7rem 1rem 0.7rem 2.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 0.95rem;
}
.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #777;
}
.content {
  flex: 1;
  padding: 2rem;
  background: #f5f5f5;
}

.Manage-Products {
  font-family: 'Montserrat', sans-serif;
  color: #333;
}

.hero-content {
  max-width: 800px;
  padding: 20px;
}

.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
}
.Manage-Products {
  font-family: 'Montserrat', sans-serif;
  color: #333;
}

.hero-banner {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
              url('https://i.pinimg.com/736x/2a/b3/a1/2ab3a1c7aa4d49f57d23b658d41d5934.jpg');
  background-size: cover;
  background-position: center;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  margin-bottom: 50px;
}
.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.shop-now-btn {
  display: inline-block;
  padding: 12px 30px;
  background-color: #fff;
  color: #333;
  text-decoration: none;
  font-weight: bold;
  border-radius: 30px;
  transition: all 0.3s ease;
}

.shop-now-btn:hover {
  background-color: #f8f8f8;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
.categories-section {
  padding: 50px 20px;
  text-align: center;
}

.categories-section h2 {
  font-size: 2rem;
  margin-bottom: 40px;
  position: relative;
  display: inline-block;
}

.categories-section h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background-color: #333;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.category-card {
  position: relative;
  height: 300px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.category-card:hover {
  transform: translateY(-10px);
}

.category-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
  padding: 20px;
  text-align: left;
}

.category-overlay h3 {
  margin: 0 0 10px 0;
  font-size: 1.5rem;
}

.category-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  padding: 5px 0;
  border-bottom: 2px solid white;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}
.about-section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.about-content {
  flex: 1;
  min-width: 300px;
  padding: 0 40px 0 0;
}


.about-section h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.about-section p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 30px;
  color: #555;
}

.about-features {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.feature {
  display: flex;
  align-items: center;
  gap: 10px;
}
.product-list-section {
  padding: 50px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.search-container {
  margin-bottom: 30px;
  text-align: center;
}

.search-input {
  padding: 12px 20px;
  width: 100%;
  max-width: 500px;
  border: 1px solid #ddd;
  border-radius: 30px;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
}

.search-input:focus {
  border-color: #333;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
}
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .hero-content p {
    font-size: 1rem;
  }
  
  .about-section {
    flex-direction: column;
  }
  
  .about-content {
    padding: 0 0 40px 0;
  }
}
</style>
