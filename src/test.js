import React from 'react'
import pic1 from './images/pic01.jpg'

class Test extends React.Component{
    constructor(){
        super()
        this.state={
            count:0
        }
        this.clickHandler=this.clickHandler.bind(this)
        this.halfHandler=this.halfHandler.bind(this)
    }
    clickHandler(){
        this.setState(prevState=>{
            return{
                count:prevState.count +2
            }
        })
    }
    halfHandler(){
        this.setState(prevState=>{
            return{
                count:(prevState.count/2)
            }
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.clickHandler}>Click Me to double</button>
                <button onClick={this.halfHandler}>Click Me to half</button>
            </div>
        )
    }
}
export default Test 