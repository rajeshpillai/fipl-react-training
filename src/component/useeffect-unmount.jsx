import {useState, useEffect} from 'react'

export default function TestUseEffectUnMount({onCountChange}) {
  const [count, setCount] = useState(0);

  const [user, setUser] = useState({
    username: "rocketsketch",
    display_name: "Rajesh",
    profile_url: "some url",
  });


  // Runs when user.username changes
  useEffect(() => {
    console.log(`When user changes:`, user.username, user.display_name);

    const fetchUser = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
      const user = await response.json();
      console.log("User: ", user);
      setUser((prev) => {
        return {
          ...prev, 
          username: user.username
        }
      });
    }
    fetchUser();

  },[user.username, user.profile_url]);

  // Always run
  useEffect(() => {
    // console.log("Run always!!");

    // cleanup
    return () => {
      console.log("When the component is removed/rerendered");
    }
  });
  
  
  // Will only run once
  useEffect(() => {
    // console.log("Run only Once!!");

    // cleanup
    return () => {
      console.log("When the component is removed/rerendered");
    }
  },[]);

  // Runs when count changes
  useEffect(() => {
    console.log(`Count is changing: ${count}`);
  },[count]);

  const handleDecrement = (e) => {
    setCount(count - 1);
    onCountChange(count);
  }

  const handleUserChange = (e) => {
    setUser((prev) => {
      return {
        ...prev, 
        username: +new Date()
      }
    })
  }

  const handleChangeDisplayName = (e) => {
    setUser((prev) => {
      return {
        ...prev, 
        display_name: +new Date()
      }
    })
  }

  return (
    <div>
      <h1>Test useEffect - unMount</h1>
      {count}
      <h2>{user.username}</h2>
      <h2>{user.display_name}</h2>


      <button onClick = {handleDecrement}>-</button>
      <button onClick = {() => setCount(count + 1)}>+</button>

      <button onClick = {handleUserChange}>Change username</button>
      <button onClick = {handleChangeDisplayName}>Change display name</button>
      
    </div>
  )
}
