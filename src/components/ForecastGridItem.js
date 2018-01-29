import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Title} from 'reactbulma';
import {withRouter} from 'react-router-dom';

class ForecastGridItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.parentClick = this.props.onClick ? this.props.onClick : () => {};
  }

  handleClick() {
    this.parentClick(this.props.id);
  }

  render() {
    let classes = ['forecast-grid-item'];

    if (this.props.withBottomMargin) {
      classes.push('forecast-grid-item--with-bottom-margin')
    }

    return (
      <div className={classes.join(' ')} onClick={this.handleClick}>
        <img className="forecast-grid-item__icon" src={'/images/' + this.props.icon + '.svg'} alt="icon"/>
        <Title is="6">{this.props.date}</Title>
      </div>
    );
  }
};

ForecastGridItem.propTypes = {
  id: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  withBottomMargin: PropTypes.bool,
  // onClick: PropTypes.func
}

export default withRouter(ForecastGridItem);