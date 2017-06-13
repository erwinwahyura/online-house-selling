var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
const m_user = require('../models/user.js')
var jwt = require('jsonwebtoken')
var bcrypt = require('bcrypt');
const saltRounds = 10;
var salt = bcrypt.genSaltSync(saltRounds);
require('dotenv').config()


var userInfo = function(req, res, next) {
  let token = req.body.token
  if(token) {
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if(!err) {
        req.body.creator = decoded.id;
        console.log('--user--', req.body.creator);
        console.log('--userinfo--->>',decoded.id);
        next()
      } else {
        res.send(err)
      }
    })
  } else {
    res.send({msg: 'Not logged in'})
  }
}

var signup = function(req, res, next){
  var hash = bcrypt.hashSync(req.body.password, salt);
  var user = new m_user({
    username:req.body.username,
    password:hash
  })
  user.save(function(err,result){
    if(!err) res.send(result)
    else res.send(err.message)
  })
}

var signin = function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;

  m_user.findOne({ username: username }, function(err, user) {
    if(err) res.send(err);
    if(user) {
      console.log(user);
      bcrypt.compare(password, user.password)
      .then(result => {
        if(result) {
          var token = jwt.sign({id: user._id, username: user.username}, process.env.SECRET);
          res.send({token, username: user.username})
        } else {
          res.send({ msg: 'Incorrect password' });
        }
      })
      .catch(err => console.log(err))
    } else res.send({ msg: 'No such user' })
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
    m_user.findOneAndUpdate({_id:id}, {$set : {username: req.body.username || result.username, password: req.body.password || result.password}}, function(err, result) {
        if(!err) res.send("update successful\n"+ result)
        else res.send(err.message)
    })
  })
}

module.exports = {
  signin,
  signup,
  remove,
  getAll,
  getById,
  edit,
  userInfo
}
