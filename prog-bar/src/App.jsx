import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProgressBar from './ProgressBar'

function App() {
  const [progress, setProgress] = useState(0)

  function clickHandler() {
    if(progress<100) {
      setProgress(progress + 10);
    }  
    else {
      setProgress(100);
    }
    
  }
  return (
    <div>
      <ProgressBar progress={progress} />
      <button style={{width: "100%", backgroundColor: "#007bff", borderRadius: "5px", padding: "4px", height: "30px"}} onClick={clickHandler}>Increase Progress</button>
    </div>

  )
}

export default App
