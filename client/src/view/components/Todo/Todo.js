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
                    <div className="user">
                    <div id='name'>Lina</div>
                    <div><img src="https://media-exp1.licdn.com/dms/image/C4D03AQFrSZo2ZVEpsQ/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=j4uaOlKITq5N5ec56H6gDor8yrjc6YiAJeJghv7miNw"/></div>
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
