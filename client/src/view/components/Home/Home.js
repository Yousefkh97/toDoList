import React from 'react';
import './Home.css';
import logo from '../../../img/logo.jpg'
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

function Home(props) {
    return (
        <div className="header">

            <div className="buttons">
                To Do List
                <Link to="/login"><button>Log In</button> </Link>
                <Link to="/Register"><button>Register now</button></Link>
            </div>

            <div className="logo">
                <img src={logo} alt='' />
            </div>

        </div>
    )
}
export default Home;
