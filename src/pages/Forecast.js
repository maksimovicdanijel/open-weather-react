import React, {Component} from 'react';
import querystring from 'querystring';
import {Container} from 'reactbulma';

import WeatherService from '../services/WeatherService';
import withForecast from '../components/withForecast';
import ForecastGrid from '../components/ForecastGrid';

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
    this.fetchForecast(this.parseLocation(this.props.location));
  }

  componentWillReceiveProps(nextProps) {
    this.fetchForecast(this.parseLocation(nextProps.location));
  }

  parseLocation(routerLocation) {
    const query = querystring.parse(routerLocation.search.substr(1));

    return query.location;
  }

  fetchForecast(location) {
    WeatherService.fetchLocationyWeather(location)
      .then((data) => {
        this.setState({
          loaded: true,
          forecast: data
        });
      });
  }

  renderForecast() {
    const WithForecastGrid = withForecast(this.state.forecast, ForecastGrid);

    return (
      <div>
        <Container>
          <WithForecastGrid />
        </Container>
      </div>
    );
  }

  render() {
    return (
      <div className="page-container">
        {!this.state.loaded ? '' : this.renderForecast()}
      </div>
    );
  }
}

export default Forecast;