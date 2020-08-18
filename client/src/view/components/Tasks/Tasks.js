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
                    <input type="text" name="newTodo" placeholder="Add new Todo" />
                    <button>+</button>
                </div>
            </form>
        </div>
    )
}
export default Tasks;