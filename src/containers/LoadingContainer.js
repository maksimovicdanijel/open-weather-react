import {connect} from 'react-redux';

import Loading from '../components/Loading';

const mapStateToProps = state => {
  return {
    loading: state.forecast.isFetching
  };
};

const LoadingContainer = connect(
  mapStateToProps
)(Loading);

export default LoadingContainer;
