import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Data from "./contactDetails.json";
import { v1 as uuidv1 } from 'uuid';
import axios from 'axios';

function App() {

  // Reference
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneNoRef = useRef();

  // State
  const [data, setData] = useState(Data);

  // Temp State
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNo, setPhoneNo] = useState();

  const [updateID, setUpdateID] = useState();
  const [updateFirstName, setUpdateFirstName] = useState();
  const [updateLastName, setUpdateLastName] = useState();
  const [updatePhoneNo, setUpdatePhoneNo] = useState();

  // Effect
  useEffect(() => {
    //console.log(data);
    //setData(Data);
    // clear contents from fields
    firstNameRef.current.value = '';
    lastNameRef.current.value = '';
    phoneNoRef.current.value = '';
  }, [data]);

  // Add contact
  const addContact = () => {
    if (firstName && lastName && phoneNo) {
      // create new contact object
      let newContact = {
        "id": uuidv1(),
        "firstName": firstName,
        "lastName": lastName,
        "phoneNo": phoneNo
      }
      // merge new contact with old contacts
      let contacts = [...data, newContact];
      // push new object to state
      setData(contacts);
      // clear contents from state
      setFirstName();
      setLastName();
      setPhoneNo();

      // add in json file
    saveJson(contacts);


    }

  }

  // Delete Contact
  const deleteContact = (key) => {

    let filterOutContact = [...data].filter(OBJ => OBJ.id !== key);
    setData(filterOutContact)

    // delete in json file
    saveJson(filterOutContact);

  }

  // Populate Contact
  const populateContact = (key, firstName, lastName, phoneNo) => {
    setUpdateID(key);
    setUpdateFirstName(firstName);
    setUpdateLastName(lastName);
    setUpdatePhoneNo(phoneNo);

  }

  // Update Contact
  const updateContact = () => {
    let editedContact = {
      "id":updateID,
      "firstName": updateFirstName,
      "lastName": updateLastName,
      "phoneNo": updatePhoneNo
    }
    // remove old post with same id
    let filterContact = [...data].filter(OBJ=>OBJ.id!==updateID);
    let contacts = [...filterContact,editedContact];
    //push to state
    setData(contacts);

    setUpdateID();
    setUpdateFirstName();
    setUpdateLastName();
    setUpdatePhoneNo();
    
    // write to json file
    saveJson(contacts);
    
  }

  // Write to json file
  const saveJson = (contacts) => {
    const url = 'http://localhost:5000/write'
    axios.post(url,contacts)
    .then(response => {
      //console.log(response)
    });

  }



  return (
    <div className="App">

      <div>
        <h4>Add new contact</h4>
        <input
          placeholder="Enter First Name"
          onChange={e => setFirstName(e.target.value)} value={firstName || ''}
          ref={firstNameRef}>
        </input>
        <br />
        <input
          placeholder="Enter Last Name"
          onChange={e => setLastName(e.target.value)} value={lastName || ''}
          ref={lastNameRef}>
        </input>
        <br />
        <input
          placeholder="Enter phone number"
          onChange={e => setPhoneNo(e.target.value)} value={phoneNo || ''}
          ref={phoneNoRef}>
        </input>
        <br />
        <button onClick={addContact} >Add Contact</button>
      </div>

      {updateFirstName || updateLastName || updatePhoneNo ?
      (

        <div>
          <h4>Update contact</h4>
          <input
            placeholder="Enter First Name"
            onChange={e => setUpdateFirstName(e.target.value)} value={updateFirstName || ''}>
          </input>
          <br />
          <input
            placeholder="Enter Last Name"
            onChange={e => setUpdateLastName(e.target.value)} value={updateLastName || ''}>
          </input>
          <br />
          <input
            placeholder="Enter phone number"
            onChange={e => setUpdatePhoneNo(e.target.value)} value={updatePhoneNo || ''}>
          </input>
          <br />
          <button onClick={updateContact}>Update Contact</button>
        </div>
      ): null}

      <div className="contacts">
        {data ? data.map(contact => {
          return (

            <div key={contact.id} className="contact">
              <h3>{contact.firstName} {contact.lastName}</h3>
              <p>{contact.phoneNo}</p>
              <button
                onClick={
                  () => populateContact(contact.id, contact.firstName, contact.lastName, contact.phoneNo)
                } >Edit</button>
              <button onClick={() => deleteContact(contact.id)} >Delete</button>
            </div>

          )
        }) : null}
      </div>
    </div>
  )

}

export default App;