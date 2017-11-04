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


















/*  -=-=-=-=-=-=-=-=-   404 error-handler  -=-=-=-=-=-=-=-=- */
app.use(function(req,res) {
  res.send(`that's a 404, yo!`)
})

/*  -=-=-=-=-=-=-=-=-  end of server file  -=-=-=-=-=-=-=-=- */
app.listen(8080, function() {
  console.log('running on port 8080')
})
