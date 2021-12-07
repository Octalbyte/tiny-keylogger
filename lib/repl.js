let ask = require("prompt-sync")()
let lib = require("./server")
exports.start = (server)=>{
    let rl = "JsRat>>> "
    while (true){
    let command = ask(rl)
    switch(command){
        case "list":
            lib.listSockets(server)
            break
        case "exit":
            console.error("Exiting...")
            process.exit(0)
        default:
            console.log(
                "This command is not available"
            )

    }
}
}