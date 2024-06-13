import React, { forwardRef, useId } from 'react'
// Input below is a variable that holds the component (JSX) returned by forwardRef(callback(props, ref))
// SYNTAX # 1 of using forwardRef.
const Input = forwardRef(function Input(
  { label, type = 'text', className = '', ...props },
  ref
) {
  const id = useId() // ACCESSIBILITY
  // body of callback inside wrapper forwardref()
  return (
    <div className="w-full">
      {/* // conditional rendering with 'label', JS opens below */}
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}
      {/* JS closes above */}
      <input
        type={type}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  )
})

export default Input
