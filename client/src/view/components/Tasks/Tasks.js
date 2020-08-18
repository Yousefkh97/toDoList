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
                        return (<ItemToDo key={index+'task'} ItemToDo={item} modal={modal} setModal={setModal} />)
                    })
                }
                <div className="newTodo">
                    <div><label>Add new ToDo</label></div>
                    <div><input type="text" name="newTodo" placeholder="Title: " /></div>
                    <div><input type="text" name="newTodo" placeholder="Content: " /></div>
                    <button>+</button>
                </div>
            </form>
        </div>
    )
}
export default Tasks;