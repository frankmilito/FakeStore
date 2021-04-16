import React from 'react';

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoggedin: true
         }
         this.isClicked=this.isClicked.bind(this)
    }
    isClicked(){
        this.setState(prevState=>{
            return{
                isLoggedin: !prevState.isLoggedin
            }
        })
    }
    render() { 
        let button = this.state.isLoggedin?'Log In': 'Log Out'
        return ( 
            <div>
                <button onClick={this.isClicked}>{button}</button>
            </div>
         );
    }
}
 
export default Test;