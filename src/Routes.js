import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Reminders from './components/Reminders'
import AppLayout from './layout/main'


const Routes = () => (
  <Router>
    <AppLayout>
      <Switch>
        <Route path="/" exact component={Reminders} />
      </Switch>
    </AppLayout>
  </Router>
)

export default Routes