var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');


var readMe=[],anmName='',vednug = true,j=1,readSelectedFile='';

var usersConnected = 0;
var isConnected = [];
var nomAnm;

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

//javascript

app.get('/js/app.js', function (req, res) {
  res.sendFile(__dirname + "/js/app.js");
});
app.get('/js/util.js', function (req, res) {
  res.sendFile(__dirname + "/js/util.js");
});
app.get('/js/countries.js', function (req, res) {
  res.sendFile(__dirname + "/js/countries.js");
});
app.get('/js/gl-matrix.js', function (req, res) {
  res.sendFile(__dirname + "/js/gl-matrix.js");
});

//css

app.get('/css/style.css', function (req, res) {
  res.sendFile(__dirname + "/css/style.css");
});

//shaders

app.get('/shaders/shader.vs.glsl', function (req, res) {
  res.sendFile(__dirname + "/shaders/shader.vs.glsl");
});
app.get('/shaders/shader.fs.glsl', function (req, res) {
  res.sendFile(__dirname + "/shaders/shader.fs.glsl");
});

//jsons

app.get('/jsons/earth1.json', function (req, res) {
  res.sendFile(__dirname + "/jsons/earth1.json");
});

//imgs

app.get('/imgs/earth1.jpg', function (req, res) {
  res.sendFile(__dirname + "/imgs/earth1.jpg");
});
app.get('/imgs/earth2.jpg', function (req, res) {
  res.sendFile(__dirname + "/imgs/earth2.jpg");
});
app.get('/imgs/earth6m.jpg', function (req, res) {
  res.sendFile(__dirname + "/imgs/earth6m.jpg");
});

// for(var i = 104;i<208;i++){
   app.get('/imgs/animals/animal'+nomAnm+'.jpg', function (req, res) {
     res.sendFile(__dirname + '/imgs/animals/animal'+nomAnm+'.jpg');
   });
// }

app.get('/imgs/Richness_map_of_impacted_mammals.jpg', function (req, res) {
  res.sendFile(__dirname + "/imgs/Richness_map_of_impacted_mammals.jpg");
});

//htmls

app.get('/whereAmI.html', function (req, res) {
  res.sendFile(__dirname + "/whereAmI.html");
});



io.on('connection',function (socket) {
  let currentId;
        currentId = usersConnected++;
    isConnected[currentId] = true;


    socket.on('isItClicked',function (success) {
          socket.emit('unLockButts',success);
    });


    for(var i=0;i<414;i++){
      readMe[i] = ""+fs.readFileSync('animals/animal'+(i+1)+'.txt','utf8');
      anmName = ""+readMe[i].slice(readMe[i].indexOf('/')+1,readMe[i].indexOf('|'));
      //console.log(i,j,anmName);
      socket.emit('anmName',anmName,i);
      if(j<414){
      j++;
    }
    }

    socket.on('infoAnmName', function (anmNom) {
      if(anmNom != -1){
      readSelectedFile = ""+fs.readFileSync('animals/animal'+anmNom+'.txt','utf8');
      anmName = readSelectedFile.slice(readSelectedFile.indexOf('/')+1,readSelectedFile.indexOf('|'));
      //console.log(anmName);
      socket.emit('h1Name',anmName);
    }
    });


    socket.on('disconnect', function(){
        isConnected[currentId] = false;
    });
});



http.listen(1113, function() {
  console.log('Server is started.');
});
