import {Message} from "./Message.mjs";
export class ChatHandeler
{
    static socket
    static userName
    static socketInitialiser(__socket,__nickName)
    {
        ChatHandeler.socket=__socket
        ChatHandeler.userName=__nickName
    }
    listen()
    {
        ChatHandeler.socket.on('receive',this.receiveMessage)
        ChatHandeler.socket.on('connect',this.sendHelloEveryone)
    }
    sendMessage(msg)
    {

       ChatHandeler.socket.emit('message',ChatHandeler.wrapMessage(msg));
    }
    receiveMessage(msg)
    {
        new Message(msg,ChatHandeler.userName)
    }
    sendHelloEveryone(){
        console.log("dsdsd")
        ChatHandeler.socket.emit('helloEveryone',ChatHandeler.wrapMessage('Hi!'))
    }

   static wrapMessage(msg)
    {
        return{
            username: ChatHandeler.userName,
            text: msg
        }
    }
}