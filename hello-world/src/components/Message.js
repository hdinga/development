import React, { Component } from 'react';

class Message extends Component {

  constructor(props) {
    super(props)
    this.state = {
      message: 'Welcome visitor!'
    }
  }

   changeMessage() {
    this.setState({
      message: 'Thank you for subscribing!'
    })
  } 

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button id="btnSubscribe" onClick={() => this.changeMessage()}>Subscribe me</button>
      </div>
    )
  }
}

export default Message;