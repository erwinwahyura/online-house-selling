var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
const m_user = require('../models/user.js')
var jwt = require('jsonwebtoken')
var bcrypt = require('bcrypt');
const saltRounds = 10;
var salt = bcrypt.genSaltSync(saltRounds);

var add = function(req, res, next){
    var user = new m_user({
      username:req.body.username,
      password:req.body.password
    })
    user.save(function(err,result){
      if(!err) res.send(result)
      else res.send(err.message)
    })
}

var getAll = function(req, res, next) {
  m_user.find({}, function(err, result) {
    if(!err) res.send(result)
    else console.log(err);
  })
}

var getById = function(req, res, next) {
  let id = req.params._id
  m_user.findById({_id: id}, function(err, result) {
    if(!err) res.send(result)
    else res.send(err)
  })
}

var remove = function(req, res, next) {
  m_user.deleteOne({_id:req.params._id}, function(err, result) {
    if(!err) res.send("success deleted")
    else res.send(err)
  })
}

var edit = function(req, res, next) {
  let id = req.params._id
  m_user.findById({_id:id}, function(err, result) {
    m_user.findOneAndUpdate({_id:id},
      {$set : {username: req.body.username || result.username,
      password: req.body.password || result.password
      function(err, result) {
        if(!err) res.send("update successful\n"+ result)
        else res.send(err.message)
    })
  })
}

module.exports = {
  add,
  remove,
  getAll,
  getById,
  edit
}
