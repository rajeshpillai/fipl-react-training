import  React,{ useState } from 'react'


// class Counter extends React.Component {

//   constructor() {
//     this.state = {
//       counter: 0,
//       error: "",
//     }
//   }

//   increment = (e) => {
//     if (error.trim() != "") {
//       this.setstate({
//         error: ""
//       })
//     }
//     // setCount(count + 1);
//     // setCount(count + 1);
//     // setCount(count + 1);

//     // setCount((prevState) => {
//     //   return prevState + 1;
//     // });
//     this.setstate({
//       counter: this.state.counter + 1
//     })
//   }

//   decrement = (e) => {
//     if (count == 0) {
//       setError("You cannot order negative qty!");
//       return;
//     }
//     setCount((prevState) => {
//       return prevState - 1;
//     })
//   }

//   render() {
//     return (
//       <>
//         <h1>Counter App</h1>
//         {count}
//         <div>
//           <button onClick={decrement}>-</button>
//           <button onClick={increment}>+</button>
//         </div>
//         {error.length > 0 && <div className="error">
//           {error}  
//         </div>}
//       </>
//     )
//   }
// }



function Counter1() {
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

export default Counter1



