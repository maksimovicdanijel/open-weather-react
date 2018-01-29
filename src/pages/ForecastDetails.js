import React, {Component} from 'react';
import ForecastGridItem from '../components/ForecastGridItem';
import moment from 'moment';
import {Title} from 'reactbulma'; 

class ForecastDetails extends Component {
  city = null;
  dayData = null;

  constructor(props) {
    super(props);

    const city = this.props.location.state.city || '';
    const dayData = this.props.location.state.dayData || {};

    this.state = {
      city,
      dayData
    };
  }

  componentDidMount() {

  }

  render() {
    const weather = this.state.dayData.weather[0];
    const icon = weather.icon;
    const date = moment.unix(this.state.dayData.dt).format('dddd, MMM Do');
    const id = this.state.dayData.dt;

    return (
      <div className="page-container has-text-centered">
        <ForecastGridItem id={id} icon={icon} date={date} />

        <Title is="4">{this.state.city}</Title>
        <p>{weather.description}</p>
        <p>{weather.main}</p>
        <p>Min temperature: {this.state.dayData.temp.min} degrees</p>
        <p>Max temperature: {this.state.dayData.temp.max} degrees</p>
      </div>
    );
  }
}

export default ForecastDetails;