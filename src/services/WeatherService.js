import axios from 'axios';

export default {
  apiEndpoint: 'http://api.openweathermap.org/data/2.5',
  apiKey: 'b714ec74bbab5650795063cb0fdf5fbe',
  
  authParams() {
    return 'APPID=' + this.apiKey;
  },
  fetchLocationyWeather(location) {
    return axios.get(this.apiEndpoint + '/forecast/daily?q=' + location + '&cnt=5&' + this.authParams())
    
      .then((response) => {
        return response.data;
      });
  }
}