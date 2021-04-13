import React from 'react'
class Footer extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: true,
            value: 'in'
        }
    }
    render() {
        return (
            <div>
                <h1>You are logged {this.state.isLoggedIn ? this.state.value : this.state.value = 'out'}</h1>
            </div>
        )
    }
}
export default Footer