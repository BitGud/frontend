import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  navBar: {
    backgroundColor: '#1E232D',
    padding: '0 2rem',
    position: 'fixed',
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '15vh',
    position: 'relative',
    color: '#CBE0FF',
    boxShadow: 'none',
  },
  logo: {
    fontFamily: 'SingleDay-Regular',
    fontSize: '1.8rem',
    color: '#BECDE3',
  },
}))

export default useStyles
