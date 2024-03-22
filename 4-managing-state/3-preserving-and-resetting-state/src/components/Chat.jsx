import React, { useState } from 'react'

const Chat = ({contact}) => {
    const [message, setMessage] = useState('');

  return (
    <section className='flex flex-col gap-2 chat'>
        <textarea className='block py-3 px-5 border-2 border-black' onChange={(e) => setMessage(e.target.value)} placeholder={`Chat to ${contact.name}`} cols="30" rows="10"/>
        <button disabled={message.length === 0} className={`py-2 px-12 text-white font-semibold ${message.length === 0 ? 'bg-slate-200' : 'bg-slate-500'}`}>Send to {contact.email}</button>
    </section>
  )
}

export default Chat