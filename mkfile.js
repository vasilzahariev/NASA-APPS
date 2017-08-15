var fs = require('fs');

//fs.unlink("test.txt"); - delete file

//fs.mkdirSync("extra/test"); - create folder sinhonicli

//fs.rmdirSync("extra/test"); - delete folder sinhonicli

//fs.readFileSync('animal.odt','utf8'); - read file sinhonicli

//fs.writeFileSync("test/test.txt","koko e tuk"); - write file sinhonicli

var readMe = fs.readFileSync('animal.txt','utf8');

var ch = 1;

var name = ""+readMe.slice(readMe.indexOf(''+ch+'.'),readMe.indexOf('/')-1);

for(var ch2=2;ch<415;ch++){


ch2=ch+1;

fs.writeFile("animals/animal"+ch+".txt",readMe.slice(readMe.indexOf('/'),readMe.indexOf(''+ch2+'.')));


console.log(name);

readMe = readMe.slice(readMe.indexOf(''+ch2+'.'));
}
