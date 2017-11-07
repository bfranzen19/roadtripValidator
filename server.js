const express = require('express')
const app = express()
const request = require('request')
const bodyParser = require('body-parser')
const multer = require('multer')
const child_process = require('child_process');

// let uploads = multer({dest: './public/uploads'})

// bodyParser
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

// access to public dir
app.use(express.static('./public'))







app.get('/', function(req, res) {
  res.sendFile('./public/html/index.html', {root: './'})
  console.log('sent index.html from /')
})

app.get('/cargo-validator', function(req, res) {
  res.sendFile('./public/html/index.html', {root: './'})
  console.log('sent index.html from /cargo-validator')
})



app.post('/validate', function(req,res) {
  console.log('POST sent')
  // var dataObj = JSON.parse(req.body)
  // console.log('new obj:', dataObj)
  console.log('body: ' + JSON.stringify(req.body))
  var cost = req.body.cost
  var weight = req.body.weight

  console.log('cost: ',cost, 'weight: ', weight)

  if(cost < 1 || weight < 1) {
    res.send('please add items')
    console.log('response: please add items.')
  } else if (cost > 199 || weight > 199) {
    res.send('over weight / budget. please remove items.')
    console.log('response: over weight / budget. please remove items.')
  } else {
    res.send('cargo is valid!')
    console.log('response: cargo is valid!')
  }


})
















/*  -=-=-=-=-=-=-=-=-   404 error-handler  -=-=-=-=-=-=-=-=- */
app.use(function(req,res) {
  res.send(`that's a 404, yo!`)
})

/*  -=-=-=-=-=-=-=-=-  end of server file  -=-=-=-=-=-=-=-=- */
app.listen(8080, function() {
  console.log('running on port 8080')
})
