const express = require('express')
const app = express()

//serves all the static content
app.use(express.static(__dirname))

//runs the app frfr
app.listen(80, () => {
    console.log("listening on 80");
});