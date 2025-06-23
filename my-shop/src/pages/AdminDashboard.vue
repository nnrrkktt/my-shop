<template>
  <div class="app-container">
    <!-- Навігаційне меню -->
    <nav class="main-nav">
      <router-link to="/admin" class="nav-link">Адмін-панель</router-link>
      <router-link to="/products" class="nav-link">Продукти</router-link>
      <router-link to="/reviews" class="nav-link">Відгуки</router-link>
    </nav>

    <!-- Основной контент сторінки -->
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-nav {
  background-color: #2c3e50;
  padding: 1rem;
  display: flex;
  gap: 1rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #34495e;
}

.nav-link.router-link-exact-active {
  background-color: #42b983;
  font-weight: bold;
}

.content {
  flex: 1;
  padding: 2rem;
}
</style>