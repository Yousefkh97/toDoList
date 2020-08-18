import React from 'react';
import './Details.css';


function Login(props) {
    return (
        <div className="headerDetails">
            <div className="formDetails">
                <form onSubmit={handleSubmit}>
                    Details of ToDoList
                    
                    <input type="test" name="password" placeholder="Enter Detail" />
                    <input type="submit" id="buttonDetails" value="Log In" />
                </form>
            </div>
        </div>
    )
}
export default Login;