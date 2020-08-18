import React from 'react';
import './Details.css';


function Details(props) {
    return (
        <div className="headerDetails">
            <div className="formDetails">
                <form >
                    Details of ToDoList
                    
                    <input type="test" name="password" placeholder="Enter Detail" />
                    <input type="submit" id="buttonDetails" value="Save" />
                </form>
            </div>
        </div>
    )
}
export default Details;