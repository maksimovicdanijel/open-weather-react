import {push} from 'react-router-redux';
import WeatherService from '../services/WeatherService';

export const SELECT_LOCATION = 'select_location';
export const START_FETCHING_FORECAST = 'start_fetching_forecast';
export const FETCH_FORECAST_SUCCESS = 'fetch_forecast_success';
export const FETCH_FORECAST_ERROR = 'fetch_forecast_error';

export function selectLocation(location) {
  return (dispatch) => {
    dispatch({
      type: SELECT_LOCATION,
      location
    });

    dispatch(fetchForecast(location));
  };
};

export function startFetchingForecast() {
  return {
    type: START_FETCHING_FORECAST
  };
}

export function fetchForecast(location) {
  return (dispatch, getState) => {
    dispatch(startFetchingForecast());

    WeatherService.fetchLocationWeather(location)
      .then((response) => {
        dispatch(fetchForecastSuccess(response));
        dispatch(push('/forecast?location=' + location));
      });
  };
}

export function fetchForecastSuccess(forecast) {
  return {
    type: FETCH_FORECAST_SUCCESS,
    forecast
  }
};

export function fetchForecastError(error) {
  return {
    type: FETCH_FORECAST_ERROR,
    error
  };
};