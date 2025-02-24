import React from 'react'
import "./card.css";

export default function Card({children, ...args}) {
  const enhancedChildren = React.Children.map(children, (child) => {
    // Check if child is avalid React element 
    if (React.isValidElement(child)) {
      // Clone the child, I can add the extra details
      return React.cloneElement(child, {args});
    }
  })
  return (
    <div className="card">{enhancedChildren}</div>
  )
}
