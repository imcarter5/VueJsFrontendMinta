<template>
  <div class="container">
    <open-page></open-page>
  </div>
</template>

<script>
import OpenPage from './components/OpenPage.vue';

export default {
  name: "App",
  components: {
    OpenPage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
