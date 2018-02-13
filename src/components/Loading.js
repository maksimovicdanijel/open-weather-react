import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({loading}) => {
  return (
    (loading ? <div>Loading...</div> : '')
  );
};

Loading.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Loading;