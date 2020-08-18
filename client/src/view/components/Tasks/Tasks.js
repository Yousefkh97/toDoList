import React from 'react';
import './Tasks.css';

function Tasks(props) {
    const { userItem } = props;
    return (
        
        <div className="formTodo">
        <form>
            <div className="user">
                <div id='name'>{userItem.firstName}</div>
                <div><img src={userItem.imgUrl} /></div>
            </div>
            <div className="todo">
                <div className="item">play lol</div>
                <div className="item"><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /></div>
                <div className="item"><button>-</button></div>
            </div>
            <div className="newTodo">
                <input type="text" name="newTodo" placeholder="Add new Todo" />
                <button>+</button>
            </div>
        </form>
    </div>
    )
}
export default Tasks;