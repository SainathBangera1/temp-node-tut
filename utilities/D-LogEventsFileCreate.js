const logEvents = require('./utilities/C-logEvents');
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {};

//Intialise object
const myEmitter = new MyEmitter();

//add listner for the log event
myEmitter.on('log', (msg)=>logEvents(msg));

setTimeout(()=>{
    //Emit Event
    myEmitter.emit('log','log event emitted!!!');
},2000);