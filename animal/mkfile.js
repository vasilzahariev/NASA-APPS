var fs = require('fs');

//fs.unlink("koko.txt"); - delete file

//fs.mkdirSync("extra/test"); - create folder sinhonicli

//fs.rmdirSync("extra/test"); - delete folder sinhonicli

//fs.readFileSync('animal.odt','utf8'); - read file sinhonicli

//fs.writeFileSync("test/test.txt","koko e tuk"); - write file sinhonicli

var readMe = fs.readFileSync('animal.txt','utf8');
var name = ""+readMe.slice(2,readMe.indexOf(' -')-1)+".txt";

console.log(name);

fs.writeFile("test.txt",readMe.slice(readMe.indexOf(' -')+3,readMe.indexOf('2.')));
