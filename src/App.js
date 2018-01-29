import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.css';

import Header from './components/Header';

import Home from './pages/Home';
import Forecast from './pages/Forecast';
import ForecastDetails from './pages/ForecastDetails';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <Header onSubmit={this.onLocationChange} />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/forecast" component={Forecast} />
            <Route path="/forecast/details" component={ForecastDetails} />
            <Route render={() => {return <p>Not found!</p>}} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;