let errhandle = require("./errhandle")
let onclose = require("./onclose")
exports.main = function(socket) {
    socket.on('end', () => {onclose.main(socket)});
    socket.on('error', (error) => {errhandle.main(error, socket)});
    console.log('A new connection has been established.');
    socket.write('Hello, client.');
    socket.on('data', function(chunk) {
        console.log(String(chunk))
    });
    
}
exports.listSockets = (server) => {
    server.getConnections((err, count)=>{
        if (err) errhandle.main(err)
        console.log(count)

    })
    }
