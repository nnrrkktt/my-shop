<template>
  <div class="category-page">
    <h1>{{ categoryName }}</h1>
  </div>

  <div>
    <ProductList :products="filteredProducts" />
  </div>

  <div class="app-container">
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
          <h1 class="site-title">POSTELNA</h1>
        </div>
        <div class="categories-container">
          <div class="categories-bar">
            <router-link
              v-for="category in categories"
              :key="category.id"
              :to="category.route"
              class="category-btn"
              :class="{ active: $route.path.includes(category.route) }"
            >
              {{ category.name }}
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <main class="content">
      <router-view :search-query="searchQuery" />
    </main>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';

export default {
  name: 'App',
  components: {
    ProductList
  },
  data() {
    return {
      searchQuery: "",
      categories: [
        { id: 1, name: 'Постільна білизна', route: '/bed-linen' },
        { id: 2, name: 'Пледи', route: '/blankets' },
        { id: 3, name: 'Ковдри', route: '/comforters' },
        { id: 4, name: 'Подушки', route: '/pillows' }
      ],
      products: [
        {
          name: "плед в кольорі'молочний'",
          price: 650,
          image: "https://i.pinimg.com/736x/e8/1b/9a/e81b9a83bdb472b24974e4e25e072be7.jpg"
        },
        {
          name: "Плед бамбук-овчина - бузковий",
          price: 650,
          image: "https://malva-style.com.ua/media/cache/42/29/4229875446831dc4957155c0d0a3d8f3.webp"
        },
        {
          name: "Плед бамбуковий - світло/сірий",
          price: 700,
          image: "https://malva-style.com.ua/media/cache/e8/c7/e8c7a26ec8c301a76effaefb222d4cf7.webp"
        },
        {
          name: "Плед бамбуковий - сіро/коричневий",
          price: 700,
          image: "https://malva-style.com.ua/media/cache/0e/2c/0e2c885f382da4a2294ea3ee4c4cfc57.webp"
        },
        {
          name: "Плед бамбуковий - світло/фіолетовий",
          price: 700,
          image: "https://malva-style.com.ua/media/cache/dc/cb/dccbe4cc04f833d63adc1c7b25b4fd2c.webp"
        },
        {
          name: "Плед бамбуковий – морська хвиля",
          price: 700,
          image: "https://malva-style.com.ua/media/cache/5b/81/5b815f81b85875be86bf10d9e1586d39.webp"
        },
        {
          name: "Плед бамбуковий - ніжно-сірий",
          price: 700,
          image: "https://malva-style.com.ua/media/cache/6c/22/6c22242bb1e7adbbf57cb562b1c5d2ba.webp"
        },
        {
          name: "в'язаний плед в кольорі 'чорний'",
          price: 900,
          image: "https://i.pinimg.com/1200x/0f/c0/7e/0fc07e58094f9b9cd4fb742e28d1da33.jpg"
        },
        {
          name: "в'язаний плед в кольорі 'білий'",
          price: 900,
          image: "https://i.pinimg.com/736x/b9/c0/46/b9c0462ea87799f4a008f90abf46742c.jpg"
        },
        {
          name: "в'язаний плед в кольорі 'хаккі'",
          price: 900,
          image: "https://i.pinimg.com/736x/46/bb/e7/46bbe7490a6f746bd4dfc6fc7b1ed161.jpg"
        },
        {
          name: "в'язаний плед в кольорі 'сірий'",
          price: 900,
          image: "https://i.pinimg.com/1200x/8c/b8/0f/8cb80f51fddf331337eef633bf612677.jpg"
        },
        {
          name: "в'язаний плед в кольорі 'рожевий'",
          price: 900,
          image: "https://i.pinimg.com/1200x/1f/b4/d7/1fb4d7c9845949bd4863208dd4b76921.jpg"
        }
      ]
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
};
</script>
