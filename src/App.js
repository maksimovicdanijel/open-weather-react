import React, {Component} from 'react';
import {ConnectedRouter} from 'react-router-redux';
import {connect} from 'react-redux';

import {Switch, Route} from 'react-router-dom';

import './App.css';

import Header from './components/Header';

import Home from './pages/Home';
import Forecast from './pages/Forecast';
import ForecastDetails from './pages/ForecastDetails';
import {history} from './store';

const ConnectedSwitch = connect((state) => {
  return {
    location: state.location
  }
})(Switch);


class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div className="app-container">
          <ConnectedSwitch>
            <Header onSubmit={this.onLocationChange} />
            <Route exact path="/" component={Home} />
            <Route exact path="/forecast" component={Forecast} />
            <Route path="/forecast/details" component={ForecastDetails} />
            <Route render={() => {return <p>Not found!</p>}} />
          </ConnectedSwitch>
        </div>
      </ConnectedRouter>
    );
  }
}

export default App;