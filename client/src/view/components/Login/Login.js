import React from 'react';
import './Login.css';

function Login(props) {
    return (
        <div className="headerLogin">

            <div className="formLogin">
                <form>
                Welcome to your family to-do list
                    <input type="email" name="mail" placeholder="* Email" />
                    <input type="password" name="password" placeholder="* Password" />
                    <input type="submit" id="buttonLogin" value="Log In"/>
                </form>
            </div>
        </div>
    )
}
export default Login;
