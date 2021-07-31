import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Container, Grid, Typography, Box } from '@material-ui/core'

import useStyles from './HomePageStyles'

import icons from '../../utils/icons'

function HomePage() {
  const history = useHistory()
  const styles = useStyles()

  const goToAuth = () => {
    history.push('/auth')
  }

  return (
    <>
      <Box m={2} display="flex" justifyContent="flex-end">
        <Button color="primary" variant="contained" onClick={goToAuth}>
          Get Started
        </Button>
      </Box>
      <Container className={styles.homeContainer} spacing={10} maxWidth="md">
        <Grid container alignContent="center">
          <Grid item container md={6} xs={12} direction="column">
            <Grid>
              <Typography className={styles.homeTitle}>BitGud</Typography>
              <Typography className={styles.homeSubtitle}>Bring your time back to commit!</Typography>
            </Grid>
            <Grid container>
              <Button color="primary" variant="contained" className={styles.homeStartBtn}>
                Get Started
              </Button>
            </Grid>
          </Grid>
          <Grid item md={6} xs={12} justifyContent="center">
            <img className={styles.homeCat} src={icons.homeCat} alt="home-cat" />
          </Grid>
        </Grid>
        <Grid
          container
          className={styles.homeQuestionContainer}
          alignContent="center"
          justifyContent="center"
          spacing={2}
        >
          <Typography className={styles.homeQuestion}>Problem with procrastination?</Typography>
          <img className={styles.homeThinking} src={icons.homeThinking} alt="home-thinking" />
          <Typography className={styles.homeHelp}>WE CAN HELP!</Typography>

          <Grid>
            <img className={styles.homeSmall} src={icons.homeCat2} alt="home-cat-2" />
            <img className={styles.homeSmall} src={icons.homePhonelove} alt="home-phone" />
          </Grid>
        </Grid>
        <Grid container alignContent="center">
          <Grid item md={4} xs={12}>
            <Grid container justifyContent="center">
              <img className={styles.homeSmallImage} src={icons.homeRaspberry} alt="home-raspberry" />
            </Grid>
            <Grid>
              <Typography className={styles.homeSmallText}>Get Reminder</Typography>
              <Typography className={styles.homeSmallSubText}>with raspberry toys</Typography>
            </Grid>
          </Grid>
          <Grid item md={4} xs={12}>
            <Grid container justifyContent="center">
              <img className={styles.homeSmallCircle} src={icons.homeCe} alt="home-raspberry" />
            </Grid>
            <Grid>
              <Typography className={styles.homeSmallText}>Getting rewards</Typography>
              <Typography className={styles.homeSmallSubText}>with some cryptocurrencies</Typography>
            </Grid>
          </Grid>
          <Grid item md={4} xs={12}>
            <Grid container justifyContent="center">
              <img className={styles.homeSmallImage} src={icons.homeCode} alt="home-code" />
            </Grid>
            <Grid>
              <Typography className={styles.homeSmallText}>Become a pro</Typography>
              <Typography className={styles.homeSmallSubText}>by focusing on important tasks</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container style={{ marginBottom: '10em' }}>
          <Button color="primary" variant="contained" className={styles.homeStartBtn}>
            Get Started
          </Button>
        </Grid>
      </Container>
    </>
  )
}

export default HomePage
