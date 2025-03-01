import React, {useState, useMemo} from 'react'

const expensiveFunction = () => {
  console.log("expensiveFunction re-rendered!");
  let total = 0;
  for(let i = 1; i < 100_000_000;i++) {
    total += i;
  }
  return total;
}

const ExpensiveComponent = React.memo(() => {
  console.log("ExpensiveComponent rendered!");
  let total = 0;
  for(let i = 1; i < 100_000_000;i++) {
    total += i;
  }
  return <div>ExpensiveComponent</div>;
});

export default function MemoDemo2() {
  const [text, setText] = useState("");
  const [age, setAge] = useState(null);
  const [country, setCountry] = useState("");

  const sum = useMemo(() => expensiveFunction(), []);

  return (
    <div>
      <h1>Memo and useMemo</h1>
      <input type="text" onChange={(e) => setText(e.target.value)}
          placeholder="enter a text"/>
      <input type="number" onChange={(e) => setAge(e.target.value)}
          placeholder="age"/>
      <select onChange={(e) => setCountry(e.target.value)}>
        <option value="INDIA">INDIA</option>
        <option value="USA">USA</option>
        <option value="JAPAN">JAPAN</option>
        <option value="SINGAPORE">SINGAPORE</option>
      </select>
      <span>Total: {sum}</span>
     
      <ExpensiveComponent/>
    </div>
  )
}
