import React from 'react';

function Greetings() {
    const date = new Date()
    const hours = date.getHours()

    let timeOfDay
    if (hours < 12) {
        timeOfDay = 'morning'
    }
    else if (hours >= 12 && hours < 17) {
        timeOfDay = 'afternoon'
    }
    else {
        timeOfDay = 'evening'
    }

    return (
        <h1>Good {timeOfDay}</h1>

    )
}
export default Greetings