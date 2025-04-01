import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p> example text</p>
    </>
  )
}

function Square({ value }) {
  function handleClick() {
    console.log('clicked!');
  }

  return (
    <button className="square" onClick={handleClick}>
    </button>
  );
  
}

export default function Board() {
  return (
    <>
       <div className="board-row">
       <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
      <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
      <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </>
  );
}

// export statement at end of code can only export single object
// better to add as prefix to component
