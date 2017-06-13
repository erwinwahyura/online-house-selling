var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
const m_house = require('../models/house.js')

var add = function(req, res, next){
    var house = new m_house({
      judul:req.body.judul,
      deskripsi:req.body.deskripsi,
      tags: req.body.tags,
      lokasi: req.body.lokasi,
      kota: req.body.kota,
      harga: req.body.harga,
      luas_tanah: req.body.luas_tanah,
      lantai: req.body.lantai,
      kamar_mandi: req.body.kamar_mandi,
      luas_bangunan: req.body.luas_bangunan,
      kamar_tidur: req.body.kamar_tidur,
      sertifikasi: req.body.sertifikasi,
      nama: req.body.nama,
      phone: req.body.phone,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    house.save(function(err,result){
      if(!err) res.send(result)
      else res.send(err.message)
    })
}

var getAll = function(req, res, next) {
  m_house.find({}, function(err, result) {
    if(!err) res.send(result)
    else console.log(err);
  })
}

var getById = function(req, res, next) {
  let id = req.params._id
  m_house.findById({_id: id}, function(err, result) {
    if(!err) res.send(result)
    else res.send(err)
  })
}

var remove = function(req, res, next) {
  m_house.deleteOne({_id:req.params._id}, function(err, result) {
    if(!err) res.send("success deleted")
    else res.send(err)
  })
}

var edit = function(req, res, next) {
  let id = req.params._id
  m_house.findById({_id:id}, function(err, result) {
    m_house.findOneAndUpdate({_id:id},
      {$set : {judul: req.body.judul || result.judul,
      deskripsi: req.body.deskripsi || result.deskripsi,
      tags: req.body.tags || result.tags,
      lokasi: req.body.lokasi || result.lokasi,
      kota: req.body.kota || result.kota,
      harga: req.body.harga || result.harga,
      luas_tanah: req.body.luas_tanah || result.luas_tanah,
      lantai: req.body.lantai || result.lantai,
      kamar_mandi: req.body.kamar_mandi || result.kamar_mandi,
      luas_bangunan: req.body.luas_bangunan || result.luas_bangunan,
      kamar_tidur: req.body.kamar_tidur || result.kamar_tidur,
      sertifikasi: req.body.sertifikasi || result.sertifikasi,
      nama: req.body.nama || result.nama,
      phone: req.body.phone || result.phone,
      updatedAt: new Date()}},
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
