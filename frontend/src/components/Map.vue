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
                <div id="floating-panel">
                    <span class="labels">Start: </span>
                    <select id="start">
                        <option value="" selected="selected">Select start location...</option>
                        <option value="Forage Seed Research Center;3450 SW Campus Way, Corvallis, OR 97331">Forage Seed Research Center</option>
                        <option value="Crop and Soil Science;109 Crop Science Building, 3050 SW Campus Way, Corvallis, OR 97331">Crop and Soil Science</option>
                        <option value="Buxton Hall;310 SW Weatherford Pl, Corvallis, OR 97331">Buxton Hall</option>
                        <option value="Weatherford Hall;Weatherford Hall, 300 SW 26th St, Corvallis, OR 97331">Weatherford Hall</option>
                        <option value="Gill Coliseum;660 SW 26th St, Corvallis, OR 97331">Gill Coliseum</option>
                        <option value="Ralph Miller Lane;Southwest Ralph Miller Lane, Corvallis, OR">Ralph Miller Lane</option>
                        <option value="Traux Northwest;Merrit Truax Indoor Practice Facility, 661 SW 30th St, Corvallis, OR 97331">Traux Northwest</option>
                        <option value="Radiation Center;Radiation Center, Southwest Jefferson Way, Corvallis, OR">Radiation Center</option>
                        <option value="Dryden Hall;450 SW 30th St, Corvallis, OR 97331">Dryden Hall</option>
                        <option value="Truax West;Merrit Truax Indoor Practice Facility, 661 SW 30th St, Corvallis, OR 97331">Truax West</option>
                        <option value="Reser Stadium;660 SW 26th St, Corvallis, OR 97331">Reser Stadium </option>
                        <option value="LaSells Stewart Center;875 SW 26th St, Corvallis, OR 97331">LaSells Stewart Center</option>
                        <option value="Beaver Store;663 SW 26th St, Corvallis, OR 97331">Beaver Store</option>
                        <option value="Dixion Recreation;DxRC, 425 SW 26th St, Corvallis, OR 97331">Dixon Recreation</option>
                        <option value="Austin Hall;Austin Hall, Southwest Jefferson Way, Corvallis, OR">Austin Hall</option>
                        <option value="Sackett Hall;2901 SW Jefferson Way, Corvallis, OR 97331">Sackett Hall</option>
                        <option value="Oak Creek Building;Oak Creek Building, Southwest Western Boulevard, Corvallis, OR">Oak Creek Building</option>
                        <option value="West Hall;391 SW 30th St, Corvallis, OR 97331">West Hall</option>
                        <option value="Hilton Garden Inn;2500 SW Western Blvd, Corvallis, OR 97333">Hilton Garden Inn</option>
                        <option value="University Plaza;1600 SW Western Blvd, Corvallis, OR 97333">University Plaza</option>
                        <option value="16th and A Ave;SW 15th St & SW Western Blvd, Corvallis, OR">16th and A Ave</option>
                        <option value="Callahan Hall;1420 SW Jefferson Way, Corvallis, OR 97331">Callahan Hall</option>
                        <option value="Valley Library;201 SW Waldo Pl, Corvallis, OR 97331">Valley Library</option>
                        <option value="Student Experience Center;2251 SW Jefferson Way, Corvallis, OR 97331">Student Experience Center</option>
                        <option value="15th and A Ave;SW 15th St & SW Western Blvd, Corvallis, OR">15th and A Ave</option>
                        <option value="Truax Indoor Practice Facility;Merrit Truax Indoor Practice Facility, 661 SW 30th St, Corvallis, OR 97331">Truax Indoor Practice Facility</option>
                        <option value="Milam Hall;Milam Hall, Southwest Campus Way, Corvallis, OR">Milam Hall</option>
                        <option value="Gilkey Hall;Gilkey Hall, Southwest Waldo Place, Corvallis, OR">Gilkey Hall</option>
                        <option value="Kearney Hall;Kearney Hall, Southwest Campus Way, Corvallis, OR">Kearney Hall</option>
                        <option value="Kerr Admin;Kerr Administration Building, Southwest Jefferson Way, Corvallis, OR">Kerr Admin</option>
                        <option value="Adams Hall;Adams Hall, Southwest 15th Street, Corvallis, OR">Adams Hall</option>
                        <option value="ILLC;1701 SW Western Blvd, Corvallis, OR 97331">ILLC</option>
                        <option value="Western;SW Western Blvd & SW 26th St, Corvallis, OR">Western</option>
                    </select>
                    <span class="labels">End: </span>
                    <select id="end">
                       <option value="" selected="selected">Select end location...</option>
                        <option value="Forage Seed Research Center;3450 SW Campus Way, Corvallis, OR 97331">Forage Seed Research Center</option>
                        <option value="Crop and Soil Science;109 Crop Science Building, 3050 SW Campus Way, Corvallis, OR 97331">Crop and Soil Science</option>
                        <option value="Buxton Hall;310 SW Weatherford Pl, Corvallis, OR 97331">Buxton Hall</option>
                        <option value="Weatherford Hall;Weatherford Hall, 300 SW 26th St, Corvallis, OR 97331">Weatherford Hall</option>
                        <option value="Gill Coliseum;660 SW 26th St, Corvallis, OR 97331">Gill Coliseum</option>
                        <option value="Ralph Miller Lane;Southwest Ralph Miller Lane, Corvallis, OR">Ralph Miller Lane</option>
                        <option value="Traux Northwest;Merrit Truax Indoor Practice Facility, 661 SW 30th St, Corvallis, OR 97331">Traux Northwest</option>
                        <option value="Radiation Center;Radiation Center, Southwest Jefferson Way, Corvallis, OR">Radiation Center</option>
                        <option value="Dryden Hall;450 SW 30th St, Corvallis, OR 97331">Dryden Hall</option>
                        <option value="Truax West;Merrit Truax Indoor Practice Facility, 661 SW 30th St, Corvallis, OR 97331">Truax West</option>
                        <option value="Reser Stadium;660 SW 26th St, Corvallis, OR 97331">Reser Stadium </option>
                        <option value="LaSells Stewart Center;875 SW 26th St, Corvallis, OR 97331">LaSells Stewart Center</option>
                        <option value="Beaver Store;663 SW 26th St, Corvallis, OR 97331">Beaver Store</option>
                        <option value="Dixion Recreation;DxRC, 425 SW 26th St, Corvallis, OR 97331">Dixon Recreation</option>
                        <option value="Austin Hall;Austin Hall, Southwest Jefferson Way, Corvallis, OR">Austin Hall</option>
                        <option value="Sackett Hall;2901 SW Jefferson Way, Corvallis, OR 97331">Sackett Hall</option>
                        <option value="Oak Creek Building;Oak Creek Building, Southwest Western Boulevard, Corvallis, OR">Oak Creek Building</option>
                        <option value="West Hall;391 SW 30th St, Corvallis, OR 97331">West Hall</option>
                        <option value="Hilton Garden Inn;2500 SW Western Blvd, Corvallis, OR 97333">Hilton Garden Inn</option>
                        <option value="University Plaza;1600 SW Western Blvd, Corvallis, OR 97333">University Plaza</option>
                        <option value="16th and A Ave;SW 15th St & SW Western Blvd, Corvallis, OR">16th and A Ave</option>
                        <option value="Callahan Hall;1420 SW Jefferson Way, Corvallis, OR 97331">Callahan Hall</option>
                        <option value="Valley Library;201 SW Waldo Pl, Corvallis, OR 97331">Valley Library</option>
                        <option value="Student Experience Center;2251 SW Jefferson Way, Corvallis, OR 97331">Student Experience Center</option>
                        <option value="15th and A Ave;SW 15th St & SW Western Blvd, Corvallis, OR">15th and A Ave</option>
                        <option value="Truax Indoor Practice Facility;Merrit Truax Indoor Practice Facility, 661 SW 30th St, Corvallis, OR 97331">Truax Indoor Practice Facility</option>
                        <option value="Milam Hall;Milam Hall, Southwest Campus Way, Corvallis, OR">Milam Hall</option>
                        <option value="Gilkey Hall;Gilkey Hall, Southwest Waldo Place, Corvallis, OR">Gilkey Hall</option>
                        <option value="Kearney Hall;Kearney Hall, Southwest Campus Way, Corvallis, OR">Kearney Hall</option>
                        <option value="Kerr Admin;Kerr Administration Building, Southwest Jefferson Way, Corvallis, OR">Kerr Admin</option>
                        <option value="Adams Hall;Adams Hall, Southwest 15th Street, Corvallis, OR">Adams Hall</option>
                        <option value="ILLC;1701 SW Western Blvd, Corvallis, OR 97331">ILLC</option>
                        <option value="Western;SW Western Blvd & SW 26th St, Corvallis, OR">Western</option>
                    </select>
                </div>
                <div id="map" class="map"></div>
                <!-- end beaver bus content -->

                <!-- geolocation content -->
                <div id="geolocation-and-campus-map" class="contentblock hidden">
                </div>
            </div>
        </div>
        <!-- beaver bus content -->

    </div>
