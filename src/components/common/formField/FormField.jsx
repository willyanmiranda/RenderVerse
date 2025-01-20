import React from 'react'
import './FormField.css'

const FormField = ({ name, label, placeholder, type, handleChange, value, style, children }) => {
    return (
        <div className='input-content' style={style}>
            <label htmlFor={name}>{label}</label>
            {
                type === "text" ?
                    <input type="text" onChange={handleChange} value={value} name={name} id={name} placeholder={placeholder} />
                    :
                    <select onChange={handleChange} name={name} id={name} value={value}>
                        { children }
                    </select>
            }
        </div>
    )
}

export default FormField;