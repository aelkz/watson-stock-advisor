//---CONFIGURE AUTHENTICATION HERE--------------------
var DISCOVERY_KEY      = 'XXXXXXXX';
var DISCOVERY_PASSWORD = 'YYYYYYYY';
var DISCOVERY_VERSION   = 'v1'
var DISCOVERY_VERSION_DATE = '2017-11-07'
var ENV_ID = 'system'
//----------------------------------------------------
var Discovery = require('watson-developer-cloud/discovery/v1');
var discovery = new Discovery({
   username: DISCOVERY_KEY,
   password: DISCOVERY_PASSWORD,
   version: DISCOVERY_VERSION,
   version_date: DISCOVERY_VERSION_DATE
 });
 
//retrieving titles for 5 documents for 'IBM Watson'

function query(callback) {
    discovery.query({ environment_id: ENV_ID, collection_id: 'news-en', query: 'IBM Watson', count:5, return:'title' }, function(error, data) {
        if (typeof callback == "function") {
            callback(error, data);
        }
    });
}

module.exports = {
    query : query
}
