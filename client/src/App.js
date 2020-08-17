import React from 'react';
import logo from './img/logo.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='chats-wrapper'>
        <div className="header">

          <div className="buttons">
            To Do List
            <button>Log In</button>
            <button>Register now</button>
          </div>

          <div className="logo">
          <img src={logo} alt='' />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
