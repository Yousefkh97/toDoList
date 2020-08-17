import React from 'react';
import './Register.css';

function ChatGrid(props) {
    const { chatItem } = props;
    return (
        <div className='chat'>
            <p id={chatItem.isMe?'me':'other'}>{chatItem.text}</p>
            <div className="msgArea">
            </div> 
        </div>
    )
}
export default ChatGrid;