var Cancer = require('./Cancer');
//var mongoose = require('mongoose');

module.exports = {

  create: function(req, res) {
    var newCancer = new Cancer(req.body);
    newCancer.save(function(err, result){
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  },

  read: function(req, res) {
    Cancer.find(req.query)
    .exec(function(err, result){
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  },

  update: function(req, res) {
    Cancer.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  },

  delete: function(req, res) {
    Cancer.findByIdAndRemove(req.params.id, function(err, result){
      if (err) return res.status(500).send(err);
      else res.send(result);
      });
  }
};
