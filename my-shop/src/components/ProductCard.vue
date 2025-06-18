<template>
  <div class="product-card">
    <div class="image-container">
      <img :src="image" :alt="name" class="product-image" />
    </div>
    <div class="product-info">
      <h3 class="product-name">{{ name }}</h3>
      <p class="product-price">{{ formattedPrice }}</p>
      <button class="add-to-cart">Додати в кошик</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    price: Number,
    image: String
  },
  computed: {
    formattedPrice() {
      return new Intl.NumberFormat('uk-UA', { style: 'currency', currency: 'UAH' }).format(this.price)
        .replace('UAH', '₴');
    }
  }
}
</script>

<style>
.product-card {
  width: 280px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: white;
}
.image-container {
  height: 200px;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

.product-info {
  padding: 16px;
}

.product-price {
  font-size: 20px;
  color: #2a59fe;
  font-weight: 700;
  margin: 0 0 16px 0;
}

.add-to-cart {
  width: 100%;
  padding: 10px;
  background-color: #2a59fe;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
}
</style>