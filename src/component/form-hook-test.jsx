import React from 'react'

import {useFormValidation} from "../hooks/use-form-validation";

function validateUser(values) {
  let errors = {};
  if (!values.password) {
    errors.password = "Password required!";
  } else  if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  if (values.name.length < 3) {
    errors.name = "Name should be greater than 3 characters!";
  }
  return errors;
}

function onSubmit(values) {
  alert("Submitting form data to server!");
  console.log("FORM DATA: ", values);
}

export default function FormHookTest() {
  const INITIAL_STATE = {
    name: "",
    email: "",
    password: "",
  }
  const {handleSubmit, handleBlur, handleChange, values, errors, isSubmitting} = 
        useFormValidation(INITIAL_STATE, validateUser, onSubmit);
  return (
    <div>
      <h2>useFormValidation</h2>  
      <h2>Login Form</h2>
      <pre>
        {
          JSON.stringify(errors)
        }
      </pre>
      <form onSubmit = {handleSubmit}>
        <input name="name" type="text" placeholder="Your username" value={values.name} onChange={handleChange} onBlur={handleBlur}/>
        <input name="email" type="text" placeholder="Your email" value={values.email} onChange={handleChange}/>
        <input name="password" type="password" placeholder="Your password" value={values.password} onChange={handleChange} onBlur={handleBlur}/>

        <button disabled={isSubmitting} type="submit">Submit</button>
      </form>
    </div>
  )
}
