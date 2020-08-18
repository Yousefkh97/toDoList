import React from 'react'
import './Content.css'

function Content(props){
    console.log('holla')
    let content = {props};
    console.log(content);
    return (
        <div className="contentName"> {content}</div>
    )


}

export default Content;