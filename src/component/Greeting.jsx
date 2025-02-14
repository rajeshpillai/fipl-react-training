
// export default function Greeting(props) {
export default function Greeting({message, priority, callback}) {
  // console.log("PROPS: ", props);
  return (
    <div>
      <h1>Greeting ! {message} with priority {priority}</h1>
      <button onClick={() => callback("Hello from greeting!")}>Click Me!</button>
    </div>
  )
}