import React, { useState } from 'react';
import './Tasks.css';

import ItemToDo from '../ItemToDo/ItemToDo';
function Tasks(props) {
    const { userItem, modal, setModal } = props;
    const { _id, tasks } = userItem;
    const { imgUrl } = tasks[0].user;

    return (

        <div className="formTodo">
            <form>
                <div className="user">
                    <div id='name'>{_id}</div>
                    <div><img src={imgUrl} /></div>
                </div>
                {
                    tasks.map((item, index) => {
                        return (<ItemToDo key={index + 'task'} ItemToDo={item} modal={modal} setModal={setModal} />)
                    })
                }
                <div className="newTodo">
                    <div><label>Add new ToDo</label></div>
                    <div><input type="text" id="newTitle" placeholder="Title: " /></div>
                    <div><input type="text" id="newContent" placeholder="Content: " /></div>
                    <button type="submit" onclick="AddNewToDo(event)">+</button>
                </div>
            </form>
        </div>
    )
}
export default Tasks;



// function AddNewToDo(e) {
//     e.preventDefault();
//     try {
//         const taskTitle = e.target.elements.newTitle.value;
//         const taskContent = e.target.elements.newContent.value;

//         fetch('/addNewToDo', {
//             method: 'PUT',
//             body: JSON.stringify(tasks[0].user, taskTitle, taskContent),
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//         })

//             .then(res => res.json())
//             .then(data => {
//                 const { addToDo } = data;
//                 if (existSkin == true) {
//                     console.log('Added successfully');
//                 }
//                 else {
//                     console.log('Failed to add');
//                 }
//             })

//     } catch (err) {
//         console.error(err)
//     }
// }