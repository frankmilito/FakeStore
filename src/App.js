import React from 'react'
import todosData from './TodoData'
import TodoItems from './TodoItems';
import Test from './test'


class App extends React.Component {
    constructor() {
        super();
        this.state = { 
           todos:todosData
         }
         this.handleChange = this.handleChange.bind(this)
    }
    handleChange(id){
       this.setState(prevState=>{
           const updatedTodos=prevState.todos.map(todo=>{
               if(todo.id===id){
                   todo.completed = !todo.completed
               } return todo
           }) 
           return{
               todos: updatedTodos
           }
       })
    }

    render() { 
        const myTodo = this.state.todos.map(item=><TodoItems key={item.id} item={item} handleChange={this.handleChange}/>)
        return ( 
            <div>
                {myTodo}
               
            </div>
         );
    }
}
 
export default App;
 

