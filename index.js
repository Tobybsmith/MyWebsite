const express = require('express')
const app = express()

const bodyParser = require("body-parser")
const router = express.Router()


//serves all the static content
app.use(express.static(__dirname))
//post request handled by body-parser, have to enable plaintext mode
app.use(bodyParser.text());

//log contents of any post request to the terminal
app.post('/', function (req, res) {
    res.set('Content-type', 'text/plain')
    res.send(`You sent: ${req.body} to Express`)
    console.log(req.body)
})

//basic get
app.get('/', (req, res) => {
    res.send('hello world')
  })

//runs the app frfr
app.listen(80, () => {
    console.log("listening on 80");
});