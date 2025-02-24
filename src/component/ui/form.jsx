import React from 'react'

export default function Form({onSubmit, children}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit("Data Submitted!");
  }

  return (
    <form onSubmit = {handleSubmit}>
      {children}
    </form>
  )
}
