
export class Controller
{
    constructor() {
    }
    responseWithHome(req,res)
    {
        res.render('index')
    }

    login(req,res)
    {
        let data=req.body;
        res.render('chat_room')

    }


}