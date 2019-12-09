
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

it('token auth test', (done) => {  
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

    function myTokenCallback(token_data){
        var result = token_data.access_token;
        if (result == undefined) {  
            return done(new Error(`Expect token, got undefined`));  
          }  
        done();
    }
     
    getAuthToken("https://api.oregonstate.edu/oauth2/token", myTokenCallback)
   }); 
