// "Layout.jsx" is NOT a reserved name for Outlet => That's why we could mimic the below in App.jsx in Mega_Blog project
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from './components/index'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
