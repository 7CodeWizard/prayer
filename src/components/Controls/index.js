import React from 'react'


const CheckBox = ({ title }) => (
  <div className="custom-control custom-control-alternative custom-checkbox">
    <input
      className="custom-control-input"
      id=" customCheckLogin"
      type="checkbox"
    />
    <label
      className="custom-control-label"
      htmlFor=" customCheckLogin"
    >
      <span>{title}</span>
    </label>
  </div>
)


export { CheckBox }