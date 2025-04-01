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
  return <button className="square">{value}</button>;
}

export default function Board() {
  return (
    <>
       <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

// export statement at end of code can only export single object
// better to add as prefix to component
