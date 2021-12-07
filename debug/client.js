/* 
Use this to test the server
*/
const Net = require('net');
const port = 8080;
const host = 'localhost';
const client = new Net.Socket();
client.connect({ port, host}, function() {
    console.log('TCP connection established with the server.');
    console.log("Press Ctrl+C to exit.")
    client.write('Hello, server.');
})
client.on('data', function(chunk) {
    console.log(`Data received from the server: ${chunk.toString()}.`);
});

client.on('end', function() {
    console.log('Requested an end to the TCP connection');
});
let end = () => {
    client.end()
    console.log("exiting...")
    process.exit(0)
}

process.on("SIGINT", end)