import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NotFound from './NotFound'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
