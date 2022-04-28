import express from 'express'
import http from 'http'
import {Server}  from 'socket.io'
import {Router} from "../routes/Router.mjs";
import * as path from "path";
import {ChatController} from "../controller/ChatController.mjs";

export class HttpServer
{
    constructor() {
        this.app=express();
        this.server=http.createServer(this.app);
       // this.controller= new Controller();
        this.router=new Router()
        this.__dirname=path.resolve()
        this.io = new Server(this.server)
        this.chatController=new ChatController()
        ChatController.ioInitialiser(this.io)

    }
    startServer()
    {
        let routes=this.router.route();
        this.app.use(express.static(path.join(this.__dirname, 'public')));
        this. app.use(express.urlencoded({ extended: false }))
        this.app.use(express.json())
        this.app.set('view engine', 'ejs');
        this.app.use(routes)
        this.server.listen(8000)
        this.chatController.listen()
       /* this.io.on('connection',(socket)=>{
            socket.on('message',(msg)=>{
                console.log(msg)
            })

        })*/

    }

}