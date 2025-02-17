import {useState, useEffect} from 'react'

export default function TestUseEffect() {
  const [count, setCount] = useState(0);

  // Always runs
  useEffect(() => {
    console.log("useEffect: RENDER", count);
  });
  
  // Will only run once
  useEffect(() => {
    console.log("Run only Once!!");

    // cleanup
    return () => {
      console.log("When the component is removed/rerendered");
    }
  },[]);

  useEffect(() => {
    console.log("Depends on count!!: ", count);

    // cleanup
    return () => {
      console.log("When the component is removed/rerendered");
    }
  },[count]);

  return (
    <div>
      <h1>Test useEffect</h1>
      {count}
      <button onClick = {() => setCount(count + 1)}>+</button>
    </div>
  )
}
