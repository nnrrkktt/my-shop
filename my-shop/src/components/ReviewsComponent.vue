<template>
  <div class="reviews-container">
    <h2 class="reviews-title">Відгуки</h2>
    <table class="reviews-table">
      <thead>
        <tr>
          <th>Ім'я</th>
          <th>Дата</th>
          <th>Рейтинг</th>
          <th>Коментар</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(review, index) in reviews" :key="index">
          <td>{{ review.name }}</td>
          <td>{{ review.date }}</td>
          <td>{{ review.rating }}</td>
          <td>{{ review.comment }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Papa from 'papaparse';

export default {
  data() {
    return {
      reviews: []
    };
  },
  created() {
    const csvContent = Name,Rating,Comment
Іван,5,Дякую за швидку доставку
Ольга,5,Все супер! Буду замовляти ще
Андрій,5,Обслуговування, як завжди - на висоті
Марина,4,Все чудово! Покупкою задоволена, але коробка була прим'ята.
Сергій,5,Рекомендую цей чудовий магазин усім!
Данило,5,Дуже демократичні ціни. Я завжди купую лише тут.
Матвій,5,Дякую за подарунок до покупки - завжди радуєте приємними сюрпризами.
Анна,5,Дякую за чудові знижки
Раймонд,4,Як завжди все кльово, але малий термін гарантії для годинника, хотілося б довше.

    Papa.parse(csvContent.trim(), {
      header: true, 
      complete: (result) => {
        this.reviews = result.data; 
        },
         });
},

</script>

<style scoped>
.reviews-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.reviews-title {
  text-align: center;
  margin-bottom: 20px;
}

.reviews-table {
  width: 90%;
  margin: 0 auto;
  border-collapse: collapse;
}

.reviews-table th,
.reviews-table td {
  padding: 4px;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  text-align: left;
}

.reviews-table th {
  background-color: #e9ecef;
}
</style>