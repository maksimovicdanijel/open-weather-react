import React, {Component} from 'react';
import {Title} from 'reactbulma';
import PropTypes from 'prop-types';
import moment from 'moment';

import ForecastGridItem from './ForecastGridItem';

class ForecastGrid extends Component {
  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
    this.renderItems = this.renderItems.bind(this);
  }

  renderItem(item) {
    console.log(item);
    const icon = item.weather[0].icon;
    const date = item.dt;

    return (
      <div className="column is-one-third" key={item.dt}>
        <ForecastGridItem 
          icon={icon} 
          date={moment.unix(date).format('dddd, MMM Do')}
          withBottomMargin={true}
        />
      </div>
    );
  }

  renderItems() {
    return this.props.forecast.map(this.renderItem);
  }

  render() {
    return (
      <div className="forecast-grid">
        <Title is="2" className="has-text-centered">{this.props.city}</Title>
        <div className="columns is-multiline has-text-centered">
          {this.renderItems()}
        </div>
      </div>
    );
  }
}

ForecastGrid.propTypes = {
  city: PropTypes.string,
  forecast: PropTypes.array.isRequired
}

export default ForecastGrid;