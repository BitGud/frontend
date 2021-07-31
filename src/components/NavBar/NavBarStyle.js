import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '5em',
    paddingRight: '5em',
  },
  logo: {
    fontFamily: 'Share',
    fontSize: '2em',
    marginLeft: '1em',
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
