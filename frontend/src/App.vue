<template>
  <div id="app">
    <div>
  
    </div>
   
        <router-view></router-view>
    
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
