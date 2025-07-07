<template>
  <div class="profile-page">
    <h2>Адмін-панель</h2>
    <p>Вітаємо, {{ username }}!</p>
    <button @click="logout">Вийти</button>
  </div>
</template>

<script>
export default {
  name: 'ProfilePage',
  data() {
    return {
      username: localStorage.getItem("authUser") || ""
    }
  },
  beforeMount() {
    if (!this.username) {
      this.$router.push("/login");
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("authUser");
      this.$router.push("/");
    }
  }
}
</script>