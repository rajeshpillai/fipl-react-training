import {useState} from 'react'

export default function ControlledInputs() {
  const [user, setUser] = useState({
    username: "rajesh",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    if (e.target.name == "password") {
      if (e.target.value.length <= 8) {
        setError("Password should be >= 8 characters!");
      } else {
        setError("");
      }
    }
    setUser((prev) =>  {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit= (e) => {
    e.preventDefault();
    console.log("Submitting form to server....", user); 
  }

  return (
    <div>
      <form onSubmit= {handleSubmit}>
        <label>Username: </label>
        <input type="text" name="username" placeholder="enter username" value={user.username} onChange={handleChange}/>

        <label>Password: </label>
        <input type="password" name="password" placeholder="enter a secured password" value={user.password} onChange={handleChange}/>
        {error && <h2 className="error">{error}</h2>}
        <input type="submit" value="Submit" />
      </form>
      
    </div>

  )
}
