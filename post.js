//on post request, print the plaintext content to the span
const express = require('express')
const bodyParser = require("body-parser")
const fs = require('fs')
const path = require('path')
var router = express.Router();
var app = express();

//need to specify a new static directory here for css and stuff
//public serves the stuff above
app.use(express.static('/public/styles/'));
app.use(bodyParser.text());
app.use(express.urlencoded({extended: true}));

router.post('/', function(req, res) {
    res.set('Content-type', 'text/plain')
    res.send(`You sent: ${req.body} to PlantMonitor`)
    var bodyString = JSON.parse(String(req.body));
    console.log(bodyString)
    var t = bodyString.temp
    var m = bodyString.moisture
    var l = bodyString.light
    var lightRegex = /Current Light Level: [0-9]{0,}/g
    var moistureRegex = /Current Soil Moisture: [0-9]{0,}/g
    var tempRegex = /Current Room Temperature: [0-9]{0,}/g
    //process the input before changing the html file
    fs.readFile(path.join(__dirname, '/public/projects/post.html'), 'utf-8', function(err, data){
        if(err)
        {
            return console.log(err);
        }
        var result = data.replace(lightRegex, "Current Light Level: " + l)
                         .replace(moistureRegex, "Current Soil Moisture: " + m)
                         .replace(tempRegex, "Current Room Temperature: " + y);
        fs.writeFile(path.join(__dirname, '/public/projects/post.html'), result, 'utf-8', function(err)
        {
            if(err)
            {
                console.log(err);
            }
        })
    })
})

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/public/projects/post.html'))
    console.log("GETTING")
})

module.exports = router