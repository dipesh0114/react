import { useState } from 'react'
function App() {
  const [color, setColor] = useState("lavender")
  return (
    <div className='w-full h-screen duration-300'
    style={{backgroundColor: color }}
    >
      <h1 className='flex justify-center text-xl  text-white shadow-lg font-extrabold font-serif'>Welcome to backgroundChanger</h1>
      <div className='fixed flex flex-wrap justify-center bottom-8 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button 
          onClick={()=> setColor("red")} //
           className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"red"}}
          >red</button>
          <button
          onClick={()=> setColor("green")}
           className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"green"}}
          >green</button>
          <button
           onClick={()=> setColor("blue")}
           className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"blue"}}
          >blue</button>
          <button 
           onClick={()=> setColor("yellow")}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor:"yellow"}}
          >yellow</button>
          <button
          onClick={()=> setColor("violet")}
           className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"violet"}}
          >violet</button>
          <button
          onClick={()=> setColor("black")}
           className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"black"}}
          >black</button>
          <button
          onClick={()=> setColor("white")}
           className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor:"white"}}
          >white</button>
          <button
          onClick={()=> setColor("purple")}
           className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"purple"}}
          >purple</button>
        </div>

      </div>
    </div>
  )
}

export default App