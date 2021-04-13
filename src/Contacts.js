import React from 'react'
function Contacts(props) {
    console.log(props)
    return (
        <div className="contacts">
            <div className="contact-card">
                <img src={props.contact.imgUrl} alt="" />
                <h3>{props.contact.name}</h3>
                <p>Phone: {props.contact.phone}</p>
                <p>Email: {props.contact.Email}</p>
            </div>
        </div>
    )
}

export default Contacts