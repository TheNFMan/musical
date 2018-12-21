const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const express = require('express');
const axios = require('axios');
const request = require('request');
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/main.html');
});
app.use(express.static('public'));
var frequencySum = 0;
var dataTotal = 0;
const apiKey = '1617ee23-7213-47df-a3b7-03b4d2113f4a';
setInterval(function(){
  frequencySum =0;
  dataTotal = 1;
}, 250);


var freq  =   'f600';//'f'+frequencySum/dataTotal;





frequencySum = 0;
io.on('connection', function(socket){
socket.on('synth',function(data){

});
  socket.on('user',function(data){
    socket.user = data;
    socket.broadcast.emit('user', data);
  });
  socket.on('toneInfo', function(data){

    socket.broadcast.emit('toneInfo', data);
    dataTotal++;
    frequencySum += data.frequency;






  });

});
/*
setInterval(function(){
  var a = "a" + parseFloat(Math.random());
  var f = "f" + frequencySum/dataTotal;
  console.log(a);
  console.log(f);
  axios.post('http://170.170.16.34/body',{
    f: f,
    a: a

});
},5000)*/



http.listen(3000, function() {
  console.log('listing on port 80');
});
