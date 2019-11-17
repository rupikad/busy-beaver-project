//Declaring variables//
const JSAlert = require("js-alert");
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const XMLHttpRequest2 = require("xmlhttprequest").XMLHttpRequest;
token = [];
GETroutes_response = null;

// Constructing an AJAX HTTP request for bearer token request// 
var request = new XMLHttpRequest();
var APIrequest = new XMLHttpRequest2();
var response; 

//Beaver Bus Bearer Token Request// 
request.onreadystatechange = function () {
    if (this.readyState==4 && this.status==200) {
        response = JSON.parse(this.responseText);  
        if (response.access_token !== 'undefined'){
            token.push(response.access_token);  
        
            //Beaver Bus API call//
            //Sending header information with API endpoint request //
            APIrequest.open("GET", "https://api.oregonstate.edu/v1/beaverbus/routes", true);
            //JSAlert.alert(APIrequest.setRequestHeader('Authorization', 'Bearer ' + token));
            APIrequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            APIrequest.setRequestHeader("Accept","application/json");

            APIrequest.onreadystatechange= function () {
                if (APIrequest.readyState==4 && this.status==200) {
                    if (JSON.parse(APIrequest.responseText) !== 'undefined'){
                        GETroutes_response = JSON.parse(APIrequest.responseText);
                        data_to_table(GETroutes_response);
              }
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
    // End token request // 

function data_to_table(){ //Table on html table won't update...
    let txt = "";
    JSAlert.alert('Here be the data ' + GETroutes_response);
    txt += "<table id='table' align='center' border='1px'>";
    for (var i = 0; i < GETroutes_response.data.length; i++) {
        txt += "<tr>"
        txt += "<th>" + 'Route ID' + "</th>"
        txt += "<th>" + 'Stop ID' + "</th>"
        txt += "<th>" + 'Stop description' + "</th>"
        txt += "</tr>"

           for (var j = 0; j < GETroutes_response.data[i].attributes.stops.length; j++) {
            txt += "<td>" + GETroutes_response.data[i].id  + "</td>";
                txt += "<td>" + GETroutes_response.data[i].attributes.stops[j].stopID + "</td>";
                txt += "<td>" + GETroutes_response.data[i].attributes.stops[j].description + "</td>";
                txt += "</tr>"
        }                
    }
    txt += "</table>"   
document.getElementById('GETroutes_response').innerHTML = txt;  
}
