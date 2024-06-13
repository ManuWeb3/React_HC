import React, { useId } from 'react'
// we'll get 'options' arg. as an [] from wherever we get it, set default to avoid null value, if nothing passed by user
// SYNTAX # 2 of using forwardRef.
function Select({ options = [], label, className = '', ...props }, ref) {
  const id = useId()
  return (
    <div className="w-full">
      {/* conditional rendering using label */}
      {label && (
        <label className="" htmlFor={id}>
          {label}
          {/* can skip the {label} above bcz it's  not really needed, added just for 'htmlFor' to keep HTML's structure = from HC */}
        </label>
      )}
      <select
        id={id}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none border border-gray-200 w-full focus:bg-gray-50 duration-200 ${className}`}
        ref={ref}
        {...props}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  )
}

export default React.forwardRef(Select)
