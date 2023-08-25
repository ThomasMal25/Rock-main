import { useState } from 'react'
import Computer from './components/Computer'
import User from './components/user'
import Endmenu from './components/Endmenu'
import './App.css'

function App() {
  const [score, setScore] = useState(0)
  const [input,setInput]= useState('')
  const [istrue, setIsTrue] = useState(false)
  const [result, setResult] = useState('');



// Statistics: Keep track of game statistics, like win/loss ratios, and display them to the user.
  return (
    <>
    <div className='heading'>
      <p>Rock Paper Scissors </p>
      <p> Your score{score}</p>
    </div>
   
    { istrue && 
     <Computer 
     setResult={setResult}
     result={result}
    input={input}
    setScore={setScore}
    score={score}
    />}
    {istrue || 
    <User 
      setIsTrue={setIsTrue}
      setInput={setInput}
    />}

    {result === 'Computer Won' && <Endmenu
      score={score} 
      setIsTrue={setIsTrue}
      />
    }
    </>
  )
}

export default App
