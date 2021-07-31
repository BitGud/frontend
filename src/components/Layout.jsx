import React from 'react'

import NavBar from './NavBar/NavBar'

function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <div style={{ marginTop: '5rem' }}>{children}</div>
    </div>
  )
}

export default Layout
