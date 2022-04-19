import React from 'react'
import "./TextField.css";

const TextField = ({ label, inputProps, onChange, value }) => {
  return (
    <div className='text-field'>
      <label className='label'>{label}</label>
      <input
        className='valuess'
        {...inputProps}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

export default TextField