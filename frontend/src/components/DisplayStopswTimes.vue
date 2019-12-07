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
      <!-- <p>Next available Beaver Bus:</p> -->
    <!-- <div class= "row">
      <div v-for= "item in objectItems" :key="item">
        <div class= "col" v-for= "i in item" :key="i">
            {{i}} 
        </div>
      </div>
      <!-- End data entry -->
    <!-- </div> --> 
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
  }//,
  // data() {
  //   return {
  //     objectItems: {
  //       // routes: 'R18',
  //         // stops: ['202', '203', '204'],
  //         description: ['Stop X', 'Stop Y', 'Stop Z'],
  //         eta: ['7:00 AM', '7:00 AM', '7:00 AM']
  //     }
  //   };
  // }
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

