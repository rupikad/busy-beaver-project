let routes = require('./callback_export_json');
console.log(routes.getAuthToken("https://api.oregonstate.edu/oauth2/token", routes.myTokenCallback))
// import object1 from './integrating_API_callback.js';
// console.log(object1)