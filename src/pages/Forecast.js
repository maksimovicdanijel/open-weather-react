import React, {Component} from 'react';
import querystring from 'querystring';

import '../services/WeatherService';
import Loading from '../components/Loading';
import WeatherService from '../services/WeatherService';

class Forecast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
      loaded: false
    };
  }

  componentDidMount() {
    const query = querystring.parse(this.props.location.search.substr(1));

    WeatherService.fetchLocationyWeather(query.location);
  }

  renderForecast() {
    return (
      <div>{this.state.location}</div>
    );
  }

  render() {
    return (
      <div>
        {!this.state.loaded ? <Loading /> : this.renderForecast()}
      </div>
    );
  }
}

export default Forecast;