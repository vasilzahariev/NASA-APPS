var fs = require('fs');


var readMe=[];

for(var i=1;i<i<415;i++){
  readMe[i-1] = fs.readFileSync('animal'+i+'.txt','utf8');
}
