const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var routeTable = [];
var etaTable = [];
var routeDescriptionTable = [];

var getAuthToken = function(path, callback){
        var request = new XMLHttpRequest();
        var response; 
            request.open('POST', path, true);
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            request.setRequestHeader("Accept", "application/json");
            request.send("grant_type=client_credentials&client_id=v7pwff8fZLOgFsHMIfSVU8U3jWnVt1IM&client_secret=vmWQMA9h2YOf4J6l");
    
            request.onload = function(){
                if (this.readyState==4 && this.status==200){
                    response = JSON.parse(this.responseText);
                    callback(response);
                }
            }
}

var getArrivalTime = function(path, token, callback){
    var request = new XMLHttpRequest();
    var response;
        request.open('GET', path, true);
        request.setRequestHeader('Authorization', 'Bearer ' + token);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        request.setRequestHeader("Accept", "application/json");
        request.send(null);

        request.onreadystatechange = function(){
            if (this.readyState==4 && this.status==200) {
                response = JSON.parse(request.responseText);
                callback(response);
            }
        }
}

var getRouteData = function(path, token, callback){
    var request = new XMLHttpRequest();
    var response;
        request.open('GET', path, true);
        request.setRequestHeader('Authorization', 'Bearer ' + token);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        request.setRequestHeader("Accept", "application/json");
        request.send(null);

        request.onreadystatechange = function(){
            if (this.readyState==4 && this.status==200) {
                response = JSON.parse(request.responseText);
                callback(response);
            }
        }
}

// Callback function to generate auth token for API calls //
function myTokenCallback(response){
    var token; 
    if (response != 'undefined'){ 
        token = response.access_token; 
    }
    getArrivalTime("https://cors-anywhere.herokuapp.com/https://api.oregonstate.edu/v1/beaverbus/arrivals", token, myDataCallback); // myArrivalsCallback);
    getRouteData("https://cors-anywhere.herokuapp.com/https://api.oregonstate.edu/v1/beaverbus/routes", token, myDataCallback); //myRoutesCallback);
}

// Generating data to be used by vue component // 
function myDataCallback(data){
    // Generating table with stopID + descriptions // 
    if (data.data.length == 6){

        for (var i = 0; i < 6; i ++){  
            routeDescriptionTable.push(data.data[i].attributes.description.trim())
            for (var j = 0; j < data.data[i].attributes.stops.length ; j ++){
                routeTable.push([data.data[i].attributes.stops[j].stopID, data.data[i].attributes.stops[j].description])
            }
        }
        routeTable.sort();

        for (i = 0 ; i < routeTable.length; i++){
            etaTable.push([0, "No arrival times listed"]) 
        }
    }
    // Generating table w stopID + arrival times // 
    if (data.data.length !== 6){ 

        if (data.data.length == 0){
            for (i = 0 ; i < routeTable.length; i++){
                // Pass 
            }
        } else {            
            // etaTable = [];
            for (i = 0; i < data.data.length; i++){
                // etaTable.push([data.data[i].attributes.stopID, data.data[i].attributes.arrivals[0].eta])
                etaTable[i] = [data.data[i].attributes.stopID, data.data[i].attributes.arrivals[0].eta] //.push([data.data[i].attributes.stopID, data.data[i].attributes.arrivals[0].eta]) 
            }

            var options = {
                timeZone: "America/Los_Angeles",
                year: 'numeric', month: 'numeric', day: 'numeric',
                hour: 'numeric', minute: 'numeric', second: 'numeric'
            };

            var formatter = new Intl.DateTimeFormat([], options);

            for(i=0; i < etaTable.length; i++){
                etaTable[1,i][1] = formatter.format(new Date(etaTable[1,i][1])).slice(11,21);
            }    
            var len = routeTable.length - etaTable.length;

            for (j = 0; j < len; j++){
                etaTable.unshift([ 0 , "No arrival times listed" ]);
            }
        } 
    }
                // Begin html code to populate table // 
                
                //Moved from outside of second if statement for faster loading.
                var txt = "";
                // Table creation 
                txt += "<table id='table' class= 'table table-sm' align='center' border='1px'>";        
                // Creating headers 
                txt += "<tr>"
                txt += "<th>" +  'List of routes' + "</th>" //routeDescriptionTable[i]  + "</th>"
                txt += "<th>" + 'Stop ID' + "</th>"
                txt += "<th>" + 'ETA' + "</th>"
                txt += "</tr>"
                // Populating w data 
                for (j = 0; j < routeTable.length; j++) {
                    txt += "<td>" + routeTable[1,j][1] + "</td>" //routeObject[j].description + "</td>";
                    txt += "<td>" + routeTable[j][0] + "</td>" //routeObject[j].attribues.stopID + "</td>";
                    txt += "<td>" + etaTable[1,j][1] + "</td>" //"Next bus arrives at 7:00 AM" + "</td>"// etaTable[1,j-1][1] + "</td>"
                    txt += "</tr>" 
                }   
                txt += "</table>"  
                document.getElementById('GETroutes_response').innerHTML = txt; // sending tag to vue component   

}   
module.exports.getAuthToken = getAuthToken("https://cors-anywhere.herokuapp.com/https://api.oregonstate.edu/oauth2/token", myTokenCallback);
