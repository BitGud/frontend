import React from 'react'

import { Button, Container, Grid, makeStyles, Typography } from '@material-ui/core'

import dashboardGame from '../../assets/icons/gamer.svg'

const useStyles = makeStyles((theme) => ({
  dashboardContainer: {
    marginTop: '200px',
  },
  dashboardImageBorder: {
    margin: 'auto',
    borderRadius: '10em',
    backgroundColor: '#F4A0A0',
    height: '20em',
    width: '20em',
    padding: '2em',
  },
  dashboardImage: {
    overflow: 'visible',
    height: '15em',
    width: '15em',
  },
  dashboardTitle: {
    textAlign: 'center',
    fontFamily: 'Share',
    fontSize: '5em',
  },
  dashabordTile: {
    backgroundColor: '#F0F0F0',
    borderRadius: '1em',
  },
}))

const Dashboard = () => {
  const styles = useStyles()

  return (
    <Container className={styles.dashboardContainer} spacing={10} maxWidth="md" direction="col">
      <Grid container xs={12} justifyContent="center" alignContent="center" direction="column">
        <Grid className={styles.dashboardImageBorder} justifyContent="center" alignContent="center">
          <img className={styles.dashboardImage} src={dashboardGame} alt="dashboard-game" />
        </Grid>
        <Typography className={styles.dashboardTitle}>Fancy Developer</Typography>
      </Grid>
      <Grid container xs={12} spacing={3}>
        <Grid className={styles.dashabordTile} container md={4} xs={12}>
          <Typography>Getting shocked</Typography>
        </Grid>
        <Grid className={styles.dashabordTile} container md={4} xs={12}>
          <Typography>Last shock</Typography>
          Test
        </Grid>
        <Grid className={styles.dashabordTile} container md={4} xs={12}>
          <Typography>Rewards</Typography>
          Test
        </Grid>
      </Grid>
    </Container>
  )
}

export default Dashboard
