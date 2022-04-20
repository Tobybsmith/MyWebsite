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
app.use(express.json())

router.post('/', function(req, res) {
    res.set('Content-type', 'application/json')
    res.send(`You sent: ${req.body} to PlantMonitor`)
    console.log(req.body)
    //write all the before, then the post, then the after to a HTML file called post.html
    //and send that on a get request
    //open the html file:
    /*fs.readFile("./public/projects/post.html", 'utf-8', function(err, data) {
        if(err)
        {
            return console.log(err)
        }
        var result = data.replace(/POST REQ [0-9]{0,}/g, "POST REQ " + req.body);
        fs.writeFile("./public/projects/post.html", result, 'utf-8', function(err){
            if (err) return console.log(err);
        });
    })*/
    
})

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/public/projects/post.html'))
    console.log("GETTING")
})

module.exports = router