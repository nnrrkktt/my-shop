<template>
  <div class="login-container">
    <h2>Авторизація</h2>
    <input v-model="username" placeholder="Логін">
    <input v-model="password" type="password" placeholder="Пароль">
    <button @click="login">Увійти</button>
    <p v-if="message" class="error-message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      message: "",
      users: []
    }
},
     methods: {
    login: function() {
      if (!this.username || !this.password) {
        this.message = "Введіть логін та пароль!";
        return;
      }
      const user = this.users.find(function(u) {
        return u.username === this.username && u.password === this.password;
      }.bind(this));
      if (user) {
        localStorage.setItem("authUser", this.username);
        this.$router.push("/profile");
      } else {
        this.message = "Невірний логін або пароль!";
  }
}
  },
  async mounted() {
    try {
      const response = await fetch("/admin.json");
      if (!response.ok) {
        throw new Error("Помилка HTTP: ${response.status}");
      }
      this.users = await response.json();
    } catch (error) {
      console.error("Помилка завантаження даних:", error);
      this.message = "Помилка сервера! Спробуйте пізніше.";
    }
  }
};
</script>

