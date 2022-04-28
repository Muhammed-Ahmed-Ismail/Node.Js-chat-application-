import {MessageWrapper} from "../utils/MessageWrapper.mjs";
export class ChatController
{
    static io
    constructor(io) {
        this.io=io;
    }
    static ioInitialiser(__io)
    {
        ChatController.io=__io;
    }
    listen()
    {
        ChatController.io.on('connection',(clientSocket)=>{
           // console.log(clientSocket.id)
            clientSocket.on('message',this.prodcastMessage)
            clientSocket.on('helloEveryone',(msg)=>{
                console.log(msg)
                clientSocket.broadcast.emit('receive',new MessageWrapper(msg))
            })
        })

    }
    prodcastMessage(msg)
    {

        ChatController.io.emit('receive',new MessageWrapper(msg))
        console.log(msg)
    }
}