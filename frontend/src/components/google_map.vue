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
    <div id="map" class="map">
<!--        <p style="text-align: center;">-->
<!--            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2842.52932598051!2d-123.28396408510947!3d44.5657372009622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c040bbc7dcf783%3A0xa31f68aa9f3c376a!2sLearning%20Innovation%20Center%2C%20165%20SW%20Sackett%20Pl%2C%20Corvallis%2C%20OR%2097331!5e0!3m2!1sen!2sus!4v1572207497625!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>-->
<!--        </p>-->
    </div>
    <!-- end beaver bus content -->



    <!-- geolocation content -->
    <div id="geolocation-and-campus-map" class="contentblock hidden">
        <p>geolocation</p>
    </div>
    <!-- end geolocation content -->

</div>
</template>

<script>
import VNavbar from './VNavbar.vue';
import gmapsInit from './gmaps.js';



export default {
    name: 'google_map',
    components: {
        VNavbar
    },
    async mounted() {
        try {
            const google = await gmapsInit();
            const map = new google.maps.Map(document.getElementById('map'), {
                    center: {lat: 44.564535, lng: -123.277284}, // osu
                    zoom: 16,
                    mapTypeControl: true,
                    mapTypeId: 'roadmap',
                });

            const createMarker =
                function (marker) {
                    return marker = new google.maps.Marker({
                        // position: pos,
                        label: 'A',
                        title: 'My marker',
                        map: map,
                    });
                };

            const displayPos =
                function(position) {
                    let marker, current_pos;
                    let pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };

                    let bounds = new google.maps.LatLngBounds();
                    bounds.extend(pos);
                    map.panToBounds(bounds);
                    map.setCenter(bounds.getCenter());
                    current_pos = pos;

                    if (current_pos === pos) {
                        marker = createMarker(marker);
                        marker.setPosition(pos);
                    }
                    else {
                        marker.setPosition(pos);
                        marker.setMap(map);
                        current_pos = pos;
                    }
                };

            const displayError =
                function() {
                    handleLocationError(true, infoWindow, map.getCenter());
                };

            // create new info window
            const infoWindow = new google.maps.InfoWindow;

            // Try HTML5 geolocation -- NOT google maps api
            if (navigator.geolocation) {
                // passing in arguments in watchPosition -- moving vehicle
                navigator.geolocation.watchPosition(displayPos, displayError, {
                    enableHighAccuracy: true,
                    maximumAge: 10000,
                    timeout: 5000,
                });
            } else {
                // Browser doesn't support Geolocation
                handleLocationError(false, infoWindow, map.getCenter());
            }
        } catch (error) {
            console.error(error); // eslint-disable-line no-console
        }
    },
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

<style scoped>

    /*html,*/
    /*body {*/
    /*    margin: 0;*/
    /*    padding: 0;*/
    /*    height: 100%;*/
    /*}*/

    #map {
        height: 500px;  /* The height is 400 pixels */
        width: 100%;  /* The width is the width of the web page */
        margin: 0 auto;
    }

</style>





