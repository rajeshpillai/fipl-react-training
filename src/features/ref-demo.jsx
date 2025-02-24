import React, {forwardRef, useRef} from 'react'


// const CustomInput = forwardRef((props, ref) => {
//   return  <input ref={ref} {...props} />;
// })

const CustomInput = (props, ref) => {
  return  <input ref={ref} {...props} />;
}

export default function RefDemo() {
  const inputRef = useRef();
  
  const focusInput = () => {
    inputRef.current.focus();
  }

  return (
    <div>
      <h2>Ref Demo</h2>
      <CustomInput ref={inputRef} placeholder="Type here...." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}
