import React from 'react';
import PropTypes from 'prop-types';
import {Title} from 'reactbulma';

const ForecastGridItem = props => {
  let classes = ['forecast-grid-item'];

  if (props.withBottomMargin) {
    classes.push('forecast-grid-item--with-bottom-margin')
  }

  return (
    <div className={classes.join(' ')}>
      <img className="forecast-grid-item__icon" src={'/images/' + props.icon + '.svg'} alt="icon"/>
      <Title is="6">{props.date}</Title>
    </div>
  );
};

ForecastGridItem.propTypes = {
  icon: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  withBottomMargin: PropTypes.bool
};

export default ForecastGridItem;