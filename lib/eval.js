let lib = require("./server")
let readline = require("readline")
let cliprefix = "JsRat>>>"
let csocket = undefined
exports.run = (arg, server) => {
    
    switch (arg){
        case "list":
            lib.listSockets(server)
            break
        
        case "exit":
            console.log("Exiting...")
            process.exit(0)
        case "log":

            break
        default:
            console.log("Sorry, "+arg+ " is not an executable command")
        
    }
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
       });
       
       rl.question(cliprefix, (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        let ans = answer
        rl.close()
        exports.run(ans, server)
        
       });
    

        
}