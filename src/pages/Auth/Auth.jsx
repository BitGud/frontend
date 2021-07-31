import { Grid } from '@material-ui/core'
import React from 'react'

import icons from '../../utils/icons'

function Auth(props) {
  return (
    <div>
      <button type="button">Slider</button>
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
    </div>
  )
}

export default Auth
