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
    <div id="floating-panel">
        <b>Start: </b>
        <select id="start">
            <option value="chicago, il">Chicago</option>
            <option value="st louis, mo">St Louis</option>
            <option value="joplin, mo">Joplin, MO</option>
            <option value="oklahoma city, ok">Oklahoma City</option>
            <option value="amarillo, tx">Amarillo</option>
            <option value="gallup, nm">Gallup, NM</option>
            <option value="flagstaff, az">Flagstaff, AZ</option>
            <option value="winona, az">Winona</option>
            <option value="kingman, az">Kingman</option>
            <option value="barstow, ca">Barstow</option>
            <option value="san bernardino, ca">San Bernardino</option>
            <option value="los angeles, ca">Los Angeles</option>
        </select>
        <b>End: </b>
        <select id="end">
            <option value="chicago, il">Chicago</option>
            <option value="st louis, mo">St Louis</option>
            <option value="joplin, mo">Joplin, MO</option>
            <option value="oklahoma city, ok">Oklahoma City</option>
            <option value="amarillo, tx">Amarillo</option>
            <option value="gallup, nm">Gallup, NM</option>
            <option value="flagstaff, az">Flagstaff, AZ</option>
            <option value="winona, az">Winona</option>
            <option value="kingman, az">Kingman</option>
            <option value="barstow, ca">Barstow</option>
            <option value="san bernardino, ca">San Bernardino</option>
            <option value="los angeles, ca">Los Angeles</option>
        </select>
    </div>
    <div id="map" class="map">
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
// import calculateAndDisplayRoute from './gmaps';


export default {
    name: 'google_map',
    components: {
        VNavbar
    },
    async mounted() {
        try {
            // get the maps from api
            const google = await gmapsInit();

            let directionsService = new google.maps.DirectionsService();
            let directionsRenderer = new google.maps.DirectionsRenderer();

            // create a new map with styling
            const map = new google.maps.Map(document.getElementById('map'), {
                    center: {lat: 44.564535, lng: -123.277284}, // osu
                    zoom: 16,
                    mapTypeControl: true,
                    mapTypeId: 'roadmap',
                });
            directionsRenderer.setMap(map);

            let onChangeHandler = function() {
                calculateAndDisplayRoute(directionsService, directionsRenderer);
            };
            document.getElementById('start').addEventListener('change', onChangeHandler);
            document.getElementById('end').addEventListener('change', onChangeHandler);

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
                    navigator.handleLocationError(true, infoWindow, map.getCenter());
                };

            // create new info window
            const infoWindow = new google.maps.InfoWindow;

            // Try HTML5 geolocation -- NOT google maps api
            if (navigator.geolocation) {
                // passing in arguments in watchPosition -- moving vehicle
                navigator.geolocation.getCurrentPosition(displayPos, displayError, {
                    enableHighAccuracy: true,
                    maximumAge: 10000,
                    timeout: 5000,
                });
            } else {
                // Browser doesn't support Geolocation
                navigator.handleLocationError(false, infoWindow, map.getCenter());
            }
        } catch (error) {
            console.error(error); // eslint-disable-line no-console
        }
    },
}

function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    directionsService.route(
        {
            origin: {query: document.getElementById('start').value},
            destination: {query: document.getElementById('end').value},
            travelMode: 'DRIVING'
        },
        function(response, status) {
            if (status === 'OK') {
                directionsRenderer.setDirections(response);
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });
}
</script>

<style scoped>
    #map {
        height: 500px;  /* The height is 400 pixels */
        width: 100%;  /* The width is the width of the web page */
        margin: 0 auto;
    }

    #floating-panel {
        position: absolute;
        top: 10px;
        left: 25%;
        z-index: 5;
        background-color: #fff;
        padding: 5px;
        border: 1px solid #999;
        text-align: center;
        font-family: 'Roboto','sans-serif';
        line-height: 30px;
        padding-left: 10px;
    }

</style>





