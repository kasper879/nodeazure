//Load express module with `require` directive
var express = require('express')
var app = express()

var port = process.env.PORT || 1337;

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Hello World!')
})

//Launch listening server on port 8081
app.listen(port, function () {
  console.log('app listening on port 1337!')
})
