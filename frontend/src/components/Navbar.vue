<template>
<nav class="navbar navbar-default">
  <router-link to="/map" class="nav-logo" >Busy Beaver <small>Never miss a bus</small> </router-link>
  <div class="nav-links">
    <router-link to="/map">LOGIN</router-link>
    <router-link to="/">CONTACT</router-link>
  </div>
</nav>
</template>

<script>
export default {
    name: 'navbar',
    data:{
      displayNavbar: false
    }
}
</script>