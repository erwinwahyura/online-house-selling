var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var houseSchema = new Schema({
  judul: {
    type: String,
    required: [true, 'Fill the title please!']
  },
  deskripsi: {
    type: String,
    required: [true, 'Fill the title please!']
  }
  tags: {
    type: String,
    required: [true, 'Fill the title please!']
  },
  lokasi: {
    type: String,
    required: [true, 'Fill the title please!']
  },
  kota: {
    type: String,
    required: [true, 'Fill the title please!']
  }
  harga: {
    type: Number,
    required: [true, 'Fill the title please!']
  },
  luas_tanah: {
    type: Number,
    required: [true, 'Fill the title please!']
  },
  lantai: {
    type: String,
    required: [true, 'Fill the title please!']
  },
  kamar_mandi: {
    type: String,
    required: [true, 'Fill the title please!']
  },
  luas_bangunan: {
    type: Number,
    required: [true, 'Fill the title please!']
  },
  kamar_tidur: {
    type: String,
    required: [true, 'Fill the title please!']
  },
  sertifikasi: {
    type: String,
    required: [true, 'Fill the title please!']
  },
  nama: {
    type: String,
    required: [true, 'Fill the title please!']
  },
  phone: {
    type: String,
    required: [true, 'Fill the title please!']
  },
  createdAt: Date,
  updatedAt: Date
});

var house = mongoose.model('House', houseSchema);

module.exports = house