</template>

<script>
    import VNavbar from './VNavbar.vue';
    import gmapsInit from './gmaps.js';
    import home_image from "./home.png";
    import current_location_image from "./cur_loc3.png";
    import some_location_image from "./some_location6.png";
    import some_location_b_image from "./some_location_b.png";

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
                var myModule = require('./parse_JSON');
                var route_list = myModule.route_list;
                var startStopID;
                var endStopID;
                var routeIndex = 4;
                var busRoutes = [];
                var the_path = [];
                var route_markers = [];
                var path_num = 0;
                directionsRenderer.setMap(map);

                var iconBase = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/';
                var icons = {
                    home: {
                        icon: home_image
                    },
                    location: {
                        icon: iconBase + 'parking_lot_maps.png'
                    },
                    current_location: {
                        icon: current_location_image
                    },
                    some_location: {
                        icon: some_location_image
                    },
                    some_location_b: {
                        icon: some_location_b_image
                    }
                };

                let onChangeHandler = function() {
                    var retVal = calculateAndDisplayRoute(directionsService, directionsRenderer);
                    var startRes = retVal.start;
                    var endRes = retVal.end;

                    var ret = getRouteIndex(route_list,startStopID,endStopID,routeIndex,startRes,endRes);
                    startStopID = ret.startID;
                    endStopID = ret.endID;
                    routeIndex = ret.routeIdx;
                    var startIdx = ret.startIndex;
                    var endIdx = ret.endIndex;

                    let retV = displayRoute(map,busRoutes,route_list,routeIndex,the_path,path_num,icons,route_markers,startIdx,endIdx);
                    the_path = retV.path;
                    path_num = retV.num;
                    route_markers = retV.markers;
                    the_path.setMap(map);
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
                        icon: icons['current_location'].icon,
                        map: map,
                    });

                    var contentString = '<div id="content">'+
                        '<div id="siteNotice">'+
                        '</div>'+
                        '<div id="bodyContent"><font size="4" color='+'#dc4405'+'><b>'+
                        'You are here!'+
                        '</b></font></div>'+
                        '</div>';

                    var infowindow = new google.maps.InfoWindow({
                        content: contentString
                    });

                    google.maps.event.addListener(marker, 'click', function() {
                        infowindow.open(map,marker);
                    });
                    infowindow.open(map,marker);
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
        var start = document.getElementById('start').value;
        var startRes = start.split(";");
        var end = document.getElementById('end').value;
        var endRes = end.split(";");

        directionsService.route(
            {
                origin: {query: startRes[1]},
                destination: {query: endRes[1]},
                travelMode: 'WALKING',
            },
            function(response, status) {
                if (status === 'OK') {
                    directionsRenderer.setDirections(response);
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
            });
        return {
            start: startRes,
            end: endRes
        };
    }

    function displayRoute(map,busRoutes,route_list,routeIndex,the_path,path_num,icons,route_markers,startIdx,endIdx){
        busRoutes = getBusRoute(busRoutes,route_list,routeIndex);

        if(path_num > 0) {
            the_path.setMap(null);
            var h;
            for(h=0;h<route_markers.length;h++){
                route_markers[h].setMap(null);
            }
        }
        route_markers = [];
        var route_names = ['Northwest Route','West Route 1','West Route 2','East Route','Central Route','Northeast Route'];
        var color = '#FF0000';
        if(routeIndex == 0){
            // Blue, Northwest Route
            color = '#77A8AD';
        }else if (routeIndex == 1){
            // Orange, West Route 1
            color = '#DCAD75';
        }else if (routeIndex == 2){
            // Brown-ish, West Route 2
            color = '#AE9B70';
        }else if (routeIndex == 3){
            // Purple, East Route
            color = '#D64CF4';
        }else if (routeIndex == 4){
            // Yellow, Central Route
            color = '#DBC152';
        }else if (routeIndex == 5){
            // Green, Northeast Route
            color = '#7FB67C';
        }

        the_path = new google.maps.Polyline({
            path: busRoutes,
            geodesic: true,
            strokeColor: color,
            strokeOpacity: 1.0,
            strokeWeight: 5.0
        });
        path_num += 1;

        var descriptions = [];
        var max = route_list[routeIndex]['stops'].length;
        var j;
        for(j=0;j<max;j++){
            descriptions.push(route_list[routeIndex]['stops'][j]['description']);
        }

        var i;
        for (i = 0; i < max; i++) {
            if(i == startIdx || i == endIdx){
                route_markers.push(new google.maps.Marker({
                    position: busRoutes[i],
                    icon: icons['some_location_b'].icon,
                    title: descriptions[i],
                    map: map
                }));
            }else {
                route_markers.push(new google.maps.Marker({
                    position: busRoutes[i],
                    icon: icons['some_location'].icon,
                    title: descriptions[i],
                    map: map
                }));
            }
        }
        for(i=0;i<route_markers.length;i++){
            route_markers[i].setMap(map);
        }

        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<div id="bodyContent"><font size="4" color='+color+'><b>'+
            route_names[routeIndex]+
            '</b></font></div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        google.maps.event.addListener(route_markers[0], 'click', function() {
            infowindow.open(map,route_markers[0]);
        });
        infowindow.open(map,route_markers[0]);

        return {
            path: the_path,
            num: path_num,
            markers: route_markers
        };
    }

