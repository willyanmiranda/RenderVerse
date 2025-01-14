import React from 'react'

const FormField = ({ name, label, placeholder, type, handleChange, value, children }) => {
    return (
        <div className='input-content' >
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