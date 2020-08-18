import React, { useEffect, useState } from 'react';
import './Todo.css';
import Tasks from '../Tasks/Tasks';

function Todo(props) {
<<<<<<< HEAD
    const [tasksList , setTasksList] = useState([])
=======
    const [usersList, setUsersList] = useState([])
>>>>>>> dev
    useEffect(() => {
        let lastName = sessionStorage.getItem("lastName");
        fetch('/api/getTasks', {
            method: 'POST',
            body: JSON.stringify({ lastName }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                //setTasksList(data);
            })
    }, [])
    //{usersList.length>0?usersList[0].lastName:'Family name'} 
    return (
        <div className="headerTodo">
<<<<<<< HEAD
            <p id='title'>ToDO List</p>
            {/* map */}
=======
>>>>>>> dev

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
