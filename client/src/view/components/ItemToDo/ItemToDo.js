import React, { useState } from 'react';
import './ItemToDo.css';

function ItemToDo(props) {
    const { ItemToDo } = props;
    const [isCheck, setIsCheck] = useState(true);


        return (
            <div className={isCheck?'todo':"todo checked"}>
                <div className="item" id='taskTitle'> {ItemToDo.taskTitle}</div>
                <div className="item"><input type="checkbox" name="done"  onChange={()=>{setIsCheck(!isCheck)}}/></div>
                <div className="item"><button>-</button></div>
            </div>
        )
}
export default ItemToDo;
