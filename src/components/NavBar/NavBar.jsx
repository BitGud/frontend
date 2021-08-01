import { AppBar, Toolbar, Button, IconButton, Drawer, Link, MenuItem, Container, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import React, { useState, useEffect } from 'react'
import { Link as RouterLink, Redirect, useHistory } from 'react-router-dom'

import useStyles from './NavBarStyle'

const headers = [
  {
    label: 'Dashboard',
    href: '#/dashboard',
  },
  {
    label: 'Settings',
    href: '#/settings',
  },
  {
    label: 'Logout',
    href: '/',
  },
]

function NavBar() {
  const styles = useStyles()
  const history = useHistory()

  const goToPage = (page) => {
    return <Redirect to="#/page" />
  }

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

  const getMenuButtons = () => {
    return headers.map(({ label, href }) => <Button onClick={() => goToPage(href)}>{label}</Button>)
  }

  const logo = <Typography className={styles.logo}>BitGud</Typography>

  const displayDesktop = () => {
    return (
      <Toolbar className={styles.toolBar}>
        {logo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    )
  }

  const getDrawerChoices = () => {
    return headers.map(({ label, href }) => {
      return (
        <Link className={styles.link} href={href}>
          <MenuItem>
            <Typography>{label}</Typography>
          </MenuItem>
        </Link>
      )
    })
  }

  const displayMobile = () => {
    const handleDrawerOpen = () => setState((prevState) => ({ ...prevState, drawerOpen: true }))
    const handleDrawerClose = () => setState((prevState) => ({ ...prevState, drawerOpen: false }))

    return (
      <Toolbar variant="dense">
        <Drawer
          {...{
            anchor: 'left',
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={styles.drawerContainer}>{getDrawerChoices()}</div>
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
      <AppBar position="absolute" elevation={0}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </Container>
  )
}

export default NavBar
