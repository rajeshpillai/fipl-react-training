import {useReducer} from "react";

const defaultState = {counter: 0, someothervalues: "test"};

function reducer(oldState, newState) {
  return {
    ...oldState,
    ...newState
  }
}

export default function SetStateDemo() {
  const [state, setState] = useReducer(reducer, defaultState); 

  return (
     <div className="app">
      <h1>useReducer: Simulate setState </h1>
      <h1>{state.counter}</h1>
      <h2>{state.someothervalues}</h2>
      <div className="buttons">
        <button onClick={()=> setState({counter: state.counter+1})}>+</button>
        <button onClick={()=> setState({counter: state.counter-1})}>-</button>
      </div>
    </div>
  )
}