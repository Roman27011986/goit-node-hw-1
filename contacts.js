import { resolve } from 'path'
import { readFile, writeFile } from 'fs'
const contactsPath = resolve('./db/contacts.json')

function listContacts() {
    readFile(contactsPath, (err, data) => {
        if(err) {
            console.log(err)
            return
        }
        console.table(JSON.parse(data))
      })
  }
  
  function getContactById(contactId) {
    readFile(contactsPath, (err, data) => {
        if(err){
            console.log(err)
            return
        }
       console.log(JSON.parse(data).find(contact => contact.id === contactId )) 
      })
  }
  
  function removeContact(contactId) {
    readFile(contactsPath, (err, data) => {
        if(err){
            console.log(err)
            return
        }
      const contactToremove = JSON.parse(data).filter(contact => contact.id !== contactId ).toString()
      writeFile(contactsPath,contactToremove,(err)=> {
        if(err){
            console.log(err)
            return
        }
      })
    },
    
    module.exports = {
        listContacts,
        getContactById,
        removeContact
      }