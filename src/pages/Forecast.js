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
      forecast: null,
      loaded: false
    };
  }

  componentDidMount() {
    const query = querystring.parse(this.props.location.search.substr(1));

    WeatherService.fetchLocationyWeather(query.location)
      .then((data) => {
        this.setState({
          loaded: true,
          forecast: data
        });
      });
  }

  renderForecast() {
    return (
      <div><pre>{this.state.forecast.city.country}</pre></div>
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