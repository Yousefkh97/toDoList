import React, { useEffect, useState } from 'react';
import './Todo.css';
import Tasks from '../Tasks/Tasks';

function Todo(props) {
    const [usersList, setUsersList] = useState([])
    useEffect(() => {
        let mail = sessionStorage.getItem("userEmail");
        fetch('/api/getUsers', {
            method: 'POST',
            body: JSON.stringify({ mail }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => {
                setUsersList(data);
            })
    }, [])
    return (
        <div className="headerTodo">

            <p id='title'>{usersList.length > 0 ? usersList[0].lastName : 'Last Name'} ToDO List</p>
            {
                usersList.map((userItem, index) => {
                    return <Tasks key={index} userItem={userItem} />
                }
                )
            }
        </div>
    )
}
export default Todo;
