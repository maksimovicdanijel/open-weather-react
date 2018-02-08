import React, {Component} from 'react';
import createHistory from 'history/createBrowserHistory';
import {ConnectedRouter} from 'react-router-redux';

import {
  Switch,
  Route,
  BrowserRouter
} from 'react-router-dom';

import './App.css';

import Header from './components/Header';

import Home from './pages/Home';
import Forecast from './pages/Forecast';
import ForecastDetails from './pages/ForecastDetails';

const history = createHistory();

class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div className="app-container">
          <Header onSubmit={this.onLocationChange} />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/forecast" component={Forecast} />
            <Route path="/forecast/details" component={ForecastDetails} />
            <Route render={() => {return <p>Not found!</p>}} />
          </Switch>
        </div>
      </ConnectedRouter>
    );
  }
}

export default App;