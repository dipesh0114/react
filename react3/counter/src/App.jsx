import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[counter, setCounter] = useState(0)

  // let counter = 15

  const addValue = ()=>{

    if (counter ===10) {
      setCounter(counter);
    }
    else{
    setCounter(counter+1)
 
    }
  }
  const removeValue = ()=>{
  
    if (counter ===0) {
      setCounter(counter);
    }
    else{
    setCounter(counter-1)

    }
  }

  return (
    <>
      <h1>Chai aaur code</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br/>
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
