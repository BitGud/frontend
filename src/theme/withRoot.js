/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import useTheme from './useTheme'

const darkTheme = createTheme({
  overrides: {
    typography: {
      fontFamily: '"Share", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#1e2430',
          fontFamily: 'RopaSans-Regular',
          color: '#FDFDFD',
        },
      },
    },
    MuiButton: {
      text: {
        color: '#BECDE3',
        fontFamily: 'RopaSans-Regular',
        textTransform: 'capitalize',
        fontSize: '1.2rem',
      },
      root: {
        background: ' linear-gradient(90deg, rgba(126,131,141,1) 0%, rgba(78,85,98,1) 32%, rgba(30,35,45,1) 83%)',
        '&:hover': {
          color: 'white',
          opacity: '0.6',
        },
      },
    },
  },
})

const lightTheme = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#F9F9F9',
          fontFamily: 'RopaSans-Regular',
          color: '#1E2430',
        },
      },
    },
    MuiButton: {
      text: {
        color: '#BECDE3',
        fontFamily: 'RopaSans-Regular',
        textTransform: 'capitalize',
        fontSize: '1.2rem',
      },
      root: {
        background: 'background: linear-gradient(90deg, rgba(80,29,143,1) 61%, rgba(130,91,177,1) 100%)',
        '&:hover': {
          color: 'white',
          opacity: '0.6',
        },
      },
    },
  },
})

function withRoot(Component) {
  function WithRoot(props) {
    const { theme, toggleTheme, componentMounted } = useTheme()

    if (!componentMounted) {
      return <div />
    }

    const themeMode = theme === 'light' ? lightTheme : darkTheme

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
