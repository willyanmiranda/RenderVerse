import React from 'react'
import "./Button.css"

const Button = React.forwardRef((props, ref) => {
  return (
    <button ref={ref} onClick={props.handleClick} style={{ backgroundColor: props.bgColor }}>
      <img src={props.img} alt={props.name} />
      {props.name}
    </button>
  )
})

export default Button