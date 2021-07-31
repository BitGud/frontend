import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  homeContainer: {
    marginTop: '200px',
  },
  homeCat: {
    height: '25em',
    width: '25em',
  },
  homeTitle: {
    fontFamily: 'Share',
    fontSize: '5em',
  },
  homeThinking: {
    padding: '1em',
    margin: 'auto',
    height: '27em',
    width: '27em',
  },
  homeSubtitle: {
    fontFamily: 'Share',
    fontSize: '1.3em',
  },
  homeQuestion: {
    margin: 'auto',
    fontFamily: 'Share',
    fontSize: '3em',
  },
  homeHelp: {
    paddingTop: '0.8em',
    paddingBottom: '0.8em',
    margin: 'auto',
    fontFamily: 'Share',
    fontSize: '5em',
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
    width: '10em',
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
    background: 'linear-gradient(90deg, #501D8F 58.85%, #825BB1 100%)',
    borderRadius: '1.5em 1em',
    fontFamily: 'Share',
    fontSize: '1.3em',
    textTransform: 'none',
  },
}))

export default useStyles
