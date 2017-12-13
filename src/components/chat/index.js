
import React, { Component } from 'react';
import Chat from './chat';
class ChatContainer extends Component {
    constructor (props) {
        super(props)
        this.state={
            userId : this.getUserId()
        }
    }
    
    getUserId() {
        const path = window.location.pathname;
        const userId = parseInt(path.replace(/\//g,''))
        if(typeof userId === 'number'){
            return userId;
            
        }
        return 1;
    }

    render() {
        return (
            <div className="ImageBackground" style={{ 'height': window.innerHeight }}>
                <Chat userId={this.state.userId}/>
            </div>
        );
    }
}

export default ChatContainer;