// console.log('Praise the Lord Jesus')
const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;
const logEvents = require('./logEvents');
const EventEmitter = require('events');
class Emitter extends EventEmitter {};

//Intialise object
const myEmitter = new Emitter();

const PORT =  process.env.PORT || 3500;

const serveFile = async (filePath, contentType, response) => {
    try {
        const data = await fsPromises.readFile(filePath, 'utf8');
        response.writeHead(200, {'Content-Type':contentType});
        response.end();
    } catch (error) {
        console.log(err);
        response.statusCode = 500;
        response.end();
    }
} 

const server = http.createServer((req,res)=>{
    console.log(req.url, req.method);

    const extension = path.extname(req.url);

    let contentType;

    switch (extension) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.jpg':
            contentType = 'image/jpeg';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.txt':
            contentType = 'text/plain';
            break;
        default:
            contentType = 'text/html';
    }


    let filePath = 
    contentType === 'text/html' && req.url === '/'
    ? path.join(__dirname, 'views', 'index.html')
    :contentType === 'text/html' && req.url.slice(-1) === '/' 
    ? path.join(__dirname, 'views', req.url)
    : path.join(__dirname, req.url);
    //Makes the .html extention not required in the browser
    if(!extension && req.url.slice(-1) !== '/') {
        filePath+='.html';
    }

    const fileExsists = fs.existsSync(filePath);

    if (fileExsists){
        //server file
        serveFile(filePath, contentType,res);
    } else {
        //404 html
        //301 redirect
        switch(path.parse(filePath).base){
            case 'old-page.html':
                res.writeHead(301, {'Location':'/new-page.html'});
                res.end();
                break;
            case 'www.page.html':
                res.writeHead(301, {'Location':'/'});
                res.end();
                break;
            default:
                //serve a 404 response
                serveFile(path.join(__dirname,'views','404.html'),'text/html',res)
        };
    }
});

server.listen(PORT, ()=>{
    console.log(`Server running on Port ${PORT}`);
})
