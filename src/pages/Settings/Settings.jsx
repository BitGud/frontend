import React, { useState } from 'react'
import { Grid, Switch } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'

function Settings(props) {
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

  return (
    <div>
      <h1 className="settingsTitle">Settings</h1>
      <Grid container>
        <Grid item>
          <div>I commit too much</div>
          <Switch disabled={state1} color="default" onChange={flippedSwitch1} />
        </Grid>
        <Grid item>
          <div>Commit Gap</div>
          <FormControl disabled={state1}>
            <NativeSelect
              value={commitGap}
              onChange={(e) => setCommitGap(e.target.value)}
              inputProps={{
                name: 'Commit Gap',
                id: 'commit-Gap',
              }}
            >
              <option aria-label="None" value="" />
              <option value={10}>10 Minutes</option>
              <option value={20}>20 Minutes</option>
              <option value={30}>30 Minutes</option>
              <option value={40}>40 Minutes</option>
              <option value={50}>50 Minutes</option>
              <option value={60}>60 Minutes</option>
            </NativeSelect>
          </FormControl>
        </Grid>

        <Grid item>
          <div>I commit too much</div>
          <Switch disabled={state2} color="default" onChange={flippedSwitch2} />
        </Grid>
        <Grid item>
          <div>Commit Gap</div>
          <FormControl disabled={state2}>
            <NativeSelect
              value={commitGap2}
              onChange={(e) => setCommitGap2(e.target.value)}
              inputProps={{
                name: 'Commit Gap',
                id: 'commit-Gap',
              }}
            >
              <option aria-label="None" value="" />
              <option value={10}>10 Minutes</option>
              <option value={20}>20 Minutes</option>
              <option value={30}>30 Minutes</option>
              <option value={40}>40 Minutes</option>
              <option value={50}>50 Minutes</option>
              <option value={60}>60 Minutes</option>
            </NativeSelect>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  )
}

export default Settings
