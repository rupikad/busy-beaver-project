<template>
<div>
    <div>
        <v-navbar></v-navbar>
        <!--Page content holder-->
        <div class="page-content p-5" id="content">
            <!--Toggle button-->
            <!--button id="sidebarCollapse" type="button" class="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4"-->
                <!--i class="fa fa-bars mr-2"></i><small class="text-uppercase font-weight-bold">Toggle</small-->
            <!--/button-->

           
            <h2 class="display-4 text-white">Beaver Bus</h2>
           
        </div>
        <div class="separator"></div>
    </div>
    <!-- End home page content -->

    <!-- beaver bus content -->

    <div id="floating-panel">
        <b>Start: </b>
        <select id="start">
            <option value="3450 SW Campus Way, Corvallis, OR 97331">Forage Seed Research Center</option>
            <option value="109 Crop Science Building, 3050 SW Campus Way, Corvallis, OR 97331">Crop and Soil Science</option>
            <option value="310 SW Weatherford Pl, Corvallis, OR 97331">Buxton Hall</option>
            <option value="Weatherford Hall, 300 SW 26th St, Corvallis, OR 97331">Weatherford Hall</option>
            <option value="660 SW 26th St, Corvallis, OR 97331">Gill Coliseum</option>
            <option value="Southwest Ralph Miller Lane, Corvallis, OR">Ralph Miller Lane</option>
            <option value="Merrit Truax Indoor Practice Facility, 661 SW 30th St, Corvallis, OR 97331">Traux Northwest</option>
            <option value="Radiation Center, Southwest Jefferson Way, Corvallis, OR">Radiation Center</option>
            <option value="450 SW 30th St, Corvallis, OR 97331">Dryden Hall</option>
            <option value="Merrit Truax Indoor Practice Facility, 661 SW 30th St, Corvallis, OR 97331">Truax West</option>
            <option value="660 SW 26th St, Corvallis, OR 97331">Reser Stadium </option>
            <option value="875 SW 26th St, Corvallis, OR 97331">LaSells Stewart Center</option>
            <option value="663 SW 26th St, Corvallis, OR 97331">Beaver Store</option>
            <option value="DxRC, 425 SW 26th St, Corvallis, OR 97331">Dixion Recreation</option>
            <option value="Austin Hall, Southwest Jefferson Way, Corvallis, OR">Austin Hall</option>
            <option value="2901 SW Jefferson Way, Corvallis, OR 97331">Sackett Hall</option>
            <option value="Oak Creek Building, Southwest Western Boulevard, Corvallis, OR">Oak Creek Building</option>
            <option value="391 SW 30th St, Corvallis, OR 97331">West Hall</option>
            <option value="2500 SW Western Blvd, Corvallis, OR 97333">Hilton Garden Inn</option>
            <option value="1600 SW Western Blvd, Corvallis, OR 97333">University Plaza</option>
            <option value="SW 15th St & SW Western Blvd, Corvallis, OR">16th and A Ave</option>
            <option value="1420 SW Jefferson Way, Corvallis, OR 97331">Callahan Hall</option>
            <option value="201 SW Waldo Pl, Corvallis, OR 97331">Valley Library</option>
            <option value="2251 SW Jefferson Way, Corvallis, OR 97331">Student Experience Center</option>
            <option value="SW 15th St & SW Western Blvd, Corvallis, OR">15th and A Ave</option>
            <option value="Merrit Truax Indoor Practice Facility, 661 SW 30th St, Corvallis, OR 97331">Truax Indoor Practice Facility</option>
            <option value="Milam Hall, Southwest Campus Way, Corvallis, OR">Milam Hall</option>
            <option value="Gilkey Hall, Southwest Waldo Place, Corvallis, OR">Gilkey Hall</option>
            <option value="Kearney Hall, Southwest Campus Way, Corvallis, OR">Kearney Hall</option>
            <option value="Kerr Administration Building, Southwest Jefferson Way, Corvallis, OR">Kerr Admin</option>
            <option value="Adams Hall, Southwest 15th Street, Corvallis, OR">Adams Hall</option>
            <option value="1701 SW Western Blvd, Corvallis, OR 97331">ILLC</option>
            <option value="SW Western Blvd & SW 26th St, Corvallis, OR">Western</option>
        </select>
        <b>End: </b>
        <select id="end">
            <option value="3450 SW Campus Way, Corvallis, OR 97331">Forage Seed Research Center</option>
            <option value="109 Crop Science Building, 3050 SW Campus Way, Corvallis, OR 97331">Crop and Soil Science</option>
            <option value="310 SW Weatherford Pl, Corvallis, OR 97331">Buxton Hall</option>
            <option value="Weatherford Hall, 300 SW 26th St, Corvallis, OR 97331">Weatherford Hall</option>
            <option value="660 SW 26th St, Corvallis, OR 97331">Gill Coliseum</option>
            <option value="Southwest Ralph Miller Lane, Corvallis, OR">Ralph Miller Lane</option>
            <option value="Merrit Truax Indoor Practice Facility, 661 SW 30th St, Corvallis, OR 97331">Traux Northwest</option>
            <option value="Radiation Center, Southwest Jefferson Way, Corvallis, OR">Radiation Center</option>
            <option value="450 SW 30th St, Corvallis, OR 97331">Dryden Hall</option>
            <option value="Merrit Truax Indoor Practice Facility, 661 SW 30th St, Corvallis, OR 97331">Truax West</option>
            <option value="660 SW 26th St, Corvallis, OR 97331">Reser Stadium </option>
            <option value="875 SW 26th St, Corvallis, OR 97331">LaSells Stewart Center</option>
            <option value="663 SW 26th St, Corvallis, OR 97331">Beaver Store</option>
            <option value="DxRC, 425 SW 26th St, Corvallis, OR 97331">Dixion Recreation</option>
            <option value="Austin Hall, Southwest Jefferson Way, Corvallis, OR">Austin Hall</option>
            <option value="2901 SW Jefferson Way, Corvallis, OR 97331">Sackett Hall</option>
            <option value="Oak Creek Building, Southwest Western Boulevard, Corvallis, OR">Oak Creek Building</option>
            <option value="391 SW 30th St, Corvallis, OR 97331">West Hall</option>
            <option value="2500 SW Western Blvd, Corvallis, OR 97333">Hilton Garden Inn</option>
            <option value="1600 SW Western Blvd, Corvallis, OR 97333">University Plaza</option>
            <option value="SW 15th St & SW Western Blvd, Corvallis, OR">16th and A Ave</option>
            <option value="1420 SW Jefferson Way, Corvallis, OR 97331">Callahan Hall</option>
            <option value="201 SW Waldo Pl, Corvallis, OR 97331">Valley Library</option>
            <option value="2251 SW Jefferson Way, Corvallis, OR 97331">Student Experience Center</option>
            <option value="SW 15th St & SW Western Blvd, Corvallis, OR">15th and A Ave</option>
            <option value="Merrit Truax Indoor Practice Facility, 661 SW 30th St, Corvallis, OR 97331">Truax Indoor Practice Facility</option>
            <option value="Milam Hall, Southwest Campus Way, Corvallis, OR">Milam Hall</option>
            <option value="Gilkey Hall, Southwest Waldo Place, Corvallis, OR">Gilkey Hall</option>
            <option value="Kearney Hall, Southwest Campus Way, Corvallis, OR">Kearney Hall</option>
            <option value="Kerr Administration Building, Southwest Jefferson Way, Corvallis, OR">Kerr Admin</option>
            <option value="Adams Hall, Southwest 15th Street, Corvallis, OR">Adams Hall</option>
            <option value="1701 SW Western Blvd, Corvallis, OR 97331">ILLC</option>
            <option value="SW Western Blvd & SW 26th St, Corvallis, OR">Western</option>
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

/* eslint-disable */
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

function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    directionsService.route(
        {
            origin: {query: document.getElementById('start').value},
            destination: {query: document.getElementById('end').value},
            travelMode: 'WALKING',
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

<style>
    #map {
        height: 400px;
        width: 50%;
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





