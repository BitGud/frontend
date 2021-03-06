import React, { useContext, useState } from 'react'
import { Grid, Container, Button, Box, Typography, TextField } from '@material-ui/core'

import icons from '../../utils/icons'
import { firebase } from '../../instances'
import useStyles from './AuthStyles'
import { AuthContext } from '../../context'

function Auth(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')

  const { signIn, signUp, signInWithGithub } = useContext(AuthContext)

  const styles = useStyles()

  const login = () => {
    signIn(email, password)
  }

  const register = () => {
    signUp(email, password)
  }

  const github = () => {
    signInWithGithub()
  }

  return (
    <Container className={styles.authContainer} spacing={10} maxWidth="lg">
      <Box className={styles.slider} display="flex" justifyContent="flex-end" id="Login">
        <Button color="primary" variant="contained" href="#Register">
          Register
        </Button>
      </Box>
      <Grid container alignContent="center">
        <Grid container justifyContent="center" alignContent="center">
          <Typography className={styles.authTitle}>LOGIN</Typography>
        </Grid>
        <Grid container justifyContent="center" alignContent="center">
          <Button onClick={github} class={styles.accessGithubBtn} variant="contained">
            Access with GitHub
            <img className={styles.githubImg} alt="github" src={icons.github} />
          </Button>
        </Grid>

        <Grid container alignContent="center" justifyContent="center" spacing={2}>
          <Grid container md={6} xs={12} justifyContent="center">
            <img className={styles.authMediumImage} alt="login logo" src={icons.login} />
          </Grid>
          <Grid container md={5} xs={12} direction="row" justifyContent="center" alignItems="center">
            <Grid item>
              <Typography className={styles.authInputHelper}>Your email here</Typography>
              <TextField
                className={styles.authLoginInput}
                variant="standard"
                margin="normal"
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </Grid>
            <Grid item>
              <Typography className={styles.authInputHelper}>Your password here</Typography>
              <TextField
                className={styles.authLoginInput}
                variant="standard"
                margin="normal"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </Grid>
            <Grid container justifyContent="center">
              <Button class={styles.authLoginBtn} color="primary" variant="contained" onClick={login}>
                Okay, go!
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" alignContent="center" m={4}>
          <img className={styles.runnerImg} alt="login 2" src={icons.login2} />
        </Grid>

        <Grid container display="flex" justifyContent="flex-end">
          <Button color="primary" variant="contained" href="#Login">
            Login
          </Button>
        </Grid>

        <Grid container justifyContent="center" alignContent="center" id="Register">
          <Typography className={styles.authTitle}>REGISTER HERE ^^</Typography>
        </Grid>

        <Grid container alignContent="center" justifyContent="center" spacing={3}>
          <Grid item justifyContent="center" alignItems="center" md={12} xs={12}>
            <Typography className={styles.authInputHelperRegister}>Your email here</Typography>
            <Box display="flex" justifyContent="center">
              <TextField
                className={styles.authRegisterInput}
                variant="standard"
                margin="normal"
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </Box>
          </Grid>
          <Grid item justifyContent="center" alignItems="center" md={12} xs={12}>
            <Typography className={styles.authInputHelperRegister}>Your password here</Typography>
            <Box display="flex" justifyContent="center">
              <TextField
                className={styles.authRegisterInput}
                variant="standard"
                type="password"
                margin="normal"
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </Box>
          </Grid>
          <Grid item justifyContent="center" alignItems="center" md={12} xs={12}>
            <Typography className={styles.authInputHelperRegister}>Confirm your password</Typography>
            <Box display="flex" justifyContent="center">
              <TextField
                className={styles.authRegisterInput}
                variant="standard"
                margin="normal"
                type="password"
                onChange={(e) => setPasswordCheck(e.target.value)}
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </Box>
          </Grid>
          <Grid item justifyContent="center" alignItems="center">
            <Button class={styles.authRegisterBtn} color="primary" variant="contained" onClick={register}>
              Okay, go!
            </Button>
          </Grid>
        </Grid>

        <Grid item justifyContent="center" alignItems="center">
          <img className={styles.treeImg} alt="login 3" src={icons.login3} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Auth
