import {useState} from 'react';

export default function UseStateExample2() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    active: false,
  });
  

  // const handleUserChange = (e) => {
  //   setUser({
  //     username: e.target.value
  //   });
  // }

  // const handlePasswordChange = (e) => {
  //   setUser({
  //     password: e.target.value
  //   });
  // }

  const handleChange = (e) => {
    // setUser({
    //   ...user, // merge old values
    //   [e.target.name]: e.target.value,
    // })

    // setUser((prevUser) => {
    //   return {
    //     ...prevUser, // Merge old values 
    //     [e.target.name]: e.target.value
    //   }
    // })

    // One line lambda functin
    setUser((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value
    }));
  }
  
  return (
    <div className = "app">
      <header>
        <h1>useState with Object(property merge issue) </h1>
        <h2>As you type in one field, the other value disappears</h2>
      </header>
      <div>
        <h2>UserName: {user.username}</h2>
        <h2>Password: {user.password}</h2>
        <h2>Active: {user.active.toString()}</h2>
      </div>
      <div className="row">
        <div className ="fields">
          <label>Username: </label>
          <input type="text" name="username" placeholder="Ener username..." onChange={handleChange} />
        </div>
      </div>
      <div className="row">
        <div className ="fields">
          <label>Password: </label>
          <input type="text" name="password" placeholder="Enter password..." onChange= {handleChange} />
        </div>
      </div>
      <footer>
        <h2>useState does not merge state by default </h2>
        <h2>Explicitly merge the state when using json like object</h2>
      </footer>
    </div>
  );
}