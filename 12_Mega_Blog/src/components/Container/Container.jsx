import React from 'react'
// contains a component that gets rendered with the styling mentioned in className
// 'styling' modularize
const Container = ({ children }) => {
  return <div className="w-full mx-auto max-w-7xl px-4">{children}</div>
}

export default Container
