let errhandle = require("./errhandle")
let onclose = require("./onclose")
exports.main = function(socket) {
    socket.on('end', () => {onclose.main(socket)});
    socket.on('error', () => {errhandle.main(socket)});
    console.log('A new connection has been established.');
    socket.write('Hello, client.');
    socket.on('data', function(chunk) {
        //console.log(String(chunk))
    });
    
}