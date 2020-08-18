import React, { useEffect, useState } from 'react';
import './Todo.css';
import Tasks from '../Tasks/Tasks';

function Todo(props) {
    const [tasksList , setTasksList] = useState([])
    let lastName = sessionStorage.getItem("lastName");
    useEffect(() => {
        fetch('/api/getTasks', {
            method: 'POST',
            body: JSON.stringify({ lastName }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                setTasksList(data);
            })
    }, [])

    return (
        <div className="headerTodo">

            <p id='title'>{lastName} ToDO List</p>
            {
                tasksList.map((userItem, index) => {
                    return <Tasks key={index} userItem={userItem} />
                }
                )
            } 
        </div>
    )
}
export default Todo;
