import React from 'react'

const Chat = ({message,contact, dispatch}) => {
  return (
    <div>
        <textarea className='w-[200px] h-[200px] border-2 border-black' value={message} onChange={(e) => {
            dispatch({
                type: 'EDITED_MESSAGE',
                message: e.target.value
            })
        }}></textarea>
        <button onClick={() => {
          alert(`Message: "${message}\nSent to: ${contact.name}"`)
          dispatch({
            type: 'SENT_MESSAGE',
            message: ''
          })
        }}>SEND TO {contact.name}</button>
    </div>
  )
}

export default Chat