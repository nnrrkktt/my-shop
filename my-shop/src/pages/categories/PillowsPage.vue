<template>
  <div class="category-page">
    <h1>{{ categoryName }}</h1>
  </div>
  <div>
    <ProductList :products="filteredProducts" />
  </div>
</template>
<script>
import ProductList from '@/components/ProductList.vue';

export default {
  components: {
    ProductList,
  },
data() {
    return {
      searchQuery: "",
      products: [          {
          name: "Подушка холлофайбер",
          price: 450,
          image: "https://malva-style.com.ua/media/cache/ac/4d/ac4d338cac8d1e9c8fd4beb6cc406d08.webp"
        },
        {
          name: "Подушка синтешар",
          price: 450,
          image: "https://malva-style.com.ua/media/cache/ef/87/ef87881ef8f4d8e08f00823e1867f4a4.webp"
        },
        
        {
          name: "Подушка синтепух",
          price: 450,
          image: "https://malva-style.com.ua/media/cache/3b/8e/3b8ece67b94f5c240607b85eeba3f02d.webp"
        },

        
        
      ]
    }
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product => {
        return product.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }
  }
}
</script>