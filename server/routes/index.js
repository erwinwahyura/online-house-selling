var express = require('express')
var router = express.Router()
var c_house = require('../controllers/c_house')

router.get('/', function(req, res) {
  res.send('alive')
})

router.post('/api/house', c_house.add)
router.get('/api/house', c_house.getAll) //done get user
router.get('/api/house/:_id', c_house.getById) //done
router.put('/api/house/:_id', c_house.edit) //done edit user hash password
router.delete('/api/house/:_id', c_house.remove) //done

module.exports = router
