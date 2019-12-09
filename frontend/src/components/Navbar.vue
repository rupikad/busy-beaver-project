<template>
<div class="curvature">
  
<nav class="navbar navbar-default" id="wave">
  <router-link to="/" ><h1>Busy Beaver </h1>  <p class="slab">Never miss a bus - Be on time, everytime!</p></router-link>
  <div class="nav-links">
    <!-- <router-link to="/map">Go to Map</router-link> -->
    <!--router-link to="/">CONTACT</router-link-->

    <router-link to="/dashboard">Login</router-link>

     <router-link to="/dashboard">Contact</router-link>
  </div>
</nav>
 <svg viewBox="0 4 500 50" preserveAspectRatio="none" >
    <path d="M-79.34,-43.71 C64.78,130.95 120.72,-64.44 499.66,35.16 L500.00,0.00 L0.79,-2.27 Z" style="stroke: none;fill: #dc4405;"></path>
  </svg>
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
path{
  stroke: rgba(220, 68, 5,0.6)!important;
  stroke-width: 8;
}

.navbar[data-v-beafdba2]{
  background-color: #dc4405;
  margin:0px;
  padding:10px 30px 0 30px;
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