import { createTheme } from '@material-ui/core'

const getThemeMode = (theme = true) => {
  const themeMode = createTheme({
    overrides: {
      MuiCssBaseline: {
        '@global': {
          body: {
            backgroundColor: theme ? '#E6E6E6' : '#1E2430',
            fontFamily: 'Share',
            color: theme ? '#1E2430' : '#FDFDFD',
          },
        },
      },
      MuiButton: {
        root: {
          background: theme
            ? 'linear-gradient(90deg, rgba(80,29,143,1) 61%, rgba(130,91,177,1) 100%)'
            : 'linear-gradient(90deg, #501D8F 58.85%, #825BB1 100%)',
          padding: '0.6em 2em 0.6em 2em',
          borderRadius: '1.5em 1em',
          textTransform: 'none',
          fontFamily: 'Share',

          fontSize: '1.2em',
          '&:hover': {
            color: 'white',
            opacity: '0.6',
          },
        },
      },
      MuiSwitch: {
        switchBase: {
          color: '#DDDDDD',
          '&$checked': {
            color: '#444444',
            '&:hover': {
              '@media (hover: none)': {
                backgroundColor: 'transparent',
              },
            },
          },
          '&$checked + $track': {
            backgroundColor: '#C4C4C4',
          },
          '&$disabled + $track': {
            backgroundColor: '#C4C4C4',
          },
        },
      },
      MuiTextField: {
        root: {
          backgroundColor: theme ? '#CFCFCF' : '#E1E1E1',
        },
      },
      typography: {
        fontFamily: '"Share", "Roboto", "Helvetica", "Arial", sans-serif',
      },
    },
  })

  return themeMode
}

export default getThemeMode
