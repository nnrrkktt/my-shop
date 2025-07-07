<template>
  <div class="product-list">
    <div class="products-container">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.name"
        :name="product.name"
        :price="product.price"
        :image="product.image"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'

export default {
  components: {
    ProductCard
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      searchQuery: ''
    }
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product => 
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    }
  }
}
</script>

<style scoped>
.product-list {
  padding: 20px;
}

.search-input {
  padding: 8px 12px;
  margin-bottom: 20px;
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.products-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
</style>