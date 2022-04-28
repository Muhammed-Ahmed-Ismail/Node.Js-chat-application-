export class Message
{
    constructor(message,myUsername) {
        this.text=message.text
        this.time=message.time
        this.userame=message.username
        this.myUsername=myUsername
        this.render()
    }
    render()
    {
        let chatScreen=document.getElementsByClassName('chat-messages')[0]
        let div=document.createElement('div')
        div.classList.add('message')
        if(this.userame===this.myUsername) div.classList.add('myMessage')
        div.innerHTML=`
         <p class="meta">${this.userame}<span>${this.time}</span></p>
                <p class="text">
                    ${this.text}
                </p>
        `
        chatScreen.appendChild(div)
    }
}