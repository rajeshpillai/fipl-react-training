import React, {useState} from 'react'

const ExpensiveComponent = () => {
  console.log("ExpensiveComponent rendered!");
  let total = 0;
  for(let i = 1; i < 100_000_000;i++) {
    total += i;
  }
  return <div>ExpensiveComponent</div>;
};

const FormProvider = ({children}) => {
  const [backgroundColor, setBgColor] = useState("");

  return (
    <div style={{backgroundColor}}>
      <input type="text" onChange={(e) => setBgColor(e.target.value)}
          placeholder="enter background color"/>
      {children}
     </div>
  )
}

export default function MemoDemo3() {
  console.log("Component re-rendered....");
  return (
    <div>
      <h1>Memo and useMemo</h1>
     <FormProvider>
      <ExpensiveComponent />
     </FormProvider>
     
    </div>
  )
}
