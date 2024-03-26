import React from 'react'

const ContactList = ({contacts, selectedId, dispatch}) => {
  return (
    <div>
        <ul>
            {contacts.map((contact) => (
                <li key={contact.id}>
                    <Contact contact={contact} dispatch={dispatch}/>
                </li>
            ))}
        </ul>
    </div>
  )
}

const Contact = ({contact, dispatch}) => {
    return (
        <>
            <button
                onClick={() => {
                    dispatch({
                        type: 'CHANGED_SELECTION',
                        contactId: contact.id
                    })
                }}
            >
                {contact.name}
            </button>
        </>
    )
}

export default ContactList