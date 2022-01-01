const http = require('http');

const server = http.createServer((req,res)=>{
    // console.log(req);
    if(req.url === '/'){
        res.end('welcome to our homepage');
    }
    if(req.url === '/about'){
        res.end('Here is the About Page');
    }
    res.end(`
    <h1>OOps!!!</h1>
    <p>We can't find the requested page</p>
    <a href='/'>Back</a>
    `);
    
})

server.listen(5000)