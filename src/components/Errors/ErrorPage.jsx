import React from 'react'
import { Grid, Switch } from '@material-ui/core'

import './Errors.scss'

import icons from '../../utils/icons'

const ErrorPage = (props) => {
  return (
    <div className="messageContainer">
      {/* Switch?? */}
      <Switch defaultChecked color="default" inputProps={{ 'aria-label': 'checkbox with default color' }} />
      <h1 className="notFoundText">Uh oh!</h1>
      <h1 className="notFoundTextLine2">The page cannot be found...</h1>
      <Grid container>
        <Grid item>
          <img alt="error" src={icons.error} />
        </Grid>
        <Grid item>
          <img alt="error 2" src={icons.error2} />
        </Grid>
      </Grid>
    </div>
  )
}

export default ErrorPage
