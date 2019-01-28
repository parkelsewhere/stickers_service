'use strict';

var utils = require('../utils/writer.js');
var Wildlifelog = require('../service/WildlifelogService');

module.exports.deleteEventsEventid = function deleteEventsEventid (req, res, next) {
  var eventid = req.swagger.params['eventid'].value;
  Wildlifelog.deleteEventsEventid(eventid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, utils.respondWithCode(response.statusCode, response));
    });
};

module.exports.deleteThingsThingid = function deleteThingsThingid (req, res, next) {
  var thingid = req.swagger.params['thingid'].value;
  Wildlifelog.deleteThingsThingid(thingid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, utils.respondWithCode(response.statusCode, response));
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
  var thing = req.swagger.params['thing'].value || null;
  var $sort = req.swagger.params['$sort'].value || null;

  
  var response =  Wildlifelog.getEvents($page,lat,lon,date,id,$size,postcode,thing,$sort)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, utils.respondWithCode(response.statusCode, response));
    });

};

module.exports.getEventsEventid = function getEventsEventid (req, res, next) {
  var eventid = req.swagger.params['eventid'].value;
  Wildlifelog.getEventsEventid(eventid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, utils.respondWithCode(response.statusCode, response));
    });
};

module.exports.getThings = function getThings (req, res, next) {
  var $size = req.swagger.params['$size'].value || null;
  var id = req.swagger.params['id'].value || null;
  var $sort = req.swagger.params['$sort'].value || null;
  var name = req.swagger.params['name'].value || null;
  var $page = req.swagger.params['$page'].value || null;
  Wildlifelog.getThings($size,id,$sort,name,$page)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, utils.respondWithCode(response.statusCode, response));
    });
};

module.exports.getThingsThingid = function getThingsThingid (req, res, next) {
  var thingid = req.swagger.params['thingid'].value;
  Wildlifelog.getThingsThingid(thingid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, utils.respondWithCode(response.statusCode, response));
    });
};

module.exports.postEvents = function postEvents (req, res, next) {
  var body = req.swagger.params['body'].value;

  var date = body.date || null;
  var lat = body.lat || null;
  var lon = body.lon || null;
  var postcode = body.postcode || null;
  var thing = body.thing || null;


  Wildlifelog.postEvents(date, lat, lon, postcode, thing)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, utils.respondWithCode(response.statusCode, response));
    });
};

module.exports.postThings = function postThings (req, res, next) {
  var body = req.swagger.params['body'].value;
  var name = body.name || null;

  Wildlifelog.postThings(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, utils.respondWithCode(response.statusCode, response));
    });
};

module.exports.putEventsEventid = function putEventsEventid (req, res, next) {
  var id = req.swagger.params['eventid'].value;
  var body = req.swagger.params['body'].value;

  var date = body.date || null;
  var lat = body.lat || null;
  var lon = body.lon || null;
  var postcode = body.postcode || null;
  var thing = body.thing || null;


  Wildlifelog.putEventsEventid(id, date, lat, lon, postcode, thing)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, utils.respondWithCode(response.statusCode, response));
    });
};

module.exports.putThingsThingid = function putThingsThingid (req, res, next) {
  var id = req.swagger.params['thingid'].value;
  var body = req.swagger.params['body'].value;
  var name = body.name || null;

  Wildlifelog.putThingsThingid(id,name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, utils.respondWithCode(response.statusCode, response));
    });
};
