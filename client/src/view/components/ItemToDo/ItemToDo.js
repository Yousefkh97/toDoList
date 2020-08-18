import React, { useState } from 'react';
import './ItemToDo.css';

function ItemToDo(props) {
    const { ItemToDo } = props;
    const [isCheck, setisCheck] = useState(false);


        return (
            <div className="todo">
                <div className="item" id='taskTitle'> {ItemToDo.taskTitle}</div>
                <div className="item"><input type="checkbox" id="done" name="done" value="done" /></div>
                <div className="item"><button>-</button></div>
            </div>
        )
}
export default ItemToDo;
