import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  authContainer: {
    marginBottom: '10em',
  },
  authTitle: {
    fontFamily: 'Share',
    fontSize: '4em',
    marginBottom: '1em',
    [theme.breakpoints.only('xs')]: {
      fontSize: '2em',
      margin: '2em 0',
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: '10em',
    },
  },
  authMediumImage: {
    width: '25em',
    marginBottom: '1em',
  },
  authInputHelper: {
    fontFamily: 'Share',
    fontSize: '1.5em',
  },
  authLoginInput: {
    fontFamily: 'Share',
    fontSize: '1.5em',
    width: '13em',
    borderRadius: '1em',
    outline: 'none',
    textDecoration: 'none',
    height: '2em',
    paddingTop: '0.3em',
    paddingLeft: '1em',
  },
  authRegisterInput: {
    fontFamily: 'Share',
    fontSize: '1.5em',
    width: '18em',
    borderRadius: '1em',
    outline: 'none',
    textDecoration: 'none',
    height: '2em',
    paddingTop: '0.3em',
    paddingLeft: '1em',
    marginBottom: '1.8em',
  },
  runnerImage: {
    margin: '8em',
    width: '25em',
  },
  treeImg: {
    width: '15em',
  },
  authLoginBtn: {
    color: '#5F3C8A',
    backgroundColor: '#E6D6FB',
    padding: '1em 2em',
    borderRadius: '1.5em',
    border: 'none',
    fontSize: '1em',

    '&:hover': {
      opacity: '0.7',
      cursor: 'pointer',
    },
  },
  authRegisterBtn: {
    color: '#FF564F',
    backgroundColor: '#FFE3E2',
    padding: '1em 2em',
    borderRadius: '1.5em',
    border: 'none',
    fontSize: '1em',

    '&:hover': {
      opacity: '0.7',
      cursor: 'pointer',
    },
  },
}))

export default useStyles
