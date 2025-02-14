import { useReducer  } from "react";

function counterReducer(state, action) {
  switch(action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + 1
      }
    case "decrement":
      return {
        ...state,
        counter: state.counter - 1
      }
  }
  return state;
}

export default function UserReducerExample() {
  const defaultState = {
    counter: 0,
    someothervalues: "test"
  };

  const [state, dispatch] = useReducer(counterReducer, defaultState);

  return (
    <div>
      <h2>useReducer</h2>
      <h2>{state.counter}</h2>

      <div className = "buttons">
        <button onClick={() => dispatch({type: "increment"})}>+</button>
        <button onClick={() => dispatch({type: "decrement"})}>-</button>
      </div>
    </div>
  );
}