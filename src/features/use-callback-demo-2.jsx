import React, {useState, useCallback} from 'react'

const EnhancedChildComponent = React.memo(ChildComponent);

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount(prevState => prevState + 1);
  },[]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <EnhancedChildComponent onIncrement={handleIncrement} />
    </div>
  )
}

function ChildComponent({onIncrement}) {
  console.log("Child Component rendered....");
  return (
    <button onClick={onIncrement}>Increment</button>
  )
}


export default function UseCallbackDemo2() {
  console.log("UCBD: re-rendered....");
  return (
    <div>
      <ParentComponent />
    </div>
  )
}
