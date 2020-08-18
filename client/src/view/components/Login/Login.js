import React from 'react';
import './Login.css';
import Home from '../Home/Home';
import Todo from '../Todo/Todo';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";

function Login(props) {
    let history = useHistory();
    return (
        <div className="headerLogin">
            <div className="formLogin">
                <form onSubmit={handleSubmit} id="formLoginId">
                    Welcome to your family to-do list
                    <input type="email" name="mail" placeholder="* Email" />
                    <input type="password" name="password" placeholder="* Password" />
                    <input type="submit" id="buttonLogin" value="Log In" />
                </form>
            </div>
        </div>
    )

    function handleSubmit(e) {
        e.preventDefault();
        let { mail, password } = e.target.elements;
        mail = mail.value;
        password = password.value;
        fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ mail, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => {
                const { success } = data;
                if (success) {
                    sessionStorage.setItem("userEmail", mail)
                    history.push('/Todo')
                } else {
                    e.target.elements.password.value = "";
                    //document.getElementById("formLoginId").reset();
                }
            })
    }
}
export default Login;
