//import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";
import {ChatHandeler} from "./modules/ChatHandeler.mjs";
const socket = io('localhost:8000');
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
console.log(socket)
let username = params.username;
ChatHandeler.socketInitialiser(socket,username)
const chatHandeler=new ChatHandeler()
chatHandeler.listen()
document.getElementById('send-btn').
addEventListener('click',(e)=>{
    e.preventDefault();
    let messageField=document.getElementById('msg');
    let message=messageField.value;
    chatHandeler.sendMessage(message)
})
