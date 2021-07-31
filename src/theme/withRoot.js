/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

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
        <Component {...props} />
        <button onClick={toggleTheme} type="button">
          Click here
        </button>
      </MuiThemeProvider>
    )
  }

  return WithRoot
}

export default withRoot
