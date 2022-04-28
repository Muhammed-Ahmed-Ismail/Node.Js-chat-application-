import moment from "moment";

export class MessageWrapper
{
    constructor(msg) {
        this.time=moment().format('h:m A')
        this.text=msg.text;
        this.username=msg.username;
    }
}
