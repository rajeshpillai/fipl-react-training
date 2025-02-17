import {useState, useRef} from 'react'

export default function UnControlledInputs() {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState("");

  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit= (e) => {
    e.preventDefault();
    console.log("Submitting form to server....", usernameRef.current.value, passwordRef.current.value); 

    setUser((prev) =>  {
      return {
        ...prev,
       username: usernameRef.current.value,
       password: passwordRef.current.value
      }
    })
  }

  return (
    <div>
      <div>
        Username: {user.username}
      </div>
      
      <form onSubmit= {handleSubmit}>
        <label>Username: </label>
        <input type="text" name="username" placeholder="enter username" ref={usernameRef} />

        <label>Password: </label>
        <input type="password" name="password" placeholder="enter a secured password" ref={passwordRef} />
        {error && <h2 className="error">{error}</h2>}
        <input type="submit" value="Submit" />
      </form>
      
    </div>

  )
}
