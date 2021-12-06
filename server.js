let net = require("net")
let crypto = require("crypto")
let fs = require("fs")
let server = net.createServer()
let serverlib = require("./lib/server")
server.on('connection', serverlib.main);
let banner = require("node-banner")
console.clear()

let rawconf;
let main = async()=>{
    await banner("JsRat", "Your favorite remote administration tool \n", "red", "white")
    
try {
    rawconf = fs.readFileSync(".data.json")
}catch{
    console.log(".data.json not found, using default configurations...")
    rawconf = fs.readFileSync("standard.json")
}
let conf = JSON.parse(rawconf)
//console.log(conf)
server.listen(conf.port, () => {console.log("Server started")})

}

main()