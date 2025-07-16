<template>
  <div class="product-card">
    <div class="image-container">
      <img :src="image" :alt="name" class="product-image" />
    </div>
    <div class="product-info">
      <h3 class="product-name">{{ name }}</h3>
      <p class="product-price">{{ formattedPrice }}</p>
      <button class="add-to-cart" @click="handleAddToCart">Додати в кошик</button>
      <div v-if="showLoginMessage" class="login-message">
        <p>Щоб додати товар у кошик, будь ласка, <a href="/register">зареєструйтесь</a>.</p>
      </div>
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
  data() {
    return {
      showLoginMessage: false
    }
  },
  computed: {
    formattedPrice() {
      return new Intl.NumberFormat('uk-UA', { style: 'currency', currency: 'UAH' }).format(this.price)
        .replace('UAH', '₴');
    }
  },
  methods: {
    handleAddToCart() {
      const isLoggedIn = localStorage.getItem('userLoggedIn');
      
      if (!isLoggedIn) {
        this.showLoginMessage = true;
        setTimeout(() => {
          this.showLoginMessage = false;
        }, 2000);
      } else {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push({
          id: Date.now(),
          name: this.name,
          price: this.price,
          image: this.image
        });
      }
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
  position: relative;
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
  color: #ffffff;
  font-weight: 700;
  margin: 0 0 16px 0;
}

.add-to-cart {
  width: 100%;
  padding: 10px;
  background-color: #d0d0d0;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-to-cart:hover {
  background-color: #232323;
  color:#fff8e1;
}

.login-message {
  margin-top: 10px;
  padding: 10px;
  background-color: #fff8e1;
  border-left: 4px solid #9a9a9a;
  border-radius: 4px;
  animation: fadeIn 0.3s ease;
}

.login-message a {
  color: #040405;
  text-decoration: underline;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>