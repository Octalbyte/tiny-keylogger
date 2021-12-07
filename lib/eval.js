let lib = require("./server")
let readline = require("readline")
let cliprefix = "JsRat>>>"
exports.run = (arg, server) => {
    
    switch (arg){
        case "list":
            lib.listSockets(server)
            break
        case "exit":
            console.log("Exiting...")
            process.exit(0)
        default:
            console.log("Sorry, this is not an executable command")
        
    }
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
       });
       
       rl.question(cliprefix, (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        rl.close()
        exports.run(arg, server)
        
       });
    

        
}