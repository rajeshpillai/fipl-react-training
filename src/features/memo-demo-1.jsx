import {useState} from 'react'

const ExpensiveComponent = () => {
  console.log("ExpensiveComponent rendered!");
  let total = 0;
  for(let i = 1; i < 100_000_0;i++) {
    total += i;
  }
  return <div>ExpensiveComponent</div>;
};

const Form = () => {
  const [backgroundColor, setBgColor] = useState("");

  return (
    <div style={{backgroundColor}}>
        <input type="text" onChange={(e) => setBgColor(e.target.value)}
            placeholder="enter background color"/>
    </div>
  );
}

export default function MemoDemo1() {
  console.log("Component re-rendered!");
  return (
    <div>
      <h1>Memo and useMemo</h1>
      <h2>This works as when form changes the ExpensiveComponent is not rendered.  But if the state from Form is required to be used in the parent, then it's not directly possible. </h2>
      <Form />
      <ExpensiveComponent/>
    </div>
  );
}
