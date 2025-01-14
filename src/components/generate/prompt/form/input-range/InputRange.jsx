import React from 'react'

const InputRange = props => {
  return (
    <div className='input-content'>
        <label htmlFor={props.name}>{props.label} <span className='input-range-value'>{props.rangeValue}</span></label>
        <input onChange={props.handleRange} value={props.rangeValue} min={512} max={2048} name={props.name} type="range" id={props.name} style={{width: "100%"}}/>
    </div>
  )
}

export default InputRange;