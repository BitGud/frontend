import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '5em',
    paddingRight: '5em',
  },
  logo: {
    fontFamily: 'Share',
    fontSize: '2em',
    marginLeft: '1em',
  },
  button: {
    fontFamily: 'Share',
    color: '#aaa',

    '&:hover': {
      color: '#282828',
      cursor: 'pointer',
    },
  },
  link: {
    fontFamily: 'Share',
    padding: '1em',
    color: '#999',

    '&:hover': {
      zIndex: 10,
      color: '#282828',
      cursor: 'pointer',
    },
  },
}))

export default useStyles
