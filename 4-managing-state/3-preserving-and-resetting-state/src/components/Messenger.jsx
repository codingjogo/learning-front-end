import React, { useState } from 'react'
import ContactList from './ContactList'
import Chat from './Chat'

const Messenger = ({contacts}) => {
  const [to, setTo] = useState(contacts[0])

  return (
    <div className='flex flex-row gap-3'>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={contact => setTo(contact)}
      />
      <Chat contact={to} />
    </div>
  )
}
export default Messenger