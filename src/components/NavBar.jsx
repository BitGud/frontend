import { AppBar, Toolbar, Button, IconButton, Drawer, Link, MenuItem, Container } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import React, { useState, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import useStyles from './NavBarStyle'

const headersData = [
  {
    label: 'Dashboard',
    href: '/',
  },
  {
    label: 'Events',
    href: '/',
  },
  {
    label: 'Logout',
    href: '/',
  },
]

const getMenuButtons = () => {
  return headersData.map(({ label, href, color = 'inherit' }) => {
    return (
      <Button
        {...{
          key: label,
          color,
          to: href,
          component: RouterLink,
        }}
      >
        {label}
      </Button>
    )
  })
}

function NavBar({ children }) {
  const classes = useStyles()

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  })

  const { mobileView, drawerOpen } = state

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }))
    }

    setResponsiveness()

    window.addEventListener('resize', () => setResponsiveness())
  }, [])

  const logo = <span className={classes.logo}>Profess</span>

  const displayDesktop = () => {
    return (
      <Toolbar className={classes.toolBar}>
        {logo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    )
  }

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: 'inherit',
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      )
    })
  }

  const displayMobile = () => {
    const handleDrawerOpen = () => setState((prevState) => ({ ...prevState, drawerOpen: true }))
    const handleDrawerClose = () => setState((prevState) => ({ ...prevState, drawerOpen: false }))

    return (
      <Toolbar className={classes.toolBar}>
        <Drawer
          {...{
            anchor: 'left',
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        {logo}

        <IconButton
          {...{
            edge: 'start',
            color: 'inherit',
            'aria-label': 'menu',
            'aria-haspopup': 'true',
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    )
  }

  return (
    <Container maxWidth="sm">
      <AppBar elevation={0} className={classes.navBar}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </Container>
  )
}

export default NavBar
