import React from 'react'
import { Grid, Container, Typography } from '@material-ui/core'

import useStyles from './ErrorStyles'

import icons from '../../utils/icons'

const ErrorPage = (props) => {
  const styles = useStyles()
  return (
    <Container className={styles.errorContainer} alignContent="center" spacing={10} maxWidth="md">
      <Typography className={styles.errorTitle}>Uh oh!</Typography>
      <Typography className={styles.errorTitle}>The page cannot be found...</Typography>
      <Grid container alignContent="center" justifyContent="center" spacing={1}>
        <img className={styles.errorImage} alt="error bubbles" src={icons.errorBubbles} />
        <img className={styles.errorImage} alt="error sad message" src={icons.errorSadMessage} />
      </Grid>
    </Container>
  )
}

export default ErrorPage
