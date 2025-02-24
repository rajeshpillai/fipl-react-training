import React from 'react'

export default function CardHeader(props) {
  console.log("CH: ", props);
  return (
    <div className={`card-header ${props.args.extraClass}`}>{props.children}</div>
  )
}
