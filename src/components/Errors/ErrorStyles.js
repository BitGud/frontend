import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  errorContainer: {
    marginTop: '50px',
  },
  errorTitle: {
    fontFamily: 'Share',
    fontSize: '3em',
    textAlign: 'center',
    [theme.breakpoints.only('sm')]: {
      fontSize: '10em',
    },
  },
  errorImage: {
    padding: '2em',
    width: '18em',
    marginBottom: '1em',
    textAlign: 'center',
  },
}))

export default useStyles
