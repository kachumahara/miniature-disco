import "./style.css";

import io from "socket.io-client";
import { useAuth0 } from "../../utils/auth0Provider";
import React, { Fragment } from "react";
import UserInfo from "../../components/userinfo";
import Name from "../../components/Name/";

console.log(useAuth0);

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      messages: [],
    };
    this.handleChange = this.handleChange.bind(this);

    this.sendMessage = this.sendMessage.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  componentDidMount() {
    // this.socket = io('https://6056e275.ngrok.io')
    this.socket = io("http://localhost:5000");

    this.socket.on("message", (message) => {
      this.setState({
        messages: [message, ...this.state.messages],
      });
    });
  }

  sendMessage(event) {
    let input = this.state.value;

    const body = event.target.value;
    if (event.keyCode === 13 && body) {
      let message = {
        body,
        from: "From: ",
      };
      this.setState({
        messages: [message, ...this.state.messages],
      });
      this.socket.emit("message", message);
      // this.socket.emit('name', user)
      event.preventDefault();
    }
  }

  render() {
    return (
      <div id="chat">
        <div id="grid-container">
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.value}
            placeholder="message here"
            onKeyUp={this.sendMessage}
            value={this.value}
          />
        </div>
        <div id="grid-containe2">
          <ul id="messages">
            {this.state.messages.map((message) => {
              return (
                <li id="chats">
                  {message.body} <span></span>
                  <div id="userInfo">
                    <Name />
                    <UserInfo />
                  </div>
                </li>
              );
            })}{" "}
          </ul>
        </div>
      </div>
    );
  }
}

export default Chat;
