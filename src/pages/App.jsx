import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'

import { Backdrop, CircularProgress } from '@material-ui/core'
import { HomePage, DashboardPage, Auth, Settings, Docs } from '.'
import { ErrorPage, Layout } from '../components'
import { withRoot } from '../theme'
import AuthContext from '../context/AuthContext'

const RestrictedRoutes = () => {
  const AuthObj = useContext(AuthContext)

  if (AuthObj.isLoading) {
    return (
      <Backdrop style={{ zIndex: 10000 }}>
        <CircularProgress style={{ color: 'white' }} />
      </Backdrop>
    )
  }

  return (
    <Layout>
      <Switch>
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/docs" component={Docs} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Dashboard" component={DashboardPage} />
        <Route component={ErrorPage} />
      </Switch>
    </Layout>
  )
}

const App = () => {
  return (
    <Switch>
      <Route exact path="/auth" component={Auth} />
      <Route exact path="/" component={HomePage} />
      <Route component={RestrictedRoutes} />
    </Switch>
  )
}

export default withRoot(App)
