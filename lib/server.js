let errhandle = require("./errhandle")
let onclose = require("./onclose")
exports.socks = {}
exports.main = function(socket) {
    exports.socks[socket.remoteAddress] = socket
    socket.on('end', () => {
        exports.socks[socket.remoteAddress] = undefined
        onclose.main(socket)
    });
    socket.on('error', (error) => {errhandle.main(error, socket)});
    console.log('\n A new connection has been established.');
    socket.write('Hello, client.');
    socket.on('data', function(chunk) {
        console.log("\nCLIENT " + socket.remoteAddress + " SENT: "+ String(chunk))
    });
    
}
exports.listSockets = (server) => {
    server.getConnections((err, count)=>{
        if (err) errhandle.main(err)
        console.log("We have "+ count+ " connections")
        for (i in exports.socks){
        console.log(i)
         }
    })
    }
