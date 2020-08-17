import React from 'react';
import logo from './img/logo.jpg'
import './App.css';
import { Router } from 'express';

function App() {

  return (
    <Router>
    <div className="App">
      <div className='chats-wrapper'>
        <div className="header">


          <div className="buttons">
            To Do List
            <Link to="/login"><button>Log In</button> </Link>
            <Link><button>Register now</button> </Link>
          </div>

          <Switch>
          <Route path="/login">
            <Login />
          </Route>

        </Switch>

          <div className="logo">
          <img src={logo} alt='' />
          </div>
          
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
