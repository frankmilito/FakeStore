import React from 'react'
function Joke(props) {
    return (
        <div>
            <h2 style={{ display: props.question ? 'block' : 'none' }}>Question: {props.question}</h2>
            <h2 style={{ color: props.question ? '#000' : '#ff0000' }}>punchline: {props.punchline}</h2>
        </div>
    )
}

export default Joke