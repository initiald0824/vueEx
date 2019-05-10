var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

router.get('/getUserInfo', function (req, res, next) {
  res.send('success')
})

router.post('/formData', function (req, res, next) {
  console.log(req.body)
  if (req.body.name !== 'david') {
    res.status(401).send({
      name: 'wrong name'
    })
  } else {
    res.send('success')
  }
})

module.exports = router
