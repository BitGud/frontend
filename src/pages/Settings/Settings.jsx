import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Grid, Paper, Select, Typography, MenuItem, Button, FormControl } from '@material-ui/core'

import useStyles from './SettingsStyles'

import AntSwitch from '../../components/AntSwitch'
import AntInput from '../../components/AntInput'
import { getDeployedFactory } from '../../utils/web3'

function Settings(props) {
  const styles = useStyles()

  const [commitGap, setCommitGap] = useState('')
  const [commitGap2, setCommitGap2] = useState('')
  const [state1, setState1] = useState(false)
  const [checked1, setChecked1] = useState(false)
  const [state2, setState2] = useState(false)
  const [checked2, setChecked2] = useState(false)

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

  const history = useHistory()

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
          <AntSwitch disabled={state1} color="default" onChange={flippedSwitch1} />
        </Grid>
        <Grid className={styles.settingsGroup} container justifyContent="center" alignContent="center">
          <Typography className={styles.settingsField}>Commit Gap</Typography>
          <Grid className={styles.settingsGap} />
          <FormControl className={styles.settingsSelect} variant="outlined" disabled={state1}>
            {renderSelectOption(setCommitGap)}
          </FormControl>
        </Grid>

        <Grid className={styles.settingsGroup} container justifyContent="center" alignContent="center">
          <Typography className={styles.settingsField}>I commit too much</Typography>
          <Grid className={styles.settingsGap} />
          <AntSwitch disabled={state2} color="default" onChange={flippedSwitch2} />
        </Grid>
        <Grid className={styles.settingsGroup} container justifyContent="center" alignContent="center">
          <Typography className={styles.settingsField}>Commit Gap</Typography>
          <Grid className={styles.settingsGap} />
          <FormControl className={styles.settingsSelect} variant="outlined" disabled={state2}>
            {renderSelectOption(setCommitGap2)}
          </FormControl>
        </Grid>
        <Grid container justifyContent="center" alignContent="center">
          <Button className={styles.settingsStart} onClick={getDeployedFactory}>
            Add walet
          </Button>
        </Grid>
        <Grid container justifyContent="center" alignContent="center">
          <Button className={styles.settingsStart} onClick={goToDocs}>
            How to Start
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Settings
