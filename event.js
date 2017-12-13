let EventEmitter = require('events').EventEmitter;
let  event = new EventEmitter();
console.log('progrom start');
event.on('some_event', (res) => {
    console.log(res); //参数（事件出发时的传入参数）
    console.log('some_event 事件触发');
});
setTimeout(() => {
    event.emit('some_event', '参数');
}, 2000);

console.log('program end');

