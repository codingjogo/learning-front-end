import { useState } from 'react'
import Accordion from './components/Accordion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='h-screen flex flex-col items-center justify-center'>
        <Accordion />
      </main>
    </>
  )
}

export default App
