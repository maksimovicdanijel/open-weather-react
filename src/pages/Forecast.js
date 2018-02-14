import React, {Component} from 'react';
import querystring from 'querystring';
import {Container} from 'reactbulma';
import {connect} from 'react-redux';

import withForecast from '../components/withForecast';
import ForecastGrid from '../components/ForecastGrid';
import {fetchForecast} from '../actions';

class Forecast extends Component {
  componentDidMount() {
    if (!this.hasForecast()) {
      this.props.fetchForecast(this.parseLocation());
    }
  }

  hasForecast() {
    return this.props.forecast && Object.keys(this.props.forecast).length > 0;
  }

  parseLocation(routerLocation) {
    const query = querystring.parse(this.props.location.search.substr(1));

    return query.location;
  }

  renderForecast() {
    const WithForecastGrid = withForecast(this.props.forecast, ForecastGrid);

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
        {this.props.loading || !this.hasForecast() ? '' : this.renderForecast()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    forecast: state.forecast.locationForecast,
    loading: state.forecast.isFetching
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchForecast: (location) => {
      console.log('location', location);
      dispatch(fetchForecast(location));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Forecast);