import React from 'react'
function TodoItems(props) {
    const completeSstyle ={
        fontStyle: 'italic',
        color: '#cdcdcd',
        textDecoration: 'line-through'
    }


    return (
        <div className='todo-items'>
            <input type="checkbox" checked={props.item.completed} onChange={()=>props.handleChange(props.item.id)}/>
            <label style ={props.item.completed? completeSstyle: null}>{props.item.name}</label>
        </div>
    )
}
export default TodoItems

