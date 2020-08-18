import React from 'react';
import './Todo.css';
import add from '../../../img/add.png'
import deleteIcon from '../../../img/delete.png'

function Todo(props) {
    return (
        <div className="headerTodo">
            <p id='title'>Nijem ToDO List</p>
            {/* map */}

            <div className="formTodo">
                <form>
                    <p id='name'>Lina</p>
                    <div className="todo">
                        <div className="item">play lol</div>
                        <div className="item"><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /></div>
                        <div className="item"><button><img src={deleteIcon} width='15px' height='15px' /></button></div>
                    </div>
                    <div className="todo">
                        <div className="item">play lol</div>
                        <div className="item"><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /></div>
                        <div className="item"><button><img src={deleteIcon} width='15px' height='15px' /></button></div>
                    </div>
                    <div className="todo">
                        <div className="item">play lol</div>
                        <div className="item"><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /></div>
                        <div className="item"><button><img src={deleteIcon} width='15px' height='15px' /></button></div>
                    </div>
                    <div className="newTodo">
                        <input type="text" name="newTodo" placeholder="Add new Todo" />
                        <button>+</button>
                        {/* <img src={add} width="15px" height="15px" /> */}
                    </div>

                </form>
            </div>
        </div>
    )
}
export default Todo;
