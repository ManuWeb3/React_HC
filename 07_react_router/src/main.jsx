// first time, made changes to main.jsx for React Router
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import {
  Home,
  About,
  ContactUs,
  User,
  Github,
  githubInfoLoader,
  Team,
} from './components/index.js'

// Methodology # 1 to create routes:
/*
const router = createBrowserRouter([
  {
    path: '/', // Top-level element within which others are present starting with "Home" in children below
    element: <Layout />,
    // children starting from "Home" - at least something you need to display
    // recursive
    // below get inserted into <Outlet />

    children: [
      // <Home> gets rendered by default @ localhost://5173 or localhost://5173/
      {
        path: '',
        element: <Home />,
      },
      // no "/" appended here, it's appended in NavLink's "to" attribute
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <ContactUs />,
      },
    ],
  },
])
*/

// Methodology # 2 to create routes: easy to read
const router = createBrowserRouter(
  createRoutesFromElements(
    // 1. For nesting in {Outlet}
    <Route path="/" element={<Layout />}>
      {/* all nested elements below render inside Outlet of Layout */}
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />}>
        {/* Can give absolute path as well like below for a comp. */}
        <Route path="/about/team" element={<Team />} />
      </Route>
      <Route path="contact" element={<ContactUs />} />
      {/* 2. For Dynamic Segments */}
      <Route path="user/:userid" element={<User />} />
      {/* both <User /> and userid are associated together here itself first*/}
      {/* 3. For loader */}
      <Route path="github" element={<Github />} loader={githubInfoLoader} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* instead of usual <App /> */}
  </React.StrictMode>
)
