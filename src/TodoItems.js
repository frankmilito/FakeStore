import React from 'react'
function TodoItems(props) {
    return (
        <div className='todo-items'>
            <input type="checkbox" checked={props.item.completed} onChange={()=>props.handleChange(props.item.id)}/>
            <label>{props.name}</label>
        </div>
    )
}
export default TodoItems

