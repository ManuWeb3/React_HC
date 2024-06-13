import React from 'react'

function Button({
  children,
  type = 'button',
  bgColor = 'bg-blue-600', // bgColor = variable name, can be anything BUT values are Tailwind actual classes
  textColor = 'text-white',
  className = '',
  ...props // any other "attribute-value" pairs passed will be stored in props. Laters -> ... spread
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
