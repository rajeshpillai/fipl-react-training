import  { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useActionState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");


  console.log(new Date());

  // return React.createElement("div", {
  //   className: "app"
  //  }, "Hello World, React!");

  const increment = (e) => {
    if (error.trim() != "") {
      setError("");
    }
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    setCount((prevState) => {
      return prevState + 1;
    });
  }

  const decrement = (e) => {
    if (count == 0) {
      setError("You cannot order negative qty!");
      return;
    }
    setCount((prevState) => {
      return prevState - 1;
    })
  }

  return (
    <>
      <h1>Counter App</h1>
      {count}
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
      {error.length > 0 && <div className="error">
        {error}  
      </div>}
    </>
  )
}

export default App
