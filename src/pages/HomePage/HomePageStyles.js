import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    marginTop: '200px',
  },
  homeCat: {
    height: '25em',
    width: '25em',
  },
  homeTitle: {
    textAlign: 'center',
    fontFamily: 'Share',
    fontSize: '5em',
    [theme.breakpoints.only('sm')]: {
      fontSize: '10em',
    },
  },
  homeThinking: {
    padding: '1em',
    margin: 'auto',
    height: '20em',
    width: '20em',
  },
  homeSubtitle: {
    fontFamily: 'Share',
    fontSize: '1.3em',
    textAlign: 'center',
    [theme.breakpoints.only('sm')]: {
      fontSize: '2em',
    },
  },
  homeQuestion: {
    margin: 'auto',
    fontFamily: 'Share',
    fontSize: '2.5em',
  },
  homeHelp: {
    paddingTop: '0.8em',
    paddingBottom: '0.8em',
    margin: 'auto',
    fontFamily: 'Share',
    fontSize: '4em',
    fontWeight: 700,
    textAlign: 'center',
  },
  homeQuestionContainer: {
    padding: '10em',
  },
  homeSmall: {
    width: '15em',
    padding: '1.2em',
  },
  homeSmallImage: {
    height: '10em',
    width: '12em',
    marginBottom: '1em',
  },
  homeSmallText: {
    fontSize: '2em',
    fontFamily: 'Share',
    textAlign: 'center',
    margin: 'auto',
  },
  homeSmallSubText: {
    fontSize: '1em',
    fontFamily: 'Share',
    textAlign: 'center',
    margin: 'auto',
    marginBottom: '2em',
  },
  homeSmallCircle: {
    borderRadius: '10em',
    height: '10em',
    width: '10em',
    backgroundColor: '#E7E7E7',
  },
  homeStartBtn: {
    margin: 'auto',
    marginTop: '1em',
    marginBottom: '3em',
    padding: '0.6em 2em 0.6em 2em',
    borderRadius: '1.5em 1em',
    fontFamily: 'Share',
    fontSize: '1.3em',
    textTransform: 'none',
  },
}))

export default useStyles
