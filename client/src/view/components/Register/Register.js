import React from 'react';
import './Home.css';

function Home(props) {
    const { chatItem } = props;
    return (
        <div className="header">

            <div className="buttons">
                To Do List
                <input type="text" name="name" placeholder="* Name"/>
                <input type="text" name="family" placeholder="* Family"/>
                <button>Register now</button>
            </div>

            <div className="logo">
                <img src={logo} alt='' />
            </div>

        </div>
    )
}
export default Home;
