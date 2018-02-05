import {
  SELECT_LOCATION,
  START_FETCHING_FORECAST,
  FETCH_FORECAST_SUCCESS,
  FETCH_FORECAST_ERROR
} from '../actions';

const initialState = {
  selectedLocation: '',
  isFetching: false,
  hasError: false,
  error: '',
  locationForecast: {}
};

export default function weatherApp(state = initialState, action) {
  switch(action.type) {
    case SELECT_LOCATION:
      return Object.assign({}, state, {
        selectedLocation: action.location
      });

    case START_FETCHING_FORECAST:
      return Object.assign({}, state, {
        isFetching: true
      });

    case FETCH_FORECAST_SUCCESS:
     return Object.assign({}, state, {
       isFetching: false,
       hasError: false,
       forecast: action.forecast
     });

    case FETCH_FORECAST_ERROR:
     return Object.assign({}, state, {
       hasError: true,
       error: action.error
     });
    
    default:
      return state;
  }
};