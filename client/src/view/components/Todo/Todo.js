import React, { useEffect, useState } from 'react';
import './Todo.css';
import Tasks from '../Tasks/Tasks';

function Todo(props) {
    const [tasksList, setTasksList] = useState([]);
    const [modal, setModal] = useState({ show: false, text: 'test' });

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
                setTasksList(data);
            })
    }, [])

    return (
        <div className="headerTodo">

            <p id='title'>{lastName} ToDO List</p>
            {
                tasksList.map((userItem, index) => {
                    
                    return <Tasks key={index+'task'} userItem={userItem} modal={modal} setModal={setModal} />
                })
            }
            {modal.show ? <h1>{modal.text}</h1> : null}
        </div>
    )
}
export default Todo;
