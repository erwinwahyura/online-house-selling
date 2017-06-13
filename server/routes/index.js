var express = require('express')
var router = express.Router()
var c_house = require('../controllers/c_house')
var c_user = require('../controllers/c_user')

router.get('/', function(req, res) {
  res.send('alive')
})
//house
router.post('/api/house', c_house.add)
router.get('/api/house', c_house.getAll) //done get user
router.get('/api/house/:_id', c_house.getById) //done
router.put('/api/house/:_id', c_house.edit) //done edit user hash password
router.delete('/api/house/:_id', c_house.remove) //done

//user
router.post('/api/user', c_user.signin)
router.post('/api/user', c_user.signup)
router.get('/api/user', c_user.getAll) //done get user
router.get('/api/user/:_id', c_user.getById) //done
router.put('/api/user/:_id', c_user.edit) //done edit user hash password
router.delete('/api/user/:_id', c_user.remove) //done


module.exports = router
