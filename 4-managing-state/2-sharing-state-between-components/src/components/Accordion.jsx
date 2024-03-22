import React, { useState } from 'react'

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <h1 className='text-4xl mb-6'>Almaty, Kazakhstan</h1>
      <Panel title="About" isActive={activeIndex === 0}  onShow={() => setActiveIndex(0)}>
        
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
        
      </Panel>

      <Panel title='Etymology' isActive={activeIndex === 1} onShow={() => setActiveIndex(1)}>
        The name comes from алма, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild Malus sieversii is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </div>
  )
}

const Panel = ({title, isActive, children, onShow }) => {
  return (
    <div className='w-[400px] border-2 border-black py-2 px-5'>
      <h2 className='text-2xl mb-5'>{title}</h2>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button className='py-2 px-12 bg-slate-500 hover:bg-slate-400 text-white font-semibold text-lg' onClick={onShow}>Show</button>
      )}
    </div>
  )
}

export default Accordion