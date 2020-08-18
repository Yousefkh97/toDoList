import React from 'react';
import './Todo.css';

function Todo(props) {
    return (
        <div className="headerTodo">
            <p id='title'>Nijem ToDO List</p>
            {/* map */}
            <p>play lol</p><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <div className="formTodo">
                <form>
                    <div>Lina</div>
                    
                    <input type="text" name="newTodo" placeholder="Add new Todo" />
                    <button></button>
                </form>
            </div>
        </div>
    )
}
export default Todo;
