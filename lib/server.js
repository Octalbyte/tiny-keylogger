let errhandle = require("./errhandle")
let onclose = require("./onclose")
exports.socks = []
exports.main = function(socket) {
    exports.socks.push(socket)
    socket.on('end', () => {
        for (i in exports.socks){
            if (exports.socks[i] == socket){
                exports.socks[i] = undefined
            }
        }
        
        onclose.main(socket)
    });
    socket.on('error', (error) => {
        if (error.code === "ECONNRESET"){
            console.log("Connection was reset with: "+ socket.remoteAddress)
        }else {
            errhandle.main(error)
        }
    });
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
        if(exports.socks[i]){
            console.log(i+": "+exports.socks[i].remoteAddress)
        }
         }
    })
    }
