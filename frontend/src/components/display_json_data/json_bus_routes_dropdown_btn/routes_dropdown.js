let request = new XMLHttpRequest();
        request.open('GET', 'GETroutes_response.json', true);
           request.onload = function() {
           // Converts JSON data into an object
           // let is used in a block scope area (look for {})
               // let variables exist only w/i the block
           let txt = "";
           let GETroutes_response = JSON.parse(this.response);
           const routes = [];

           for (var i = 0; i < GETroutes_response.data.length; i++){
               for (var j = 0; j < GETroutes_response.data[i].attributes.stops.length; j++){
                   routes.push(GETroutes_response.data[i].attributes.stops[j].description)
               }
           }
           routes.sort();

           let unique_routes = [...new Set(routes)];
           console.log(unique_routes);

           txt += "<div class = 'dropdown'>";
           txt += "<button class = 'dropbtn'>" + "Select your location" + "</button> ";
           txt += "<div class = 'dropdown-content'>"; 
                 
           for (var i = 0; i < unique_routes.length; i++) {
            //    for (var j = 0; j < GETroutes_response.data[i].attributes.stops.length; j++) {
                    // txt += "<a href='#'>" + GETroutes_response.data[i].attributes.stops[j].description  + "</a>";
                    txt += "<a href='#'>" + unique_routes[i] + "</a>";

            // }
        }
 
        txt += "</div>";   
    document.getElementById('routes_to_dropdown').innerHTML = txt; //list_routes;
    }
        request.send();
