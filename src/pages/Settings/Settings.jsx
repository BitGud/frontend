import React, { useState } from 'react'
import { Grid, Switch } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'

function Settings(props) {
  const [commitGap, setCommitGap] = useState('')

  return (
    <div>
      <h1 className="settingsTitle">Settings</h1>
      <Grid container>
        <Grid item>
          <div>I commit too much</div>
          <Switch defaultChecked color="default" inputProps={{ 'aria-label': 'checkbox with default color' }} />
        </Grid>
        <Grid item>
          <div>Commit Gap</div>
          <FormControl>
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
            <FormHelperText>Commit gap</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item>
          <div>I commit too much</div>
          <Switch defaultChecked color="default" inputProps={{ 'aria-label': 'checkbox with default color' }} />
        </Grid>
        <Grid item>
          <div>Commit Gap</div>
          <FormControl>
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
            <FormHelperText>Commit gap</FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  )
}

export default Settings
