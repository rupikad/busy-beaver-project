let request = new XMLHttpRequest();
        request.open('GET', 'GETroutes_response.json', true);
           request.onload = function() {
           // Converts JSON data into an object
           // let is used in a block scope area (look for {})
               // let variables exist only w/i the block
           let txt = "";
           let GETroutes_response = JSON.parse(this.response);

           txt += "<table id='table' align='center' border='1px'>";        

           
           for (var i = 0; i < GETroutes_response.data.length; i++) {
            txt += "<tr>"
            txt += "<th>" + 'Route ID' + "</th>"
            txt += "<th>" + 'Stop ID' + "</th>"
            txt += "<th>" + 'Stop description' + "</th>"
            txt += "</tr>"

            //txt += "<tr>"
               for (var j = 0; j < GETroutes_response.data[i].attributes.stops.length; j++) {
                txt += "<td>" + GETroutes_response.data[i].id  + "</td>";
                    txt += "<td>" + GETroutes_response.data[i].attributes.stops[j].stopID + "</td>";
                    txt += "<td>" + GETroutes_response.data[i].attributes.stops[j].description + "</td>";
                    txt += "</tr>"
            }
            // txt += "</tr>"

        }
            
        txt += "</table>"   
    document.getElementById('GETroutes_response').innerHTML = txt; //list_routes;
    }
        request.send();
