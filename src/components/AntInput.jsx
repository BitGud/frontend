import { makeStyles, withStyles } from '@material-ui/core/styles'
import InputBase from '@material-ui/core/InputBase'

const AntInput = withStyles((theme) => ({
  select: {
    color: window.localStorage.getItem('theme') === 'light' ? 'black' : 'white',
  },
  input: {
    color: window.localStorage.getItem('theme') === 'light' ? 'black' : 'white',
    borderRadius: 20,
    position: 'relative',
    border: '2px solid #ced4da',
    fontSize: 25,
    textAlign: 'center',
    padding: '20px 10px 10px 10px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: '"Share", "Roboto", "Helvetica", "Arial", sans-serif',
    '&:focus': {
      borderRadius: 20,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.1rem rgba(135,75,210,.25)',
    },
  },
}))(InputBase)

export default AntInput
