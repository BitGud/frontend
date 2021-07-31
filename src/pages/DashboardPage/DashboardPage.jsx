import React from 'react'

import { Button, Paper, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

import icons from '../../utils/icons'
import useTheme from '../../theme/useTheme'

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
    backgroundColor: window.localStorage.getItem('theme') === 'light' ? '#1E2530' : '#fff',
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
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

const Dashboard = () => {
  const styles = useStyles()

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
            <Tile src={icons.sun} alt="sun" text="1" />
            <Tile src={icons.cloud} alt="cloud" text="12" />
          </Grid>
          <Grid item md={1} />
          <Grid item className={styles.dashboardTile} md={3} xs={12}>
            <Typography className={styles.dashboardTileSubtitle}>Last shock</Typography>
            <Tile src={icons.timer} alt="timer" text="13:30" />
            <Tile src={icons.timer} alt="timer" text="13:20" />
          </Grid>
          <Grid item md={1} />
          <Grid item className={styles.dashboardTile} md={3} xs={12}>
            <Typography className={styles.dashboardTileSubtitle}>Rewards</Typography>
            <Tile src={icons.coin} alt="coin" text="0.3 CEN" />
            <Tile src={icons.coin} alt="coin" text="0.01 CEN" />
          </Grid>
        </Grid>
      </Grid>

      <Typography className={styles.dashboardSubTitle}>Repo A</Typography>
      <Grid item xs={12} className={styles.dashboardGraph}>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#bf69ff" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#bf69ff" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#323b4a" vertical={false} />
            <Area
              dot
              type="monotone"
              dataKey="uv"
              stroke="#bf69ff"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Grid>

      <Typography className={styles.dashboardSubTitle}>Repo A</Typography>
      <Grid item xs={12} className={styles.dashboardGraph}>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#bf69ff" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#bf69ff" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#323b4a" vertical={false} />
            <Area
              dot
              type="monotone"
              dataKey="uv"
              stroke="#bf69ff"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Grid>

      <Paper className={styles.dashboardCommit} container>
        <Typography className={styles.dashboardCommitTitle}>Latest Commit</Typography>
        <Typography className={styles.dashboardCommitList}>Message: Create something amazing</Typography>
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
