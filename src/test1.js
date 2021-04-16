import React from 'react';

class Test1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            jokes: {},
            loading: false
         }
    }
    componentDidMount(){
        this.setState({
            loading: true
        })
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response =>response.json())
            .then(data => {
                this.setState({
                    jokes:data,
                    loading: false
                })
            })
    }
    render() { 
        const message = this.state.loading ? 'loading...':this.state.jokes.value
        return ( 
            <div>{message}</div>
         );
    }
}
 
export default Test1;