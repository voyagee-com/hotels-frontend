import React, { useState } from 'react'
import { StyledCounter } from './Conter.style'

const Counter = React.forwardRef(({ label, id, name, min = 1, value, step = 1, onChange, ...rest}, ref) => {
 const [internalValue, setInternalValue] = useState(value)
  const handleDecrement = (event) => {
    event.preventDefault()
    const inputNumber = event.target.nextElementSibling
    inputNumber.stepDown()
    setInternalValue(inputNumber.value)
  }
  
  const handleIncrement = (event) => {
    event.preventDefault()
    const inputNumber = event.target.previousElementSibling
    inputNumber.stepUp()
    console.log('01', inputNumber.value);
    setInternalValue(inputNumber.value)
  }

  const handleChange = internalHandler => (e) => {
    console.log(e);
    if (internalHandler === undefined) {
      return
    }
    return internalHandler(e)
  }

  return (
    <StyledCounter>
      <label htmlFor={id}>{label}</label>
      <button
        id="decrement"
        aria-label="Decrement value"
        onClick={(e) => handleDecrement(e)}
      >-</button>
      <input
        type="number"
        min={min}
        id={id}
        name={id}
        step={step}
        value={internalValue}
        onChange={onChange}
        {...rest}
        ref={ref}
      />
      <button
        id="increment"
        aria-label="Increment Value"
        onClick={(e) => handleIncrement(e)}
      >+</button>
    </StyledCounter>
  )
})

export default Counter
