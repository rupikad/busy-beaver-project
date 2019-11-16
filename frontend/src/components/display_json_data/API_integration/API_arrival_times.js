// const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// const JSAlert = require("js-alert");

getAuthToken = function(path, callback){
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

getArrivalTime = function(path, token, callback){
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

getRouteData = function(path, token, callback){
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

function myTokenCallback(token_data){
    var token = token_data.access_token;
    // JSAlert.alert(token);
    function myDataCallback(route_data){ //, arrival_data
        if (route_data !== 'undefined'){ //  && arrival_data
            // var arrival_data = arrival_data;
            var route_data = route_data; 
        }
        let routes = [];
        let stops = [];
        let stopID = []; 
        for (var i = 0; i < Object.keys(route_data.data).length; i++){
            routes.push(route_data.data[i].attributes.description.trim());
            for (var j = 0; j < route_data.data[i].attributes.stops.length; j++){
                stopID.push(route_data.data[i].attributes.stops[j].stopID.trim());
                stops.push(route_data.data[i].attributes.stops[j].description.trim());
        }
    }
        // console.log(routes);
    
        var object1 = [];
    
        for (var i = 0; i < Object.keys(route_data.data).length; i++){
                object1[i] = {
                    "route_description" : routes[i],
                    "attribues" : {
                        "stopDescription" : [],
                        "stopID" : [],
                        "arrivalTime" : []
                    }
            }
        }
        for (var i = 0; i < Object.keys(route_data.data).length; i++){
            for (var j = 0; j < Object.keys(route_data.data[i].attributes.stops).length; j++){
            object1[i].attribues.stopDescription.push(route_data.data[i].attributes.stops[j].description);
            object1[i].attribues.stopID.push(route_data.data[i].attributes.stops[j].stopID);
            object1[i].attribues.arrivalTime.push('7:00 AM');   //Temp value, BB hours M-F 7am-7pm!
            }
        }
        console.log(object1);

        let txt = ""
        txt += "<option>"  + "Select" +   "</option>" 
        for (var i = 0; i < routes.length; i++){
            txt += "<optgroup label = " + `"${object1[i].route_description}"` + ">" 
            for (var j = 0; j < object1[i].attribues.stopDescription.length; j++){
            txt += "<option value = "  + object1[i].attribues.arrivalTime[j]  +  ">"  + object1[i].attribues.stopDescription[j] + "</option>"
            }
            txt += "</optgroup>"
        }
        console.log(txt);
        document.getElementById('route_list').innerHTML = txt; 
        return txt; 

    }
    // getArrivalTime("https://api.oregonstate.edu/v1/beaverbus/arrivals?routeID=19&stopId=210", token, myDataCallback);
    getRouteData("https://api.oregonstate.edu/v1/beaverbus/routes", token, myDataCallback);
    return token;
}

getAuthToken("https://api.oregonstate.edu/oauth2/token", myTokenCallback)
