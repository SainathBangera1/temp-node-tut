const {readFile,writeFile} = require('fs').promises;
//const util = require('util');
//const readFilePromise = util.promisify(readFile);
//const writeFilePromise = util.promisify(writeFile);

const start = async()=>{
    try {
        const first = await readFile('./content/first.txt','utf8');
        const second = await readFile('./content/second.txt','utf8');
        await writeFile(
        './content/result-mind-granade.txt',
        `This is awsome : ${first} \n ${second}`
        );
        console.log(first,second);
    } catch (error) {
        console.log(err)
    }
}

start();

// const start = async()=>{
//     const first = await readFilePromise('./content/first.txt','utf8');
//     const second = await readFilePromise('./content/second.txt','utf8');
//     await writeFilePromise(
//         './content/result-mind-granade.txt',
//         `This is awsome : ${first} \n ${second}`);
//     console.log(first,second);
// }

// readFile('./content/first.txt','utf8',(err,data)=>{
//     if(err){
//         return;
//     } else {
//         console.log(data);
//     }
// })
// const getText = (path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if(err){
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         })
//     })
// }