const path = require('path');
const fs = require('fs');
const contactsPath = path.resolve('./db/contacts.json');

function listContacts() {
  fs.readFile(contactsPath, (err, data) => {
        if(err) {
            console.log(err)
            return
        }
        console.table(JSON.parse(data))
      })
  };
  
  function getContactById(contactId) {
    fs.readFile(contactsPath, (err, data) => {
        if(err){
            console.log(err)
            return
        }
       console.log(JSON.parse(data).find(contact => contact.id === JSON.parse(contactId) )) 
      })
  };
  
  function removeContact(contactId) {
    fs.readFile(contactsPath, (err, data) => {
      if(err){
          console.log(err)
          return
      }
    const contactToremove = JSON.parse(data).filter(contact => contact.id !== JSON.parse(contactId))
    fs.writeFile(contactsPath,JSON.stringify(contactToremove),(err) => {
      if(err){
          console.log(err)
          return
      }
    })
    console.table(contactToremove);
    })};

    function addContact(name, email, phone) {
      const newContact = {
        id:  65,
        name, 
        email, 
        phone
      }
      fs.readFile(contactsPath, (err, data) => {
        if(err) {
            console.log(err)
            return
        }

        fs.writeFile(contactsPath,JSON.stringify([newContact,...JSON.parse(data)]),(err)=>{
          if(err){
            console.log(err)
            return
        }
        });
      });
    };
    
    module.exports = {
      listContacts,
      getContactById,
      removeContact,
      addContact
    }
    