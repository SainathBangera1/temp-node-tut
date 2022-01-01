const {readFileSync,writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first,'\n',second);

writeFileSync('./content/result.txt',`Here is the result of files : \n ${first} \n ${second}`);
writeFileSync('./content/result.txt','\nThis is the apendded statement',{flag:'a'});