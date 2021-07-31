import React from 'react'

import { Button, Container, Grid, Typography } from '@material-ui/core'
import icons from '../../utils/icons'
import useStyles from './HomePageStyles'

function HomePage(props) {
  const styles = useStyles()
  return (
    <Container className={styles.homeContainer} spacing={10} maxWidth="md">
      <Grid container alignContent="center">
        <Grid container md={6} xs={12} justifyContent="center" alignContent="center">
          <Typography className={styles.homeTitle}>BitGud</Typography>
          <Typography className={styles.homeSubtitle}>Bring your time back to commit!</Typography>
          <Grid container xs={12}>
            <Button color="primary" variant="contained" className={styles.homeStartBtn}>
              Get Started
            </Button>
          </Grid>
        </Grid>
        <Grid container md={6} xs={12} justifyContent="center">
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

        <Grid justifyContent="center" alignContent="center">
          <img className={styles.homeSmall} src={icons.homeCat2} alt="home-cat-2" />
          <img className={styles.homeSmall} src={icons.homePhonelove} alt="home-phone" />
        </Grid>
      </Grid>
      <Grid container alignContent="center">
        <Grid container md={4} xs={12} justifyContent="center">
          <img className={styles.homeSmallImage} src={icons.homeRaspberry} alt="home-raspberry" />
          <Grid justifyContext="center" alignContent="center">
            <Typography className={styles.homeSmallText}>Get Reminder</Typography>
            <Typography className={styles.homeSmallSubText}>With raspberry toys</Typography>
          </Grid>
        </Grid>
        <Grid container md={4} xs={12} justifyContent="center">
          <img className={styles.homeSmallCircle} src={icons.homeCe} alt="home-raspberry" />
          <Grid justifyContext="center" alignContent="center">
            <Typography className={styles.homeSmallText}>Getting rewards</Typography>
            <Typography className={styles.homeSmallSubText}>with some cryptocurrencies</Typography>
          </Grid>
        </Grid>
        <Grid container md={4} xs={12} justifyContent="center">
          <img className={styles.homeSmallImage} src={icons.homeCode} alt="home-code" />
          <Grid justifyContext="center" alignContent="center">
            <Typography className={styles.homeSmallText}>Become a pro</Typography>
            <Typography className={styles.homeSmallSubText}>by focusing on important tasks</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container xs={12} style={{ marginBottom: '10em' }}>
        <Button color="primary" variant="contained" className={styles.homeStartBtn}>
          Get Started
        </Button>
      </Grid>
    </Container>
  )
}

export default HomePage
