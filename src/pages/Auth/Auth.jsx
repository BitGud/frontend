import React from 'react'
import { Grid, Switch } from '@material-ui/core'

import icons from '../../utils/icons'

function Auth(props) {
  return (
    <div>
      <Switch defaultChecked color="default" inputProps={{ 'aria-label': 'checkbox with default color' }} />
      <button type="button">Register</button>
      <div>LOGIN - BUM BUM BUM</div>

      <Grid container>
        <Grid item>
          <img alt="login logo" src={icons.login} />
        </Grid>
        <Grid item>
          <div>Your name here</div>
          <input />
          <div>Your password here</div>
          <input />
        </Grid>
      </Grid>
      <button type="button">Okay, go!</button>

      <img alt="login 2" src={icons.login2} />
      <button type="button">Login</button>
      <div>REGISTER HERE ^^</div>

      {/* In a Grid?? */}
      <div>Your name here</div>
      <input />
      <div>Your password here</div>
      <input />
      <div>Confirm your password</div>
      <input />
      <button type="button">Okay, go!</button>

      <img alt="login 3" src={icons.login3} />
    </div>
  )
}

export default Auth
