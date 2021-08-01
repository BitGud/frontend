import React, { useState, useEffect } from 'react'
import { Container, Grid, makeStyles, Paper, Select, Typography, MenuItem, Button, TextField } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import { useHistory } from 'react-router-dom'
import axios from '../../instances/axios'
import useStyles from './SettingsStyles'
import AntSwitch from '../../components/AntSwitch'
import AntInput from '../../components/AntInput'
import getDeployedFactory from '../../utils/web3'

function Settings(props) {
  const styles = useStyles()

  const [address, setAddress] = useState('')

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
      history.push('dashboard')
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

  const renderSelectOption = (cb) => {
    const values = [10, 20, 30, 40, 50, 60]

    return (
      <Select value={commitGap} onChange={(e) => cb(e.target.value)} input={<AntInput />}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {values.map((v) => (
          <MenuItem value={v}>{v} Minutes</MenuItem>
        ))}
      </Select>
    )
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
            {renderSelectOption(setCommitGap)}
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
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
              <MenuItem value={40}>40</MenuItem>
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={60}>60</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid container justifyContent="center" alignContent="center">
          <Button className={styles.settingsStart} onClick={() => saveSetting()}>
            Save
          </Button>
        </Grid>
        <Grid container justifyContent="center" alignContent="center">
          <Button className={styles.settingsStart} onClick={() => getDeployedFactory(address)}>
            Add Your walet
          </Button>
        </Grid>
        <Grid container justifyContent="center" alignContent="center">
          <Button className={styles.settingsStart} onClick={goToDocs}>
            Where to Start
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Settings
