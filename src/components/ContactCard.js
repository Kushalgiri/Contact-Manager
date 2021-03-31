import React from 'react';
import img from '../images/user.png'

const ContactCard = (props) => {
    const {id , name ,email } = props.contact;
    
//destructuring the rops recieved to directly use them as their name

    return(
        <div className="item">
        <img className="ui avatar image" src={img} alt="" />
        <div className="contents">
            <div className="header">{name}</div>
            <div>{email}</div>
        </div>
        <i  className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick=  {() => props.clickHandeler(id)}
        ></i>
        
    </div>
    
    //icon returns the id of the contacts through clickhandeler prop sent to it from cotacts list

    );
   
}


export default ContactCard;