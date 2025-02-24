import React from 'react'

export default function Button({onClick, children}) {
  const handleClick = (e) => {
    onClick("hello from button");
  }
  return (
    <div className="btn">
      <button type="text" onClick = {handleClick}>{children}</button>
    </div>
  )
}
