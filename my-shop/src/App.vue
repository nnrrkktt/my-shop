<template>
  <div id="app">
    <router-view></router-view>
    <FooterComponent />    
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
