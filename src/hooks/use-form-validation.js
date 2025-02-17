import {useState, useEffect} from "react";

export function useFormValidation(initialState, validate, onSubmit) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({}); // key-value pair
  const [isSubmitting, setSubmitting] = useState(false);

  // handleSubmit, handleBlur, handleChange, values, errors, isSubmitting

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length == 0;
      if (noErrors) {
        onSubmit(values);
        setSubmitting(false);
      }
    }
  }, [errors])

  function handleChange(event) {
    setValues((prev) =>{
      return {
        ...prev,
        [event.target.name]: event.target.value
      }
    })
  }

  function handleBlur(event) {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const errors = validate(values);
    setErrors(errors);
    setSubmitting(true);
  }

  return {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    isSubmitting
  }
}