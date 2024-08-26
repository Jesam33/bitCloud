import React from 'react'

const Button = ({btnClass, btnType, btnLabel}) => {
  return (
    <button className={btnClass} type={btnType}>{btnLabel}</button>
  )
}

export default Button
