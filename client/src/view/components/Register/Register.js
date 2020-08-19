import React from 'react';
import './Register.css';
import {
    useHistory
  } from "react-router-dom";

function Register(props) {
    let history = useHistory();
    return (
        <div className="headerRegister">
            <div className="formRegister">
                <form onSubmit={handleSubmit} id="formRegisterId">
                    Join the family to-do list
                    <input type="email" name="mail" placeholder="* Email" />
                    <input type="text" name="firstName" placeholder="* First Name" />
                    <input type="text" name="lastName" placeholder="* Last Name" />
                    <input type="text" name="imgUrl" placeholder="* Img Url" />
                    <input type="password" name="password" placeholder="* Password" />
                    <input type="submit" id="buttonRegister" value="Register now" />
                </form>
            </div>
        </div>
    )

    function handleSubmit(e) {
        e.preventDefault();
        let { mail, password,firstName,lastName,imgUrl } = e.target.elements;
        mail = mail.value;
        password = password.value;
        firstName = firstName.value;
        lastName = lastName.value;
        imgUrl = imgUrl.value;
        fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({ mail, firstName, lastName, imgUrl, password  }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => {
                const { success } = data;
                console.log(success)
                if (success) {
                    history.push('/Todo')
                } else {
                    document.getElementById("formRegisterId").reset();
                }
            })
    }
}
export default Register;
