import React, {Component} from 'react'
import {Launcher} from 'react-chat-window';
import Message from './message';
import getUser from './user';

export default class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: getUser(props.userId),
      messageList: []
    };
  }
  componentWillMount(){
    let m = new Message(this.state.user);
    let that = this;
    m.getAll((data)=>{
      this.setState({
        messageList : [...this.state.messageList,...data]
      })
    });
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
          teamName: this.state.user.fullName,
          imageUrl: this.state.user.tn
        }}
        onMessageWasSent={this._onMessageWasSent.bind(this)}
        messageList={this.state.messageList}
      />
    </div>)
  }
}