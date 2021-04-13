import React from 'react'
import TodoItems from './TodoItems'
import todos from './TodoData'
// import Test from './test'
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todoData: todos
        }
        this.onChangeHandler=this.onChangeHandler.bind(this)
    }
    onChangeHandler(e){
        console.log(todos)
    }
    render() {

        const myTodo = this.state.todoData.map(function (todo) {
            return <TodoItems name={todo.name} key={todo.id} completed={todo.completed} handleChange={this.onChangeHandler} />
        })
        return (
            <div>
                {myTodo}
                {/* <Test /> */}
            </div>
        )
    }
}

// function App(){

//     const [dos, setDos]=useState(todos)
//     const handleChange=(e)=>{
//         let currentId = e.target.id
//         dos.forEach(item=>{
//             if(item.id == currentId){
//                 console.log(item.completed)
        
//             }
//         })
//         // console.log(e.target.id)
//     }
//     console.log(dos)
//             const myTodo = dos.map(function (item) {
//             return <TodoItems name={item.name} key={item.id} id={item.id}completed={item.completed} handleChange={(e)=>handleChange(e)} />
//         })
//     return(
//         <>
//             <h1>Hello</h1>
//             {myTodo}
//         </>
//     )
// }

export default App