<template>
  <div class="register-form">
    <h2>Реєстрація</h2>
    <form @submit.prevent="handleRegister">
      <div class="form-group">
        <label>Email:</label>
        <input v-model="email" type="email" required>
      </div>
      <div class="form-group">
        <label>Пароль:</label>
        <input v-model="password" type="password" required>
      </div>
      <div class="form-group">
        <label>Підтвердіть пароль:</label>
        <input v-model="confirmPassword" type="password" required>
      </div>
      <button type="submit">Зареєструватися</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
    <p>Вже маєте акаунт? <router-link to="/login">Увійти</router-link></p>
  </div>
</template>

<script>
import { auth } from '@/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      error: ''
    }
  },
  methods: {
    async handleRegister() {
      if (this.password !== this.confirmPassword) {
        this.error = 'Паролі не співпадають'
        return
      }

      try {
        await createUserWithEmailAndPassword(auth, this.email, this.password)
        this.$router.push('/')
      } catch (err) {
        this.error = err.message
      }
    }
  }
}
</script>

<style scoped>
.register-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  background-color: #42b983;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>