'use strict';


/**
 * Create Stickers
 *
 * body Body 
 * returns inline_response_200
 **/
exports.stickersPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "stickers" : [ {
    "my_reference" : "my_reference",
    "sticker_id" : "sticker_id",
    "sticker_url" : "sticker_url"
  }, {
    "my_reference" : "my_reference",
    "sticker_id" : "sticker_id",
    "sticker_url" : "sticker_url"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

exports.getEvents = function($page,lat,lon,date,id,$size,postcode,sticker,$sort) {
  
  return new Promise(function(resolve, reject) {
        database.getEvents(id, date, lat, lon, postcode, sticker, $page, $size, $sort)
        .then(resolve)
        .catch(function(e){
           switch(e.statusCode){
             case database.errors.DATABASE_ERROR:
             // remove database specific error - will leak information.
             reject (errApi.create500Error("Something went wrong with the database"));
             break;
             case database.errors.INTERNAL_ERROR:
             reject(errApi.create500Error(e.message));
             break;
             case database.errors.PARAMETER_ERROR:
             reject(errApi.create400Error(e.message));
             break;
           }
        })
  });
}

