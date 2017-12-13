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
    this.message = new Message(this.state.user);
  }
  componentWillMount(){
    this.message.getAll((data)=>{
      let m = this.getNewMessages(data);
      this.setState({
        messageList : [...this.state.messageList,...m]
      })
    });
  }
  getNewMessages(messages = []){
    return messages.filter(m=>{
      if(this.state.messageList
        .find(sm => 
            sm.author === m.author && 
            sm.data.text === m.data.text )){
              return false;
      }
      return true;
    });
  }

  _onMessageWasSent(message) {
    this.message.save(message);
    this.setState({
      messageList: [...this.state.messageList, message]
    })
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