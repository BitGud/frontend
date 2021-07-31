import React, { useState } from 'react'
import { Grid, Switch, Button, Box } from '@material-ui/core'

import icons from '../../utils/icons'
import { firebase } from '../../instances'

function Auth(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function login() {
    firebase.auth().signInWithEmailAndPassword(email, password)
  }

  return (
    <div>
      <Box display="flex" justifyContent="flex-end">
        <Switch defaultChecked color="default" />
      </Box>
      <Button>Register</Button>
      <div>LOGIN - BUM BUM BUM</div>
      <Button>Access with GitHub</Button>

      <Grid container>
        <Grid item>
          <img alt="login logo" src={icons.login} />
        </Grid>
        <Grid item>
          <div>Your name here</div>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
          <div>Your password here</div>
          <input value={password} onChange={(e) => setPassword(e.target.value)} />
        </Grid>
      </Grid>
      <Button onClick={login}>Okay, go!</Button>

      <img alt="login 2" src={icons.login2} />
      <Button>Login</Button>
      <div>REGISTER HERE ^^</div>

      <div>Your name here</div>
      <input />
      <div>Your password here</div>
      <input />
      <div>Confirm your password</div>
      <input />
      <Button>Okay, go!</Button>

      <img alt="login 3" src={icons.login3} />
    </div>
  )
}

export default Auth
