import React from 'react';
import './style.css';

import io from "socket.io-client";

class Chat extends React.Component {

    constructor() {
        super()

        this.state = {
            messages: []
        }

        this.sendMessage = this.sendMessage.bind(this)
    }

    componentDidMount() {

        this.socket = io('https://6056e275.ngrok.io')
        this.socket.on('message', (message) => {
            this.setState({
                messages: [
                    message,
                    ...this.state.messages
                ]
            })
        })
    }

    sendMessage(event) {


        const body = event.target.value
        this.state.value = ""
        if (event.keyCode === 13 && body) {
            let message = {
                body,
                from: 'shyaboi'
            }
            this.setState({
                messages: [
                    message,
                    ...this.state.messages
                ]
            })
        }

    }


    render() {
        return (
            <div id='chat'>
                <div id='grid-container'>

                    <input type='text' placeholder='message here'
                        onKeyUp={
                            this.sendMessage
                        }/>
                </div>
                <div id='grid-containe2'>
                    <ul id='messages'>
                        {
                        this.state.messages.map((message) => {
                            return (
                                <li id='messages' id='chats'>
                                    {
                                    message.body
                                }
                                    from-{
                                    message.from
                                }</li>
                            )
                        })
                    } </ul>
                </div>
            </div>
        );
    }
}

export default Chat;
