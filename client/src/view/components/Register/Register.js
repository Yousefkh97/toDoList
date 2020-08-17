import React from 'react';
import './Register.css';

function Register(props) {
    return (
        <div className="headerRegister">

            <div className="formRegister">
                <form>
                Join the family to-do list
                    <input type="email" name="mail" placeholder="* Email" />
                    <input type="text" name="firstName" placeholder="* First Name" />
                    <input type="text" name="lastName" placeholder="* Last Name" />
                    <input type="text" name="imgUrl" placeholder="* Img Url" />
                    <input type="password" name="password" placeholder="* Password" />
                    <input type="submit" id="buttonRegister" value="Register now"/>
                </form>
            </div>
        </div>
    )
}
export default Register;
