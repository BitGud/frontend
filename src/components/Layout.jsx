import React from 'react'

import NavBar from './NavBar/NavBar'

function Layout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  )
}

export default Layout
