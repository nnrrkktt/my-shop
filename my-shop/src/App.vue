<template>
  <div id="app">
    <main class="main-content">
      <ProductList />
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    ProductList,
    FooterComponent
  }
}
</script>
