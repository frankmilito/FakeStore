import React from 'react'

class Test extends React.Component {
    constructor() {
        super();
        this.state = { 
            data:{
                isLoggedin:true,
            loginValue: 'You are Logged in',
            logoutValue:'You are logged out'
            }
         }
         this.loggedIn=this.loggedIn.bind(this)
    }
    loggedIn=()=>{
        this.setState(prevState=>{
            const login= prevState.data.map(function(item){
                if(item.isLoggedin){
                    item.isLoggedin= !item.isLoggedin
                }return item
            })
            return {
                data:login
            }
        })
    }

    render() { 
        return ( 
            <div>
                <h1>{this.state.data.isLoggedin ?this.state.data.loginValue:this.state.data.logoutValue}</h1>
               <button onClick={this.loggedIn}>{this.state.isLoggedin?'Log out':'Log in'}</button>
            </div>
         );
    }
}
 
export default Test;
