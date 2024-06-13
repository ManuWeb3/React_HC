// Production-grade design of Header/NavBar/Login/Signup/Logout
import React from 'react'
import { useSelector, useNavigate } from 'react-redux'
import { Container } from '../index'
import { Link, NavLink } from 'react-router-dom'
import { Logo } from '../index'
import LogoutBtn from './LogoutBtn'

const Header = () => {
  // first, check whether user is logged in OR logged out + other checks (navItems[]) also use authStatus
  const authStatus = useSelector((state) => {
    state.auth.status
  }) // unlike state.todos where there was only ONE SLICE = todoSlice
  const navigate = useNavigate()
  // for conditional rendering of NavBar components in Header
  // also, FUTURE PROOFING adding other Buttons/Links in the Nav Bar
  const navItems = [
    {
      name: 'Home',
      slug: '/', // slug = url (nothing reserved)
      active: true,
    },
    {
      name: 'Login',
      slug: '/login', // nested within "Home" like all below
      active: !authStatus, // authStatus = false -> Show Login and vice versa
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus, // authStatus = false -> Show Signup and vice versa
    },
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus,
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus,
    },
  ]

  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  {/* all weblinks in the nav bar are buttons under the hood */}
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block px-6 py-2 duration-200 rounded-full hover:bg-blue-100"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {/* React cond. rendering inside JS {} */}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
