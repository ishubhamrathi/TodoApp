import React from "react";



const Lists = (props) =>{


    return (
    <>
        <li><button className="done" onClick={()=>{
          props.onSelect(props.id)
        }}>x</button>&nbsp;<span className="task_done">{props.text}</span></li>
    </>
    )
}

export default Lists;