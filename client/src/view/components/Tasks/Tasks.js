import React from 'react';
import './Tasks.css';

import ItemToDo from '../ItemToDo/ItemToDo';
function Tasks(props) {
    const { userItem, modal, setModal } = props;
    const { _id, tasks } = userItem;
    const { imgUrl } = tasks[0].user;

    return (

        <div className="formTodo">
            <div className="user">
                <div id='name'>{_id}</div>
                <div><img src={imgUrl} alt='userImg' /></div>
            </div>
            {
                tasks.map((item, index) => {
                    return (<ItemToDo key={index + 'task'} ItemToDo={item} modal={modal} setModal={setModal} />)
                })
            }
            <div className="newTodo">
                <form onSubmit={AddNewToDo}>
                    <input type="text" id="newTitle" placeholder="Title: " />
                    <input type="text" id="newContent" placeholder="Content: " />
                    <input type="submit" value="+"></input>
                </form>
            </div>
        </div>
    )

    function AddNewToDo(e) {
        e.preventDefault();
        try {
            const taskTitle = e.target.elements.newTitle.value;
            const taskContent = e.target.elements.newContent.value;
            const user = tasks[0].user;
            fetch('/addNewToDo', {
                method: 'POST',
                body: JSON.stringify(user, taskTitle, taskContent),
                headers: {
                    'Content-Type': 'application/json'
                },
            })

                // .then(res => res.json())
                // .then(data => {
                //     const { addToDo } = data;
                //     if (existSkin == true) {
                //         console.log('Added successfully');
                //     }
                //     else {
                //         console.log('Failed to add');
                //     }
                // })

        } catch (err) {
            console.error(err)
        }
    }
}
export default Tasks;



