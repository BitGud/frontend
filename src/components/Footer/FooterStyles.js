import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '5em',
    paddingRight: '5em',
  },
  footer: {
    top: 0,
    bottom: 'auto',
  },
  footerText: {
    fontSize: '2em',
    fontFamily: 'Share',
    textAlign: 'center',
    margin: 'auto',
  },
}))

export default useStyles