function getBusRoute(busRoutes,route_list,routeIndex){
    var i;
    var j;
    busRoutes = [];
    i = routeIndex;
    for (j = 0; j < route_list[i]['stops'].length; j++) {
        busRoutes.push({
        lat: route_list[i]['stops'][j]['latitude'],
        lng: route_list[i]['stops'][j]['longitude']
        });
    }
    busRoutes.push({
        lat: route_list[i]['stops'][0]['latitude'],
        lng: route_list[i]['stops'][0]['longitude']
    });
    return busRoutes;
}
function getRouteIndex(route_list,startStopID,endStopID,routeIndex,startRes,endRes){
    var i;
    var j;
    var hasStop = 0;
    var startExists = 0;
    var endExists = 0;
    var startName = startRes[0];
    var endName = endRes[0];
    var startIdx = 0;
    var endIdx = 0;

    for (i = 0; i < route_list.length; i++) {
        hasStop = 0;
        for (j = 0; j < route_list[i]['stops'].length; j++) {
            if(startName.localeCompare(route_list[i]['stops'][j]['description']) == 0){
                startStopID = route_list[i]['stops'][j]['stopID'];
                hasStop += 1;
                startExists = 1;
                startIdx = j;
            }
            if(endName.localeCompare(route_list[i]['stops'][j]['description']) == 0){
                endStopID = route_list[i]['stops'][j]['stopID'];
                hasStop += 1;
                endExists = 1;
                endIdx = j;
            }
            if(hasStop >= 2){
                routeIndex = i;
                return {
                    startID: startStopID,
                    endID: endStopID,
                    routeIdx: routeIndex,
                    startIndex: startIdx,
                    endIndex: endIdx
                };
            }
        }
    }
    if (startExists == 1 && endExists == 1){
        window.alert("Sorry! No bus routes between these two stops. Try again.");
    }
}

</script>
<style>
    #floating-panel {
        z-index: 5;
        background-color: #fff;
        padding: 5px;
        text-align: center;
        font-family: 'Roboto','sans-serif';
        line-height: 30px;
        /*padding-left: 10px;*/
        margin: 20px;

    }

    .navbar{
        background-color: #dc4405;
    }

    #map {
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

    select{
        padding:8px;
    }

    .labels{
        padding:10px 1px 10px 20px;
        font-weight: 800;
    }
</style>







