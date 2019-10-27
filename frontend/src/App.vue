<template>
  <div id="app">
    <navbar></navbar>
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view></router-view>
    <bbfooter></bbfooter>
  </div>
</template>

<script>
import navbar from './components/Navbar.vue'
import bbfooter from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    navbar,
    bbfooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
