import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import './App.css';

import Home from './view/components/Home/Home'
import Login from './view/components/Login/Login'
import Register from './view/components/Register/Register'
import Todo from './view/components/Todo/Todo'
import ToDoDetails from './view/components/ToDoDetails/Details'

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/Todo">
          <Todo />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
