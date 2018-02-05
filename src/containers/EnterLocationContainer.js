import {connect} from 'react-redux';

import {selectLocation} from '../actions';
import EnterLocation from '../components/EnterLocation';

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: location => {
      dispatch(selectLocation(location))
    }
  };
};

const EnterLocationContainer = connect(
  null,
  mapDispatchToProps
)(EnterLocation);

export default EnterLocationContainer;