import React from 'react';
import './Home.css';

function Home(props) {
    const { chatItem } = props;
    return (
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
    )
}
export default Home;
