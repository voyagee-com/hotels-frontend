import React, { useState, useRef } from 'react'
import { StyledCounter } from './Conter.style'

const Counter = React.forwardRef(({ label, id, min = 1, value, step = 1, onChange, ...rest}, ref) => {
  const [internalValue, setInternalValue] = useState(value)
  // let internalValue = value
  let ccc
  const inCount = useRef(null);
  const handleDecrement = (event) => {
    event.preventDefault()
    const inputNumber = event.target.nextElementSibling
    inputNumber.stepDown()
    handleCountChange(inputNumber.value)
  }

  const handleIncrement = (event) => {
    event.preventDefault()
    const inputNumber = event.target.previousElementSibling
    inputNumber.stepUp()

    const { valueAsNumber } = inCount.current;

    ccc = valueAsNumber

  }

  const handleCountChange = internalIcrement => (e) => {

    setInternalValue(ccc)
    if (internalIcrement === undefined) {
      return
    }
    return internalIcrement(e)
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
        onChange={(e) => handleCountChange(e)}
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
