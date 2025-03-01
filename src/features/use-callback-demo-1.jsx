import React, {useState} from 'react'

const EnhancedChildComponent = React.memo(ChildComponent);

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevState => prevState + 1);
  }

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


export default function UseCallbackDemo1() {
  console.log("UCBD: re-rendered....");
  return (
    <div>
      <ParentComponent />
    </div>
  )
}
