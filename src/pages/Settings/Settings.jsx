import React, { useState, useEffect } from 'react'
import { Container, Grid, makeStyles, Paper, Select, Typography, MenuItem, Button } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'
import { useHistory } from 'react-router-dom'
import axios from '../../instances/axios'
import AntSwitch from '../../components/AntSwitch'
import AntInput from '../../components/AntInput'

const useStyles = makeStyles((theme) => ({
  settingsContainer: {
    marginTop: '300px',
  },
  settingsPaper: {
    paddingTop: '40px',
    paddingBottom: '40px',
    borderRadius: '1em',
    backgroundColor: '#e0e0e0',
  },
  settingsGap: {
    margin: 'auto',
  },
  settingsTitle: {
    fontSize: '5em',
    fontFamily: 'Share',
    textAlign: 'center',
  },
  settingsGroup: {
    padding: '30px',
  },
  settingsField: {
    fontSize: '3em',
    fontFamily: 'Share',
  },
  settingsSelect: {
    borderRadius: '1em',
    justifyContent: 'center',
    width: '20em',
  },
  settingsStart: {
    margin: 'auto',
    marginTop: '1em',
    marginBottom: '3em',
    padding: '0.6em 2em 0.6em 2em',
    borderRadius: '1.5em 1em',
    fontFamily: 'Share',
    fontSize: '1.3em',
    textTransform: 'none',
    color: 'white',
  },
}))
function Settings(props) {
  const styles = useStyles()

  const [commitGap, setCommitGap] = useState('')
  const [commitAmount, setCommitAmount] = useState('')
  const [commitGap2, setCommitGap2] = useState('')
  const [state1, setState1] = useState(false)
  const [checked1, setChecked1] = useState(false)
  const [state2, setState2] = useState(false)
  const [checked2, setChecked2] = useState(false)
  const history = useHistory()

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await (await axios.get('setting')).data
        if (data.monitorMode === 'commit-less') {
          setChecked1(true)
        } else {
          setChecked1(false)
        }
        setCommitGap(data.commitFrequency)
        setCommitAmount(data.commitAmount)
      } catch (err) {
        console.error('error getData', err)
      }
    }
    getData()
  }, [])

  const saveSetting = async () => {
    const postObj = {
      monitorMode: checked1 ? 'commit-less' : 'commit-more',
      commitFrequency: parseInt(commitGap, 10),
      commitAmount: parseInt(commitAmount, 10),
      uid: '',
      enabled: true,
    }

    try {
      const data = await (await axios.post('setting', postObj)).data
      // On success, push to dashboard
      history.push('/dashboard')
    } catch (err) {
      console.error('error getData', err)
    }
  }

  function flippedSwitch1(event) {
    if (checked1 === true) {
      setChecked1(false)
      setState2(false)
    } else {
      setChecked1(true)
      setState2(true)
    }
  }

  function flippedSwitch2() {
    if (checked2 === true) {
      setChecked2(false)
      setState1(false)
    } else {
      setChecked2(true)
      setState1(true)
    }
  }

  const goToDocs = () => {
    history.push('docs')
  }

  return (
    <Container className={styles.settingsContainer} maxWidth="md">
      <Paper className={styles.settingsPaper}>
        <Typography className={styles.settingsTitle}>Settings</Typography>
      </Paper>
      <Grid container>
        <Grid className={styles.settingsGroup} container justifyContent="center" alignContent="center">
          <Typography className={styles.settingsField}>I commit too much</Typography>
          <Grid className={styles.settingsGap} />
          <AntSwitch checked={checked1} disabled={state1} color="default" onChange={flippedSwitch1} />
        </Grid>

        <Grid className={styles.settingsGroup} container justifyContent="center" alignContent="center">
          <Typography className={styles.settingsField}>Commit Gap</Typography>
          <Grid className={styles.settingsGap} />
          <FormControl className={styles.settingsSelect} variant="outlined" disabled={state1}>
            <Select value={commitGap} onChange={(e) => setCommitGap(e.target.value)} input={<AntInput />}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>10 Minutes</MenuItem>
              <MenuItem value={20}>20 Minutes</MenuItem>
              <MenuItem value={30}>30 Minutes</MenuItem>
              <MenuItem value={40}>40 Minutes</MenuItem>
              <MenuItem value={50}>50 Minutes</MenuItem>
              <MenuItem value={60}>60 Minutes</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid className={styles.settingsGroup} container justifyContent="center" alignContent="center">
          <Typography className={styles.settingsField}>Commit Amount</Typography>
          <Grid className={styles.settingsGap} />
          <FormControl className={styles.settingsSelect} variant="outlined" disabled={state1}>
            <Select value={commitAmount} onChange={(e) => setCommitAmount(e.target.value)} input={<AntInput />}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>10 Minutes</MenuItem>
              <MenuItem value={20}>20 Minutes</MenuItem>
              <MenuItem value={30}>30 Minutes</MenuItem>
              <MenuItem value={40}>40 Minutes</MenuItem>
              <MenuItem value={50}>50 Minutes</MenuItem>
              <MenuItem value={60}>60 Minutes</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* <Grid className={styles.settingsGroup} container justifyContent="center" alignContent="center">
          <Typography className={styles.settingsField}>I commit too much</Typography>
          <Grid className={styles.settingsGap} />
          <AntSwitch disabled={state2} color="default" onChange={flippedSwitch2} />
        </Grid> */}
        {/* <Grid className={styles.settingsGroup} container justifyContent="center" alignContent="center">
          <Typography className={styles.settingsField}>Commit Gap</Typography>
          <Grid className={styles.settingsGap} />
          <FormControl className={styles.settingsSelect} variant="outlined" disabled={state2}>
            <Select value={commitGap2} onChange={(e) => setCommitGap2(e.target.value)} input={<AntInput />}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>10 Minutes</MenuItem>
              <MenuItem value={20}>20 Minutes</MenuItem>
              <MenuItem value={30}>30 Minutes</MenuItem>
              <MenuItem value={40}>40 Minutes</MenuItem>
              <MenuItem value={50}>50 Minutes</MenuItem>
              <MenuItem value={60}>60 Minutes</MenuItem>
            </Select>
          </FormControl>
        </Grid> */}
        <div>
          <Button className={styles.settingsStart} onClick={() => saveSetting()}>
            Save
          </Button>
        </div>
        <Button className={styles.settingsStart} style={{ marginTop: 20 }} onClick={goToDocs}>
          How to Start
        </Button>
      </Grid>
    </Container>
  )
}

export default Settings
