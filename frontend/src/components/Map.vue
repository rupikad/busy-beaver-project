<template>
<div>
    <div>
        <v-navbar></v-navbar>
        <!-- Page content holder -->
        <div class="page-content p-5" id="content">
            <!-- Toggle button -->
            <!--<button id="sidebarCollapse" type="button" class="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4">
                <i class="fa fa-bars mr-2"></i><small class="text-uppercase font-weight-bold">Toggle</small>
            </button>-->

            <!-- title -->
            <h2 class="display-4 text-white">Beaver Bus</h2>
        </div>
        <div class="separator"></div>
    </div>

    <!-- End home page content -->

    <!-- beaver bus content -->
    <div id="beaver-bus" class="contentblock hidden">
        <p style="text-align: center;">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2842.52932598051!2d-123.28396408510947!3d44.5657372009622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c040bbc7dcf783%3A0xa31f68aa9f3c376a!2sLearning%20Innovation%20Center%2C%20165%20SW%20Sackett%20Pl%2C%20Corvallis%2C%20OR%2097331!5e0!3m2!1sen!2sus!4v1572207497625!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
        </p>
    </div>


    <!-- end beaver bus content -->

    <!-- geolocation content -->

    <div id="geolocation-and-campus-map" class="contentblock hidden">
        <p>geolocation</p>
    </div>

    <!-- end geolocation content -->

    <!-- jquery stuff end-->
</div>
</template>

<script>
import VNavbar from './VNavbar.vue'

export default {
    name: 'map',
    components: {
        VNavbar
    }
}

// jquery stuff that i dont understand -->
// <!--got it from here-> http://designm.ag/tutorials/building-vertical-tabbed-content-with-jquery/ -->
/*function() {
  // Sidebar toggle behavior
  $('#sidebarCollapse').on('click', function() {
    $('#sidebar, #content').toggleClass('active');
  });
}*/
</script>





