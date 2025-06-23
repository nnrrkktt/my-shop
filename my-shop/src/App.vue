<template>
  <div id="app">
    <main class="main-content">
      <ProductList />
    </main>
    <FooterComponent />
    <ReviewsComponent />
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue'
import FooterComponent from './components/FooterComponent.vue'
import ReviewsComponent from "@/components/ReviewsComponent.vue"; 
export default {
  name: 'App',
  components: {
    ProductList,
    FooterComponent,
    ReviewsComponent
  }
}
</script>
