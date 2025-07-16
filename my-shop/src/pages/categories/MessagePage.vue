<template>
  <div class="reviews-page">
    <div class="reviews-container">
      <h1 class="page-title">Відгуки наших клієнтів</h1>
      <div class="add-review">
        <h2>Залишити відгук</h2>
        <form @submit.prevent="submitReview">
          <div class="form-group">
            <label for="name">Ваше ім'я:</label>
            <input type="text" id="name" v-model="newReview.name" required>
          </div>
          <div class="form-group">
            <label for="rating">Оцінка:</label>
            <select id="rating" v-model="newReview.rating" required>
                <option value="5">100%</option>
              <option value="5">80%</option>
              <option value="4">60%</option>
              <option value="3">40%</option>
              <option value="2">20%</option>
              <option value="1">0%</option>
            </select>
          </div>
          <div class="form-group">
            <label for="comment">Ваш відгук:</label>
            <textarea id="comment" v-model="newReview.comment" required></textarea>
          </div>
          <button type="submit" class="submit-btn">Надіслати</button>
        </form>
      </div>
      <div class="reviews-list">
        <h2>Останні відгуки</h2>
        <div v-if="reviews.length === 0" class="no-reviews">
          Ще немає відгуків. Будьте першим!
        </div>
        <div v-else>
          <div class="review-item" v-for="(review, index) in reviews" :key="index">
            <div class="review-header">
              <span class="review-author">{{ review.name }}</span>
              <span class="review-date">{{ review.date }}</span>
              <div class="review-rating">
                <span v-for="n in 1" :key="n" :class="{'filled': n <= review.rating}">100%</span>
              </div>
            </div>
            <div class="review-content">
              {{ review.comment }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewsPage',
  data() {
    return {
      newReview: {
        name: '',
        rating: '5',
        comment: ''
      },
      reviews: [
        {
          name: 'Анна',
          rating: 5,
          comment: 'Чудова постільна білизна, дуже приємна на дотик. Рекомендую!',
          date: '15.07.2024'
        },
        {
          name: 'Іван',
          rating: 4,
          comment: 'Якість хороша, але колір трохи відрізняється від фото на сайті.',
          date: '10.01.2025'
        }
      ]
    }
  },
  methods: {
    submitReview() {
      const review = {
        name: this.newReview.name,
        rating: parseInt(this.newReview.rating),
        comment: this.newReview.comment,
        date: new Date().toLocaleDateString('uk-UA')
      };
      
      this.reviews.unshift(review);
      this.newReview = {
        name: '',
        rating: '5',
        comment: ''
      };
      alert('Дякуємо за ваш відгук!');
    }
  }
}
</script>

<style scoped>
.reviews-page {
  background-color: #f9f9f9;
  min-height: 100vh;
  padding: 40px 20px;
  font-family: 'Montserrat', sans-serif;
}

.reviews-container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.page-title {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
  font-size: 2.2rem;
}

.add-review {
  background: #f5f7fa;
  padding: 25px;
  border-radius: 8px;
  margin-bottom: 40px;
}

.add-review h2 {
  margin-top: 0;
  color: #2b2b2b;
  font-size: 1.5rem;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #2c3e50;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.form-group textarea {
  height: 120px;
  resize: vertical;
}
.submit-btn {
  background-color: #565656;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #80808080;
}

.reviews-list h2 {
  color: #2c3e50;
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.review-item {
  border-bottom: 1px solid #eee;
  padding: 20px 0;
}

.review-item:last-child {
  border-bottom: none;
}

.review-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  flex-wrap: wrap;
}

.review-author {
  font-weight: 600;
  color: #2c3e50;
}

.review-date {
  color: #7f8c8d;
  font-size: 0.9rem;
}

.review-content {
  color: #34495e;
  line-height: 1.6;
}

.no-reviews {
  text-align: center;
  color: #7f8c8d;
  padding: 20px;
}

@media (max-width: 600px) {
  .reviews-container {
    padding: 20px 15px;
  }
  
  .page-title {
    font-size: 1.8rem;
  }
  
  .review-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .review-date {
    margin: 5px 0;
  }
}
</style>