import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Loading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    }
  }

  render() {
    return (
      <div>Loading...</div>
    );
  }
}

export default Loading;