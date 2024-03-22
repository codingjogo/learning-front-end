import { useState } from 'react'
import Messenger from './components/Messenger';


function App() {
  

  return (
    <>
      <main className='h-screen flex flex-col items-center justify-center'>
        <Messenger contacts={contacts} />
      </main>
    </>
  )
}


const contacts = [
  { name: 'Taylor', email: 'taylor@mail.com' },
  { name: 'Alice', email: 'alice@mail.com' },
  { name: 'Bob', email: 'bob@mail.com' }
];
export default App
