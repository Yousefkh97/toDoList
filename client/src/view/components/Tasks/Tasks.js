import React, { useState } from 'react';
import './Tasks.css';

import ItemToDo from '../ItemToDo/ItemToDo';
function Tasks(props) {
    const { userItem } = props;
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
                        return (<ItemToDo key={index} ItemToDo={item} />)

                    }
                    )
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



function AddNewToDo(e)
{
    e.preventDefault();
    try 
    {
        const newTitle = e.target.elements.newTitle.value;
        const newContent = e.target.elements.newContent.value;

        // user: {
        //     userEmail: String,
        //     firstName: String,
        //     lastName: String,
        //     imgUrl: String,
        //     password: String
        // },
        // taskTitle: String,
        // taskContent: String,
        // done: Boolean


        fetch('/addNewToDo', {
            method: 'PUT',
            body: JSON.stringify(userItem),
            headers: {
                'Content-Type': 'application/json'
            },
            })

    }catch(err) 
    {
      console.error(err)
    }
}