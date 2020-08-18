import React, { useState } from 'react';
import './ItemToDo.css';

import Content from '../Content/Content'

function ItemToDo(props) {
    const { ItemToDo, modal, setModal } = props;
    const [isCheck, setIsCheck] = useState(true);

    return (
        <div className={isCheck ? 'todo' : "todo checked"} >
            <div className="taskTitle" onClick={
                () => setModal({ ...modal, show: true, text: ItemToDo.taskTitle })} > {ItemToDo.taskTitle}
            </div>

            <div className="item" > < input type="checkbox" name="done" onChange={
                () => { setIsCheck(!isCheck) }} /></div >
            <div className="item" >
                <button> - </button>
            </div >
        </div>
    )
}
export default ItemToDo;