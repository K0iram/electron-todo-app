import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Todo from './components/Todo'
import AppLayout from './layout/main'


const Routes = () => (
  <Router>
    <AppLayout>
      <Switch>
        <Route path="/" exact component={Todo} />
      </Switch>
    </AppLayout>
  </Router>
)

export default Routes