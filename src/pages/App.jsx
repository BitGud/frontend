import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.scss'

import HomePage from './HomePage/HomePage'
import { ErrorPage, Layout } from '../components'

const App = (props) => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={ErrorPage} />
      </Switch>
    </Layout>
  )
}

export default App
