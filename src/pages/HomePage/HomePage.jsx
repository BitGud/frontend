import React from 'react'

import { Button, Container, Grid, makeStyles, Typography } from '@material-ui/core'

import homeCat from '../../assets/icons/home-cat.png'
import homeRaspberry from '../../assets/icons/raspberry.svg'
import homeThinking from '../../assets/icons/thinking.svg'
import homeCat2 from '../../assets/icons/cat.svg'
import homePhonelove from '../../assets/icons/phonelove.svg'
import homeCode from '../../assets/icons/code.svg'
import homeCe from '../../assets/icons/ce.svg'
import useTheme from '../../theme/useTheme'

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
  },
  homeThinking: {
    padding: '1em',
    margin: 'auto',
    height: '27em',
    width: '27em',
  },
  homeSubtitle: {
    textAlign: 'center',
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
    marginBottom: '1em',
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

function HomePage(props) {
  const styles = useStyles()
  return (
    <>
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
          <Grid item container md={6} xs={12} justifyContent="center">
            <img className={styles.homeCat} src={homeCat} alt="home-cat" />
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
          <img className={styles.homeThinking} src={homeThinking} alt="home-thinking" />
          <Typography className={styles.homeHelp}>WE CAN HELP!</Typography>

          <Grid>
            <img className={styles.homeSmall} src={homeCat2} alt="home-cat-2" />
            <img className={styles.homeSmall} src={homePhonelove} alt="home-phone" />
          </Grid>
        </Grid>
        <Grid container alignContent="center">
          <Grid item md={4} xs={12}>
            <Grid container justifyContent="center">
              <img className={styles.homeSmallImage} src={homeRaspberry} alt="home-raspberry" />
            </Grid>
            <Grid>
              <Typography className={styles.homeSmallText}>Get Reminder</Typography>
              <Typography className={styles.homeSmallSubText}>With raspberry toys</Typography>
            </Grid>
          </Grid>
          <Grid item md={4} xs={12}>
            <Grid container justifyContent="center">
              <img className={styles.homeSmallCircle} src={homeCe} alt="home-raspberry" />
            </Grid>
            <Grid>
              <Typography className={styles.homeSmallText}>Getting rewards</Typography>
              <Typography className={styles.homeSmallSubText}>with some cryptocurrencies</Typography>
            </Grid>
          </Grid>
          <Grid item md={4} xs={12}>
            <Grid container justifyContent="center">
              <img className={styles.homeSmallImage} src={homeCode} alt="home-code" />
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
