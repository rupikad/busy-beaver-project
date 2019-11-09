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
                routes.push(GETroutes_response.data[i].attributes.stops[j].description.trim())
               }
           }
           // Sort alphabetical order
           routes.sort();
           // Removing duplicate routes 
           let unique_routes = [...new Set(routes)];
           // Removing misspelled route
           let filtered_routes = unique_routes.filter(function(value, index, arr){
               return value != 'Sacket Hall', 'undefined' 
           })
           for (var i = 0; i < unique_routes.length; i++) {
               let value = `"${filtered_routes[i]}"`
               txt += "<option value = "  + value + " >" + filtered_routes[i] + "</option>";
        }
        console.log(txt);
        document.getElementById('route_list').innerHTML = txt; //list_routes;
    }
    request.send();