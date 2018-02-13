import React, {Component} from 'react';
import {ConnectedRouter} from 'react-router-redux';
import {Route} from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import LoadingContainer from './containers/LoadingContainer';

import Home from './pages/Home';
import Forecast from './pages/Forecast';
import ForecastDetails from './pages/ForecastDetails';
import {history} from './store';

class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div className="app-container">
          <Header onSubmit={this.onLocationChange} />
          <LoadingContainer />
          <Route exact path="/" component={Home} />
          <Route exact path="/forecast" component={Forecast} />
          <Route path="/forecast/details" component={ForecastDetails} />
        </div>
      </ConnectedRouter>
    );
  }
}

export default App;