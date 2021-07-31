/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react'
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Box, Switch } from '@material-ui/core'

import useTheme from './useTheme'
import getThemeMode from './themeMode'

function withRoot(Component) {
  function WithRoot(props) {
    const { theme, toggleTheme, componentMounted } = useTheme()

    if (!componentMounted) {
      return <div />
    }

    const themeMode = getThemeMode(theme === 'light')

    return (
      <MuiThemeProvider theme={themeMode}>
        <CssBaseline />
        <Box display="flex" justifyContent="flex-end" mt={3.5} mb={3.5} mr={1}>
          <Switch defaultChecked color="default" onChange={toggleTheme} />
        </Box>
        <Component {...props} />
      </MuiThemeProvider>
    )
  }

  return WithRoot
}

export default withRoot
