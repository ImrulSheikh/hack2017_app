import React, {Component} from 'react'
import {Launcher} from 'react-chat-window';
import Message from './message';

// Name : Leong Yok Tien
//
export default class Chat extends Component {

  constructor() {
    super();
    this.state = {
      messageList: []
    };
  }
  componentDidMount(){
    let m = new Message();
    let data = m.getAll();
    this.setState({
      messageList : [...this.state.messageList, ...data]
    })
  }

  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]
    })
  }

  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        messageList: [...this.state.messageList, {
          author: 'pp',
          type: 'text',
          data: { text }
        }]
      })
    }
  }

  render() {
    return (<div>
      <Launcher
        agentProfile={{
          teamName: 'Leong Yok Tien',
          imageUrl: require('../../assets/userProfile1_tn.jpg')
        }}
        onMessageWasSent={this._onMessageWasSent.bind(this)}
        messageList={this.state.messageList}
      />
    </div>)
  }
}