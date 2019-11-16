<template>
<nav class="navbar navbar-default">
  <router-link to="/" class="nav-logo"><h2>Busy Beaver <small>Never miss a bus</small></h2> </router-link>
  <div class="nav-links">
    <router-link to="/map">Go to Map</router-link>
    <!--router-link to="/">CONTACT</router-link-->
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