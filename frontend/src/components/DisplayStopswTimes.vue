<template>
<div>
<div style="display:flex">
  <v-navbar></v-navbar>
  <!--Page content holder-->
  <div class="page-content" id="content">
    <nav class="navbar navbar-dark custom-nav" style="margin-bottom:0">
      <!-- Navbar content -->
      <h2>Busy Beaver</h2>
    </nav>
    <!-- Displaying stops and times -->
    <div class= "container">
      <p id="GETroutes_response">Loading arrival times...</p>
  </div>
  <!-- End data display -->
</div>
<!-- End page content -->
</div>
</div>
</template>

<script>
import VNavbar from './VNavbar.vue';
import {getAuthToken} from './display-routes-w-times'
export default {
  name : 'eta',
  components: {
    VNavbar
  }
};
</script>

<style>
.navbar{
    background-color: #dc4405;
}
.col {
  margin: 1px auto;
  top: 100px;  
  left: 400px;
}
.custom-nav {
  height: auto;
  color: white;
  padding: 20px;
  margin-bottom: 10px;
}
</style>

