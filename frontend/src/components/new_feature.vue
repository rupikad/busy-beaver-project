<template>
<div>
     <div style="display:flex">
      <vNavbar></vNavbar>
     
      <div class="page-content" id="content">
          <nav class="navbar navbar-dark custom-nav" style="margin-bottom:0">
    <!-- Navbar content -->
    <h2>Busy Beaver</h2>
    </nav>
            
        <img src="@/assets/uc1.png" class="img-responsive img-circle margin"  align="center" >
        <!-- </div> -->
    </div>  
     </div>
</div>

</template>

<script>
import VNavbar from './VNavbar.vue';

export default {
    name: 'new_feature',
    components: {
        VNavbar
    }
}
</script>

<style>
    img{
        max-width:500px;
        max-height: 500px;
    }
</style>





