import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    console.log(props);

    const deleteContact = (id) => {
        props.getContactId(id);
    }

    //deleteContact gets id from clickhandeler and passes to the app.js through getcontactIS props

    const renderContactList = props.contact.map((contact) => {
        return (
            <ContactCard contact={contact} clickHandeler={deleteContact} id={contact.id}/>
        )
    })

    //clickhandeler is sent as a props to recieve id from contactcard when icon is clicked.

    return (

        <div className="ui celled list">

            {renderContactList}
        </div>
    );
}


export default ContactList;