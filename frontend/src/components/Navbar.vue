<template>
<div class="curvature">
<nav class="navbar navbar-default" id="wave">
  <router-link to="/" ><h1>Busy Beaver </h1>  <p class="slab">Never miss a bus - Be on time, everytime!</p></router-link>
  <div class="nav-links">
    <!-- <router-link to="/map">Go to Map</router-link> -->
    <!--router-link to="/">CONTACT</router-link-->

    <router-link to="/map">Login</router-link>

     <router-link to="/map">Contact</router-link>
  </div>
</nav>
</div>
</template>

<script>
export default {
    name: 'navbar',
    data:{
      displayNavbar: false
    }
}
</script>

<style scoped>
.nav-links a{
  margin:0 40px;
}


.navbar[data-v-beafdba2]{
  background-color: #dc4405;
  margin:0px;
  padding:30px;
}
.curvature{
  
  position: relative;
  overflow: hidden;
  /* height: 180px; */


}

.curvature::before {
  border-radius: 100%;
  position: absolute;
  background: #dc4405;
  /* right: -200px;
  left: -200px;
  top: -200px; */
  content: '';
  bottom: 0;
}
.navbar{
  margin:40px;
  
}

.slab{
  color:white;
  font-size:16px;
}

</style>