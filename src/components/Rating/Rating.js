import React from 'react'
import { StyledRating } from './Rating.style'

const Rating = ({ rateNumber }) => {
  return (
    <StyledRating rateNumber={rateNumber}>
      <span>&#9733;</span>
      <span>&#9733;</span>
      <span>&#9733;</span>
      <span>&#9733;</span>
      <span>&#9733;</span>
    </StyledRating>
  )
}

export default Rating