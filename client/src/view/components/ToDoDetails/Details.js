import React from 'react';
import './Details.css';


function Details(props) {
    return (
        <div className="headerDetails">
            <div className="formDetails">
                <form >
                    Details of mission
                    
                    <input type="test" name="password" placeholder="Update Detail" />
                    <input type="submit" id="buttonDetails" value="Save" />
                </form>
            </div>
        </div>
    )
}
export default Details;