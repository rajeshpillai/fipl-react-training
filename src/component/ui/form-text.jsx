import React from 'react'

export default function FormText({onTextChange, children}) {
  const handleChange = (e) => {
    // onTextChange(e.target.value);
  }
  console.log("Children: ", children);
  
  return (
    <div>
      {children}
      <input type="text" onChange = {handleChange} />
    </div>
  )
}
