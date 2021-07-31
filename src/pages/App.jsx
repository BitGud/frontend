import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { HomePage, Auth, Settings } from '.'
import { ErrorPage, Layout } from '../components'
import withRoot from '../theme/withRoot'

const RestrictedRoutes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/" component={HomePage} />
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
