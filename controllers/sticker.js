'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/stickerService');

module.exports.stickersPOST = function stickersPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.stickersPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEvents =  function getEvents (req, res, next) {
  var $page = req.swagger.params['$page'].value || null;
  var lat = req.swagger.params['lat'].value || null;
  var lon = req.swagger.params['lon'].value || null;
  var date = req.swagger.params['date'].value || null;
  var id = req.swagger.params['id'].value || null;
  var $size = req.swagger.params['$size'].value || null;
  var postcode = req.swagger.params['postcode'].value || null;
  var sticker = req.swagger.params['sticker'].value || null;
  var $sort = req.swagger.params['$sort'].value || null;

  
  var response =  Wildlifelog.getEvents($page,lat,lon,date,id,$size,postcode,sticker,$sort)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, utils.respondWithCode(response.statusCode, response));
    });

};
