import {Controller} from "../controller/Controller.mjs";
import express from "express";

export class Router
{
    constructor() {
        this.controller=new Controller();
        this.router=express.Router();
    }

    route()
    {
        this.router.get('/',this.controller.responseWithHome)
        this.router.get('/join',this.controller.login)
        //this.router.use( express.static('./public'));
        return this.router
    }
}