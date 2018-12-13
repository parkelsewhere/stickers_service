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

