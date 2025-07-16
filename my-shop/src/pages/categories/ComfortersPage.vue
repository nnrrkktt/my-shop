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
      products: [
          {
          name: "Зимова Ковдра синтепух",
          price: 900,
          image: "https://i.pinimg.com/736x/15/0f/75/150f75b11d2a430637c297c4a4955d9e.jpg"
        },
        {
          name: "Літня ковдра,Лляна",
          price: 750,
          image: "https://i.pinimg.com/1200x/dc/81/14/dc8114dc0dd5a9905e61a23a5ab43f29.jpg"
        },
        {
          name: "Електроковдра",
          price: 1200,
          image: "https://content2.rozetka.com.ua/goods/images/big/380931405.png"
        },
        {
          name: "Верблюжа ковдра",
          price: 1100,
          image: "https://constancy.com.ua/content/images/30/536x536l50nn0/kovdra-zymova-1.45kh2.05-verbluzha-sherst-44778802054855.jpg"
        },
        {
          name: "пухова ковдра",
          price: 1250,
          image: "https://i.pinimg.com/736x/b3/df/31/b3df31a126e5b8cfd99a17061fb3fa9a.jpg"
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