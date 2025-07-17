<template>
  <div id="app">
    <HeaderComponent />
    <main class="main-content">
      <router-view></router-view>
    </main>
    <FooterComponent :is-fixed="isHomePage" />
  </div>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  name: 'App',
  components: {
    FooterComponent,
    HeaderComponent
  },
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding-bottom: 60px;
}
</style>
