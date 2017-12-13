
import React, { Component } from 'react';
import Chat from './chat';
class ChatContainer extends Component {
    render() {
        return (
            <div className="ImageBackground" style={{ 'height': window.innerHeight }}>
                <Chat />
            </div>
        );
    }
}

export default ChatContainer;