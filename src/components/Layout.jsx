import React from 'react'

import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'

function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <div style={{ marginTop: '5rem' }}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
