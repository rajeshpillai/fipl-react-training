import React from 'react'
import Form from "../component/ui/form";
import FormText from "../component/ui/form-text";
import Button from "../component/ui/button";

export default function Test() {

  const onTextChange = (text) => {
    alert(text);
  }

  
  const handleClick = (text) => {
    alert(text);
  }

  const handleSubmit = (formData) => {
    alert(formData);
  }

  return (
    <div>
      Test Page
    
      <Form onSubmit = {handleSubmit}>
        <FormText onTextChange = {onTextChange}>
          <label>First Name: </label>
        </FormText>

        <FormText onTextChange = {onTextChange}>
          <label>Last Name: </label>
        </FormText>

        <Button onClick={handleClick}>
          Submit
        </Button>
      </Form>
    </div>
  )
}
