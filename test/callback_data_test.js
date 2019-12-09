
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var routeTable = [];
var etaTable = [];


it('arrival data test', (done) => {  
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
                    callback(response); // myDataCallback = callback function
                }
            }
    }

    function myTokenCallback(token_data){
        var token = token_data.access_token;
        getArrivalTime("https://api.oregonstate.edu/v1/beaverbus/arrivals", token, myDataCallback);
        // if (result == undefined) {  
        //     return done(new Error(`Expect token, got undefined`));  
        //   }  
        // done();
    }

    function myDataCallback(data){
        if (data.data.length == 6){
    
            for (var i = 0; i < 6; i ++){
                for (var j = 0; j < data.data[i].attributes.stops.length ; j ++){
                    routeTable.push([data.data[i].attributes.stops[j].stopID, data.data[i].attributes.stops[j].description])
                }
            }
            routeTable.sort();    
            for (i = 0 ; i < routeTable.length; i++){
                etaTable.push([0, "No stops listed"]) 
            }
        }
    
        if (data.data.length !== 6){
            console.log(data.data.length);
            // console.log(data.data[32].attributes.arrivals[0].eta)
            if (data.data.length == 0){
                return done(new Error (`Expected data, no data available`))
            } else {
                for (var i = 0; i < data.data.length; i++){
                    etaTable[i] = [data.data[i].attributes.stopID, data.data[i].attributes.arrivals[0].eta]
                }
            }
        }
        done();
    }    
    getAuthToken("https://api.oregonstate.edu/oauth2/token", myTokenCallback)
   }); 
