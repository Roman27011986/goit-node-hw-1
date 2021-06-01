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
        if(err) {
            console.log(err)
            return
        }
        const contact = JSON.parse(data).find(contact => contact.id === JSON.parse(contactId))
       console.table(contact ? contact : `no contact by id:${contactId}`) 
      })
  };
  
  function removeContact(contactId) {
    fs.readFile(contactsPath, (err, data) => {

      if(err){
          console.log(err)
          return
      }

    const contactToremove = JSON.parse(data)
    .filter(contact => contact.id !== JSON.parse(contactId))
     
    fs.writeFile(contactsPath,JSON.stringify(contactToremove, null, ' '),(err) => {
      if(err) {
          console.log(err)
          return
      }
    })

    console.table(contactToremove);

    })};

    function addContact(name, email, phone) {
      
      fs.readFile(contactsPath, (err, data) => {
        if(err) {
          console.log(err)
          return
        }

        const contacts = JSON.parse(data)

        const newContact = {
          id:  contacts.length + 1,
          name, 
          email, 
          phone
        }

        const allContacts = [newContact,...contacts]
        console.table(allContacts);
        fs.writeFile(contactsPath,JSON.stringify(allContacts, null, ' '),(err)=>{
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
    