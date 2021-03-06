import React, { useEffect, useState } from 'react'

import { Button, Paper, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

import moment from 'moment'

import icons from '../../utils/icons'
import axios from '../../instances/axios'

const useStyles = makeStyles((theme) => ({
  dashboardContainer: {
    marginTop: '300px',
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
    fontSize: '3em',
  },
  dashboardSubTitle: {
    fontFamily: 'Share',
    padding: '0.4em',
    fontSize: '2em',
  },
  dashboardTile: {
    backgroundColor: '#F0F0F0',
    borderRadius: '1em',
    padding: '0.4em',
    marginBottom: '2em',
  },
  dashboardTileSubtitle: {
    color: 'black',
    textAlign: 'center',
    padding: '0.2em',
    fontFamily: 'Share',
    fontSize: '2em',
  },
  dashboardGraph: {
    marginBottom: '2em',
    borderRadius: '1em',
    backgroundColor: window.localStorage.getItem('theme') === 'light' ? '#1E2530' : '#FDFDFD',
  },
  dashboardCommit: {
    marginTop: '3em',
    borderRadius: '1em',
    marginBottom: '1em',
    padding: '2em',
  },
  dashboardCommitTitle: {
    padding: '3px',
    textAlign: 'center',
    fontSize: '2em',
  },
  dashboardCommitList: {
    padding: '3px',
    fontSize: '1.2em',
  },
}))

const data = [
  {
    time: '9:00',
    commits: 10,
  },
  {
    time: '10:00',
    commits: 1,
  },
  {
    time: '11:00',
    commits: 2,
  },
  {
    time: '12:00',
    commits: 4,
  },
  {
    time: '1:00',
    commits: 12,
  },
  {
    time: '2:00',
    commits: 8,
  },
  {
    time: '3:00',
    commits: 32,
  },
]

const data2 = [
  {
    time: '9:00',
    commits: 1,
  },
  {
    time: '10:00',
    commits: 3,
  },
  {
    time: '11:00',
    commits: 5,
  },
  {
    time: '12:00',
    commits: 2,
  },
  {
    time: '1:00',
    commits: 3,
  },
  {
    time: '2:00',
    commits: 5,
  },
  {
    time: '3:00',
    commits: 12,
  },
]

const Dashboard = () => {
  const styles = useStyles()
  const [dashboardData, setDashboardData] = useState({
    shocked: 0,
    lastShock: moment().subtract(10, 'minutes').toDate(),
    rewards: 0.0,
  })

  useEffect(() => {
    const getData = async () => {
      try {
        const responseData = await (await axios.get('/user/dashboard')).data
        setDashboardData(responseData)
      } catch (err) {
        console.error('error getData', err)
      }
    }
    getData()
  }, [])

  return (
    <Container className={styles.dashboardContainer} maxWidth="md" direction="col">
      <Grid container justifyContent="center" alignContent="center" direction="column">
        <Grid className={styles.dashboardImageBorder}>
          <img className={styles.dashboardImage} src={icons.gamer} alt="dashboard-game" />
        </Grid>
        <Typography className={styles.dashboardTitle}>Fancy Developer</Typography>
      </Grid>

      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <Grid item className={styles.dashboardTile} md={3} xs={12}>
            <Typography className={styles.dashboardTileSubtitle}>Getting shocked</Typography>
            {/* <Tile src={icons.sun} alt="sun" text="1" /> */}
            <Tile src={icons.sun} alt="cloud" text={dashboardData?.shocked ?? 10} />
          </Grid>
          <Grid item md={1} />
          <Grid item className={styles.dashboardTile} md={3} xs={12}>
            <Typography className={styles.dashboardTileSubtitle}>Last shock</Typography>
            {/* <Tile src={icons.timer} alt="timer" text="13:30" /> */}
            <Tile src={icons.timer} alt="timer" text={moment(dashboardData?.lastShock ?? new Date()).format('HH:ss')} />
          </Grid>
          <Grid item md={1} />
          <Grid item className={styles.dashboardTile} md={3} xs={12}>
            <Typography className={styles.dashboardTileSubtitle}>Rewards</Typography>
            {/* <Tile src={icons.coin} alt="coin" text="0.3 CEN" /> */}
            <Tile src={icons.coin} alt="coin" text={`${dashboardData?.rewards ?? 0.3} CEN`} />
          </Grid>
        </Grid>
      </Grid>

      <Typography className={styles.dashboardSubTitle}>bitgud-frontend</Typography>
      <Grid item xs={12} className={styles.dashboardGraph}>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data2} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorCommit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#bf69ff" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#bf69ff" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#323b4a" vertical={false} />
            <Area
              dot
              type="monotone"
              dataKey="commits"
              stroke="#bf69ff"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorCommit)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Grid>

      <Typography className={styles.dashboardSubTitle}>bitgud-backend</Typography>
      <Grid item xs={12} className={styles.dashboardGraph}>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorCommit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#bf69ff" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#bf69ff" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#323b4a" vertical={false} />
            <Area
              dot
              type="monotone"
              dataKey="commits"
              stroke="#bf69ff"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorCommit)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Grid>

      <Paper className={styles.dashboardCommit} container>
        <Typography className={styles.dashboardCommitTitle}>Latest Commit</Typography>
        <Typography className={styles.dashboardCommitList}>Message: Doing Stuff</Typography>
        <Typography className={styles.dashboardCommitList}>
          CommitHash: 9ijoad08o3ud03l9ijoad08o3ud03l9ijoad08o3ud03l
        </Typography>
        <Typography className={styles.dashboardCommitList}>File changes: 5</Typography>
        <Typography className={styles.dashboardCommitList}>Line changes: 134</Typography>
        <Typography className={styles.dashboardCommitList}>Branch name: commit-test</Typography>
        <Typography className={styles.dashboardCommitList}>Remote origin: https://github.com/sds/ds.git </Typography>
        <Typography className={styles.dashboardCommitList}>Timestamp: 2021-07-31T04:02:57.740+00:00</Typography>
      </Paper>
    </Container>
  )
}

const useTileStyles = makeStyles((theme) => ({
  tile: {
    padding: '5px',
    maxWidth: '300px',
    margin: 'auto',
  },
  tileImg: {
    height: '40px',
    width: '40px',
    marginLeft: '2em',
  },
  tileText: {
    color: 'black',
    margin: 'auto',
    paddingLeft: '0.3em',
    fontSize: '1.5em',
  },
}))

const Tile = ({ src, alt, text }) => {
  const styles = useTileStyles()
  return (
    <Grid className={styles.tile} container justifyContent="center" alignContent="center">
      <img className={styles.tileImg} src={src} alt={alt} />
      <Typography className={styles.tileText}>{text}</Typography>
    </Grid>
  )
}

export default Dashboard
