//on post request, print the plaintext content to the span
const express = require('express')
const bodyParser = require("body-parser")
const fs = require('fs')
const path = require('path')
const parser = require('node-html-parser')
var router = express.Router();
var app = express();
var root = parser.parse(fs.readFileSync("./public/projects/post.html"))

//need to specify a new static directory here for css and stuff
//public serves the stuff above
app.use(express.static('/public/styles/'));
app.use(bodyParser.text());

router.post('/', function(req, res) {
    res.set('Content-type', 'text/plain')
    res.send(`You sent: ${req.body} to Express`)
    console.log(req.body)
    //does not dynamically update HTML as expected
    //probably need some kind of AJAX call here
    //to dynamically update content w/o refresh
    root.getElementById("post").innerText = req.body
})

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/public/projects/post.html'))
    console.log("GETTING")
})

module.exports = router