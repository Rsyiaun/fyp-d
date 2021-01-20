var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});
app.get('/hello-world',(req,res)=>{
  res.send({
    "Message":"Hello"
  })
})


app.get('/name',(req,res)=>{
  res.send({
    message:`Hello ${req.params.name}`,
  })
})
// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
