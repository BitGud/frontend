import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  authContainer: {
    marginBottom: '10em',
  },
  slider: {
    margin: '10px',
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
      fontSize: '4em',
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
  authInputHelperRegister: {
    fontFamily: 'Share',
    fontSize: '1.5em',
    textAlign: 'center',
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
    width: '13em',
    borderRadius: '1em',
    outline: 'none',
    textDecoration: 'none',
    height: '2em',
    paddingTop: '0.3em',
    paddingLeft: '1em',
    marginBottom: '1.8em',
  },
  runnerImg: {
    margin: '8em',
    width: '25em',
  },
  treeImg: {
    width: '15em',
    [theme.breakpoints.down('md')]: {
      fontSize: '2em',
      margin: '2em 0',
      width: '8em',
    },
  },
  githubImg: {
    width: '2em',
    margin: '0 0.3em',
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
  accessGithubBtn: {
    backgroundColor: '#CECECE',
    padding: '1em 2em',
    borderRadius: '1.5em',
    border: 'none',
    fontSize: '1em',
    marginBottom: '2em',
    display: 'flex',
    alignItems: 'center',

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
