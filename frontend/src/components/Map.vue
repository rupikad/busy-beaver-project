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

        <div id="map" class="map"></div>
        <!-- end beaver bus content -->

        <!-- geolocation content -->
        <div id="geolocation-and-campus-map" class="contentblock hidden">
          <!-- <p>geolocation</p> -->
        </div>
      </div>
    </div>
    <!-- End home page content -->

    <!-- beaver bus content -->

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
            // get the maps from api
            const google = await gmapsInit();

            // create a new map with styling
            const map = new google.maps.Map(document.getElementById('map'), {
                    center: {lat: 44.564535, lng: -123.277284}, // osu
                    zoom: 16,
                    mapTypeControl: true,
                    mapTypeId: 'roadmap',
                });

            // display the current position of user
            const displayPos =
                function(position) {
                    let pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };

                    // center the map and cater to position
                    let bounds = new google.maps.LatLngBounds();
                    bounds.extend(pos);
                    map.panToBounds(bounds);
                    map.setCenter(bounds.getCenter());

                    // create a marker of current location
                    const marker = new google.maps.Marker({
                        position: pos,
                        label: 'A',
                        title: 'My marker',
                        map: map,
                    });
                };

            // display error if location not available
            const displayError =
                function() {
                    handleLocationError(true, infoWindow, map.getCenter(), map);
                };

            // create new info window
            const infoWindow = new google.maps.InfoWindow;

            if (navigator.geolocation) {
                // actually getting the current location
                navigator.geolocation.getCurrentPosition(displayPos, displayError, {
                    enableHighAccuracy: true,
                });
            } else {
                // Browser doesn't support Geolocation
                handleLocationError(false, infoWindow, map.getCenter(), map);
            }
        } catch (error) {
            console.error(error); // eslint-disable-line no-console
        }
    },
}

  // handles location error
  function handleLocationError(browserHasGeolocation, infoWindow, pos, map) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'ERROR: Geolocation service failed.' :
                          'ERROR: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  }
</script>
<style>
.navbar{
    background-color: #dc4405;
}
.map {
  height: 400px;
  width: 80%;
  margin: 30px auto;
}

.custom-nav {
  height: auto;
  color: white;
  padding: 20px;
  margin-bottom: 10px;
}
</style>







