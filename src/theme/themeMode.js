import { createTheme } from '@material-ui/core'

const getThemeMode = (theme = true) => {
  const themeMode = createTheme({
    overrides: {
      MuiCssBaseline: {
        '@global': {
          body: {
            backgroundColor: theme ? '#F9F9F9' : '#1E2430',
            fontFamily: 'Share',
            color: theme ? '#1E2430' : '#FDFDFD',
          },
        },
      },
      MuiButton: {
        text: {
          color: '#BECDE3',
          fontFamily: 'Share',
          textTransform: 'capitalize',
          fontSize: '1.2rem',
        },
        root: {
          background: theme
            ? 'linear-gradient(90deg, rgba(80,29,143,1) 61%, rgba(130,91,177,1) 100%)'
            : 'linear-gradient(90deg, rgba(126,131,141,1) 0%, rgba(78,85,98,1) 32%, rgba(30,35,45,1) 83%)',
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
      MuiTypography: {
        root: {
          fontFamily: '"Share", "Roboto", "Helvetica", "Arial", sans-serif',
        },
      },
    },
  })

  return themeMode
}

export default getThemeMode
