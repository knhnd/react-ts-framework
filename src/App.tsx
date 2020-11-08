import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RootScreen from './screens/RootScreen';
import HomeScreen from './screens/HomeScreen';
import DashboardScreen from './screens/DashboardScreen';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={RootScreen} exact />
          <Route path="/home" component={HomeScreen} exact />
          <Route path="/dashboard" component={DashboardScreen} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
