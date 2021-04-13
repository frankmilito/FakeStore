import React from 'react'
function TodoItems(props) {
    return (
        <div className='todo-items'>
            <input type="checkbox" checked={props.completed} onChange={props.handleChange} id={props.id}/>
            <label>{props.name}</label>
        </div>
    )
}
export default TodoItems

