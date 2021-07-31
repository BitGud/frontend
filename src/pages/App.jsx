import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.scss'

import { HomePage, Auth } from '.'
import { ErrorPage, Layout } from '../components'
import withRoot from '../theme/withRoot'

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/" component={HomePage} />
        <Route component={ErrorPage} />
      </Switch>
    </Layout>
  )
}

export default withRoot(App)
