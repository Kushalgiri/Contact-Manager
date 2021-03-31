import React, {useState , useEffect} from 'react';
import {uuid} from 'uuidv4'
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

import './App.css';

function App() {

 const LOCAL_STORAGE_KEY= "contacts";
 const [contacts , setContacts]= useState([]);

 const addContactHandeler = (contact) =>{
   setContacts([...contacts , {id : uuid() , ...contact}])
 }
  
 //...contacts (... rest operator) stores all the previous states that were already in the array

 const removeContactHandeler= (id) =>{
  const newCOntactList = contacts.filter(contact => {
    return (contact.id !== id)
    
  })
  setContacts(newCOntactList);
 }

 useEffect(() => {
  const retriveData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if(retriveData) setContacts(retriveData);
 },[])

 //this useEffect renders the compoents and retrive list from local storage JSON.parse to convert json file to javascript objects

 useEffect (() => {
  localStorage.setItem(LOCAL_STORAGE_KEY , JSON.stringify(contacts));
 },[contacts]);

 //JSON.stringify is used to convert the javascript object to th json format and .setItem to put data into local storage

  return (   
    <div className="ui container">
      <Header />
      <AddContact contactHandeler={addContactHandeler} />
      <ContactList contact={contacts} getContactId={removeContactHandeler} />
    </div>
  );
}

export default App;
