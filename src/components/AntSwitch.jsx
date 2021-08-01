import { withStyles } from '@material-ui/core/styles'
import Switch from '@material-ui/core/Switch'

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 70,
    height: 16 * 2,
    marginTop: 'auto',
    marginBottom: 'auto',
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2 * 2,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(37px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: '#874BD2',
        borderColor: '#874BD2',
      },
    },
  },
  thumb: {
    width: 12 * 2,
    height: 12 * 2,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch)

export default AntSwitch
