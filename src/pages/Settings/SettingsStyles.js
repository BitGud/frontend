import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  settingsContainer: {
    marginTop: '300px',
  },
  settingsPaper: {
    paddingTop: '40px',
    paddingBottom: '40px',
    borderRadius: '1em',
    backgroundColor: '#e0e0e0',
  },
  settingsGap: {
    margin: 'auto',
  },
  settingsTitle: {
    fontSize: '5em',
    fontFamily: 'Share',
    textAlign: 'center',
  },
  settingsGroup: {
    padding: '30px',
  },
  settingsField: {
    fontSize: '3em',
    fontFamily: 'Share',
  },
  settingsSelect: {
    borderRadius: '1em',
    justifyContent: 'center',
    width: '20em',
  },
  settingsStart: {
    margin: 'auto',
    marginTop: '1em',
    marginBottom: '3em',
    padding: '0.6em 2em 0.6em 2em',
    borderRadius: '1.5em 1em',
    fontFamily: 'Share',
    fontSize: '1.3em',
    textTransform: 'none',
    color: 'white',
  },
}))

export default useStyles
