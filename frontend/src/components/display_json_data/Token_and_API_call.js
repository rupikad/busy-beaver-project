const JSAlert = require("js-alert");
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const XMLHttpRequest2 = require("xmlhttprequest").XMLHttpRequest;
token = [];

var response; 

// Constructing an AJAX HTTP request for bearer token request 
var request = new XMLHttpRequest();
var APIrequest = new XMLHttpRequest2();
var APIresponse = null; 

request.onreadystatechange = function () {
    if (this.readyState==4 && this.status==200) {
        response = JSON.parse(this.responseText);  
        if (response.access_token !== 'undefined'){
            token.push(response.access_token);  
            bearer_token = JSAlert.alert('Bearer token: ' + token);
            //console.log(bearer_token);
        
            //Beaver Bus API call//
            //Sending header information with API endpoint request
            APIrequest.open("GET", "https://api.oregonstate.edu/v1/beaverbus/routes", true);
            JSAlert.alert(APIrequest.setRequestHeader('Authorization', 'Bearer ' + token));
            APIrequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            APIrequest.setRequestHeader("Accept","application/json");

            APIrequest.onreadystatechange= function () {
                if (APIrequest.readyState==4) {
                    APIresponse = JSON.parse(APIrequest.responseText);
                    console.log(APIresponse);
                }
            }
            APIrequest.send(null);
            // End API call//
        }
    }
    }   
    //Sending header information with token request 
    request.open("POST", "https://api.oregonstate.edu/oauth2/token", true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    request.setRequestHeader("Accept","application/json");
    request.send("grant_type=client_credentials&client_id=v7pwff8fZLOgFsHMIfSVU8U3jWnVt1IM&client_secret=vmWQMA9h2YOf4J6l");
    
